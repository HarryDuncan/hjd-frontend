import { DefaultScene } from "components/animations/scenes/DefaultScene";
import {
  FloatingCentralContainer,
  OverlayDiv,
} from "components/containers/Containers";
import FullScreenLayout from "layout/FullScreenLayout";
import { Suspense } from "react";
import { DynamicSuccessContent } from "views/shop/checkout/success/DynamicSuccessContent";

const Result = () => {
  return (
    <FullScreenLayout>
      <FloatingCentralContainer>
        <OverlayDiv />
        <Suspense>
          <DynamicSuccessContent />
        </Suspense>
      </FloatingCentralContainer>
      <DefaultScene />
    </FullScreenLayout>
  );
};

export default Result;
