import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/footer';
import ExampleList from '@/components/ExampleList';
import { Content } from 'carbon-components-react/lib/components/UIShell';

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
          <div>
            <div className="bx--grid default_layout--container">
              <SiteHeader siteTitle={data.site.siteMetadata.title} />
              <Content className="bx--row default_content__container">
                <div className="bx--col-lg-16 default_content__topspacing"></div>
                <main>{children}</main>
                <ExampleList examples={this.props.exampleList} />
                <div className="bx--col-lg-16 default_content__topspacing"></div>
              </Content>
            </div>
            <Footer />
          </div>
        )}
      />
    );
  }
}

Layout.displayName = 'DefaultLayout';
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  exampleList: PropTypes.array.isRequired,
};
