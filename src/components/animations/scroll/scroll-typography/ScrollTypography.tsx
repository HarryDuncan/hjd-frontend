import { DEFAULT_CONFIG } from "./scrollTypography.consts";
import { ScrollTypographyConfig } from "./scrollTypography.types";
import { NonAnimatedTypography } from "./content/NonAnimatedTypography";
import { AnimatedTypography } from "./content/AnimatedTypography";

interface ScrollTypographyProps {
  text: string;
  textType?: string;
  config?: Partial<ScrollTypographyConfig>;
  isAnimated?: boolean;
}

export const ScrollTypography = ({
  text,
  textType = "HEADER",
  config = DEFAULT_CONFIG as ScrollTypographyConfig,
  isAnimated = true,
}: ScrollTypographyProps) => {
  if (!isAnimated) {
    return <NonAnimatedTypography text={text} textType={textType} />;
  }
  return <AnimatedTypography text={text} textType={textType} config={config} />;
};
