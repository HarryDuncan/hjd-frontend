import { ImageHover } from "components/images/image-hover";
import Layout from "components/layout/DefaultLayout";
import { useContent } from "hooks/content/useContent";
import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";

const BIO_PAGE_SECTIONS = ["Artist", "DJ", "Creative Technologist"];
const IMAGE_CONTENT_SECTIONS = ["bio1", "bio3", "DJ"] as string[];
const rootUrl = `/images/content/`;
const Bio: NextPage = () => {
  const { textContent, imageContent } = useContent();
  const { text, images } = useContentForPage(
    textContent,
    imageContent,
    BIO_PAGE_SECTIONS,
    IMAGE_CONTENT_SECTIONS
  );

  return (
    <Layout>
      {images.map((image) => (
        <ImageHover
          title={image.title}
          imageUrl={`${rootUrl}${image.imageUrl}`}
        />
      ))}
    </Layout>
  );
};

export default Bio;
