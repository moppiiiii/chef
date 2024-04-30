import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';

import './app.module.scss';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
