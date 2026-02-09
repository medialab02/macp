"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trackEvent } from "@/lib/analytics";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  interest: string;
  message: string;
}

const companySizes = [
  { value: "1-10", label: "1-10 empleados" },
  { value: "11-50", label: "11-50 empleados" },
  { value: "51-200", label: "51-200 empleados" },
  { value: "201-500", label: "201-500 empleados" },
  { value: "500+", label: "Más de 500 empleados" },
];

const interests = [
  { value: "quote", label: "Cotización de equipos" },
  { value: "mdm", label: "Gestión MDM / ABM" },
  { value: "migration", label: "Migración a Mac" },
  { value: "support", label: "Soporte técnico" },
  { value: "training", label: "Capacitación" },
  { value: "other", label: "Otro" },
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    trackEvent("lead_form_submitted", {
      form_type: "contact_enterprise",
      company_size: data.companySize,
      interest: data.interest,
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo purposes, always succeed
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <div className="bg-card rounded-2xl border border-border p-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Mensaje enviado
        </h3>
        <p className="text-muted-foreground mb-6">
          Gracias por contactarnos. Un asesor se pondrá en contacto contigo en las próximas 24 horas hábiles.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Referencia: #MP-{Date.now().toString(36).toUpperCase()}
        </p>
        <Button 
          onClick={() => setStatus("idle")}
          variant="outline"
          className="border-border bg-transparent"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-8">
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Formulario de contacto
      </h2>
      <p className="text-muted-foreground mb-4">
        Completa el formulario y te responderemos lo antes posible.
      </p>
      
      {/* Response times */}
      <div className="bg-secondary/50 rounded-lg p-4 mb-8 border border-border">
        <p className="text-sm font-medium text-foreground mb-2">Tiempos de respuesta:</p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Primera respuesta: 4 horas hábiles
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Cotización: 24-48 horas
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Seguimiento: 48 horas
          </li>
        </ul>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              placeholder="Tu nombre"
              className="bg-secondary border-border"
              {...register("name", { required: "El nombre es requerido" })}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico *</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@empresa.com"
              className="bg-secondary border-border"
              {...register("email", { 
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone & Company Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+57 300 123 4567"
              className="bg-secondary border-border"
              {...register("phone", { required: "El teléfono es requerido" })}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa *</Label>
            <Input
              id="company"
              placeholder="Nombre de tu empresa"
              className="bg-secondary border-border"
              {...register("company", { required: "La empresa es requerida" })}
            />
            {errors.company && (
              <p className="text-sm text-destructive">{errors.company.message}</p>
            )}
          </div>
        </div>

        {/* Company Size & Interest Row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Tamaño de empresa</Label>
            <Select onValueChange={(value) => setValue("companySize", value)}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                {companySizes.map((size) => (
                  <SelectItem key={size.value} value={size.value}>
                    {size.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>¿En qué te podemos ayudar?</Label>
            <Select onValueChange={(value) => setValue("interest", value)}>
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                {interests.map((interest) => (
                  <SelectItem key={interest.value} value={interest.value}>
                    {interest.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            placeholder="Cuéntanos más sobre tu proyecto o necesidad..."
            className="bg-secondary border-border min-h-32 resize-none"
            {...register("message")}
          />
        </div>

        {/* Error Alert */}
        {status === "error" && (
          <div className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm">Hubo un error al enviar. Por favor intenta de nuevo.</p>
          </div>
        )}

        {/* Submit Button */}
        <Button 
          type="submit" 
          size="lg" 
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Enviar mensaje
            </>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos.
        </p>
      </form>
    </div>
  );
}
