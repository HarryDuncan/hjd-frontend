import { Footer } from "components/footer/Footer";
import { DynamicNavigation } from "components/navigation/DynamicNavigation";
import { PageContainer } from "components/styled-components/Containers";
import { ReactNode, useEffect, useRef } from "react";

export default function Layout({
  children,
  topPadding = true,
  isError = false,
  hasFooter = true,
}: {
  children: ReactNode;
  isError?: boolean;
  topPadding?: boolean;
  hasFooter?: boolean;
}) {
  const targetRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    console.log(targetRef);
    const handleScroll = () => {
      if (targetRef.current) {
        // Calculate the scroll position of the target div relative to the parent div
        const scrollTop = targetRef.current;
      }
    };

    // Attach the event listener to the target div
    if (targetRef.current) {
      console.log(targetRef.current.scrollTop);
      targetRef.current.addEventListener("scroll", handleScroll);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (targetRef.current) {
        targetRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [targetRef]); // Include width and height to re-calculate on window resize

  return (
    <>
      <DynamicNavigation />
      <PageContainer
        ref={targetRef}
        $topPadding={topPadding}
        className="page-container"
      >
        {isError ?? <p>Oops we are having an issue with our servers</p>}
        {children}
        {hasFooter ?? <Footer />}
      </PageContainer>
    </>
  );
}
