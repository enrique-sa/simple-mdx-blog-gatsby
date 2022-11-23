import React from "react"
import { graphql } from "gatsby"
import { H1 } from "../elements"
import { Container, Post, FeatureImage, Seo } from "../components"

const SinglePost = ({ data: { mdx }, children }) => {
  const featureImage =
    mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData

  const seoImage = mdx.frontmatter.featureImage.publicURL

  return (
    <Container>
      <Seo 
        title={mdx.frontmatter.title}
        image={seoImage}
        description={mdx.frontmatter.excerpt}
      />
      <FeatureImage fixed={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 2">{mdx.frontmatter.title}</H1>
        {children}
      </Post>
    </Container>
  )
}

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default SinglePost
