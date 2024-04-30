import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';

import './styles/styles.scss';
import { DocumentTitleProvider } from './contexts/document-title.context';

export function App() {
  return (
    <BrowserRouter>
      <DocumentTitleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </DocumentTitleProvider>
    </BrowserRouter>
  );
}

export default App;
