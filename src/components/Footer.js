import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <p>Nirmal Banquet &copy; All rights reserved</p>
      </FooterContainer>
    </>
  );
};
export default Footer;

const FooterContainer = styled.div`
  background-color: var(--primary-color);
  padding: 3rem 0;
  margin-top: 10rem;

  p {
    color: #fff;
    text-align: center;
  }

  @media (max-width: 350px) {
    p {
      font-size: 1.3rem;
    }
  }
`;
