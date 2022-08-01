/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const PokedexHeader: FC = () => {
  return (
    <header
      css={css`
        padding: 1rem;
      `}
    >
      <input type="text" />
    </header>
  );
};

export { PokedexHeader };
