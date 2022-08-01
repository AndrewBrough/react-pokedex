import { gql, LazyQueryHookOptions, useLazyQuery } from "@apollo/client";

const POKEMON_SEARCH_QUERY = gql`
  query pokemonSearchQuery($input: String) {
    pokemon_v2_pokemonspecies(
      where: { name: { _regex: $input } }
      order_by: { id: asc }
    ) {
      id
      name
    }
  }
`;

interface PokemonSearchData {
  id: string;
  name: string;
}

interface PokemonSearchVariables {
  input: string;
}

const usePokemonSearchQuery = (
  options?: LazyQueryHookOptions<PokemonSearchData, PokemonSearchVariables>
) =>
  useLazyQuery<PokemonSearchData, PokemonSearchVariables>(
    POKEMON_SEARCH_QUERY,
    options
  );

export { usePokemonSearchQuery };
