import React from 'react';
import HomeTemplateStyle from './home.template.module.scss';
import { Header } from '../../parts/header/header.parts';

export const HomeTemplate: React.FC = () => {
  return (
    <div className={HomeTemplateStyle.homeTemplateContainer}>
      <Header />
      <div className={HomeTemplateStyle.homeContentContainer}>
        <h1>HomePage</h1>
      </div>
    </div>
  );
};
