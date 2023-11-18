import React from 'react';

export const Input = ({ ...props }): JSX.Element => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};
