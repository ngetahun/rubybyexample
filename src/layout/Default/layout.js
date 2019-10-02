import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/footer';
// import "./layout.css"
import styled from 'styled-components';
import { Content } from 'carbon-components-react/lib/components/UIShell';

const ContentWrapper = styled.div`
  min-height: 100%;
`;
const InsideContentWrapper = styled.div`
  padding: 20px;
  padding-bottom: 50px;
`;
export default class Layout extends Component {
  render() {
    let children = this.props.children;
    return (
      <StaticQuery
        query={graphql`
          query LayoutTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <SiteHeader siteTitle={data.site.siteMetadata.title} />
            <Content>
              <ContentWrapper>
                <InsideContentWrapper>
                  <main>{children}</main>
                </InsideContentWrapper>
              </ContentWrapper>
              <Footer />
            </Content>
          </>
        )}
      />
    );
  }
}

Layout.displayName = 'ExamplesLayout';
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
