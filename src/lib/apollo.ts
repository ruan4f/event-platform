import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqakiq0o7k01xn3e6rgl3w/master',
  cache: new InMemoryCache()
});