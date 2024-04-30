import React from 'react';
import { HeadingPrimary } from '../heading/heading-primary/heading-primary.parts';
import HeaderStyle from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={HeaderStyle.headerComponent}>
      <HeadingPrimary>Auto Chef</HeadingPrimary>
    </div>
  );
};
