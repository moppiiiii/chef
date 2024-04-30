import React from 'react';

type HeadingSecondaryProps = {
  children: React.ReactNode;
};

export const HeadingSecondary: React.FC<HeadingSecondaryProps> = ({ children }) => {
  return <h2>{children}</h2>;
};
