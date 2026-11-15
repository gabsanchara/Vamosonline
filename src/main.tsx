import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Background from './components/Background';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Background />
    <App />
  </StrictMode>,
);
