import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api-ap-southeast-2.hygraph.com/v2/cle2blrac48cd01rrdxmadzsn/master',
    cache: new InMemoryCache(),
  });

export default client;