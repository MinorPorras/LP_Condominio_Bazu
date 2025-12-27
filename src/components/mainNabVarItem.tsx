import type { mainNavbarItem } from "../constants/generalTypes";

export function MainNavBarItem({
  text,
  anchor,
  selectedItem,
  handleItemClick,
  isCollapsed,
  IconComponent,
}: mainNavbarItem) {
  return (
    <a
      onClick={() => handleItemClick(text)}
      id={text}
      href={"#" + anchor}
      className={`main-navbar-item button-64 ${
        selectedItem === text ? "active" : ""
      } ${isCollapsed ? "collapsed" : ""}`}
      aria-current={selectedItem === text ? "page" : undefined}
    >
      <span>
        <IconComponent color="#F9DFD7" className="main-navbar-icon" />
        {text}
      </span>
    </a>
  );
}

export default MainNavBarItem;
