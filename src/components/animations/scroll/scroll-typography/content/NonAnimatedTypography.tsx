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
        {text.split("").map((char, index) => {
          const charKey = `${char}-${index}`;
          return <span key={charKey}>{char}</span>;
        })}
      </ScrolledTypographyHeader>
    );
  }
  return (
    <ScrolledTypographyText>
      {text.split("").map((char, index) => {
        const charKey = `${char}-${index}`;
        return <span key={charKey}>{char}</span>;
      })}
    </ScrolledTypographyText>
  );
};
