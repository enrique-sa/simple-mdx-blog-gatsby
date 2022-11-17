import React from "react"
import { Container, FeatureImage, Content, Card } from "../components/"

export default function Home() {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <Card date="10-10-10" title="text 1" excerpt="fdsf dsf dsf dsf dsf dsf dsf sd f" slug="/text" />
      </Content>
    </Container>
  )
}
