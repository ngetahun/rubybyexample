import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/footer';
// import "./layout.css"
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import CodeWrapper from '@/components/code';

const ContentWrapper = styled.div`
  min-height: 100%;
`;
const InsideContentWrapper = styled.div`
  padding: 20px;
  padding-bottom: 50px;
`;
export class Layout extends Component {
  render() {
    let children = this.props.children;
    const hasPath = this.props.path || false;
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
            <Normalize />
            <ContentWrapper>
              <InsideContentWrapper>
                <SiteHeader siteTitle={data.site.siteMetadata.title} />
                {hasPath ? (
                  this.props.path.startsWith('/examples') ? (
                    <CodeWrapper>{children}</CodeWrapper>
                  ) : (
                    <main>{children}</main>
                  )
                ) : (
                  <main>{children}</main>
                )}
              </InsideContentWrapper>
            </ContentWrapper>
            <Footer />
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
