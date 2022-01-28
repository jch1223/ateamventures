import React, { ReactNode } from "react";

import Header from "./Header";
import Main from "./Main";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
