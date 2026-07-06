"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqAccordion({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question} className="rounded-[1.25rem] border border-slate-200 bg-white px-5 shadow-sm">
          <AccordionTrigger className="py-5 text-left text-base font-medium text-slate-950">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
