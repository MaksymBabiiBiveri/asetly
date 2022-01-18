import React, { useEffect, useState } from 'react';
import cl from 'classnames';
import Select from 'react-select';
import { Control, Controller, FieldPath } from 'react-hook-form';
import InputContainer from '../InputContainer';
import './CustomSelect.scss';

interface CustomSelectProps<FieldType> {
  label: string;
  id: string;
  name: FieldPath<FieldType>;
  control: Control<FieldType, object>;
  placeholder?: string;
  mappingOptions: any[];
  optionValue: string | number;
  optionLabel: string;
  getOptionValue?: (option: string | number | undefined) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  errorText?: string;
  required?: boolean;
  statusActive?: boolean;
}
interface SelectList {
  readonly value: number | string;
  readonly label: string;
}

const CustomSelect = <FieldType,>(props: CustomSelectProps<FieldType>) => {
  const {
    label,
    id,
    name,
    control,
    placeholder,
    mappingOptions,
    optionValue,
    optionLabel,
    isLoading,
    isDisabled,
    errorText,
    required,
    statusActive,
    getOptionValue,
  } = props;

  const [value, setValue] = useState<string | number>();

  const selectList: SelectList[] = mappingOptions.map((item) => ({
    value: item[optionValue],
    label: item[optionLabel],
  }));

  const selectError = errorText ? 'react-select-container__error' : '';
  const selectActive = statusActive ? 'react-select-container__active' : '';

  useEffect(() => {
    if (getOptionValue) {
      getOptionValue(value);
    }
  }, [value]);
  
  return (
    <InputContainer
      label={label}
      id={id}
      errorText={errorText}
      required={required}
      disabled={isDisabled}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select
            className={cl('react-select-container', selectError, selectActive)}
            classNamePrefix="react-select"
            placeholder={placeholder}
            options={selectList}
            onChange={(item) => {
              onChange(item?.value);
              setValue(item?.value);              
            }}
            value={selectList.filter((item) => value === item.value)}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        )}
      />
    </InputContainer>
  );
};

export default CustomSelect;
