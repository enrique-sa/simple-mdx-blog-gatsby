import React from "react";
import { PaginationWrapper, PaginationElement } from "../elements";

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage}>Pagina anterior</PaginationElement>
      <PaginationElement to={nextPage}>Siguiente página</PaginationElement>
    </PaginationWrapper>
  )
}