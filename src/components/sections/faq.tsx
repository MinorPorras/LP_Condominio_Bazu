import Accordion from "react-bootstrap/esm/Accordion";
import { FAQ_ITEMS } from "../../constants/faqItems";
import { AccordionFAQItem } from "../AccordionFAQItem";
import { useLanguage } from "../../hooks/useLanguage";
import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
}

export function Faq() {
  const titleRef = useRef(null);
  const { language } = useLanguage();

  const sectionTitle = useMemo(() => {
    return language === "es"
      ? "Preguntas Frecuentes"
      : "Frequently Asked Questions";
  }, [language]);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      const splitText = new SplitText(titleRef.current, {
        type: "words",
      });

      gsap.from(splitText.words, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1,
        },
      });

      return () => {
        splitText.revert();
      };
    },
    { dependencies: [language] }
  );

  return (
    <article className="section-container">
      <h2 id="faq" ref={titleRef} key={language}>
        {sectionTitle}
      </h2>
      <section id="faq-section">
        <Accordion defaultActiveKey="0" className="faq-item">
          {FAQ_ITEMS.map((item) => {
            const questionText = item.question[language];
            const answerText = item.answer[language];

            return (
              <AccordionFAQItem
                key={`faq-item-${item.eventKey}`}
                question={questionText || item.question["es"]}
                answer={answerText || item.answer["es"]}
                eventKey={item.eventKey}
              />
            );
          })}
        </Accordion>
      </section>
    </article>
  );
}
