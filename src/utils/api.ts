import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { apiBase } from '../config';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: apiBase,
});

export const client = new ApolloClient({
  cache,
  link,
});
