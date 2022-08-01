/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { FC } from "react";
import { PokedexHeader } from "@components/PokedexHeader";

const mainLayout = css`
  font-size: 16px;
  padding: 1rem;
  * {
    box-sizing: border-box;
    font-family: "Roboto Slab", serif;
  }
`;

const MainLayout: FC = (props) => {
  return (
    <main css={mainLayout} {...props}>
      <PokedexHeader />
      {props.children}
    </main>
  );
};

export { MainLayout };
