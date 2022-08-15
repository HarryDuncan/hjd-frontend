import { DynamicCardGallery } from "components/card-gallery/DynamicGallery";
import Layout from "components/layout/DefaultLayout";
import { ParallaxImage } from "components/images/parallax-image/ParallaxImage";
import { InnerContainer } from "components/styled-components/Containers";
import { useMixesData } from "hooks/mixes/useMixesData";
import { MixItem } from "models/music/types";
import type { NextPage } from "next";
import { useMemo } from "react";

const ROOT_URL = "/images/music/";
const HEADER_HEIGHT_OFFSET = 200;
const Music: NextPage = () => {
  const { mixes } = useMixesData();
  const mixGalleryItems = useMixesInGallery(mixes);
  return (
    <Layout>
      <ParallaxImage mainTitle="Mixes with visuals" />
      <InnerContainer $topOffset={HEADER_HEIGHT_OFFSET}>
        <DynamicCardGallery
          items={mixGalleryItems}
          onClick={() => {
            console.log("tt");
          }}
        />
      </InnerContainer>
    </Layout>
  );
};

function useMixesInGallery(mixes: MixItem[]) {
  return useMemo(() => {
    return mixes.map(({ imageUrl, title }) => ({
      imageUrl: `${ROOT_URL}${imageUrl}`,
      title,
    }));
  }, [mixes]);
}

export default Music;
