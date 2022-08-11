import { ImageContent, TextContent } from "models/content/content.types";
import { useMemo } from "react";

export const useContentForPage = (
  textContent: TextContent[],
  imageContent: ImageContent[],
  textContentSelectionArray: string[],
  imageContentSelectionArray: string[]
) =>
  useMemo(() => {
    const text = textContent.flatMap((textContentItem) =>
      textContentSelectionArray.includes(textContentItem.title)
        ? textContentItem
        : []
    );
    const images = imageContent.flatMap((imageContentItem) =>
      imageContentSelectionArray.includes(imageContentItem.title)
        ? imageContentItem
        : []
    );
    return { images, text };
  }, [imageContent, textContent]);
