import { Apple, Shield, Award, Headphones, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustStripProps {
  variant?: "default" | "compact" | "dark";
  className?: string;
}

const trustItems = [
  {
    icon: Award,
    text: "25+ años experiencia",
  },
  {
    icon: Headphones,
    text: "Soporte nacional",
  },
];

export function TrustStrip({ variant = "default", className }: TrustStripProps) {
  if (variant === "compact") {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground", className)}>
        {trustItems.map((item) => (
          <div key={item.text} className="flex items-center gap-1.5">
            <item.icon className={cn("h-4 w-4", item.highlight && "text-primary")} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(
      "rounded-xl border border-border/50 bg-card/50 px-6 py-4",
      variant === "dark" && "bg-secondary/50",
      className
    )}>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {trustItems.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full",
              item.highlight ? "bg-primary/10" : "bg-secondary"
            )}>
              <item.icon className={cn(
                "h-4 w-4",
                item.highlight ? "text-primary" : "text-muted-foreground"
              )} />
            </div>
            <span className={cn(item.highlight && "font-medium text-foreground")}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
