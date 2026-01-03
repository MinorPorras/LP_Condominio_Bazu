import { useState } from "react";

export function useMainNavBarItem() {
  const [selectedNavBarItem, setSelectedNavBarItem] = useState("Home");

  const handleNavbarItemClick = (item: string) => {
    setSelectedNavBarItem(item);
  };

  return {
    selectedNavBarItem,
    handleNavbarItemClick,
  };
}

export default useMainNavBarItem;
