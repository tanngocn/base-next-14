import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ReactElement } from 'react';

export function AccordionCustom({
  items,
}: {
  items: {
    key: string;
    title: string;
    content: ReactElement;
  }[];
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items?.map((item) => (
        <AccordionItem value={item.key} key={item.key}>
          <AccordionTrigger>
            <span className="content-16 uppercase font-[600] ">{item.title}</span>
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
