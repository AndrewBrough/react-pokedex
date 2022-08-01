import styled from "@emotion/styled";
import { FC } from "react";
import { usePokemonSearch } from "src/data/PokemonSearch";
import { colors } from "src/variables/colors";
import { spacing } from "src/variables/spacing";

const Div = styled.div({
  padding: spacing.default,
  background: colors.background,
  overflow: "hidden",
});

const Results: FC = () => {
  const { searchData, searchLoading } = usePokemonSearch();
  return (
    <Div>
      {searchLoading ?? "Loading..."}
      {!searchLoading ?? JSON.parse(searchData)}
    </Div>
  );
};

const PokemonSearchTypeahead: FC = (props) => {
  const { searchData, searchLoading } = usePokemonSearch();

  if (!searchData && !searchLoading) return null;

  return (
    <Div {...props}>
      <Results />
    </Div>
  );
};

export { PokemonSearchTypeahead };
