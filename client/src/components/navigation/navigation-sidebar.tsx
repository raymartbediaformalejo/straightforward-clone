import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const NavigationSidebar = () => {
  const [accordionOpen, setAccordionOpen] = useState("");

  const handleAccordionCollapse = () => {
    setAccordionOpen("");
  };

  const handleAccordionExpand = (value: string) => {
    setAccordionOpen(value);
  };
  return (
    <Accordion type="single">
      <AccordionItem value="item-1" className="">
        <AccordionTrigger className="text-white">
          Is it accessible?
        </AccordionTrigger>
        <AccordionContent className="text-white">
          <Accordion type="single">
            <AccordionItem value="item-1-1">
              <AccordionTrigger className="text-white">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className="text-white">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1-2">
              <AccordionTrigger className="text-white">
                Is it accessible
              </AccordionTrigger>
              <AccordionContent className="text-white">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-white">
          Is it accessible
        </AccordionTrigger>
        <AccordionContent className="text-white">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NavigationSidebar;
