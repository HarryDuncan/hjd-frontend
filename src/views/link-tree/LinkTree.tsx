import { MainTitle } from "components/text/Text";
import { LinkTreeLink } from "models/link-tree/types";
import { LinkTreeItem } from "./LinkTree.styles";
import {
  FloatingCentralContainer,
  OverlayDiv,
} from "components/containers/Containers";

interface LinkTreeProps {
  links: LinkTreeLink[];
}
export const LinkTree = ({ links }: LinkTreeProps) => (
  <FloatingCentralContainer>
    <OverlayDiv />
    {links.map(({ url, title }) => (
      <LinkTreeItem>
        <a href={url}>
          <MainTitle $isLight>{title}</MainTitle>
        </a>
      </LinkTreeItem>
    ))}
  </FloatingCentralContainer>
);
