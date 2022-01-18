import React from 'react';
import { InputContainer, PreviewField } from '@components';
import { Divider } from '@UiKitComponents';
import { Company } from '@Types/company.types';

interface PreviewProps {
  currentCompany: Company;
}

const Preview: React.FC<PreviewProps> = (props) => {
  const { currentCompany } = props;
  return (
    <div className="form_box">
      <InputContainer title="Summary">
        <PreviewField label="Company Name" description={currentCompany.name} />
        <PreviewField
          label="Tax Office"
          description={currentCompany.taxOffice}
        />
        <PreviewField
          label="Company Code"
          description={currentCompany.companyCode}
        />

        <PreviewField label="TXN" description={currentCompany.taxNumber} />
      </InputContainer>
      <Divider margin="40px 0 20px 0" />
      <div className="markup_helper-box">
        <InputContainer title="Location">
          <PreviewField label="Country" description="null" />
          <PreviewField label="City" description="null" />
          <PreviewField label="Address" description={currentCompany.address} />
        </InputContainer>
        <InputContainer title="Contacts">
          <PreviewField
            label="Email"
            description={currentCompany.contactName}
          />
          <PreviewField
            label="Phone number"
            description={currentCompany.phone}
          />
        </InputContainer>
      </div>
    </div>
  );
};
export default Preview;
