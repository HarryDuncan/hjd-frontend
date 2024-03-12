import { DefaultScene } from "components/animations/scenes/DefaultScene";
import { FloatingCentralContainer } from "components/containers/Containers";
import FullScreenLayout from "layout/FullScreenLayout";
import { ContactContent } from "views/contact/ContactContent";

const Contact = () => {
  return (
    <FullScreenLayout>
      <FloatingCentralContainer>
        <ContactContent />
      </FloatingCentralContainer>
      <DefaultScene />
    </FullScreenLayout>
  );
};

export default Contact;
