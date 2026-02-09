"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Shield, Settings, Headphones, GraduationCap, Laptop, Monitor, Keyboard, Mouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Product } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";

// Recommended configurations by role
const configurationPresets = [
  {
    id: "developer",
    role: "Desarrollador",
    description: "Para entornos de desarrollo, contenedores y compilación",
    specs: { ram: "24GB", storage: "1TB SSD" },
    recommended: true,
  },
  {
    id: "creative",
    role: "Diseñador / Creativo",
    description: "Para diseño gráfico, video y trabajo multimedia",
    specs: { ram: "32GB", storage: "1TB SSD" },
    recommended: false,
  },
  {
    id: "executive",
    role: "Ejecutivo / Ventas",
    description: "Para productividad, presentaciones y colaboración",
    specs: { ram: "16GB", storage: "512GB SSD" },
    recommended: false,
  },
];

// Recommended services
const recommendedServices = [
  {
    id: "deployment",
    icon: Settings,
    title: "Despliegue Zero-Touch",
    description: "Configuración ABM y MDM incluida",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Soporte Premium",
    description: "Mesa de ayuda dedicada 8x5",
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Capacitación",
    description: "Onboarding para tu equipo",
  },
];

// Compatible accessories mock data
const accessories = [
  {
    id: "acc-1",
    name: "Magic Keyboard con Touch ID",
    category: "Teclado",
    icon: Keyboard,
  },
  {
    id: "acc-2",
    name: "Magic Mouse",
    category: "Mouse",
    icon: Mouse,
  },
  {
    id: "acc-3",
    name: "Studio Display 27\"",
    category: "Monitor",
    icon: Monitor,
  },
  {
    id: "acc-4",
    name: "Adaptador USB-C a HDMI",
    category: "Adaptador",
    icon: Laptop,
  },
];

interface PDPMerchandisingProps {
  product: Product;
}

export function RecommendedConfigs({ product }: PDPMerchandisingProps) {
  const [selectedConfig, setSelectedConfig] = useState<string | null>(null);

  const handleConfigSelect = (configId: string) => {
    setSelectedConfig(configId);
    trackEvent("product_configuration_changed", {
      product_id: product.id,
      config_type: "preset",
      config_value: configId,
    });
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Configuraciones recomendadas
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Presets optimizados según el rol de tu equipo
      </p>

      <div className="space-y-3">
        {configurationPresets.map((config) => (
          <button
            key={config.id}
            onClick={() => handleConfigSelect(config.id)}
            className={`w-full p-4 rounded-lg border text-left transition-all ${
              selectedConfig === config.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground">{config.role}</span>
                  {config.recommended && (
                    <Badge variant="secondary" className="text-xs">Recomendado</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{config.description}</p>
                <div className="flex gap-4 text-xs text-muted-foreground">
                  <span>{config.specs.ram} RAM</span>
                  <span>{config.specs.storage}</span>
                </div>
              </div>
              {selectedConfig === config.id && (
                <Check className="h-5 w-5 text-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function RecommendedServices({ product }: PDPMerchandisingProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Servicios recomendados
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Maximiza el valor de tu inversión con servicios profesionales
      </p>

      <div className="space-y-4">
        {recommendedServices.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{service.title}</p>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <Button 
        variant="outline" 
        className="w-full mt-4 border-border bg-transparent"
        asChild
      >
        <Link href="/contacto-empresas">
          Consultar servicios
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}

export function CompatibleAccessories({ product }: PDPMerchandisingProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Accesorios compatibles
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {accessories.map((acc) => {
          const Icon = acc.icon;
          return (
            <div
              key={acc.id}
              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">{acc.category}</span>
              </div>
              <p className="text-sm font-medium text-foreground line-clamp-2">
                {acc.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AppleCareSection({ product }: PDPMerchandisingProps) {
  return (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20 p-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/20 text-primary">
          <Shield className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Garantías extendidas
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Extiende la protección de tu {product.shortName} hasta 3 años con servicios profesionales y cobertura extendida.
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-center gap-2 text-sm text-foreground">
              <Check className="h-4 w-4 text-primary" />
              Garantía extendida hardware
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <Check className="h-4 w-4 text-primary" />
              2 incidentes de daño accidental/año
            </li>
            <li className="flex items-center gap-2 text-sm text-foreground">
              <Check className="h-4 w-4 text-primary" />
              Soporte técnico prioritario Apple
            </li>
          </ul>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
            Consultar disponibilidad
          </Button>
        </div>
      </div>
    </div>
  );
}



export function PromoApplicable({ product }: PDPMerchandisingProps) {
  // This would check against offers data in real implementation
  const hasPromo = product.badge === "Nuevo" || product.badge === "Recomendado";
  
  if (!hasPromo) return null;

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
      <Badge className="bg-green-500 text-white">Promoción</Badge>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">
          Este producto aplica para descuento por flota
        </p>
        <p className="text-xs text-muted-foreground">
          Compra 10+ unidades y obtén 5% de descuento
        </p>
      </div>
      <Button variant="ghost" size="sm" className="text-primary" asChild>
        <Link href="/#ofertas">Ver detalles</Link>
      </Button>
    </div>
  );
}
