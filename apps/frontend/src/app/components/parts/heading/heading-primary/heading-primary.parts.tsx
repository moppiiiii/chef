import React from 'react';

type HeadingPrimaryProps = {
  children: React.ReactNode;
};

export const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
