import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

import arrowImg from "../assets/images/arrow.png";
import whiteArrowImg from "../assets/images/white-arrow.png";

interface OptionDataType {
  [value: string]: { checked: boolean };
}

interface SelectProps {
  summary: string;
  options: OptionDataType;
  onChange: ChangeEventHandler;
}

export const optionDateFor = (data: string[]) => {
  const result: OptionDataType = {};

  data.forEach((item) => {
    result[item] = { checked: false };
  });

  return result;
};

function Select({ summary, options, onChange }: SelectProps) {
  const [showOption, setShowOption] = useState(false);

  const countChecked = Object.keys(options).filter(
    (value) => options[value].checked
  ).length;

  const select = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (select.current && !select.current.contains(e.target as Node)) {
        setShowOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectWrap ref={select}>
      <SelectStyled
        isFiltered={!!countChecked}
        onClick={() => setShowOption(!showOption)}
      >
        <span>
          {summary}
          {!!countChecked && `(${countChecked})`}
        </span>
        <img
          src={!countChecked ? arrowImg : whiteArrowImg}
          alt="arrow drop down"
        />
      </SelectStyled>

      {showOption && (
        <OptionWrap>
          <OptionStyled>
            {Object.keys(options).map((value) => {
              return (
                <Label key={value}>
                  <input
                    type="checkbox"
                    name={summary}
                    value={value}
                    checked={options[value].checked}
                    onChange={onChange}
                  />
                  <span>{value}</span>
                </Label>
              );
            })}
          </OptionStyled>
        </OptionWrap>
      )}
    </SelectWrap>
  );
}

const Label = styled.label`
  display: flex;
  color: ${({ theme }) => theme.palette.black};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  input {
    margin-right: 10px;
    cursor: pointer;
  }

  & + & {
    margin-top: 8px;
  }
`;

const OptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  box-sizing: border-box;
  top: 4px;
  width: max-content;
  padding: 16px 12px;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 4px;
  z-index: 999;
`;

const OptionWrap = styled.div`
  position: relative;
`;

const SelectStyled = styled.div<{ isFiltered: boolean }>`
  padding: 6px 14px;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 4px;
  font-family: Roboto;
  cursor: pointer;

  ${({ isFiltered, theme }) => {
    if (isFiltered) {
      return css`
        background: ${theme.palette.darkenBlue};
        color: ${theme.palette.white};
      `;
    }
    return css`
      background: ${theme.palette.white};
    `;
  }}

  span {
    font-size: 12px;
    margin-right: 12px;
  }

  img {
    margin-bottom: 1px;
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.palette.blue};
  }
`;

const SelectWrap = styled.div`
  display: inline-flex;
  flex-direction: column;

  & + & {
    margin-left: 8px;
  }
`;

export default Select;
