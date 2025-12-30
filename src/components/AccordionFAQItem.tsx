import type { AccordionFAQItemProps } from "../constants/generalTypes";

export function AccordionFAQItem({ question, answer, isOpen }: AccordionFAQItemProps) {
  return (
    <details name="AccordionFAQ-groups" {...(isOpen ? {open: true} : {})}>
      <summary className="AccordionFAQ-content-summary">{question}</summary>
      <div className="AccordionFAQ-content-panel">
        <p>{answer}</p>
      </div>
    </details>
  );
}
