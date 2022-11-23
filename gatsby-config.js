module.exports = {
  siteMetadata: {
    title: "My MDX Blog",
    description: "A simple blog built with Gatsby and MDX",
    url: "https://github.com/enrique-sa/",
    image: "/code.jpg",
    author: "Enrique",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            require(`remark-gfm`),
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i`,
        ],
        display: 'swap',
      },
    },
  ],
}
