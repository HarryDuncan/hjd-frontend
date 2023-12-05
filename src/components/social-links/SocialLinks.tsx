import { InstagramIcon } from "components/icons/svg-icons/InstagramIcon";
import { SocialLink, SocialLinkContainer } from "./SocialLink.styles";
import { TikTokIcon } from "components/icons/svg-icons/TikTokIcon";

const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/harry.j.dee/",
  TIKTOK: "https://www.tiktok.com/@harry.j.dee",
};
export const SocialLinks = () => {
  return (
    <SocialLinkContainer>
      <SocialLink
        href={SOCIAL_LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </SocialLink>
      <SocialLink
        href={SOCIAL_LINKS.TIKTOK}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TikTokIcon />
      </SocialLink>
    </SocialLinkContainer>
  );
};
