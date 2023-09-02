import { useState, useEffect } from "react";

const DEFAULT_TIME = 10000;
export const useIdleTimer = (timeMiliSeconds = DEFAULT_TIME) => {
  const [isIdle, setIsIdle] = useState(false);

  const idleTimer = setTimeout(() => {
    setIsIdle(true);
  }, timeMiliSeconds);

  const resetIdleTimer = () => {
    clearTimeout(idleTimer);
  };

  const handleUserActivity = () => {
    setIsIdle(false);
    resetIdleTimer();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      clearTimeout(idleTimer);
    };
  }, [timeMiliSeconds, handleUserActivity]);

  return { isIdle };
};
