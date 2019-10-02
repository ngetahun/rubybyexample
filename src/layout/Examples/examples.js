import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '@/components/footer';
import SiteHeader from '@/components/SiteHeader';
import CodeWrapper from '@/components/code_wrapper';
import { Content } from 'carbon-components-react/lib/components/UIShell';

export default class Examples extends Component {
  render() {
    let children = this.props.children;
    return (
      <StaticQuery
        query={graphql`
          query ExampleTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Content>
              <SiteHeader siteTitle={data.site.siteMetadata.title} />
              <CodeWrapper>{children}</CodeWrapper>
            </Content>
            <Footer />
          </>
        )}
      />
    );
  }
}

Examples.displayName = 'ExamplesLayout';
Examples.propTypes = {
  children: PropTypes.node.isRequired,
};
