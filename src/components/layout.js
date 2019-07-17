import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
// import Footer from './footer'
import CodeWrapper from "./code"

const Wrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 0px 1.0875rem 1.45rem;
  paddingtop: 0;
`

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//         mdx {
//           frontmatter {
//             path
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         { //TODO: This approach will not work as the state dependent query is cached
//           // Possible solution: Pass a paramater through the node creation API
//           // hence using the prop
//         }
//         <Wrapper>
//           {
//           data.mdx.frontmatter.path.startsWith('/examples') ?
//           <main>{children}</main> :
//           <CodeWrapper>{children}</CodeWrapper>
//           }
//         </Wrapper>
//         {/* <Footer /> */}
//       </>
//     )}
//   />
// )

export class Layout extends Component {
  render() {
    let children = this.props.children
    // FIXME: this.props does not contain information regarding the path
    // when the user visits the index page, look in to this
    console.log(this.props)
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <Wrapper>
              {/* { 
                this.props.path.startsWith('/examples') ?
                <main>{children}</main> :
                <CodeWrapper>{children}</CodeWrapper>
                } */}
              <main>{children}</main>
            </Wrapper>
            {/* <Footer /> */}
          </>
        )}
      />
    )
  }
}

Layout.displayName = "ExamplesLayout"
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
