"use client";

import { MessageCircle, Mail, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const options = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Respuesta inmediata en horario laboral",
    action: "Iniciar chat",
    href: "https://wa.me/573001234567?text=Hola,%20me%20interesa%20información%20sobre%20Mac%20para%20empresas",
    highlight: true,
  },
  {
    id: "form",
    icon: Mail,
    title: "Formulario web",
    description: "Respuesta en 24-48 horas hábiles",
    action: "Ver formulario",
    href: "#formulario",
    highlight: false,
  },
];

export function ContactOptions() {
  const handleOptionClick = (optionId: string) => {
    trackEvent("cta_clicked", {
      cta_text: optionId,
      cta_location: "contact_options",
      cta_type: optionId,
      page_path: "/contacto-empresas",
    });
  };

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {options.map((option) => {
        const Icon = option.icon;
        return (
          <a
            key={option.id}
            href={option.href}
            target={option.id === "whatsapp" || option.id === "calendar" ? "_blank" : undefined}
            rel={option.id === "whatsapp" || option.id === "calendar" ? "noopener noreferrer" : undefined}
            onClick={() => handleOptionClick(option.id)}
            className={`group relative flex flex-col items-center p-6 rounded-xl border transition-all text-center ${
              option.highlight
                ? "bg-green-500/10 border-green-500/30 hover:border-green-500/50"
                : "bg-card border-border hover:border-primary/50"
            }`}
          >
            <div className={`mb-3 p-3 rounded-full ${
              option.highlight ? "bg-green-500/20 text-green-500" : "bg-primary/10 text-primary"
            }`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">{option.description}</p>
            <Button 
              variant={option.highlight ? "default" : "outline"}
              size="sm"
              className={option.highlight 
                ? "bg-green-500 text-white hover:bg-green-600" 
                : "border-border bg-transparent hover:bg-secondary"
              }
            >
              {option.action}
            </Button>
          </a>
        );
      })}
    </div>
  );
}
