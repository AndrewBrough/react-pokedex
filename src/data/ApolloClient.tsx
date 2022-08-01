import { FC } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { LocalStorageWrapper, persistCache } from "apollo3-cache-persist";

const ApolloClientProvider: FC = ({ children }) => {
  const cache = new InMemoryCache();

  const getPersistedStorage = async () => {
    await persistCache({
      cache,
      storage: new LocalStorageWrapper(window.localStorage),
    });
  };

  getPersistedStorage();

  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloClientProvider };
