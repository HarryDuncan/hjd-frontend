import { ImageContent, TextContent } from "models/content/content.types";
import { useQuery } from "react-query";
import { getContent } from "services/content/getContent";

type SiteContent = {
  imageContent: ImageContent[];
  textContent: TextContent[];
};
export const useContent = (): SiteContent => {
  const contentData = useQuery<SiteContent>([], () => getContent());
  return contentData.data ?? { imageContent: [], textContent: [] };
};
