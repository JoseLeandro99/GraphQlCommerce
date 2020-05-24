import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import Routes from './src/routes';
import client from './src/services/gql_service';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
}
