import { ImageContent, TextContent } from "models/content/content.types";
import { useMemo } from "react";
import { useContent } from "./useContent";

const DEFAULT_CONTENT_URL = `/assets/images/content/`;
export const useContentForPage = ({
  textSelection = [],
  imageSelection = [],
  rootUrl = DEFAULT_CONTENT_URL,
}: {
  textSelection?: string[];
  imageSelection?: string[];
  rootUrl?: string;
}) => {
  const { textContent, imageContent } = useContent();
  return useMemo(() => {
    const text = textContent.flatMap((textContentItem: TextContent) =>
      textSelection.includes(textContentItem.title) ? textContentItem : []
    );
    const images = imageContent.flatMap((imageContentItem: ImageContent) =>
      imageSelection.includes(imageContentItem.title)
        ? {
            ...imageContentItem,
            imageUrl: `${rootUrl}${imageContentItem.imageUrl}`,
          }
        : []
    );
    return { text, images };
  }, [textContent, imageContent, imageSelection, rootUrl, textSelection]);
};
