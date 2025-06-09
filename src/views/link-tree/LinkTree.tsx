import { MainTitle } from "components/text/Text";
import { LinkTreeLink } from "models/link-tree/types";
import {
  LinkItemOverlay,
  LinkItemsContainer,
  LinkTreeItem,
} from "./LinkTree.styles";
import { FloatingCentralContainer } from "components/containers/Containers";

interface LinkTreeProps {
  links: LinkTreeLink[];
}
export const LinkTree = ({ links }: LinkTreeProps) => (
  <FloatingCentralContainer>
    <LinkItemsContainer>
      {links.map(({ url, title }) => (
        <LinkTreeItem>
          <LinkItemOverlay />
          <a href={url}>
            <MainTitle $isLight>{title}</MainTitle>
          </a>
        </LinkTreeItem>
      ))}
    </LinkItemsContainer>
  </FloatingCentralContainer>
);
