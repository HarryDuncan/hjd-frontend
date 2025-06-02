import styled from "styled-components";

const Button = styled.button<{
  $disabled?: boolean;
}>`
  background-color: ${({ $disabled }) =>
    $disabled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.8)"};
  color: white;
  padding: 1rem 2rem;
  border-radius: 100rem;
  border: none;
  max-width: 400px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-size: ${({ theme }) => theme.font.size.medium};
  transition: opacity 0.3s ease;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.alternative.family};
  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
  &:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0.9)"};
  }
`;

const FloatingWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
`;

const RelativeWrapper = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const CTA_VARIANT = {
  FLOATING: "floating",
  RELATIVE: "relative",
} as const;

export const CallToAction = ({
  onClick,
  text,
  variant = CTA_VARIANT.FLOATING,
  disabled = false,
}: {
  onClick: () => void;
  text: string;
  variant?: (typeof CTA_VARIANT)[keyof typeof CTA_VARIANT];
  disabled?: boolean;
}) => {
  const handleClick = (_e: React.MouseEvent) => {
    if (!disabled) {
      onClick();
    }
  };

  const ButtonContent = (
    <Button onClick={handleClick} $disabled={disabled} disabled={disabled}>
      {text}
    </Button>
  );

  return variant === CTA_VARIANT.FLOATING ? (
    <FloatingWrapper>{ButtonContent}</FloatingWrapper>
  ) : (
    <RelativeWrapper>{ButtonContent}</RelativeWrapper>
  );
};
