import { useCallback, useState } from "react";

export const useActiveNav = () => {
  const [activeNav, updateActiveNav] = useState<string>(
    window.location.pathname
  );

  const handleNavChange = useCallback(
    (link: string) => {
      updateActiveNav(link);
    },
    [updateActiveNav]
  );
  return { handleNavChange, activeNav };
};
