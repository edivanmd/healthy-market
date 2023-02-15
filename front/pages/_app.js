import '@/styles/globals.css'
import { Layout } from '../components';
import { ApolloProvider } from "@apollo/client";
import client from "../utils/apollo-client";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
