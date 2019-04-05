import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => {
  console.log(data)
  return (
    <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <h1> Hi people </h1> <p> Welcome to your new Gatsby site. </p>
    <p> Now go build something great. </p> */}
    <div
      style={{
        maxWidth: `300px`,
        marginBottom: `1.45rem`,
      }}
    >
      <Image />
    </div>
 
    {console.log(data.allMdx)}
    {data.allMdx.edges.map(({node}) => (
        <Link to={node.frontmatter.path}> { node.frontmatter.title } </Link>
      )
    )}

  </Layout>
  )
}

export const query = graphql `
  query {
    allMdx(limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`