import { useState } from "react";
import { MainNavBarItem } from "./mainNabVarItem.tsx";
import { TAB_ICONS, TABS } from "../constants.ts";
import { IconMenu } from "./icons/menu/iconMenu.tsx";
import { IconMenuCollapsed } from "./icons/menu/iconMenuCollapsed.tsx";
import { IconHome } from "./icons/menu/iconHome.tsx";

export function MainNavBar() {
  const [selectedNavBarItem, setSelectedNavBarItem] = useState("Home");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleItemClick = (item: string) => {
    setSelectedNavBarItem(item);
  };

  return (
    <header className={`main-navbar-header ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <IconMenu className="Icon-Menu"/> : <IconMenuCollapsed className="Icon-Menu-Collapsed"/>}
      </button>
      <nav className="main-navbar">
        <ul className="main-navbar-list">
          {TABS.map((tab) => {
            const IconComponent = TAB_ICONS[tab] || IconHome;
            return (
              <MainNavBarItem
                key={tab}
                text={tab}
                selectedItem={selectedNavBarItem}
                handleItemClick={handleItemClick}
                isCollapsed={isCollapsed}
                IconComponent={IconComponent}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavBar;
