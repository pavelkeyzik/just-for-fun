import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import { apiBase } from '../config';
import { schema, resolvers } from './schema';
import { isProduction } from '../config';

const executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers });

const cache = new InMemoryCache();
const link = isProduction
  ? new HttpLink({
      uri: apiBase,
    })
  : new SchemaLink({ schema: executableSchema });

export const client = new ApolloClient({
  cache,
  link,
});
