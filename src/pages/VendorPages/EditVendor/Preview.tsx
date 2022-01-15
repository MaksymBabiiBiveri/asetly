import React from 'react';
import classes from './EditVendor.module.scss';
import { InputContainer, PreviewField } from '@components';
import { Divider } from '@UiKitComponents';
import { VendorTypes } from '@Types/vendor.types';

interface PreviewProps {
  currentVendor: VendorTypes;
}

const Preview: React.FC<PreviewProps> = (props) => {
  const { currentVendor } = props;
  return (
    <div className={classes.content_box}>
      <InputContainer title="Summary">
        <PreviewField label="Vendor Name" description={currentVendor.name} />
        <PreviewField
          label="Tax Office"
          description={currentVendor.taxOffice}
        />
        <PreviewField
          label="Vendor Code"
          description={currentVendor.partnerCode}
        />

        <PreviewField label="TXN" description={currentVendor.taxNumber} />
      </InputContainer>
      <Divider margin="40px 0 20px 0" />
      <div className="markup_helper-box">
        <InputContainer title="Location">
          <PreviewField label="Country" description="null" />
          <PreviewField label="City" description="null" />
          <PreviewField label="Address" description={currentVendor.address} />
        </InputContainer>
        <InputContainer title="Contacts">
          <PreviewField
            label="Email"
            description={currentVendor.email}
          />
          <PreviewField
            label="Phone number"
            description={currentVendor.phone}
          />
        </InputContainer>
      </div>
    </div>
  );
};

export default Preview;