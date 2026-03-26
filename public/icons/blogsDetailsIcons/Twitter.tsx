import React from 'react';

const Twitter = ({ width = '24', height = '24', BgFill = '#1E0A52', stroke = 'white' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5 4.5C22.5 2.8425 21.1575 1.5 19.5 1.5H4.5C2.8425 1.5 1.5 2.8425 1.5 4.5V19.5C1.5 21.1575 2.8425 22.5 4.5 22.5H19.5C21.1575 22.5 22.5 21.1575 22.5 19.5V4.5Z"
        fill={BgFill}
        className=""
      />
      <path
        d="M5.65266 18.1045H7.15266L11.1577 13.552L14.6414 18.097H18.7139L13.3702 11.032L17.8927 5.89453H16.3927L12.6764 10.117L9.48891 5.89828H5.28516L10.4564 12.6445L5.64891 18.1083L5.65266 18.1045ZM7.56891 7.01953H8.93391L16.4564 16.972H15.2002L7.57266 7.01953H7.56891Z"
        fill={stroke}
      />
    </svg>
  );
};

export default Twitter;
