import { useState } from "react";

export const useActiveNav = () => {
  const [activeNav, updateActiveNav] = useState<string>(
    window.location.pathname
  );

  const handleNavChange = (link: string) => {
    updateActiveNav(link);
  };
  return { handleNavChange, activeNav };
};
