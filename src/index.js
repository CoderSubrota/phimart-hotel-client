import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contextsApi/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider apiUrl="http://127.0.0.1:8000/api/accounts">
      <App />
    </AuthProvider>
  </React.StrictMode>
);
