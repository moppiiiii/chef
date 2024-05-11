import React from 'react';
import HeaderStyle from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={HeaderStyle.headerComponent}>
      <p>Auto Chef</p>
    </div>
  );
};
