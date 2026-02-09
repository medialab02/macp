import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

interface TabItem {
  value: string;
  label: string;
  bullets: string[];
}

interface TabsSectionProps {
  title?: string;
  items: TabItem[];
}

export function TabsSection({ title, items }: TabsSectionProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {title && (
          <h2 className="mb-12 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance text-foreground">
            {title}
          </h2>
        )}
        <Tabs defaultValue={items[0]?.value} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-muted/20 p-1 mb-8 gap-1">
            {items.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground py-3 rounded-lg transition-all hover:bg-muted/40"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {items.map((item) => (
            <TabsContent key={item.value} value={item.value} className="bg-card/50 p-8 rounded-2xl border border-border/50 mt-0 animate-in fade-in-0 zoom-in-95 duration-200">
               <ul className="grid gap-4 sm:grid-cols-1">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
