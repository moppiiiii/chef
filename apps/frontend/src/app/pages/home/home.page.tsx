import React from 'react';
import { useDocumentTitle } from '../../contexts/document-title.context';
import { HomeTemplate } from '../../components/templates/home/home.template';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');

  return <HomeTemplate />;
};
