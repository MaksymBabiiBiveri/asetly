import React, { useEffect, useState } from 'react';
import cl from 'classnames';
import Select from 'react-select';
import { Control, Controller, FieldPath } from 'react-hook-form';
import InputContainer from '../InputContainer';
import './CustomSelect.scss';

interface SelectOptions {
  readonly value: number | string;
  readonly label: number | string;
}
interface CustomSelectProps<FieldType> {
  label: string;
  id: string;
  name: FieldPath<FieldType>;
  control: Control<FieldType, object>;
  placeholder?: string;
  mappingOptions: any[];
  optionValue: string | number;
  optionLabel: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  errorText?: string;
  required?: boolean;
  statusActive?: boolean;
  getOptionValue?: (option: string | number | undefined) => void;
}

const CustomSelectSpare = <FieldType,>(props: CustomSelectProps<FieldType>) => {
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

  const selectList: SelectOptions[] = mappingOptions.map((item) => ({
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
        render={({}) => (
          <Select
            className={cl('react-select-container', selectError, selectActive)}
            classNamePrefix="react-select"
            placeholder={placeholder}
            options={selectList}
            onChange={(newValue) => {
              // onChange(newValue?.value);
              setValue(newValue?.value);
            }}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        )}
      />
    </InputContainer>
  );
};

export default CustomSelectSpare;
