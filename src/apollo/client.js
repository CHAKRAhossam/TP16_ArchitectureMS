/**
 * @file client.js
 * @description Apollo Client configuration for GraphQL API
 * @author CHAKRA Hossam
 */
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Configure HTTP connection to GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:8082/graphql',
  credentials: 'include',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    },
  },
});