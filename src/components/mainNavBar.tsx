import { useState } from "react";
import { MainNavBarItem } from "./mainNabVarItem.tsx";
import { TAB_ICONS, TABS } from "../constants/tabs.ts";
import { IconMenu } from "./icons/menu/iconMenu.tsx";
import { IconMenuCollapsed } from "./icons/menu/iconMenuCollapsed.tsx";
import { IconHome } from "./icons/menu/iconHome.tsx";
import useMainNavBarItem from "../hooks/useSelectedNavBarItem.tsx";
import { useLanguage } from "../hooks/useLanguage.tsx";

export function MainNavBar() {
  const { selectedNavBarItem, handleNavbarItemClick } = useMainNavBarItem();

  const [isCollapsed, setIsCollapsed] = useState(true);

  const { language, setLanguage } = useLanguage();

  const isSpanish = language === "es";

  const handleToggleLanguage = () => {
    const newLang = isSpanish ? "en" : "es";
    setLanguage(newLang);
  };

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
      <div className={`language-selector ${isCollapsed ? "collapsed" : ""}`}>
        <label className="" htmlFor="languageSwitch">
          {isSpanish ? (
            <span className="fi fi-es custom-flag-size"></span>
          ) : (
            <span className="fi fi-us custom-flag-size"></span>
          )}
          <span className="lang-name-text">
            {isSpanish ? "Español" : "English"}
          </span>
        </label>
        <div
          className="form-check form-switch language-switch-container"
          hidden={isCollapsed}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="languageSwitch"
            checked={isSpanish} // Vincula el estado al switch
            onChange={handleToggleLanguage} // Dispara el cambio
          />
        </div>
      </div>
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
        </div>
      </nav>
    </header>
  );
}

export default MainNavBar;
