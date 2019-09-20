import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  height: 50px;
  margin-top: -50px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      {new Date().getFullYear()}, Built with
      {` `}
      <Link to="https://www.gatsbyjs.org"> Gatsby </Link>
    </FooterWrapper>
  );
};

export default Footer;
