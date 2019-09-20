import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '@/layout/Default';
import SEO from '@/components/seo';
import { graphql } from 'gatsby';

function formatDate(date) {
  return new Date(date).toDateString();
}

export default ({ data }) => {
  const { edges: examples } = data.allMdx;
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>
    <p> Now go build something great. </p> */}
      <div
        style={{
          maxWidth: `300px`,
          marginBottom: `1.45rem`,
        }}></div>
      <ul>
        {examples.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.path}>
              <span>
                {node.frontmatter.title} - {formatDate(node.frontmatter.date)}
              </span>
              <i> {node.frontmatter.prelude} </i>
            </Link>
          </li>
        ))}
      </ul>
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
