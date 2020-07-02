import React, { ReactNode } from "react";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <>
    <Navbar></Navbar>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
