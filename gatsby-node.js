exports.createPages = async function ({ graphql, actions, reporter }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild(
      "There was an error loading your blog posts",
      data.errors
    )
  }

  // Create paginated for posts
  const postPerPage = 3
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create single blog posts
  data.allMdx.edges.forEach(edge => {
    const postTemplate = require.resolve(`./src/templates/singlePost.js`)
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: `${postTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      context: { id },
    })
  })
}
