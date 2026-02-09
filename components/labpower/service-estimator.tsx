"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Smartphone, Tablet, ChevronRight, ChevronLeft, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type DeviceType = "MacBook" | "iPhone" | "iPad" | null;
type IssueType = "Hardware" | "Software" | null;
type ComponentType = "Screen" | "Keyboard" | "Battery" | "Sound" | "Charging Port" | "Other" | null;

interface PricingData {
  device: DeviceType;
  component: ComponentType;
  partCost: number;
  laborCost: number;
}

const pricingTable: PricingData[] = [
  { device: "MacBook", component: "Screen", partCost: 350, laborCost: 50 },
  { device: "MacBook", component: "Keyboard", partCost: 200, laborCost: 40 },
  { device: "MacBook", component: "Battery", partCost: 150, laborCost: 30 },
  { device: "MacBook", component: "Sound", partCost: 100, laborCost: 40 },
  { device: "MacBook", component: "Charging Port", partCost: 120, laborCost: 35 },
  { device: "MacBook", component: "Other", partCost: 180, laborCost: 50 },
  { device: "iPhone", component: "Screen", partCost: 180, laborCost: 30 },
  { device: "iPhone", component: "Battery", partCost: 80, laborCost: 20 },
  { device: "iPhone", component: "Sound", partCost: 60, laborCost: 25 },
  { device: "iPhone", component: "Charging Port", partCost: 70, laborCost: 25 },
  { device: "iPhone", component: "Other", partCost: 100, laborCost: 30 },
  { device: "iPad", component: "Screen", partCost: 250, laborCost: 40 },
  { device: "iPad", component: "Battery", partCost: 120, laborCost: 25 },
  { device: "iPad", component: "Sound", partCost: 80, laborCost: 30 },
  { device: "iPad", component: "Charging Port", partCost: 90, laborCost: 25 },
  { device: "iPad", component: "Other", partCost: 130, laborCost: 35 },
];

const commonIssues: Record<ComponentType | "default", string[]> = {
  Screen: ["Pantalla no enciende", "Pantalla rota o agrietada", "Líneas o píxeles muertos", "Manchas en pantalla"],
  Keyboard: ["Teclas no responden", "Teclas pegajosas", "Agua derramada", "Tecla rota"],
  Battery: ["Batería se descarga rápido", "No carga", "Batería hinchada", "Apagones inesperados"],
  Sound: ["Sin sonido", "Audio distorsionado", "Micrófono no funciona", "Volumen bajo"],
  "Charging Port": ["No carga", "Cable se desconecta", "Puerto flojo", "Puerto dañado"],
  Other: ["Problema no listado", "Múltiples fallas", "Diagnóstico requerido"],
  default: [],
};

export function ServiceEstimator() {
  const [step, setStep] = useState(1);
  const [device, setDevice] = useState<DeviceType>(null);
  const [issueType, setIssueType] = useState<IssueType>(null);
  const [component, setComponent] = useState<ComponentType>(null);
  const [selectedIssue, setSelectedIssue] = useState<string>("");

  const resetEstimator = () => {
    setStep(1);
    setDevice(null);
    setIssueType(null);
    setComponent(null);
    setSelectedIssue("");
  };

  const getEstimate = (): { partCost: number; laborCost: number; total: number } | null => {
    if (!device || !component) return null;
    const pricing = pricingTable.find(p => p.device === device && p.component === component);
    if (!pricing) return null;
    return {
      partCost: pricing.partCost,
      laborCost: pricing.laborCost,
      total: pricing.partCost + pricing.laborCost,
    };
  };

  const openWhatsApp = () => {
    const estimate = getEstimate();
    const message = `Hola, quisiera cotizar un servicio:\n- Dispositivo: ${device}\n- Componente: ${component}\n- Problema: ${selectedIssue}\n- Estimado: $${estimate?.total} USD`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573002345678?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="service-estimator" className="py-16 md:py-20 lg:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Estimador de Servicio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Obtén una estimación aproximada del costo de reparación
          </p>
        </div>

        <Card className="bg-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Paso {step} de {issueType === "Software" ? 2 : component ? 5 : 3}</CardTitle>
              {step > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (step === 5) setStep(4);
                    else if (step === 4) setStep(3);
                    else if (step === 3) setStep(2);
                    else if (step === 2) setStep(1);
                  }}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Atrás
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Device Type */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Selecciona tu dispositivo</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { name: "MacBook", icon: Laptop },
                    { name: "iPhone", icon: Smartphone },
                    { name: "iPad", icon: Tablet },
                  ].map(({ name, icon: Icon }) => (
                    <Card
                      key={name}
                      className={cn(
                        "cursor-pointer transition-all hover:scale-105 hover:border-accent/50",
                        device === name && "border-accent bg-accent/5"
                      )}
                      onClick={() => {
                        setDevice(name as DeviceType);
                        setStep(2);
                      }}
                    >
                      <CardContent className="pt-6 pb-6 flex flex-col items-center gap-3">
                        <Icon className="h-12 w-12 text-accent" />
                        <span className="font-semibold text-lg">{name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Issue Type */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">¿Qué tipo de problema tienes?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Hardware", "Software"].map((type) => (
                    <Card
                      key={type}
                      className={cn(
                        "cursor-pointer transition-all hover:scale-105 hover:border-accent/50",
                        issueType === type && "border-accent bg-accent/5"
                      )}
                      onClick={() => {
                        setIssueType(type as IssueType);
                        if (type === "Software") {
                          setStep(6); // Software message step
                        } else {
                          setStep(3);
                        }
                      }}
                    >
                      <CardContent className="pt-6 pb-6 text-center">
                        <span className="font-semibold text-lg">{type}</span>
                        <p className="text-sm text-muted-foreground mt-2">
                          {type === "Hardware" ? "Problemas físicos o componentes" : "Problemas de sistema operativo"}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Software Message */}
            {step === 6 && issueType === "Software" && (
              <div className="space-y-6 text-center">
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <p className="text-lg mb-4">
                    Los problemas de software se revisan directamente con un asesor
                  </p>
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground"
                    onClick={() => window.open('https://wa.me/573002345678?text=Hola, necesito ayuda con un problema de software', '_blank')}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Hablar por WhatsApp
                  </Button>
                </div>
                <Button variant="outline" onClick={resetEstimator}>
                  Reiniciar estimación
                </Button>
              </div>
            )}

            {/* Step 3: Component Selection */}
            {step === 3 && issueType === "Hardware" && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">¿Qué componente está afectado?</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Screen", "Keyboard", "Battery", "Sound", "Charging Port", "Other"].map((comp) => (
                    <Card
                      key={comp}
                      className={cn(
                        "cursor-pointer transition-all hover:scale-105 hover:border-accent/50",
                        component === comp && "border-accent bg-accent/5"
                      )}
                      onClick={() => {
                        setComponent(comp as ComponentType);
                        setStep(4);
                      }}
                    >
                      <CardContent className="pt-4 pb-4 text-center">
                        <span className="font-medium text-sm">{comp === "Charging Port" ? "Puerto de Carga" : comp === "Screen" ? "Pantalla" : comp === "Keyboard" ? "Teclado" : comp === "Battery" ? "Batería" : comp === "Sound" ? "Sonido" : "Otro"}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Common Issues */}
            {step === 4 && component && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">¿Cuál es el problema específico?</h3>
                <p className="text-sm text-muted-foreground">
                  Esta selección nos ayuda a entender mejor tu caso, pero no afecta el precio estimado
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {(commonIssues[component] || commonIssues.default).map((issue) => (
                    <Card
                      key={issue}
                      className={cn(
                        "cursor-pointer transition-all hover:border-accent/50",
                        selectedIssue === issue && "border-accent bg-accent/5"
                      )}
                      onClick={() => {
                        setSelectedIssue(issue);
                        setStep(5);
                      }}
                    >
                      <CardContent className="py-4">
                        <span className="text-sm">{issue}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Estimate Display */}
            {step === 5 && (() => {
              const estimate = getEstimate();
              return estimate ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Costo Estimado</h3>
                    <Badge variant="secondary" className="mb-4">
                      Promoción del mes: descuento en mano de obra
                    </Badge>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Costo de repuesto:</span>
                      <span className="font-semibold text-lg">${estimate.partCost} USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Mano de obra:</span>
                      <span className="font-semibold text-lg">${estimate.laborCost} USD</span>
                    </div>
                    <div className="border-t border-accent/20 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xl">Total estimado:</span>
                        <span className="font-bold text-2xl text-accent">${estimate.total} USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                    <p className="leading-relaxed">
                      Este valor es un estimado promedio. El costo final puede variar según diagnóstico técnico, estado del equipo y validaciones del fabricante. La cotización final se entrega después de la revisión física del dispositivo.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="flex-1 bg-accent text-accent-foreground"
                      onClick={openWhatsApp}
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Cotizar por WhatsApp
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open('https://wa.me/573002345678', '_blank')}
                    >
                      Hablar con un asesor
                    </Button>
                  </div>

                  <div className="text-center">
                    <Button variant="ghost" size="sm" onClick={resetEstimator}>
                      Hacer una nueva estimación
                    </Button>
                  </div>
                </div>
              ) : null;
            })()}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
