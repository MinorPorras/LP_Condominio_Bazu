import { useState } from "react";
import { MainNavBarItem } from "./mainNabVarItem.tsx";
import { TAB_INFO } from "../constants/tabs.ts";
import { IconMenu } from "./icons/menu/iconMenu.tsx";
import { IconMenuCollapsed } from "./icons/menu/iconMenuCollapsed.tsx";
import useMainNavBarItem from "../hooks/useSelectedNavBarItem.tsx";
import { useLanguage } from "../hooks/useLanguage.tsx";
import { LanguageSelector } from "./LanguageSelector.tsx";

export function MainNavBar() {
  const { selectedNavBarItem, handleNavbarItemClick } = useMainNavBarItem();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { language, setLanguage } = useLanguage();

  const isSpanish = language === "es";

  const toggleLanguage = () => setLanguage(isSpanish ? "en" : "es");

  const toggleMenu = () => setIsCollapsed((prev) => !prev);

  return (
    <header className={`main-navbar-header ${isCollapsed ? "collapsed" : ""}`}>
      <button
        className="collapse-button"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isCollapsed ? <IconMenu /> : <IconMenuCollapsed />}
      </button>

      <LanguageSelector
        isCollapsed={isCollapsed}
        isSpanish={isSpanish}
        handleToggleLanguage={toggleLanguage}
        className="language-selector"
      />

      <nav className="main-navbar">
        <div className="main-navbar-list">
          {TAB_INFO.map(({ key, anchor, iconComponent }) => (
            <MainNavBarItem
              key={anchor}
              text={isSpanish ? key.es : key.en}
              anchor={anchor}
              selectedItem={selectedNavBarItem}
              handleItemClick={handleNavbarItemClick}
              isCollapsed={isCollapsed}
              IconComponent={iconComponent}
            />
          ))}
        </div>
      </nav>
    </header>
  );
}

export default MainNavBar;
