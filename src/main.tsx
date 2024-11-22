import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThirdwebProvider
      clientId="your-client-id"
      activeChain="ethereum"
    >
      <App />
    </ThirdwebProvider>
  </StrictMode>
);