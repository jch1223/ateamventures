import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Main({ children }: Props) {
  return <MainStyled>{children}</MainStyled>;
}

const MainStyled = styled.main`
  max-width: 1130px;
  margin: 40px auto;
  color: ${({ theme }) => theme.palette.black};
`;

export default Main;
