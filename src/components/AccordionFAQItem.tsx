import type { AccordionFAQItemProps } from "../constants/generalTypes";
import Accordion from "react-bootstrap/Accordion";

export function AccordionFAQItem({
  question,
  answer,
  eventKey,
}: AccordionFAQItemProps) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header className="AccordionFAQ-content-summary">
        {question}
      </Accordion.Header>
      <Accordion.Body className="AccordionFAQ-content-panel">
        {answer}
      </Accordion.Body>
    </Accordion.Item>
  );
}
