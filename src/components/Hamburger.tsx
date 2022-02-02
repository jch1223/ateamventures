import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import menuImg from "../assets/images/menu.png";
import vectorImg from "../assets/images/vector-black.png";
import logoBlueImg from "../assets/images/logo-blue.png";

function Hamburger() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body instanceof HTMLBodyElement) {
      if (showMenu) {
        body.style.overflow = "hidden";
      } else {
        body.style.removeProperty("overflow");
      }
    }
  }, [showMenu]);

  return (
    <>
      {showMenu && <MenuBackground onClick={() => setShowMenu(false)} />}
      <MenuContent appear={showMenu}>
        <MenuHeader>
          <img src={logoBlueImg} alt="logo blue" />
        </MenuHeader>
        <NavStyled>
          <NavLinkStyled to={"#"}>
            <img src={vectorImg} alt="가공업체 아이콘" />
            <span>A 가공업체</span>
          </NavLinkStyled>

          <NavLinkStyled to={"#"}>
            <span>로그아웃</span>
          </NavLinkStyled>
        </NavStyled>
      </MenuContent>

      <img src={menuImg} alt="menu" onClick={() => setShowMenu(true)} />
    </>
  );
}

const NavLinkStyled = styled(NavLink)`
  display: flex;
  text-align: center;

  img {
    margin-right: 8px;
  }

  & + & {
    margin-top: 24px;
  }
`;

const NavStyled = styled.nav`
  padding: 36px 32px 0 32px;
  color: ${({ theme }) => theme.palette.black};
  font-size: 14px;

  a {
    text-decoration: none;

    :visited {
      color: ${({ theme }) => theme.palette.black};
    }
  }
`;

const MenuHeader = styled.div`
  display: flex;
  padding: 19px 20px;
  border-bottom: 1px solid #e5e5e5;
`;

const MenuContent = styled.div<{ appear: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ appear }) => (appear ? 0 : "-280px")};
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s;
  z-index: 999;
`;

const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export default Hamburger;
