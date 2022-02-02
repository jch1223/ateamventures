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

  @media only screen and (max-width: 768px) {
    margin: 24px 20px;
  }
`;

export default Main;
