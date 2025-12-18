export function MainNavBarItem({
  text,
  selectedItem,
  handleItemClick,
  isCollapsed,
  IconComponent,
}: {
  text: string;
  selectedItem: string;
  handleItemClick: (item: string) => void;
  isCollapsed: boolean;
  IconComponent: React.ElementType;
}) {
  return (
    <li
      onClick={() => handleItemClick(text)}
      id={text}
      className={`main-navbar-item ${selectedItem === text ? "active" : ""} ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <IconComponent color="#F9DFD7" className="main-navbar-icon" />
      {text}
    </li>
  );
}

export default MainNavBarItem;
