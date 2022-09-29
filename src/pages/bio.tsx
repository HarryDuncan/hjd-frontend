import { BioPage, TextContainer } from "components/bio/Bio.styles";
import { ImageHover } from "components/images/image-hover";
import Layout from "components/layout/DefaultLayout";
import { InnerContainer } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";

const BIO_PAGE_SECTIONS = ["Artist", "Creative Technologist", "DJ"];
const IMAGE_CONTENT_SECTIONS = [
  "artist",
  "creative-technologist",
  "DJ",
] as string[];

const Bio: NextPage = () => {
  const { text, images } = useBioPageContent();
  return (
    <Layout>
      <BioPage>
        {images.map((image, index) => (
          <InnerContainer $topOffset={0}>
            <ImageHover title={image.title} imageUrl={image.imageUrl} />
            <TextContainer>
              <MainTitle $isDark={false}>{text[index].title}</MainTitle>
              <ContentText>{text[index].content}</ContentText>
            </TextContainer>
          </InnerContainer>
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
