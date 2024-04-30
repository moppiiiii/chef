import React from 'react';

type HeadingTertiaryProps = {
  children: React.ReactNode;
};

export const HeadingTertiary: React.FC<HeadingTertiaryProps> = ({ children }) => {
  return <h3>{children}</h3>;
};
