import React from 'react';
import './index.css';
import App from './day1';
import {createRoot} from 'react-dom/client';
import Counter from './day2'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);


