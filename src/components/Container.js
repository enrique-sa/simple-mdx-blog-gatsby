import React from "react";
import { ContainerWrapper } from "../elements";
import { Navbar } from "../components"

export const Container = ({children}) => {
  return (
    <ContainerWrapper>
      <Navbar/>
      {children}
    </ContainerWrapper>
  )
}