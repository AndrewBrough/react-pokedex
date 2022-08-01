import { createContext, FC, useContext, useState } from "react";
import { usePokemonSearchQuery } from "./queries/PokemonSearch.query";

interface PokemonSearch {
  query: string;
  setQuery: (newQuery: string) => void;
  searchData?: any;
  searchLoading: boolean;
}

const pokemonSearchDefaults: PokemonSearch = {
  query: "",
  setQuery: () => {},
  searchData: null,
  searchLoading: false,
};

const PokemonSearchContext = createContext<PokemonSearch>(
  pokemonSearchDefaults
);

const usePokemonSearch = () => useContext(PokemonSearchContext);

const PokemonSearchProvider: FC = ({ children }) => {
  const [query, setQuery] = useState(pokemonSearchDefaults.query);
  const { data, loading } = usePokemonSearchQuery({
    variables: {
      input: query,
    },
    fetchPolicy: "cache-only",
  });

  const value: PokemonSearch = {
    query,
    setQuery,
    searchData: data,
    searchLoading: loading,
  };

  return (
    <PokemonSearchContext.Provider value={value}>
      {children}
    </PokemonSearchContext.Provider>
  );
};

export { PokemonSearchProvider, usePokemonSearch };
