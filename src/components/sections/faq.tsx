import Accordion from "react-bootstrap/esm/Accordion";
import { FAQ_ITEMS } from "../../constants/faqItems";
import { AccordionFAQItem } from "../AccordionFAQItem";
import { useLanguage } from "../../hooks/useLanguage";

export function Faq() {
  const { language } = useLanguage();

  const sectionTitle =
    language === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions";

  return (
    <>
      <h2 id="faq">{sectionTitle}</h2>
      <section id="faq-section">
        <Accordion defaultActiveKey="0" className="faq-item">
          {FAQ_ITEMS.map((item) => {
            const questionText = item.question[language];
            const answerText = item.answer[language];

            return (
              <AccordionFAQItem
                key={`faq-item-${item.eventKey}`}
                question={questionText || item.question['es']}
                answer={answerText || item.answer['es']}
                eventKey={item.eventKey}
              />
            );
          })}
        </Accordion>
      </section>
    </>
  );
}
