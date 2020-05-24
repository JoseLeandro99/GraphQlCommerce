import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import history from './services/history';
import Routes from './routes';

import gql_client from './services/graphql-client';

import './styles/global.css';

function App() {
  return (
    <ApolloProvider client={gql_client}>
      <Router history={history}>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
