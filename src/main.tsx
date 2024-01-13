import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './lib/graphql/apolloClient.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
