import styled from "@emotion/styled";
import { FC } from "react";
import { spacing } from "src/variables/spacing";
import { Button } from "../base/Button";
import { Input } from "../base/Input";

const Header = styled.header`
  display: flex;
`;

const SearchInput = styled(Input)`
  flex: 1;
  margin-right: ${spacing.default};
`;

const PokedexHeader: FC = () => {
  return (
    <Header>
      <SearchInput type="text" />
      <Button>:</Button>
    </Header>
  );
};

export { PokedexHeader };
