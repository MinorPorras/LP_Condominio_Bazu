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
      <LanguageSelector
        isCollapsed={isCollapsed}
        isSpanish={isSpanish}
        handleToggleLanguage={handleToggleLanguage}
        className="language-selector"
      />
      <nav className="main-navbar">
        <div className="main-navbar-list">
          {TAB_INFO.map(({ key, anchor, iconComponent }) => (
            <MainNavBarItem
              key={isSpanish ? key.es : key.en}
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
