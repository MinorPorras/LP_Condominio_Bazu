import { useGSAP } from "@gsap/react";
import type { ServiceCardItemProps } from "../constants/generalTypes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesCard({
  name,
  IconComponent,
  isLeftAligned,
  imgSrc,
  imgAlt,
}: ServiceCardItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement | HTMLDivElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!iconRef.current || !articleRef.current) return;

      const isLeft = isLeftAligned;
      const iconX = isLeft ? 200 : -200;
      const articleX = isLeft ? -100 : 100;
      const iconStart = isLeft ? "top 70%" : "top 90%";
      const articleStart = "top 90%";

      const tl = gsap.timeline();

      tl.from(iconRef.current, {
        x: iconX,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: iconRef.current,
          start: iconStart,
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      }).from(articleRef.current, {
        x: articleX,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: articleRef.current,
          start: articleStart,
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });
    },
    { scope: containerRef, dependencies: [isLeftAligned] }
  );

  return (
    <div
      className={`services-section-card-container ${
        isLeftAligned ? "left-aligned" : ""
      }`}
      ref={containerRef}
    >
      {imgSrc ? (
        <img
          ref={iconRef as React.RefObject<HTMLImageElement>}
          src={imgSrc}
          className={`services-card-img ${
            isLeftAligned ? "ilustration-animation-icon-left" : "ilustration-animation-icon-right"
          }`}
          alt={imgAlt}
          loading="lazy"
        />
      ) : (
        <div ref={iconRef as React.RefObject<HTMLDivElement>}>
          <IconComponent
            className={`services-card-icon ${
              isLeftAligned ? "ilustration-animation-icon-left" : "ilustration-animation-icon-right"
            }`}
            color="#5e4a55"
          />
        </div>
      )}
      <article
        ref={articleRef}
        className={`services-card ${
          isLeftAligned ? "left-aligned" : ""
        } ${
          isLeftAligned ? "article-animation-left" : "article-animation-right"
        }`}
      >
        <h3 className="services-card-title">
          {imgSrc && (
            <IconComponent
              className="services-card-icon icon-sz-cover-100"
              color="#ffffffff"
            />
          )}
          {name}
        </h3>
      </article>
    </div>
  );
}
