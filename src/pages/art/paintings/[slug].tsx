import ViewItemLayout from "components/layout/ViewItemLayout";
import {
  ContentContainer,
  ViewItemDetailsContainer,
} from "components/styled-components/Containers";
import {
  Exit,
  ScrollLeft,
  ScrollRight,
} from "components/styled-components/Images";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { ART_ROOT_URL } from "constants/art.constants";
import { EXIT, SCROLL_LEFT, SCROLL_RIGHT } from "constants/ui.constants";
import { usePaintingData } from "hooks/art/usePaintingData";
import { useScrollPaintings } from "hooks/art/useScrollPaintings";
import { Direction } from "../../../../utils/helpers/moveThroughArray";
import { useRouter } from "next/router";
import { useCallback } from "react";

const PaintingDetails = () => {
  const { painting } = usePaintingData();
  const changePainting = useScrollPaintings();
  const handleExit = useHandleExit();
  if (!painting) return null;
  return (
    <ViewItemLayout
      imageUrl={`${ART_ROOT_URL}${painting?.imageUrl}`}
      title={painting?.title}
    >
      <ViewItemDetailsContainer>
        <Exit src={EXIT} onClick={handleExit} />
        <ScrollLeft
          src={SCROLL_LEFT}
          onClick={() => changePainting(Direction.REVERSE)}
        />
        <ScrollRight
          src={SCROLL_RIGHT}
          onClick={() => changePainting(Direction.FORWARD)}
        />
        <MainTitle $isLight>{painting.title}</MainTitle>
        <ContentContainer>
          <ContentText>{painting.description}</ContentText>
          <br />
          <br />
          {painting.medium && <ContentText>{painting.medium}</ContentText>}
          <br />
          <br />
          {painting.dimensions && (
            <ContentText>{painting.dimensions}</ContentText>
          )}
          <br />
          <br />
          {painting.yearCompleted && (
            <ContentText>Completed in {painting.yearCompleted}</ContentText>
          )}
        </ContentContainer>
      </ViewItemDetailsContainer>
    </ViewItemLayout>
  );
};

const useHandleExit = () => {
  const router = useRouter();
  return useCallback(() => {
    router.push("/art");
  }, [router]);
};

export default PaintingDetails;
