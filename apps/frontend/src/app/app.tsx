import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';

import './styles/styles.scss';
import { DocumentTitleProvider } from './contexts/document-title.context';
import { NotFoundPage } from './pages/not-found/not-found.page';

export function App() {
  return (
    <BrowserRouter>
      <DocumentTitleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DocumentTitleProvider>
    </BrowserRouter>
  );
}

export default App;
