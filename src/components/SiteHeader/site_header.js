import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Header,
  HeaderName,
} from 'carbon-components-react/lib/components/UIShell';

const SiteHeader = ({ siteTitle }) => {
  const splicedTitle = siteTitle.split(' ');

  return (
    <Header aria-label={siteTitle} className="bx--row SiteHeader__heading">
      <HeaderName element={Link} to="/" prefix="" className="SiteHeader__name">
        <span className="SiteHeader__boldend">
          {' '}
          {splicedTitle
            .slice(0, 1)
            .concat('  ')
            .join(' ')}{' '}
        </span>
        <span> {splicedTitle.slice(1).join(' ')} </span>
      </HeaderName>
    </Header>
  );
};

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
};

SiteHeader.defaultProps = {
  siteTitle: ``,
};

export default SiteHeader;
