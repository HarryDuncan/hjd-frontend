import ViewItemLayout from "components/layout/ViewItemLayout";
import {
  ContentContainer,
  ViewItemDetailsContainer,
} from "components/styled-components/Containers";
import { ScrollLeft, ScrollRight } from "components/styled-components/Images";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { ART_ROOT_URL } from "constants/art.constants";
import { SCROLL_LEFT, SCROLL_RIGHT } from "constants/ui.constants";
import { usePaintingData } from "hooks/art/usePaintingData";
import { useScrollPaintings } from "hooks/art/useScrollPaintings";
import { Direction } from "../../../../utils/helpers/moveThroughArray";

const PaintingDetails = () => {
  const { painting } = usePaintingData();
  const changePainting = useScrollPaintings();
  if (!painting) return null;
  return (
    <ViewItemLayout
      imageUrl={`${ART_ROOT_URL}${painting?.imageUrl}`}
      title={painting?.title}
    >
      <ViewItemDetailsContainer>
        <ScrollLeft
          src={SCROLL_LEFT}
          onClick={() => changePainting(Direction.REVERSE)}
        />
        <ScrollRight
          src={SCROLL_RIGHT}
          onClick={() => changePainting(Direction.FORWARD)}
        />
        <MainTitle $isDark>{painting.title}</MainTitle>
        <ContentContainer>
          <ContentText>{painting.description}</ContentText>
          <br />
          <br />
          {painting.medium && <ContentText>{painting.medium}</ContentText>}
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

export default PaintingDetails;
