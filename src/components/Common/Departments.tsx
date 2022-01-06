import React, { memo } from 'react';

const Departments: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.75"
        y="2.43359"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect
        x="3.28516"
        y="15.0664"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect
        x="14.2148"
        y="15.0664"
        width="6.5"
        height="6.5"
        rx="1.25"
        stroke="white"
        strokeWidth="1.5"
      />
      <rect x="11.25" y="8.52051" width="1.5" height="3.84885" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.16797 13.1104H15.8294C16.1056 13.1104 16.3294 13.3342 16.3294 13.6104V14.3168H17.8294V13.6104C17.8294 12.5058 16.934 11.6104 15.8294 11.6104H8.16797C7.0634 11.6104 6.16797 12.5058 6.16797 13.6104V14.3168H7.66797V13.6104C7.66797 13.3342 7.89183 13.1104 8.16797 13.1104Z"
        fill="white"
      />
    </svg>
  );
};

export default memo(Departments);
