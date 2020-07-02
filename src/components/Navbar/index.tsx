import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import Link from "next/link";
import { LinkStyled } from "../../stylesheets/navbar";

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar color="black" dark expand="md" className="white-text">
      <MDBNavbarBrand>
        <strong>React Blog</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <LinkStyled>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <Link href="/">
                <a className="link-box">Posts</a>
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link href="/posts/new">
                <a className="link-box">Create New Post</a>
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </LinkStyled>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavbarPage;
