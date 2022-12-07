import { BioPage, TextContainer } from "components/bio/Bio.styles";
import { ImageHover } from "components/images/image-hover";
import Layout from "components/layout/DefaultLayout";
import { InnerContainer } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import {
  BIO_BANNER_CONFIG,
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
          <InnerContainer $topOffset={0} key={index}>
            <ImageHover
              hoverImageConfig={BIO_BANNER_CONFIG}
              title={image.title}
              imageUrl={image.imageUrl}
            />
            <TextContainer>
              <MainTitle $isLight={true}>{text[index].title}</MainTitle>
              <ContentText $isLight={true}>{text[index].content}</ContentText>
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
