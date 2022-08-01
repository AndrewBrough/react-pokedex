import { FC } from "react";
import { PokemonSearchProvider } from "./PokemonSearch";

const Providers: FC = ({ children }) => {
  return <PokemonSearchProvider>{children}</PokemonSearchProvider>;
};

export { Providers };
