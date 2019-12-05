import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { apiBase } from './config';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: apiBase,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const link = ApolloLink.from([
  authLink,
  httpLink,
]);

export const client = new ApolloClient({
  cache,
  link,
});
