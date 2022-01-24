import React, { useEffect, useState } from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import './CustomFileInput.scss';

interface CustomFileInputProps<FieldType extends FieldValues = FieldValues> extends UseControllerProps<FieldType> {}

const CustomFileInput = <FieldType,>(props: CustomFileInputProps<FieldType>) => {
  const { ...rest } = props;
  const [files, setFiles] = useState<File | null>();

  useEffect(() => {
    if (files) {
      const newFiles = files.text();
      console.log('files', newFiles);
    }
  }, [files]);

  return (
    <div className="custom_file_input">
      <label htmlFor="uploadFile">Upload a contract</label>
      <Controller
        {...rest}
        render={({ field: { ref, onChange } }) => (
          <input
            type="file"
            id="uploadFile"
            ref={ref}
            onChange={(value) => {
              setFiles(value.target.files && value.target.files[0]);
              onChange(value);
            }}
          />
        )}
      />
    </div>
  );
};

export default CustomFileInput;
