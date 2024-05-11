import React from 'react';
import HeadingPrimaryStyle from './heading-primary.parts.module.scss';

type HeadingPrimaryProps = {
  children: React.ReactNode;
};

export const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({ children }) => {
  return <h1 className={HeadingPrimaryStyle.headingPrimary}>{children}</h1>;
};
