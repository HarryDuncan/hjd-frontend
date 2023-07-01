import React, { ReactNode } from "react";
import { CardFooterContainer } from "./Card.styles";

export const CardFooter = (children: ReactNode) => {
  return <CardFooterContainer>{children}</CardFooterContainer>;
};
