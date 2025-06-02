import { TextScroller } from "components/text-scroller/TextScroller";
import { PageTitleContainer } from "./TitlePage.styles";
import styled from "styled-components";

const ScrollerStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    display: none;
  }
`;

const MobileScrollerWrapper = styled.div`
  display: none;
  position: relative;
  width: 100vw;
  height: 80px;
  background: ${({ theme }) => theme.colors.gradients.dark};
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
    display: block;
    z-index: 1000;
  }
`;

const ScrollerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 20vh;
`;

export const PageTitle = () => {
  return (
    <>
      <MobileScrollerWrapper>
        <TextScroller text=" ART TECH MAGIC " direction="right" />
      </MobileScrollerWrapper>
      <PageTitleContainer>
        <ScrollerStack>
          <ScrollerWrapper>
            <TextScroller text=" ART TECH MAGIC " direction="right" />
          </ScrollerWrapper>
          <ScrollerWrapper>
            <TextScroller text=" HARRY J DEE " direction="left" />
          </ScrollerWrapper>
          <ScrollerWrapper>
            <TextScroller text=" ART TECH MAGIC " direction="right" />
          </ScrollerWrapper>
          <ScrollerWrapper>
            <TextScroller text=" HARRY J DEE " direction="left" />
          </ScrollerWrapper>
        </ScrollerStack>
      </PageTitleContainer>
    </>
  );
};
