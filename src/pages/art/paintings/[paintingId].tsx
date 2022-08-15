import ViewItemLayout from "components/layout/ViewItemLayout";
import { ViewItemDetailsContainer } from "components/styled-components/Containers";
import { ContentText, MainTitle } from "components/styled-components/Text";
import { usePaintingData } from "hooks/art/usePaintingData";
import { useRouter } from "next/router";

const rootUrl = "/images/art/";
const PaintingDetails = () => {
  const router = useRouter();
  const paintingId = router.query.paintingId ?? 0;
  const { painting, loading } = usePaintingData(Number(paintingId));
  if (!painting) return null;
  return (
    <ViewItemLayout
      imageUrl={`${rootUrl}${painting?.imageUrl}`}
      title={painting?.title}
    >
      <ViewItemDetailsContainer>
        <MainTitle $isDark={true}>{painting.title}</MainTitle>
        <ContentText>{painting.description}</ContentText>
      </ViewItemDetailsContainer>
    </ViewItemLayout>
  );
};

export default PaintingDetails;
