import { BioPage, TextContainer } from "components/bio/Bio.styles";
import { ParallaxImage } from "components/images";
import Layout from "components/layout/DefaultLayout";
import { InnerContainer } from "components/styled-components/Containers";
import { ContentText } from "components/styled-components/Text";
import { TextScroller } from "components/text-scroller/TextScroller";
import {
  BIO_PAGE_SECTIONS,
  IMAGE_CONTENT_SECTIONS,
} from "constants/bio.constants";
import {
  BANNER_IMAGE_HOVER_CONFIG,
  MAIN_GALLERY_TOP_OFFSET,
} from "constants/ui.constants";
import { useContentForPage } from "hooks/content/useContentForPage";
import type { NextPage } from "next";
import { DynamicInteractiveScene } from "visuals/interactive-scene/DynamicInteractiveScene";
import { h } from "visuals/visual-configs/bio/h";

const Bio: NextPage = () => {
  const { text, images } = useBioPageContent();
  return (
    <Layout>
      <BioPage>
        {images.map((image, index) => (
          <InnerContainer $topOffset={0} key={index}>
            <ParallaxImage
              hoverImageConfig={BANNER_IMAGE_HOVER_CONFIG}
              imageTitle="shop-header"
              imageUrl={image.imageUrl ?? ""}
              imageHeightPx={MAIN_GALLERY_TOP_OFFSET}
            >
              <TextScroller text={` ${text[index].title} `} />
            </ParallaxImage>
            <TextContainer>
              <ContentText>{text[index].content}</ContentText>
            </TextContainer>
            <DynamicInteractiveScene parameters={h} />
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
