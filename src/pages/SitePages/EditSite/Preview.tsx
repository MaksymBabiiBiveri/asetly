import React from 'react';
import { InputContainer, PreviewField } from '@components';
import { Divider } from '@UiKitComponents';
import { Site } from '@Types/site.types';

interface PreviewProps {
  currentSite: Site;
}

const Preview: React.FC<PreviewProps> = (props) => {
  const { currentSite } = props;
  const cityName: string = currentSite.city?.name;
  const countryName: string = currentSite.country?.name;

  console.log(currentSite);
  

  return (
    <div className="form_box">
      <InputContainer title="Summary">
        <PreviewField label="Site Name" description={currentSite.name} />
        <PreviewField
          label="Site Barcode"
          description={currentSite.barcode}
        />
        <PreviewField
          label="Site Code"
          description={currentSite.siteCode}
        />
        <PreviewField label="Parent site" description={currentSite.parentSiteId} />
      </InputContainer>
      <Divider margin="40px 0 20px 0" />
      <div className="markup_helper-box">
        <InputContainer title="Location">
          <PreviewField label="Country" description={countryName} />
          <PreviewField label="City" description={cityName} />
          <PreviewField label="Town" description={currentSite.town} />
          <PreviewField label="Area" description={currentSite.area} />
        </InputContainer>
        <InputContainer title="">
          <PreviewField label="Address" description={currentSite.address} />
        </InputContainer>
      </div>
    </div>
  );
};

export default Preview;
