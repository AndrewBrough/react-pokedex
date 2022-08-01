import { FC } from "react";
import { ApolloClientProvider } from "./ApolloClient";
import { PokemonSearchProvider } from "./PokemonSearch";

const Providers: FC = ({ children }) => {
  return (
    <ApolloClientProvider>
      <PokemonSearchProvider>{children}</PokemonSearchProvider>
    </ApolloClientProvider>
  );
};

export { Providers };
