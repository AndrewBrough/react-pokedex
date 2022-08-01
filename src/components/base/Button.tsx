import styled from "@emotion/styled";
import { FC } from "react";
import { spacing } from "src/variables/spacing";

const B = styled.button`
  padding: ${spacing.half};
`;

const Button: FC = (props) => {
  return <B {...props}>{props.children}</B>;
};

export { Button };
