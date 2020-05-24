import ApolloClient from 'apollo-boost';

const gql_client = new ApolloClient({
  uri: 'http://192.168.0.7:4000',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

export default gql_client;