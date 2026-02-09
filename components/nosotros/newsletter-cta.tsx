"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    alert("¡Gracias por suscribirte!");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a3d] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo nuestras soluciones pueden impulsar tu negocio.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <Button 
            size="lg" 
            className="w-full bg-accent text-accent-foreground hover:opacity-90 rounded-full py-6 text-base font-semibold"
            onClick={() => window.open('https://wa.me/573003003000', '_blank')}
          >
            Text
          </Button>
        </div>

        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-center text-foreground">
            Suscríbete a nuestro newsletter
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-6">
            Recibe las últimas noticias tecnológicas y ofertas exclusivas.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50 border-border/50 focus:border-accent"
            />
            <Button 
              type="submit" 
              className="w-full bg-accent text-accent-foreground hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Suscribirme"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
