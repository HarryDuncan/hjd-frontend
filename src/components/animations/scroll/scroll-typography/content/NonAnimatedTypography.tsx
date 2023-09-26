import {
  ScrolledTypographyHeader,
  ScrolledTypographyText,
} from "../ScrollTypography.styled";
import { TEXT_TYPE } from "../scrollTypography.consts";

interface ScrollTypographyProps {
  text: string;
  textType?: string;
}

export const NonAnimatedTypography = ({
  text,
  textType = "HEADER",
}: ScrollTypographyProps) => {
  if (textType === TEXT_TYPE.HEADER) {
    return (
      <ScrolledTypographyHeader>
        <span>{text}</span>
      </ScrolledTypographyHeader>
    );
  }
  return (
    <ScrolledTypographyText>
      <span>{text}</span>
    </ScrolledTypographyText>
  );
};
