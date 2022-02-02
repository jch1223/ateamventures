import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logoImg from "../assets/images/logo.png";
import vectorImg from "../assets/images/vector.png";
import Hamburger from "../components/Hamburger";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <HeaderStyled>
      <LogoWrap>
        {width < 720 && <Hamburger />}
        <img src={logoImg} alt="logo" />
      </LogoWrap>

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
`;

const Company = styled.div`
  display: flex;
  align-items: center;

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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;

  img + img {
    margin-left: 19px;
  }
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: 70px;
  padding: 25px 40px;
  background-color: ${({ theme }) => theme.palette.darkenBlue};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  @media only screen and (max-width: 768px) {
    padding: 16px 23px;
    height: auto;
  }
`;

export default Header;
