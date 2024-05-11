import React from 'react';
import { Header } from '../../parts/header/header.parts';
import NotFoundTemplateStyle from './not-found.template.module.scss';
import { HeadingPrimary } from '../../parts/heading/heading-primary/heading-primary.parts';

export const NotFoundTemplate: React.FC = () => {
  return (
    <div className={NotFoundTemplateStyle.notFoundTemplateContainer}>
      <Header />

      <div className={NotFoundTemplateStyle.notFoundContentContainer}>
        <div className={NotFoundTemplateStyle.notFoundTitle}>
          <HeadingPrimary>404</HeadingPrimary>
          <p className={NotFoundTemplateStyle.notFoundSigh}>😮‍💨</p>
        </div>
        <p>お探しのページは見つかりませんでした</p>
      </div>
    </div>
  );
};
