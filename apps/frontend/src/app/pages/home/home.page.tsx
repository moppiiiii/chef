import React from 'react';
import { useDocumentTitle } from '../../contexts/document-title.context';
import { Header } from '../../components/parts/header/header.parts';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');
  return (
    <div>
      <Header />
      HomePage
    </div>
  );
};
