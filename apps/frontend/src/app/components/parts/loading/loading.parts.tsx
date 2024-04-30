import React from 'react';
import LoadingStyle from './loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={LoadingStyle.loadingComponent}>
      <div className={LoadingStyle.loadingContent}>
        <p className={LoadingStyle.loadingEmoji}>🤔</p>
        <p className={LoadingStyle.loadingWord}>Loading...</p>
      </div>
    </div>
  );
};
