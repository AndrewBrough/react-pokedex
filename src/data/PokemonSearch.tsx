import { execute } from "@apollo/client";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { useDebounce } from "src/hooks/useDebounce";
import { usePokemonSearchQuery } from "./queries/PokemonSearch.query";

interface PokemonSearch {
  query: string;
  setQuery: (newQuery: string) => void;
  searchData?: any;
  searchLoading: boolean;
}

const pokemonSearchDefaults: PokemonSearch = {
  query: "pikachu",
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
  const [execute, { data, loading }] = usePokemonSearchQuery();
  const debounceSearch = useDebounce(
    (debounceValue) =>
      execute({
        variables: {
          input: debounceValue,
        },
      }),
    200
  );

  useEffect(() => {
    if (query) debounceSearch(query);
  }, [query]);

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
