import styled from "@emotion/styled";
import { FC } from "react";
import { spacing } from "src/variables/spacing";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  capitalize?: boolean;
}

const I = styled.input<Props>((props) => ({
  padding: spacing.half,
  textTransform: props.capitalize ? "capitalize" : "none",
}));

const Input: FC<Props> = (props) => {
  return <I {...props} />;
};

export { Input };
