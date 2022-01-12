import React, { memo } from 'react';

const Depreciation: React.FC = () => {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.707 3.29297C11.4418 3.29303 11.1875 3.39842 11 3.58597L7.99997 6.58597L1.70697 0.292969L0.292969 1.70697L6.99997 8.41397C7.18746 8.60152 7.44177 8.70691 7.70697 8.70697H8.29297C8.55816 8.70691 8.81248 8.60152 8.99997 8.41397L12 5.41397L16.293 9.70697L14 12H20V5.99997L17.707 8.29297L13 3.58597C12.8125 3.39842 12.5582 3.29303 12.293 3.29297H11.707Z"
        fill="white"
      />
    </svg>
  );
};

export default memo(Depreciation);
