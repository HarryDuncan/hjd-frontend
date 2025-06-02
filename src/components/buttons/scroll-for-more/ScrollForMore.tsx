import styled from "styled-components";
import { useEffect, useState } from "react";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const ScrollForMore = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || hasScrolled) return null;

  return (
    <FloatingButton
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      Scroll for more
    </FloatingButton>
  );
};

export default ScrollForMore;
