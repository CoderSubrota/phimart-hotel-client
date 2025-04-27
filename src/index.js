import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contextsApi/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider apiUrl="https://phimart-hotel-server.onrender.com/api/accounts">
      <App />
    </AuthProvider>
  </React.StrictMode>
);
