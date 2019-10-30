import React from 'react';

import Layout from '@/layout/Default';
import SEO from '@/components/seo';
import { graphql } from 'gatsby';
import './index.scss';

export default ({ data }) => {
  const { edges: examples } = data.allMdx;
  return (
    <Layout exampleList={examples}>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(limit: 1000) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;
