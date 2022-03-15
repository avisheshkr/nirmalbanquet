import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import SideBar from "./SideBar/SideBar";

import { FaAddressCard, FaPhoneAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <NavbarContainer>
        <MobileIcon onClick={showMenu}>
          <FaBars />
        </MobileIcon>
        <SideBar showMenu={showMenu} show={show} />
        <MenuContainer>
          <Link to="home" smooth={true} duration={1000}>
            <li>home</li>
          </Link>
          <Link to="about" smooth={true} duration={1000}>
            <li>about</li>
          </Link>
          <Link to="gallery" smooth={true} duration={2000}>
            <li>gallery</li>
          </Link>
          <Link to="contacts" smooth={true} duration={3000}>
            <li>contacts</li>
          </Link>
        </MenuContainer>
        <LogoContainer>
          <Link to="home" smooth={true} duration={1000}>
            <img src="images/logo.png" alt="Logo" />
          </Link>
        </LogoContainer>
        <AddressContainer>
          <Title>
            <i>
              <FaAddressCard />
            </i>
            <div>
              <p>address</p>
              <p>Lukunthali, Bhaktapur</p>
            </div>
          </Title>

          <Title>
            <i>
              <FaPhoneAlt />
            </i>
            <div>
              <p>Phone</p>
              <p>9841650484</p>
            </div>
          </Title>
        </AddressContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #a8cfe8;
  padding: 0 5rem;
  display: flex;
  height: 12rem;

  @media (max-width: 1440px) {
    flex-direction: column;
    height: 45rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 600px) {
    height: 55rem;
    padding: 0 3rem 2rem 3rem;
  }
`;

const MobileIcon = styled.div`
  display: none;
  padding-top: 3rem;
  align-self: start;
  font-size: 2.5rem;
  color: var(--primary-color);
  cursor: pointer;

  @media (max-width: 500px) {
    display: block;
  }
`;

const MenuContainer = styled.ul`
  flex: 1;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  li {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    transition: 0.4s;
    color: #000;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
      border-bottom: 1px solid var(--primary-color);
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

// const NavLink = styled(Link)`
//   text-decoration: none;
//   text-transform: uppercase;
//   letter-spacing: 0.3rem;
//   transition: all 0.3s;
//   color: #444;
//   padding: 0.5rem 0;

//   &:hover {
//     color: var(--primary-color);
//     border-bottom: 1px solid var(--primary-color);
//   }
// `;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  background-color: #a8cfe8;

  img {
    cursor: pointer;
    width: 15rem;
  }

  @media (max-width: 500px) {
  }
`;

const AddressContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  i {
    color: var(--secondary-color);
  }

  div {
    p {
      text-transform: capitalize;
      font-size: 1.4rem;
      letter-spacing: 0.2rem;

      color: #000;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    div {
      p {
        text-align: center;
      }
    }
  }
`;
