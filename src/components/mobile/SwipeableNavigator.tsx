import React, { ReactNode, useState } from "react";
import { Direction } from "../../../utils/helpers/moveThroughArray";

interface SwipeablePageNavigatorProps {
  onSwipe: (direction: Direction) => void;
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
    console.log("touch-start");
  };
  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;
      console.log(deltaX);
      if (deltaX > SWIPE_THRESHOLD) {
        onSwipe(Direction.REVERSE);
      } else if (deltaX < -SWIPE_THRESHOLD) {
        onSwipe(Direction.FORWARD);
      }
      setTouchStartX(null);
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default SwipeablePageNavigator;
