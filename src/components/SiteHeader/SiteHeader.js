import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';

const SiteHeader = ({ siteTitle }) => (
  <Header aria-label="Rubybyexample">
    <HeaderName element={Link} to="/">
      {siteTitle}{' '}
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem element={Link} to="/repos">
        Repositories
      </HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label=""></HeaderGlobalAction>
    </HeaderGlobalBar>
  </Header>
);
// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `#e0e0e0`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1
//         style={{
//           margin: 0,
//         }}
//       >
//         <Link
//           to="/"
//           style={{
//             color: `rebeccapurple`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}{" "}
//         </Link>{" "}
//       </h1>{" "}
//     </div>{" "}
//   </header>
// )

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
};

SiteHeader.defaultProps = {
  siteTitle: ``,
};

export default SiteHeader;
