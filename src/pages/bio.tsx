import { BioPage } from "components/bio/Bio.styles";
import { BioSection } from "components/bio/BioSection";

import Layout from "components/layout/DefaultLayout";

import {
  BIO_PAGE_SECTIONS,
  IMAGE_CONTENT_SECTIONS,
} from "constants/bio.constants";

import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";
import { useEffect, useMemo } from "react";
import {
  formatLetter,
  letters,
  onPageScroll,
} from "visuals/visual-configs/bio/letters";

const BIO_LETTERS = ["H", "J", "D"];
const Bio: NextPage = () => {
  const { text, images } = useBioPageContent();
  const bioLetters = useBioLetters();
  useCleanupListeners();
  return (
    <Layout>
      <BioPage>
        {images.map((image, index) => (
          <BioSection
            key={`section-${index}`}
            image={image}
            text={text[index]}
            bioLetters={bioLetters[index]}
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

const useBioLetters = () =>
  useMemo(
    () =>
      BIO_LETTERS.map((char) => {
        const formatSceneData = formatLetter(char);
        return { ...letters, formatSceneData };
      }),
    []
  );

const useCleanupListeners = () => {
  useEffect(() => () => {
    document.removeEventListener("scroll", (event) =>
      onPageScroll(null, event)
    );

    console.log("removed the event listener");
  });
};
export default Bio;
