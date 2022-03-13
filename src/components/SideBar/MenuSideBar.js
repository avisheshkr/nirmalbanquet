import React from "react";
import { Link } from "react-scroll";
import "./MenuSideBar.css";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagram,
  FaViber,
  FaWhatsappSquare,
} from "react-icons/fa";

const MenuSideBar = ({ showSideBar }) => {
  return (
    <div
      className={showSideBar ? "menu-sidebar active-sidebar" : "menu-sidebar"}
    >
      <Menu>
        <Link to="home" smooth={true} duration={1000}>
          <li>home</li>
        </Link>
        <Link to="about" smooth={true} duration={1000}>
          <li>about</li>
        </Link>
        <Link to="gallery" smooth={true} duration={1000}>
          <li>gallery</li>
        </Link>
        <Link to="contacts" smooth={true} duration={1000}>
          <li>contacts</li>
        </Link>
        <div>
          <a
            href="https://www.facebook.com/nirmalbanquet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.instagram.com/nirmalbanquet074/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background:
                "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/9779841926838"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#25d366",
            }}
          >
            <FaWhatsappSquare />
          </a>
          <a
            href="viber://chat?number=9779841926838"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#59267c",
            }}
          >
            <FaViber />
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default MenuSideBar;

const Menu = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14rem;
    cursor: pointer;
    background-color: var(--primary-color);
    padding: 2rem;
    transition: 0.4s;
    height: 5rem;

    &:hover {
      background-color: var(--secondary-color);
    }
  }

  div {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    a {
      font-size: 4rem;
      color: var(--secondary-color);
      transition: 0.4s;
      display: flex;
      align-items: center;

      &:hover {
        transform: translateY(-10%);
      }
    }
  }
`;
