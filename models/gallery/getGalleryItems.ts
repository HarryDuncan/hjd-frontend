import { fetchData } from "../../utils/rest/api";

export const getGalleryItems = async () => {
  const galleryItems = await fetchData("_painting_table", "");
  return galleryItems.data;
};
