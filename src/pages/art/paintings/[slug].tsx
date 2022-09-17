import ViewItemLayout from "components/layout/ViewItemLayout";
import { ViewItemDetailsContainer } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { ART_ROOT_URL } from "constants/art.constants";
import { usePaintingData } from "hooks/art/usePaintingData";

const PaintingDetails = () => {
  const { painting } = usePaintingData();
  if (!painting) return null;
  return (
    <ViewItemLayout
      imageUrl={`${ART_ROOT_URL}${painting?.imageUrl}`}
      title={painting?.title}
    >
      <ViewItemDetailsContainer>
        <MainTitle $isDark>{painting.title}</MainTitle>
        <ContentText>{painting.description}</ContentText>
        <br />
        {painting.medium && <ContentText>{painting.medium}</ContentText>}
        <br />
        {painting.yearCompleted && (
          <ContentText>Completed in {painting.yearCompleted}</ContentText>
        )}
      </ViewItemDetailsContainer>
    </ViewItemLayout>
  );
};

export default PaintingDetails;
