import Accordion from "react-bootstrap/esm/Accordion";
import { FAQ_ITEMS_ES, FAQ_ITEMS_EN } from "../../constants/faqItems";
import { AccordionFAQItem } from "../AccordionFAQItem";
import { useLanguage } from "../../hooks/useLanguage";

export function Faq() {
  const { language } = useLanguage();

  const faqItems = {
    es: FAQ_ITEMS_ES,
    en: FAQ_ITEMS_EN,
  }[language];

  return (
    <>
      <h2 id="faq-section-title">Preguntas Frecuentes</h2>
      <section id="faq-section">
        <Accordion defaultActiveKey="0" className="faq-item">
          {faqItems.map((item) => {
            return (
              <AccordionFAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                eventKey={item.eventKey}
              />
            );
          })}
        </Accordion>
      </section>
    </>
  );
}
