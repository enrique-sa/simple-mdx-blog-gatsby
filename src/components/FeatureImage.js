import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { FeatureImageWrapper } from "../elements";

export const FeatureImage = ({ fixed }) => {
  
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "code.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  
  return (
    <FeatureImageWrapper>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="hero-image" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%"
      }} />
    </FeatureImageWrapper>
  )
}
