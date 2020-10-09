const fs = require("fs-extra")
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);

  return graphql(`
    {
      shopify: allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      blog: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {frontmatter: {path: {ne: ""}, title: {ne: ""}}}
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              author                            
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 960) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
              }              
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.shopify.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })

    result.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });    
  })
}