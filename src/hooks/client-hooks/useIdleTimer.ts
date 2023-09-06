import { useState, useEffect, useCallback, useMemo } from "react";

const DEFAULT_TIME = 10000;
export const useIdleTimer = (timeMiliSeconds = DEFAULT_TIME) => {
  const [isIdle, setIsIdle] = useState(false);

  const idleTimer = useMemo(
    () =>
      setTimeout(() => {
        setIsIdle(true);
      }, timeMiliSeconds),
    [timeMiliSeconds]
  );

  const resetIdleTimer = useCallback(() => {
    clearTimeout(idleTimer);
  }, [idleTimer]);

  useEffect(() => {
    const handleUserActivity = () => {
      setIsIdle(false);
      resetIdleTimer();
    };
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);

    resetIdleTimer();

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      clearTimeout(idleTimer);
    };
  }, [timeMiliSeconds, resetIdleTimer, idleTimer]);

  return { isIdle };
};
