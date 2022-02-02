import React, { MouseEventHandler } from "react";
import styled, { css } from "styled-components";

interface SwitchProps {
  isChecked: boolean;
  onClick: MouseEventHandler;
}

function Switch({ isChecked, onClick }: SwitchProps) {
  return (
    <LabelStyled>
      <CheckBoxStyled
        type="checkbox"
        defaultChecked={isChecked}
        onClick={onClick}
      />
      <SliderStyled checked={isChecked}></SliderStyled>
    </LabelStyled>
  );
}

const SliderStyled = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 34px;

  background-color: ${({ theme, checked }) => {
    if (checked) return theme.palette.lightenBlue;

    return theme.palette.darkenGray;
  }};

  :before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    bottom: -3px;
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

    background-color: ${({ theme, checked }) => {
      if (checked) return theme.palette.blue;

      return theme.palette.lightenGray;
    }};

    ${({ checked }) => {
      return (
        checked &&
        css`
          transform: translateX(13px);
        `
      );
    }};
  }
`;

const CheckBoxStyled = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const LabelStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 14px;
`;

export default Switch;
