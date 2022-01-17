import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CustomFileInputProps {}

const CustomFileInput = React.forwardRef<
  HTMLInputElement,
  Partial<UseFormRegisterReturn> & CustomFileInputProps
>((props, ref) => {
  return (
    <div>
      <input type="file" ref={ref} />
    </div>
  );
});
export default CustomFileInput;
