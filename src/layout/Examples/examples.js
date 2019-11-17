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
          <div className="bx--grid example_layout--container">
            <SiteHeader siteTitle={data.site.siteMetadata.title} />
            <Content className="bx--row example_content__container">
              <div className="bx--col-lg-16 default_content__topspacing"></div>
              <CodeWrapper>{children}</CodeWrapper>
              <div className="bx--col-lg-16 default_content__topspacing"></div>
            </Content>
            <Footer />
          </div>
        )}
      />
    );
  }
}

Examples.displayName = 'ExamplesLayout';
Examples.propTypes = {
  children: PropTypes.node.isRequired,
};
