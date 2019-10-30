import React from 'react';
import { Link } from 'gatsby';
import { LogoGithub24 } from '@carbon/icons-react';

const Footer = () => {
  return (
    <footer className="bx--row footer_container">
      <div className="bx--col-lg-5"></div>

      <div className="bx--col-lg-5">
        {new Date().getFullYear()}, Built with
        {` `}
        <Link to="https://www.gatsbyjs.org"> Gatsby </Link>
      </div>

      <div className="bx--col-lg-5">
        <span>
          <LogoGithub24 />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
