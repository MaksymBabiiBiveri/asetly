import React, { memo } from 'react';

interface ExportProps {}

const Export: React.FC<ExportProps> = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7422 0.546417L10.7529 0.542234L10.7635 0.537556C10.8196 0.512792 10.8801 0.5 10.9414 0.5C11.0027 0.5 11.0632 0.512792 11.1193 0.537556L11.1299 0.542234L11.1407 0.546417C11.2006 0.569669 11.2555 0.604266 11.3024 0.648299L15.2979 4.64379C15.3924 4.73832 15.4455 4.86654 15.4455 5.00023C15.4455 5.13393 15.3924 5.26214 15.2979 5.35668C15.2033 5.45122 15.0751 5.50432 14.9414 5.50432C14.8078 5.50432 14.6797 5.45129 14.5852 5.35688C14.5851 5.35681 14.585 5.35675 14.585 5.35668L12.2957 3.05745L11.4414 2.1994V3.41023V13.0002C11.4414 13.1328 11.3887 13.26 11.295 13.3538C11.2012 13.4476 11.074 13.5002 10.9414 13.5002C10.8088 13.5002 10.6816 13.4476 10.5879 13.3538C10.4941 13.26 10.4414 13.1328 10.4414 13.0002V3.41023V2.1994L9.58708 3.05745L7.29785 5.35668C7.29773 5.3568 7.29761 5.35692 7.29749 5.35704C7.25076 5.40368 7.19532 5.44069 7.13431 5.46595C7.07316 5.49129 7.00761 5.50432 6.94141 5.50432C6.87521 5.50432 6.80966 5.49129 6.7485 5.46595C6.68734 5.44062 6.63177 5.40349 6.58496 5.35668C6.53815 5.30987 6.50102 5.2543 6.47569 5.19314C6.45035 5.13198 6.43731 5.06643 6.43731 5.00023C6.43731 4.93403 6.45035 4.86848 6.47569 4.80732C6.50102 4.74617 6.53815 4.6906 6.58496 4.64379L10.5804 0.648298C10.6273 0.604266 10.6822 0.569668 10.7422 0.546417ZM19.5879 12.6464C19.6816 12.5527 19.8088 12.5 19.9414 12.5C20.074 12.5 20.2012 12.5527 20.295 12.6464C20.3887 12.7402 20.4414 12.8674 20.4414 13V17C20.4414 17.663 20.178 18.2989 19.7092 18.7678C19.2403 19.2366 18.6044 19.5 17.9414 19.5H3.94141C3.27836 19.5 2.64248 19.2366 2.17364 18.7678C1.7048 18.2989 1.44141 17.663 1.44141 17V13C1.44141 12.8674 1.49408 12.7402 1.58785 12.6464C1.68162 12.5527 1.8088 12.5 1.94141 12.5C2.07401 12.5 2.20119 12.5527 2.29496 12.6464C2.38873 12.7402 2.44141 12.8674 2.44141 13V17C2.44141 17.3978 2.59944 17.7794 2.88075 18.0607C3.16205 18.342 3.54358 18.5 3.94141 18.5H17.9414C18.3392 18.5 18.7208 18.342 19.0021 18.0607C19.2834 17.7794 19.4414 17.3978 19.4414 17V13C19.4414 12.8674 19.4941 12.7402 19.5879 12.6464Z"
        fill="#032F5C"
        stroke="#032F5C"
      />
    </svg>
  );
};
export default memo(Export);
