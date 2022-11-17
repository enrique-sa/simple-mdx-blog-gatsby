import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons } from "../elements"

export const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: {eq: "github.svg"}) {
        publicURL
      }
      linkedin: file(relativePath: {eq: "linkedin.svg"}) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={data.github.publicURL} alt="logo-github" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={data.linkedin.publicURL} alt="logo-linkedin" />
          </a>
        </FooterSocialIcons>
        <p>© 2022 Skull. All right reserved.</p>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}