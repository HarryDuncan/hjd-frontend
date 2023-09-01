import React, { ReactNode } from "react";
import { CardFooterContainer } from "./Card.styled";

export const CardFooter = ({ children }: { children: ReactNode }) => {
  return <CardFooterContainer>{children}</CardFooterContainer>;
};
