import Accordion from "react-bootstrap/esm/Accordion";
import { FAQ_ITEMS } from "../../constants/faqItems";
import { AccordionFAQItem } from "../AccordionFAQItem";

export function Faq() {
  return (
    <>
      <h2 id="faq-section-title">Preguntas Frecuentes</h2>
      <section id="faq-section">
        <Accordion defaultActiveKey="0" className="faq-item">
          {FAQ_ITEMS.map((item) => {
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
