import React from 'react';
import { useDocumentTitle } from '../../contexts/document-title.context';

export const HomePage: React.FC = () => {
  useDocumentTitle('Home');
  return <div>HomePage</div>;
};
