import React, { ReactNode, useState } from "react";
import { SwipeableNavigatorContainer } from "./mobile.styles";
import { Direction } from "utils/moveThroughArray";

interface SwipeablePageNavigatorProps {
  onSwipe: (direction: string) => void;
  children: ReactNode;
}

const SWIPE_THRESHOLD = 50;
const SwipeablePageNavigator = ({
  onSwipe,
  children,
}: SwipeablePageNavigatorProps) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStartX(event.touches[0].clientX);
  };
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (deltaX > SWIPE_THRESHOLD) {
        onSwipe(Direction.REVERSE);
      } else if (deltaX < -SWIPE_THRESHOLD) {
        onSwipe(Direction.FORWARD);
      }
      setTouchStartX(null);
    }
  };

  return (
    <SwipeableNavigatorContainer
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </SwipeableNavigatorContainer>
  );
};

export default SwipeablePageNavigator;
