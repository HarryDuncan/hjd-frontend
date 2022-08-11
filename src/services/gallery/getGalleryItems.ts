import { fetchData } from "../../network/rest/api";
import { ApiMethods } from "../../network/rest/apiConstants";

export const getGalleryItems = async () => {
  const galleryItems = await fetchData(ApiMethods.FETCH, "paintings");
  return galleryItems.data;
};
