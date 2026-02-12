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
import { Checkbox } from "@/components/ui/checkbox";
import { MessageSquare, Mail } from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    solucion: "",
    mensaje: "",
    periodo: "",
    presupuesto: false,
    contacto: "",
  });

  const [showBANT, setShowBANT] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Show BANT fields when empresa is filled
    if (field === "empresa" && typeof value === "string") {
      setShowBANT(value.trim().length > 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0a1f2e] to-[#0f2a3d] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo nuestras soluciones pueden impulsar tu negocio.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-foreground">
                    Nombre Completo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Valentina Daza"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vdaza@macpower.com.co"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* Teléfono y Empresa */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-foreground">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="+57 3013054079"
                    value={formData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-foreground">
                    Empresa
                  </Label>
                  <Input
                    id="empresa"
                    type="text"
                    placeholder="MACPOWER"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange("empresa", e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              {/* BANT Fields - Show only when empresa is filled */}
              {showBANT && (
                <div className="space-y-6 border-t pt-6 border-border">
                  <div className="space-y-2">
                    <Label htmlFor="cargo" className="text-foreground">
                      Cargo
                    </Label>
                    <Input
                      id="cargo"
                      type="text"
                      placeholder="Personal de Compras"
                      value={formData.cargo}
                      onChange={(e) => handleInputChange("cargo", e.target.value)}
                      className="bg-background border-border"
                    />
                  </div>
                </div>
              )}

              {/* Solución */}
              <div className="space-y-2">
                <Label htmlFor="solucion" className="text-foreground">
                  ¿Qué solución estás buscando?
                </Label>
                <Select
                  value={formData.solucion}
                  onValueChange={(value) => handleInputChange("solucion", value)}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Productos Apple" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="productos-apple">Productos Apple</SelectItem>
                    <SelectItem value="soluciones-it">Soluciones IT</SelectItem>
                    <SelectItem value="daas">DaaS</SelectItem>
                    <SelectItem value="labpower">LabPower</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-foreground">
                  ¿Cómo te podemos ayudar? <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="mensaje"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  value={formData.mensaje}
                  onChange={(e) => handleInputChange("mensaje", e.target.value)}
                  required
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>

              {/* BANT - Timeline and Budget */}
              {showBANT && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="periodo" className="text-foreground">
                      ¿En qué periodo piensas implementar la solución?
                    </Label>
                    <Select
                      value={formData.periodo}
                      onValueChange={(value) => handleInputChange("periodo", value)}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Q1 (Ene - Mar)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="q1">Q1 (Ene - Mar)</SelectItem>
                        <SelectItem value="q2">Q2 (Abr - Jun)</SelectItem>
                        <SelectItem value="q3">Q3 (Jul - Sep)</SelectItem>
                        <SelectItem value="q4">Q4 (Oct - Dic)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="presupuesto"
                      checked={formData.presupuesto}
                      onCheckedChange={(checked) =>
                        handleInputChange("presupuesto", checked as boolean)
                      }
                    />
                    <Label
                      htmlFor="presupuesto"
                      className="text-sm font-normal text-foreground cursor-pointer"
                    >
                      ¿Cuenta con Presupuesto?
                    </Label>
                  </div>
                </>
              )}

              {/* Contacto Method */}
              <div className="space-y-2">
                <Label htmlFor="contacto" className="text-foreground">
                  Cómo se contacto con nosotros
                </Label>
                <Select
                  value={formData.contacto}
                  onValueChange={(value) => handleInputChange("contacto", value)}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Web" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web">Web</SelectItem>
                    <SelectItem value="referido">Referido</SelectItem>
                    <SelectItem value="redes-sociales">Redes Sociales</SelectItem>
                    <SelectItem value="evento">Evento</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#84a84c] hover:bg-[#6d8f3d] text-white font-semibold py-6 rounded-full text-base"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </div>

          {/* Contact Options Sidebar */}
          <div className="bg-gradient-to-br from-[#1a4d3a] to-[#0f3528] rounded-2xl p-6 md:p-8 text-white shadow-2xl">
            <div className="space-y-8">
              {/* WhatsApp Section */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Contáctanos por WhatsApp
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/573003003000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-all border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-[#25D366]" />
                      <span className="font-medium">Ventas Corporativas</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/573003003001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-4 transition-all border border-white/20"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-[#25D366]" />
                      <span className="font-medium">Servicio Técnico</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
