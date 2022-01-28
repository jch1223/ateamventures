import React from "react";
import styled from "styled-components";

import logoImg from "../assets/logo.png";
import vectorImg from "../assets/vector.png";

function Header() {
  return (
    <HeaderStyled>
      <div>
        <img src={logoImg} alt="logo img" />
      </div>

      <NavStyled>
        <Company>
          <img src={vectorImg} alt="가공업체 아이콘" />
          <span>A 가공업체</span>
        </Company>
        <Divider />
        <Auth>로그아웃</Auth>
      </NavStyled>
    </HeaderStyled>
  );
}

const Auth = styled.div`
  display: flex;
  align-items: center;
  font-family: Noto Sans KR Regular;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  font-family: Noto Sans KR Medium;

  img {
    margin-right: 8px;
  }
`;

const Divider = styled.div`
  margin: 0px 32px;
  border: 1px solid ${({ theme }) => theme.palette.white};
`;

const NavStyled = styled.nav`
  display: flex;
  color: ${({ theme }) => theme.palette.white};
  font-size: 14px;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 70px;
  padding: 25px 40px;
  background-color: ${({ theme }) => theme.palette.darkenBlue};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

export default Header;
