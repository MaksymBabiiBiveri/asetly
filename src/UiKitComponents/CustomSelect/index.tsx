import React, { useEffect, useMemo, useState } from 'react';
import cl from 'classnames';
import Select from 'react-select';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import InputContainer, { InputContainerProps } from '../InputContainer';
import './CustomSelect.scss';
import { TSelectValue } from '@Types/application.types';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';

interface CustomSelectProps<FieldType extends FieldValues = FieldValues>
  extends UseControllerProps<FieldType>,
    InputContainerProps {
  options: any[];
  optionValue: string;
  optionLabel: string;
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  getSelectValue?: (value: TSelectValue<number>) => void;
  setValue?: UseFormSetValue<FieldType>;
}
const PureReactSelect = React.memo(Select);

const CustomSelect = <FieldType,>(props: CustomSelectProps<FieldType>) => {
  const {
    errorText,
    statusActive,
    label,
    placeholder,
    id,
    options,
    optionValue,
    optionLabel,
    required,
    isLoading,
    isDisabled,
    defaultValue,
    name,
    setValue,
    getSelectValue,
    ...rest
  } = props;
  const [valueSelect, setValueSelect] = useState<TSelectValue<number>>();

  const selectError = errorText ? 'react-select-container__error' : '';
  const selectActive = statusActive ? 'react-select-container__active' : '';

  const getOptions: any[] = useMemo(() => {
    return options.map((option) => ({
      value: option[optionValue],
      label: option[optionLabel],
    }));
  }, [options]);

  useEffect(() => {
    if (getSelectValue && valueSelect) {
      getSelectValue(valueSelect);
    }
  }, [valueSelect]);
  useEffect(() => {
    if (setValue) {
      setValue(name, defaultValue || getOptions[0]);
    }
  }, [setValue, defaultValue]);

  return (
    <InputContainer label={label} id={id} errorText={errorText} required={required} disabled={isDisabled}>
      <Controller
        name={name}
        {...rest}
        render={({ field: { onChange, ref } }) => (
          <PureReactSelect
            defaultValue={defaultValue || getOptions[0]}
            ref={ref}
            placeholder={placeholder}
            className={cl('react-select-container', selectError, selectActive)}
            classNamePrefix="react-select"
            options={getOptions}
            isLoading={isLoading}
            isDisabled={isDisabled}
            onChange={(value) => {
              onChange(value);
              setValueSelect(value as TSelectValue<number>);
            }}
          />
        )}
      />
    </InputContainer>
  );
};

export default CustomSelect;
