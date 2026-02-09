"use client";

import React from "react"

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
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  variant?: "default" | "compact" | "inline" | "bant";
  source?: string;
  productId?: string;
  className?: string;
  onSuccess?: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  role: string;
  interest: string;
  message: string;
  // BANT fields
  fullName?: string;
  solution?: string;
  timeline?: string;
  hasBudget?: string;
  howHeard?: string;
  howHeardOther?: string;
}

const companySizes = [
  { value: "1-10", label: "1-10 empleados" },
  { value: "11-50", label: "11-50 empleados" },
  { value: "51-200", label: "51-200 empleados" },
  { value: "201-500", label: "201-500 empleados" },
  { value: "500+", label: "500+ empleados" },
];

const roles = [
  { value: "it", label: "TI / Sistemas" },
  { value: "compras", label: "Compras" },
  { value: "finanzas", label: "Finanzas" },
  { value: "direccion", label: "Dirección General" },
  { value: "otro", label: "Otro" },
];

const interests = [
  { value: "compra", label: "Compra de equipos" },
  { value: "renovacion", label: "Renovación tecnológica" },
  { value: "despliegue", label: "Despliegue y configuración" },
  { value: "soporte", label: "Soporte y mantenimiento" },
  { value: "asesoria", label: "Asesoría general" },
];

const solutions = [
  { value: "venta-apple", label: "Venta y/o renta de Equipos Apple" },
  { value: "venta-multimarca", label: "Venta y/o renta de Equipos Multimarca" },
  { value: "perifericos", label: "Periféricos" },
  { value: "accesorios", label: "Accesorios" },
  { value: "servicio-apple", label: "Centro de Servicio Autorizado / Servicio Técnico Apple" },
  { value: "valor-it", label: "Servicios de Valor IT (IaaS, SOC, Ciberseguridad, Backup empresarial, Consultoría, Servicios Gestionados)" },
  { value: "licenciamiento", label: "Licenciamiento" },
];

const timelines = [
  { value: "q1", label: "Q1 (Ene – Mar)" },
  { value: "q2", label: "Q2 (Abr – Jun)" },
  { value: "q3", label: "Q3 (Jul – Sep)" },
  { value: "q4", label: "Q4 (Oct – Dic)" },
];

const howHeardOptions = [
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "web", label: "Web" },
  { value: "referidos", label: "Familiares y/o amigos" },
  { value: "evento", label: "Evento" },
  { value: "otro", label: "Otro" },
];

export function LeadForm({
  variant = "default",
  source = "general",
  productId,
  className,
  onSuccess,
}: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    companySize: "",
    role: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nombre requerido";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Apellido requerido";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Empresa requerida";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.companySize) {
      newErrors.companySize = "Seleccione tamaño";
    }
    if (!formData.role) {
      newErrors.role = "Seleccione rol";
    }
    if (!formData.interest) {
      newErrors.interest = "Seleccione interés";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    track("leadform_submitted", {
      source,
      productId,
      companySize: formData.companySize,
      interest: formData.interest,
    });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    onSuccess?.();
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-lg bg-card p-8 text-center",
          className
        )}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          Solicitud enviada
        </h3>
        <p className="text-muted-foreground">
          Gracias por contactarnos. Un asesor se comunicará contigo en menos de
          24 horas hábiles.
        </p>
      </div>
    );
  }

  if (variant === "bant") {
    return (
      <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
        <Input
          placeholder="Nombre completo *"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />
        <Input
          placeholder="Email *"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={cn(errors.email && "border-destructive")}
        />
        <Input
          placeholder="Teléfono *"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <Input
          placeholder="Empresa (si aplica)"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
        <Input
          placeholder="Cargo / Rol *"
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
        />
        <Select
          value={formData.solution}
          onValueChange={(v) => handleChange("solution", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="¿Qué solución estás buscando? *" />
          </SelectTrigger>
          <SelectContent>
            {solutions.map((sol) => (
              <SelectItem key={sol.value} value={sol.value}>
                {sol.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={formData.timeline}
          onValueChange={(v) => handleChange("timeline", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="¿En qué periodo deseas implementar la solución? *" />
          </SelectTrigger>
          <SelectContent>
            {timelines.map((time) => (
              <SelectItem key={time.value} value={time.value}>
                {time.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={formData.hasBudget}
          onValueChange={(v) => handleChange("hasBudget", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="¿Cuenta con un presupuesto? *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="si">Sí</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={formData.howHeard}
          onValueChange={(v) => handleChange("howHeard", v)}
        >
          <SelectTrigger>
            <SelectValue placeholder="¿Cómo supiste de nosotros? *" />
          </SelectTrigger>
          <SelectContent>
            {howHeardOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {formData.howHeard === "otro" && (
          <Input
            placeholder="Especifica cómo nos conociste"
            value={formData.howHeardOther}
            onChange={(e) => handleChange("howHeardOther", e.target.value)}
          />
        )}
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 transition-all duration-300" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar solicitud"
          )}
        </Button>
      </form>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Input
              placeholder="Nombre *"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={cn(errors.firstName && "border-destructive")}
            />
          </div>
          <div>
            <Input
              placeholder="Apellido *"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={cn(errors.lastName && "border-destructive")}
            />
          </div>
        </div>
        <Input
          placeholder="Email corporativo *"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={cn(errors.email && "border-destructive")}
        />
        <Input
          placeholder="Empresa *"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className={cn(errors.company && "border-destructive")}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Solicitar cotización"
          )}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre *</Label>
          <Input
            id="firstName"
            placeholder="Tu nombre"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className={cn(errors.firstName && "border-destructive")}
          />
          {errors.firstName && (
            <p className="text-xs text-destructive">{errors.firstName}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Apellido *</Label>
          <Input
            id="lastName"
            placeholder="Tu apellido"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className={cn(errors.lastName && "border-destructive")}
          />
          {errors.lastName && (
            <p className="text-xs text-destructive">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Empresa *</Label>
        <Input
          id="company"
          placeholder="Nombre de tu empresa"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
          className={cn(errors.company && "border-destructive")}
        />
        {errors.company && (
          <p className="text-xs text-destructive">{errors.company}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email corporativo *</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@empresa.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={cn(errors.email && "border-destructive")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+57 300 000 0000"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Tamaño de empresa *</Label>
          <Select
            value={formData.companySize}
            onValueChange={(v) => handleChange("companySize", v)}
          >
            <SelectTrigger
              className={cn(errors.companySize && "border-destructive")}
            >
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {companySizes.map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.companySize && (
            <p className="text-xs text-destructive">{errors.companySize}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Tu rol *</Label>
          <Select
            value={formData.role}
            onValueChange={(v) => handleChange("role", v)}
          >
            <SelectTrigger className={cn(errors.role && "border-destructive")}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role.value} value={role.value}>
                  {role.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.role && (
            <p className="text-xs text-destructive">{errors.role}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Interés principal *</Label>
        <Select
          value={formData.interest}
          onValueChange={(v) => handleChange("interest", v)}
        >
          <SelectTrigger
            className={cn(errors.interest && "border-destructive")}
          >
            <SelectValue placeholder="¿En qué podemos ayudarte?" />
          </SelectTrigger>
          <SelectContent>
            {interests.map((interest) => (
              <SelectItem key={interest.value} value={interest.value}>
                {interest.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.interest && (
          <p className="text-xs text-destructive">{errors.interest}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje (opcional)</Label>
        <Textarea
          id="message"
          placeholder="Cuéntanos más sobre tus necesidades..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando solicitud...
          </>
        ) : (
          "Solicitar cotización"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Al enviar aceptas nuestra{" "}
        <a href="#" className="text-primary hover:underline">
          política de privacidad
        </a>
      </p>
    </form>
  );
}
