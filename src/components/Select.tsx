import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import arrowImg from "../assets/images/arrow.png";

interface SelectProps {
  summary: string;
  options: string[];
}

function Select({ summary, options }: SelectProps) {
  const [showOption, setShowOption] = useState(false);

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
      <SelectStyled onClick={() => setShowOption(!showOption)}>
        <span>{summary}</span> <img src={arrowImg} alt="arrow drop down" />
      </SelectStyled>

      {showOption && (
        <OptionWrap>
          <OptionStyled>
            {options.map((item) => {
              return (
                <Label key={item}>
                  <input type="checkbox" name={item} value={item} />
                  <span>{item}</span>
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

const SelectStyled = styled.div`
  padding: 6px 14px;
  background: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray};
  border-radius: 4px;
  font-family: Roboto;
  cursor: pointer;

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
`;

export default Select;
