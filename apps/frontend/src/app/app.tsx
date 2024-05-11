import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';

import './styles/styles.scss';
import { DocumentTitleProvider } from './contexts/document-title.context';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { RecipeRegistrationPage } from './pages/recipe-registration/recipe-registration.page';
import { RecipeSearchPage } from './pages/recipe-search/recipe-search.page';

export function App() {
  return (
    <BrowserRouter>
      <DocumentTitleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe-registration" element={<RecipeRegistrationPage />} />
          <Route path="/recipe-search" element={<RecipeSearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </DocumentTitleProvider>
    </BrowserRouter>
  );
}

export default App;
