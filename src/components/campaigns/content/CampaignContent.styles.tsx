import styled from "styled-components";

export const DescriptionContainer = styled.div<{
  $height: number;
  $width: number;
}>`
  height: ${({ $height }) => `${$height}%`};
  position: relative;
  margin: 0 auto;
  width: ${({ $width }) => `${$width}%`};
`;

export const InnerDescriptionContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const CampaignContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;
