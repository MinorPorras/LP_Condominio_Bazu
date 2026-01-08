import { useState } from "react";

export function useMainNavBarItem() {
  const [selectedNavBarItem, setSelectedNavBarItem] = useState<string>("inicio"); 

  const handleNavbarItemClick = (anchor: string) => {
    setSelectedNavBarItem(anchor);
  };

  return {
    selectedNavBarItem,
    handleNavbarItemClick,
  };
}

export default useMainNavBarItem;