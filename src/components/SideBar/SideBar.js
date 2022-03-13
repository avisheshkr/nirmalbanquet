import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ showMenu, show }) => {
  return (
    <>
      <SideBarContainer show={show}>
        <div>
          <FaTimes onClick={showMenu} />
        </div>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={1000} onClick={showMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000} onClick={showMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={2000} onClick={showMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              smooth={true}
              duration={3000}
              onClick={showMenu}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </SideBarContainer>
    </>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  background-color: #fff;
  width: 30rem;
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-100%")};
  bottom: 0;
  z-index: 2000;
  padding: 2rem 2rem 0 0;
  transition: 0.4s all;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  div {
    align-self: end;
    font-size: 2.5rem;
    color: var(--primary-color);
    cursor: pointer;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: center;

    li {
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.3rem;
      transition: all 0.3s;
      color: #444;
      padding: 0.5rem 0;
      cursor: pointer;

      &:hover {
        color: var(--primary-color);
        border-bottom: 1px solid var(--primary-color);
      }
    }
  }
`;
