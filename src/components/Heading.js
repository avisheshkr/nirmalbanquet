import React from "react";
import styled from "styled-components";

const Heading = ({ subTitle, title, letter }) => {
  return (
    <>
      <HeadingContainer>
        <h1>{letter}</h1>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </HeadingContainer>
    </>
  );
};

export default Heading;

const HeadingContainer = styled.div`
  text-align: center;
  margin-top: 4rem;

  h1 {
    color: var(--primary-color);
    font-size: 20rem;
    font-weight: 400;
  }

  h3 {
    text-transform: capitalize;
  }
`;
