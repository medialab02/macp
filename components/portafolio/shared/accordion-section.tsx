import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface AccordionSectionProps {
  title?: string;
  items: FaqItem[];
  id?: string;
  imageSrc?: string;
}

export function AccordionSection({ title, items, id, imageSrc }: AccordionSectionProps) {
  return (
    <section id={id} className="py-16 md:py-20 lg:py-24">
      <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", imageSrc ? "max-w-7xl" : "max-w-4xl")}>
        {title && (
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground dark:text-foreground">
            {title}
          </h2>
        )}
        
        <div className={cn("grid gap-12 lg:gap-16", imageSrc ? "lg:grid-cols-2 lg:items-center" : "grid-cols-1")}>
          {imageSrc && (
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl lg:order-2">
              <Image 
                src={imageSrc} 
                alt={title || "Section Image"} 
                fill 
                className="object-cover" 
              />
               {/* Decorative glow */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <div className={imageSrc ? "lg:order-1" : ""}>
             <Accordion type="single" collapsible className="w-full space-y-4">
              {items.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-border/50 rounded-2xl px-6 bg-card/50 backdrop-blur-sm data-[state=open]:bg-card data-[state=open]:border-accent/40 transition-all group"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold hover:text-accent transition-colors hover:no-underline py-6 text-balance">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line pb-6 text-pretty">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
