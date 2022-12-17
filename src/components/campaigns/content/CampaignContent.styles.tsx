import styled from "styled-components";

export const DescriptionContainer = styled.div<{
  $height: number;
  $width: number;
}>`
  height: ${({ $height }) => `${$height}%`};
  position: absolute;
  margin: 0 auto;
  top: ${({ $height }) => (100 - $height) / 2}%;
  left ${({ $width }) => (100 - $width) / 2}%;
  width: ${({ $width }) => `${$width}%`};
`;

export const InnerDescriptionContainer = styled.div`
  width: 90%;
  height: 100%;
  z-index: 3;
  text-align: center;
  margin: 0 auto;
`;

export const CampaignContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
