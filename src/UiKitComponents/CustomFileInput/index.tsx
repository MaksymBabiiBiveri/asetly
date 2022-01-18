import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './CustomFileInput.scss';

interface CustomFileInputProps {
  value: any;
  setValue: (value: any) => void;
}

const CustomFileInput = React.forwardRef<
  HTMLInputElement,
  Partial<UseFormRegisterReturn> & CustomFileInputProps
>((props, ref) => {
  const { value, setValue, ...rest } = props;
  // const [value, setValue] = useState<any>();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target);
    setValue(event.target.value);
  };

  return (
    <div className="custom_file_input">
      <label htmlFor="uploadFile">Upload a contract</label>
      <input
        type="file"
        ref={ref}
        value={value}
        id="uploadFile"
        onChange={onChange}
        {...rest}
      />
    </div>
  );
});
export default CustomFileInput;