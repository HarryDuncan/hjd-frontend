import { ImageHover } from "components/images/image-hover";
import Layout from "components/layout/DefaultLayout";
import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";

const BIO_PAGE_SECTIONS = ["Artist", "DJ", "Creative Technologist"];
const IMAGE_CONTENT_SECTIONS = ["bio1", "bio3", "DJ"] as string[];

const Bio: NextPage = () => {
  const { text, images } = useContentForPage({
    textSelection: BIO_PAGE_SECTIONS,
    imageSelection: IMAGE_CONTENT_SECTIONS,
  });

  return (
    <Layout>
      {images.map((image) => (
        <ImageHover title={image.title} imageUrl={image.imageUrl} />
      ))}
    </Layout>
  );
};

export default Bio;
