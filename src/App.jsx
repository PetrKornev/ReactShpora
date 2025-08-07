import './App.css';
import { Route, Routes } from 'react-router';
import MainPage from './MainPage';
import ErrorPage from './ErrorPage';
import Content from './Content';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:topic" element={<Content />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
