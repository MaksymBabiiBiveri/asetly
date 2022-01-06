import React, { memo } from 'react';

const Dashboard: React.FC = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="14.2656"
        y="4.48242"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect
        x="14.2656"
        y="14.1758"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect
        x="4.23047"
        y="4.48242"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect
        x="4.23047"
        y="14.1758"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};
export default memo(Dashboard);
