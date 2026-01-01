import type { IconProps } from "../../../constants/generalTypes";

export function IconFaq({
  width = 24,
  height = 24,
  color = "#000000",
  className,
}: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className={className} height={height} stroke={color} width={width} viewBox="0 0 24 24"><g id="SVGRepo_iconCarrier">{" "}<path d="M17 18.43h-4l-4.45 2.96A.997.997 0 0 1 7 20.56v-2.13c-3 0-5-2-5-5v-6c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5" fill={color} opacity=".4"/>{" "}<path d="M12 12.11c-.41 0-.75-.34-.75-.75v-.21c0-1.16.85-1.73 1.17-1.95.37-.25.49-.42.49-.68 0-.5-.41-.91-.91-.91s-.91.41-.91.91c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.33 1.08-2.41 2.41-2.41s2.41 1.08 2.41 2.41c0 1.14-.84 1.71-1.15 1.92-.39.26-.51.43-.51.71v.21c0 .42-.34.75-.75.75" fill={color}/>{" "}<path d="M12 14.6a.749.749 0 1 1-.002-1.498A.749.749 0 0 1 12 14.6" fill={color}/>{" "}</g></svg>
  );
}

export default IconFaq;