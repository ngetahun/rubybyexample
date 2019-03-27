/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        const examplePageTemplate = "";
        resolve(
            graphql(
                `
                {
                    allMdx(limit: 1000) {
                      edges {
                        node {
                          frontmatter {
                            path
                          }
                        }
                      }
                    }
                  }
                `
            )
        ).then( result => { 
            if (result.errors) {
                reject(result.errors)
            }
  
            // Create pages for each markdown file.
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                const path = node.frontmatter.path
                createPage({
                    path,
                    component: blogPostTemplate,
                    context: {
                        path,
                    },
                })
            })
        })
    })
}
