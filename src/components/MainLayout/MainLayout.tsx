import styled from "@emotion/styled";
import { FC } from "react";
import { PokedexHeader } from "src/components/PokedexHeader";
import { spacing } from "src/variables/spacing";

const Main = styled.main`
  font-size: 16px;
  padding: ${spacing.default};
  *,
  input {
    box-sizing: border-box;
    font-family: "Roboto Slab", serif;
  }
`;

const MainLayout: FC = ({ children }) => {
  return (
    <Main>
      <PokedexHeader />
      {children}
    </Main>
  );
};

export { MainLayout };
