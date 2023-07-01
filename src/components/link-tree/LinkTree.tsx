import { MainTitle } from "components/styled-components/Text";
import { LinkTreeLink } from "models/link-tree/types";
import { LinkTreeContainer, LinkTreeItem } from "./LinkTree.styles";

interface LinkTreeProps {
  links: LinkTreeLink[];
}
export const LinkTree = ({ links }: LinkTreeProps) => (
  <LinkTreeContainer>
    {links.map(({ url, title }) => (
      <LinkTreeItem>
        <a href={url}>
          <MainTitle $isLight>{title}</MainTitle>
        </a>
      </LinkTreeItem>
    ))}
  </LinkTreeContainer>
);