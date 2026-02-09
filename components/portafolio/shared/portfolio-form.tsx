"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";

export function PortfolioForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = "Nombre requerido";
    if (!formData.company) newErrors.company = "Empresa requerida";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email válido requerido";
    if (!formData.interest) newErrors.interest = "Seleccione una opción";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section id="contacto" className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-12 text-center border border-white/10 shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 shadow-lg shadow-accent/30">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">¡Gracias!</h3>
            <p className="text-lg text-muted-foreground">
              Recibimos tu solicitud. Un asesor te contactará pronto.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Hablemos
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty">Déjanos tus datos para iniciar.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="text-left space-y-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl p-8 md:p-10 lg:p-12 rounded-3xl border border-white/10 shadow-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Empresa</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={errors.company ? "border-red-500" : ""}
              />
              {errors.company && <span className="text-xs text-red-500">{errors.company}</span>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email corporativo</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest">Me interesa</Label>
            <Select onValueChange={(val) => setFormData({ ...formData, interest: val })}>
              <SelectTrigger className={errors.interest ? "border-red-500" : ""}>
                <SelectValue placeholder="Seleccionar solución" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="valor-it">Soluciones IT (Valor IT)</SelectItem>
                <SelectItem value="daas">Soluciones DaaS</SelectItem>
                <SelectItem value="otru">Otro</SelectItem>
              </SelectContent>
            </Select>
            {errors.interest && <span className="text-xs text-red-500">{errors.interest}</span>}
          </div>

          <Button 
            type="submit" 
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:opacity-90 font-semibold text-base py-6 shadow-lg shadow-accent/20 transition-all hover:scale-105" 
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : "Enviar solicitud"}
          </Button>

          <p className="text-center text-sm text-muted-foreground/80 pt-2">
            Usaremos tus datos solo para contactarte sobre tu solicitud.
          </p>
        </form>
      </div>
    </section>
  );
}
