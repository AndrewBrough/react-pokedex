import { FC } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const ApolloClientProvider: FC = ({ children }) => {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloClientProvider };
