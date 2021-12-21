import React from 'react';
import Select from 'react-select';

interface CustomSelectProps {}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const CustomSelect = React.forwardRef<HTMLSelectElement, CustomSelectProps>(
  () => {
    return (
      <>
        <Select options={options} />
      </>
    );
  }
);

export default CustomSelect;
