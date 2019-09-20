exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
                  tableOfContents(maxDepth: 4)
                  rawBody
                  headings {
                    value
                    depth
                  }
                  frontmatter {
                    title
                    path
                    date
                  }
                }
              }
            }
          }
        `
      )
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }
      result.data.allMdx.edges.forEach(({ node }) => {
        const path = node.frontmatter.path;
        createPage({
          path,
          context: {
            path,
          },
        });
      });
    });
  });
};
