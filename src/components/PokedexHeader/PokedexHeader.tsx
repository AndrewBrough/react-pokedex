import styled from "@emotion/styled";
import { FC } from "react";
import { Button } from "../base/Button";
import { PokedexSearchInput } from "./PokedexSearchInput";
import { PokemonSearchTypeahead } from "./PokemonSearchTypeahead";

const Header = styled.header`
  display: flex;
  position: relative;
`;

const TypeAhead = styled(PokemonSearchTypeahead)({
  position: "sticky",
  top: 0,
  left: 0,
});

const PokedexHeader: FC = () => {
  return (
    <Header>
      <PokedexSearchInput />
      <Button>:</Button>
      <TypeAhead />
    </Header>
  );
};

export { PokedexHeader };
