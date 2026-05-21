import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CurrencyProvider } from './context/CurrencyContext.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <ErrorBoundary>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <CurrencyProvider>
          <App />
        </CurrencyProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}
