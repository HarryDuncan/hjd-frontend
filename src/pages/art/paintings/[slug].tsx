import ViewItemLayout from "components/layout/ViewItemLayout";
import { ViewItemDetailsContainer } from "components/containers/Containers";
import { ContentText, MainTitle } from "components/text/Text";
import { ART_ROOT_URL } from "constants/art.constants";
import { usePaintingData } from "hooks/art/usePaintingData";
import { useScrollPaintings } from "hooks/art/useScrollPaintings";
import { Direction } from "../../../../utils/helpers/moveThroughArray";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import SlideWithBackgroundTransition from "components/animations/page-transitions/SlideWithBackgroundTransition";
import { Icon, IconTypes } from "components/icons/Icons";
import { useIdleTimer } from "hooks/client-hooks/useIdleTimer";
import { IDLE_TIMER } from "constants/ui.constants";

const PaintingDetails = () => {
  const { painting } = usePaintingData();
  const changePainting = useScrollPaintings();
  const handleExit = useHandleExit();
  const [changedDirection, setChangedDirection] = useState<Direction>(
    Direction.FORWARD
  );
  const { isIdle } = useIdleTimer(IDLE_TIMER);
  if (!painting) return null;

  const onChangeItem = (direction: Direction) => {
    setChangedDirection(direction);
    changePainting(direction);
  };

  return (
    <SlideWithBackgroundTransition direction={changedDirection}>
      <ViewItemLayout
        imageUrl={`${ART_ROOT_URL}${painting?.imageUrl}`}
        title={painting?.title}
        onChangeItem={onChangeItem}
      >
        <ViewItemDetailsContainer>
          {!isIdle && (
            <Icon onClick={handleExit} type={IconTypes.EXIT} hasGesture />
          )}

          <Icon
            onClick={onChangeItem}
            type={IconTypes.CHEVRON_LEFT}
            hasGesture
          />
          <Icon
            onClick={onChangeItem}
            type={IconTypes.CHEVRON_RIGHT}
            hasGesture
          />
          <MainTitle $isLight={false}>{painting.title}</MainTitle>

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
        </ViewItemDetailsContainer>
      </ViewItemLayout>
    </SlideWithBackgroundTransition>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/art");
  }, [router]);
};

export default PaintingDetails;
