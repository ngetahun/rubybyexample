
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                {
                  allMdx(limit: 1000) {
                    edges {
                      node {
                        id
                        frontmatter {
                          path
                        }
                        code {
                          scope
                        }
                        rawBody
                      }
                    }
                  }
                }`
            )
        ).then( result => { 
            if (result.errors) {
                reject(result.errors)
            }
            // let codeWrapper = require.resolve('./src/components/layout')
            // Create pages for each markdown file.
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                const path = node.frontmatter.path
                // throw path
                // if (path.startsWith('/examples')){
                //   codeWrapper = require.resolve('./src/components/code_wrapper')
                // }
                createPage({
                    path,
                    // component: codeWrapper,
                    context: {
                        path,
                    },
                })
            })
        })
    })
}
