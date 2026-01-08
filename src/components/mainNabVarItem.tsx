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
      onClick={() => handleItemClick(anchor)}
      href={"#" + anchor}
      className={`main-navbar-item button-main-style ${
        selectedItem === anchor ? "active" : ""
      } ${isCollapsed ? "collapsed" : ""}`}
      aria-current={selectedItem === anchor ? "page" : undefined}
    >
      <span>
        <IconComponent color="#F9DFD7" className="main-navbar-icon" />
        {text}
      </span>
    </a>
  );
}

export default MainNavBarItem;
