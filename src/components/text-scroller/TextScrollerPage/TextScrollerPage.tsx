import React from "react";
import styled, { css, keyframes } from "styled-components";

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

interface TextScrollerProps {
  text: string;
  rowCount?: number;
}

const TextScrollerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const TextRow = styled.div<{ reverse: boolean }>`
  display: flex;
  ${({ reverse }) =>
    reverse
      ? css`
          animation: ${scrollText} 10s linear infinite;
        `
      : css`
          animation: ${scrollText} 15s linear infinite;
        `}
  animation-delay: ${({ reverse }) => (reverse ? "0s" : "5s")};
`;
const TextScrollerText = styled.p<{ $isLight: boolean }>`
  text-transform: uppercase;
  color: ${({ $isLight }) => ($isLight ? "white" : "black")};
  font-size: 2rem;
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin: 0;
  padding: 0;
`;

const TextScrollerPage: React.FC<TextScrollerProps> = ({
  text,
  children,
  rowCount = 3,
}) => {
  const textData = text.repeat(50).split("");

  return (
    <TextScrollerContainer>
      {[...Array(rowCount)].map((_, index) => (
        <TextRow key={index} reverse={index % 2 !== 0}>
          {textData.map((char, charIndex) => (
            <TextScrollerText key={charIndex} $isLight>
              {char}
            </TextScrollerText>
          ))}
        </TextRow>
      ))}
      {children}
    </TextScrollerContainer>
  );
};

export default TextScrollerPage;
