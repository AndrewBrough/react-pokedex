import styled from "@emotion/styled";
import { FC } from "react";
import { usePokemonSearch } from "src/data/PokemonSearch";
import { spacing } from "src/variables/spacing";
import { Input } from "../base/Input";

const SearchInput = styled(Input)`
  flex: 1;
  margin-right: ${spacing.default};
`;

const PokedexSearchInput: FC = () => {
  const { setQuery } = usePokemonSearch();

  return (
    <SearchInput
      type="text"
      capitalize
      onSubmit={(e) => setQuery(e.currentTarget.value)}
    />
  );
};

export { PokedexSearchInput };
