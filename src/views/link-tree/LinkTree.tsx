import { MainTitle } from "components/text/Text";
import { LinkTreeLink } from "models/link-tree/types";
import {
  LinkItemOverlay,
  LinkItemsContainer,
  LinkTreeItem,
} from "./LinkTree.styles";
import { FloatingCentralContainer } from "components/containers/Containers";
import { useHandleRouting } from "hooks/routing/useHandleRouting";
import { useCallback } from "react";

interface LinkTreeProps {
  links: LinkTreeLink[];
}
export const LinkTree = ({ links }: LinkTreeProps) => {
  const handleRouting = useHandleRouting();
  const onLinkClick = useCallback(
    (url: string) => {
      handleRouting(url);
    },
    [handleRouting]
  );
  return (
    <FloatingCentralContainer>
      <LinkItemsContainer>
        {links.map(({ url, title }) => (
          <LinkTreeItem onClick={() => onLinkClick(url)}>
            <LinkItemOverlay />

            <MainTitle $isLight>{title}</MainTitle>
          </LinkTreeItem>
        ))}
      </LinkItemsContainer>
    </FloatingCentralContainer>
  );
};
