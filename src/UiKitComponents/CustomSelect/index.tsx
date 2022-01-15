import React from 'react';
import { SelectPicker } from 'rsuite';
import { UnknownDataType } from '@Types/application.types';

interface CustomSelectProps {
  data: UnknownDataType[];
  labelKey: string;
}

const CustomSelect: React.FC<CustomSelectProps> = (props) => {
  const { data, labelKey, ...rest } = props;

  return <SelectPicker data={data} labelKey={labelKey} {...rest} />;
};

export default CustomSelect;
