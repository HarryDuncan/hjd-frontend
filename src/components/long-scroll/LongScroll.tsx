import React from "react";
import { LongScrollContainer } from "./LongScroll.styles";

interface LongScrollProps {
  children: React.ReactNode;
  ref: any;
}
export const LongScroll = React.forwardRef<HTMLDivElement, LongScrollProps>(
  ({ children }, ref) => {
    return <LongScrollContainer ref={ref}>{children}</LongScrollContainer>;
  }
);
