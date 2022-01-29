import React, { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
  onClick?: MouseEventHandler;
}

function Button({ children, outline, onClick }: ButtonProps) {
  return (
    <ButtonStyled outline={outline} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  onClick: () => {},
  outline: false,
};

const colorStyles = css<ButtonProps>`
  background: ${({ theme }) => theme.palette.blue};

  ${({ outline }) =>
    outline &&
    css`
      color: ${({ theme }) => theme.palette.blue};
      background: none;
      border: 1px solid ${({ theme }) => theme.palette.blue}; ;
    `}
`;

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  outline: none;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.white};
  font-weight: 500;
  cursor: pointer;

  ${colorStyles}

  &:not(:first-child) {
    margin-left: 8px;
  }
`;

export default Button;
