import { BioPage } from "views/bio/Bio.styles";
import { BioSection } from "views/bio/BioSection";

import Layout from "components/layout/DefaultLayout";

import {
  BIO_PAGE_SECTIONS,
  IMAGE_CONTENT_SECTIONS,
} from "views/bio/bio.constants";

import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";
import Head from "next/head";

const Bio: NextPage = () => {
  const { text, images } = useBioPageContent();

  return (
    <>
      <Head>
        <title>Bio</title>
        <meta
          name="Harry J Dee bio"
          content="Learn the story and mission of artist and creative technologist Harry J Dee"
          key="desc"
        />
      </Head>
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
    </>
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
