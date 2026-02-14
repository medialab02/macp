"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { track } from "@/lib/analytics";

export function FAQSection() {
  const handleExpand = (value: string) => {
    if (value) {
      track("faq_expanded", { faqId: value });
    }
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="text-muted-foreground">
            Respuestas a las dudas más comunes sobre Apple para empresas
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={handleExpand}
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-lg border border-border bg-card/50 px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 rounded-lg border border-border bg-secondary/30 p-6 text-center">
          <p className="mb-2 text-foreground">¿Tienes más preguntas?</p>
          <p className="text-sm text-muted-foreground">
            Nuestro equipo de expertos está listo para ayudarte.{" "}
            <a
              href="mailto:ventas@macpower.com"
              className="text-primary hover:underline"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
