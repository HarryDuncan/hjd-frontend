import { fetchData } from "../../utils/rest/api";
import { ApiMethods } from "../../utils/rest/apiConstants";

export const getGalleryItems = async () => {
  const galleryItems = await fetchData(ApiMethods.FETCH, "_painting_table");
  return galleryItems.data;
};
