import styled from "@emotion/styled";
import { FC } from "react";
import { PokedexHeader } from "src/components/PokedexHeader";
import { spacing } from "src/variables/spacing";

const Main = styled.main`
  font-size: 16px;
  padding: ${spacing.default};
  * {
    box-sizing: border-box;
    font-family: "Roboto Slab", serif;
  }
`;

const MainLayout: FC = (props) => {
  return (
    <Main {...props}>
      <PokedexHeader />
      {props.children}
    </Main>
  );
};

export { MainLayout };
