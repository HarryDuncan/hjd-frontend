import { useQuery } from "react-query";
import { getGalleryItems } from "../../models/gallery/getGalleryItems";
import { Painting } from "../../models/gallery/types";

export const useGalleryItems = () => {
  return useQuery<Painting[]>([], () => getGalleryItems());
};
