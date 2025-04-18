"use client";

import { DynamicAnimatedScene } from "components/animations/scenes/AnimatedScene";
import { FloatingCentralContainer } from "components/containers/Containers";
import FullScreenLayout from "layout/FullScreenLayout";
import { ContactContent } from "views/contact/ContactContent";

const Contact = () => {
  return (
    <FullScreenLayout>
      <FloatingCentralContainer>
        <ContactContent />
      </FloatingCentralContainer>
      <DynamicAnimatedScene configId="default-scene" />
    </FullScreenLayout>
  );
};

export default Contact;
