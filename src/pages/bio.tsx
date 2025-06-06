"use client";

import { BioPage } from "views/bio/Bio.styles";
import { BioSection } from "views/bio/BioSection";
import {
  BIO_PAGE_SECTIONS,
  IMAGE_CONTENT_SECTIONS,
} from "views/bio/bio.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";
import Head from "next/head";
import DefaultLayout from "layout/DefaultLayout";
import { Suspense } from "react";
import { SectionLoadingFallback } from "components/loading/fallbacks/section-loading/SectionLoadingFallback";
import ScrollForMore from "components/buttons/scroll-for-more/ScrollForMore";

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
      <DefaultLayout>
        <Suspense fallback={<SectionLoadingFallback />}>
          <ScrollForMore />
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
        </Suspense>
      </DefaultLayout>
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
