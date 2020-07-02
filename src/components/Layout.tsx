import React from "react";
import Navbar from "./Navbar";
import { Props } from "../interfaces/layout";

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar></Navbar>
    {children}
  </>
);

export default Layout;
