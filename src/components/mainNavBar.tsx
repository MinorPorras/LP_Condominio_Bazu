import { useState } from "react";
import { MainNavBarItem } from "./mainNabVarItem.tsx";
import { TAB_ICONS, TABS } from "../constants/tabs.ts";
import { IconMenu } from "./icons/menu/iconMenu.tsx";
import { IconMenuCollapsed } from "./icons/menu/iconMenuCollapsed.tsx";
import { IconHome } from "./icons/menu/iconHome.tsx";
import useMainNavBarItem from "../hooks/useSelectedNavBarItem.tsx";

export function MainNavBar() {
  const { selectedNavBarItem, handleNavbarItemClick } = useMainNavBarItem();

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <header className={`main-navbar-header ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <IconMenu className="Icon-Menu" />
        ) : (
          <IconMenuCollapsed className="Icon-Menu-Collapsed" />
        )}
      </button>
      <nav className="main-navbar">
        <div className="main-navbar-list">
          {TABS.map((tab) => {
            const IconComponent =
              TAB_ICONS.find((icon) => icon.key === tab)?.value || IconHome;
            const anchor =
              TAB_ICONS.find((icon) => icon.key === tab)?.anchor ||
              "home-section";
            return (
              <MainNavBarItem
                key={tab}
                text={tab}
                anchor={anchor}
                selectedItem={selectedNavBarItem}
                handleItemClick={handleNavbarItemClick}
                isCollapsed={isCollapsed}
                IconComponent={IconComponent}
              />
            );
          })}
          <div className="language-selector">
            <p>Español</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavBar;
