"use client";

import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import { FloatingCentralContainer } from "components/containers/Containers";
import FullScreenLayout from "layout/FullScreenLayout";
import { Suspense } from "react";
import { DynamicSuccessContent } from "views/shop/checkout/success/DynamicSuccessContent";

const Result = () => {
  return (
    <FullScreenLayout>
      <FloatingCentralContainer>
        <Suspense>
          <DynamicSuccessContent />
        </Suspense>
      </FloatingCentralContainer>
      <DynamicAnimatedScene configId="default-scene" />
    </FullScreenLayout>
  );
};

export default Result;
