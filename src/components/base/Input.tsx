import styled from "@emotion/styled";
import { FC } from "react";

const I = styled.input``;

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <I {...props} />;
};

export { Input };
