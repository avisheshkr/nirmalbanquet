import React from "react";
import styled from "styled-components";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <>
      <FooterContainer>
        <p>
          &copy; Nirmal Banquet {date} &#8226; All rights reserved &#8226;
          Designed By{" "}
          <span>
            <a
              href="https://machhu.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              Machhu Infosys
            </a>
          </span>
        </p>
      </FooterContainer>
    </>
  );
};
export default Footer;

const FooterContainer = styled.div`
  background-color: var(--secondary-color);
  padding: 3rem 0;
  margin-top: 10rem;

  p {
    color: #fff;
    text-align: center;

    span {
      text-decoration: underline;
      font-weight: bold;
      font-size: 2rem;

      a {
        color: yellow;
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 350px) {
    p {
      font-size: 1.3rem;
    }
  }
`;
