import { ParallaxImage } from "components/parallax-image/ParallaxImage";
import { PageContainer } from "components/styled-components/Containers";
import type { NextPage } from "next";
import { useGalleryItems } from "../hooks/gallery/useGalleryItems";

const Gallery: NextPage = () => {
  const { isLoading, data: galleryItems } = useGalleryItems();
  console.log(galleryItems);
  return (
    <PageContainer>
      <h1>{isLoading}</h1>
      <ParallaxImage />
    </PageContainer>
  );
};

export default Gallery;
