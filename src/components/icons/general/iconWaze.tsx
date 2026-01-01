import type { IconProps } from "../../../constants/generalTypes";

export function IconWaze({
  width = 24,
  height = 24,
  className = "",
  color = "#4699c0ff",
}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} stroke={color} width={width} viewBox="0 0 60 60"><g id="SVGRepo_iconCarrier"><path fill="#edeff0ff" d="M16 26a8 8 0 0 1-8 8 12 12 0 0 0 12 12h14a18 18 0 0 0 18-18 18 18 0 0 0-18-18h-2a16 16 0 0 0-16 16"/><path fill="#4699c0ff" d="M34 47.5H20A13.515 13.515 0 0 1 6.5 34 1.5 1.5 0 0 1 8 32.5a6.51 6.51 0 0 0 6.5-6.5A17.52 17.52 0 0 1 32 8.5h2a19.5 19.5 0 0 1 0 39M9.588 35.367A10.516 10.516 0 0 0 20 44.5h14a16.5 16.5 0 0 0 0-33h-2A14.517 14.517 0 0 0 17.5 26a9.516 9.516 0 0 1-7.912 9.367"/><circle cx="20" cy="46" r="4" fill="#feffffff"/><path fill="#58caffff" d="M20 51.5a5.5 5.5 0 1 1 5.5-5.5 5.506 5.506 0 0 1-5.5 5.5m0-8a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5"/><circle cx="28" cy="24" r="2" fill="#7f778c"/><circle cx="40" cy="24" r="2" fill="#7f778c"/><path fill="#7f778c" d="M34 35.5c-4.871 0-7.243-4.632-7.342-4.829a1.5 1.5 0 0 1 2.68-1.348c.023.044 1.668 3.177 4.662 3.177s4.646-3.146 4.661-3.177a1.5 1.5 0 0 1 2.681 1.348c-.099.197-2.471 4.829-7.342 4.829"/><circle cx="40" cy="46" r="4" fill="#f1f3f4"/><path fill="#28daf1ff" d="M40 51.5a5.5 5.5 0 1 1 5.5-5.5 5.507 5.507 0 0 1-5.5 5.5m0-8a2.5 2.5 0 1 0 2.5 2.5 2.5 2.5 0 0 0-2.5-2.5m-32-8a1.5 1.5 0 0 1 0-3 6.51 6.51 0 0 0 6.5-6.5A17.52 17.52 0 0 1 32 8.5a1.5 1.5 0 0 1 0 3A14.517 14.517 0 0 0 17.5 26 9.51 9.51 0 0 1 8 35.5"/></g></svg>
  );
}

export default IconWaze;
