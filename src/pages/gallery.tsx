import type { NextPage } from "next";
import { useGalleryItems } from "../hooks/gallery/useGalleryItems";

const Gallery: NextPage = () => {
  const { isLoading, data: galleryItems } = useGalleryItems();
  console.log(galleryItems);
  return (
    <div>
      <h1>{isLoading}</h1>
    </div>
  );
};

export default Gallery;
