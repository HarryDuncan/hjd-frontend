import styled from "styled-components";

interface ThirdPartyLogoProps {
  alt: string;
  imgUrl: string;
  link: string;
}

const ThirdPartyLogoImage = styled.img`
  height: 30px;
`;
export const ThirdPartyLogo = ({ alt, imgUrl, link }: ThirdPartyLogoProps) => {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <ThirdPartyLogoImage
        alt={alt}
        src={`${process.env.NEXT_PUBLIC_CONTENT_ROOT}${imgUrl}`}
      />
    </a>
  );
};
