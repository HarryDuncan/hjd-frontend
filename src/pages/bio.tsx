import { BioPage } from "components/bio/Bio.styles";
import { BioSection } from "components/bio/BioSection";

import Layout from "components/layout/DefaultLayout";

import {
  BIO_PAGE_SECTIONS,
  IMAGE_CONTENT_SECTIONS,
} from "constants/bio.constants";

import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";

const Bio: NextPage = () => {
  const { text, images } = useBioPageContent();

  return (
    <Layout>
      <BioPage>
        {images.map((image, index) => (
          <BioSection
            key={`section-${image.id}`}
            image={image}
            text={text[index]}
            index={index}
          />
        ))}
      </BioPage>
    </Layout>
  );
};

function useBioPageContent() {
  const { text, images } = useContentForPage({
    textSelection: BIO_PAGE_SECTIONS,
    imageSelection: IMAGE_CONTENT_SECTIONS,
  });
  text.sort(
    (a, b) =>
      BIO_PAGE_SECTIONS.indexOf(a.title) - BIO_PAGE_SECTIONS.indexOf(b.title)
  );

  images.sort(
    (a, b) =>
      IMAGE_CONTENT_SECTIONS.indexOf(a.title) -
      IMAGE_CONTENT_SECTIONS.indexOf(b.title)
  );
  return { text, images };
}

export default Bio;
