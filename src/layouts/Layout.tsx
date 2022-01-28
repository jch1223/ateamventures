import React, { ReactNode } from "react";

import Header from "./Header";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
