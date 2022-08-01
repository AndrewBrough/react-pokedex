import styled from "@emotion/styled";
import { FC } from "react";
import { Button } from "../base/Button";
import { PokedexSearchInput } from "./PokedexSearchInput";

const Header = styled.header`
  display: flex;
`;

const PokedexHeader: FC = () => {
  return (
    <Header>
      <PokedexSearchInput />
      <Button>:</Button>
    </Header>
  );
};

export { PokedexHeader };
