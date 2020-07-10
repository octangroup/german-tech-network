const path = require (`path`)
exports.createPages= ({graphql, actions }) => {
      const {createPage} = actions

      const pagePost = path.resolve(`./src/pages_post/post-contentful.js`)
      return graphql(
            `
            {
                  allContentfulPost {
                        edges {
                              node {
                                    slug
                                    title
                              }
                        }
                  }
            }`
      ).then(result => {
            if (result.errors){
                  throw result.errors
            }
      const posts = result.data.allContentfulPost.edges

      posts.forEach((post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node


            createPage ({
                  path:post.node.slug,
                  component: pagePost,
                  context: {
                        slug: post.node.slug,
                        previous,
                        next,
                  },
            
            })
      })
}
)
}
