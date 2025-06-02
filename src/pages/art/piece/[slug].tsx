"use client";

import { ContentText } from "components/text/Text";
import { useScrollArt } from "hooks/art/useScrollArt";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SlideWithBackgroundTransition from "components/animations/page-transitions/slide-with-background/SlideWithBackgroundTransition";
import { Direction } from "utils/moveThroughArray";
import Head from "next/head";
import ViewItemLayout from "layout/view-item-layout/ViewItemLayout";
import { useArtItemData } from "hooks/art/useArtItemData";

const ArtDetails = () => {
  const { art } = useArtItemData();
  const changeArt = useScrollArt();
  const handleExit = useHandleExit();
  const [changedDirection, setChangedDirection] = useState<string>(
    Direction.FORWARD
  );

  if (!art) return null;

  const onChangeItem = (direction: string) => {
    setChangedDirection(direction);
    changeArt(direction);
  };

  return (
    <>
      <Head>
        <title>Art</title>
        <meta
          name="Art"
          content="View an original art by Harry J Dee"
          key="desc"
        />
      </Head>
      <SlideWithBackgroundTransition direction={changedDirection}>
        {art && (
          <ViewItemLayout
            title={art?.title ?? ""}
            onChangeItem={onChangeItem}
            handleExit={handleExit}
            imageUrls={art?.imageUrls}
          >
            {art.description && (
              <>
                <ContentText>{art.description}</ContentText>
                <br />
                <br />
              </>
            )}
            {art.medium && (
              <>
                <ContentText>{art.medium}</ContentText>
                <br />
                <br />
              </>
            )}
            {art.yearCompleted && (
              <>
                <ContentText>Completed in {art.yearCompleted}</ContentText>
                <br />
                <br />
              </>
            )}
            {art.dimensions && (
              <>
                <ContentText>{art.dimensions}</ContentText>
                <br />
                <br />
              </>
            )}
          </ViewItemLayout>
        )}
      </SlideWithBackgroundTransition>
    </>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/art");
  }, [router]);
};

export default ArtDetails;
