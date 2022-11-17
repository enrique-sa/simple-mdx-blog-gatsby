import React from "react";
import { ContainerWrapper } from "../elements";
import { Navbar, Footer } from "../components"

export const Container = ({children}) => {
  return (
    <ContainerWrapper>
      <Navbar />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}