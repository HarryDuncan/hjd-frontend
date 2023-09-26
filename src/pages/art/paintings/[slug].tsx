import { ContentText } from "components/text/Text";
import { ART_ROOT_URL } from "constants/art.constants";
import { usePaintingData } from "hooks/art/usePaintingData";
import { useScrollPaintings } from "hooks/art/useScrollPaintings";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SlideWithBackgroundTransition from "components/animations/page-transitions/slide-with-background/SlideWithBackgroundTransition";
import { Direction } from "utils/moveThroughArray";
import Head from "next/head";
import ViewItemLayout from "layout/view-item-layout/ViewItemLayout";

const PaintingDetails = () => {
  const { painting } = usePaintingData();
  const changePainting = useScrollPaintings();
  const handleExit = useHandleExit();
  const [changedDirection, setChangedDirection] = useState<Direction>(
    Direction.FORWARD
  );

  if (!painting) return null;

  const onChangeItem = (direction: Direction) => {
    setChangedDirection(direction);
    changePainting(direction);
  };

  return (
    <>
      <Head>
        <title>Art</title>
        <meta
          name="Painting"
          content="View an original painting by Harry J Dee"
          key="desc"
        />
      </Head>
      <SlideWithBackgroundTransition direction={changedDirection}>
        <ViewItemLayout
          imageUrl={`${ART_ROOT_URL}${painting?.imageUrl}`}
          title={painting?.title}
          onChangeItem={onChangeItem}
          handleExit={handleExit}
        >
          <ContentText>{painting.description}</ContentText>
          <br />
          <br />
          {painting.medium && <ContentText>{painting.medium}</ContentText>}
          <br />
          <br />
          {painting.yearCompleted && (
            <ContentText>Completed in {painting.yearCompleted}</ContentText>
          )}
          <br />
          <br />
          {painting.dimensions && (
            <ContentText>{painting.dimensions}</ContentText>
          )}
        </ViewItemLayout>
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

export default PaintingDetails;
