import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Header,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

const SiteHeader = ({ siteTitle }) => (
  <Header aria-label={siteTitle} className="SiteHeader__heading">
    <HeaderName element={Link} to="/" prefix="">
      {siteTitle}{' '}
    </HeaderName>
  </Header>
);

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
};

SiteHeader.defaultProps = {
  siteTitle: ``,
};

export default SiteHeader;
