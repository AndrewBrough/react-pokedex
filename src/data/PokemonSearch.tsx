import { createContext, FC, useState } from "react";

interface PokemonSearch {
  query: string;
  setQuery: (newQuery: string) => void;
}

const pokemonSearchDefaults: PokemonSearch = {
  query: "",
  setQuery: () => {},
};

const PokemonSearchContext = createContext<PokemonSearch>(
  pokemonSearchDefaults
);

const PokemonSearchProvider: FC = ({ children }) => {
  const [query, setQuery] = useState(pokemonSearchDefaults.query);

  const value = {
    query,
    setQuery,
  };

  return (
    <PokemonSearchContext.Provider value={value}>
      {children}
    </PokemonSearchContext.Provider>
  );
};

export { PokemonSearchProvider };
