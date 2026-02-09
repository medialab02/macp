"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Server,
  ShoppingCart,
  TrendingUp,
  Shield,
  Settings,
  Zap,
  Clock,
  FileCheck,
  Users,
  BarChart3,
  Award,
  Target,
} from "lucide-react";

const audiences = {
  it: {
    title: "Para TI",
    subtitle: "Gestión simplificada y seguridad empresarial",
    icon: Server,
    points: [
      {
        icon: Settings,
        title: "Despliegue automatizado",
        description: "Zero-touch deployment con Apple Business Manager. Los equipos llegan configurados y listos para usar.",
      },
      {
        icon: Shield,
        title: "Seguridad integrada",
        description: "FileVault, Secure Boot y Gatekeeper protegen tus datos. Gestión centralizada de políticas vía MDM.",
      },
      {
        icon: Zap,
        title: "Gestión MDM completa",
        description: "Control total de la flota desde una consola. Actualizaciones, apps y configuraciones remotas.",
      },
    ],
  },
  compras: {
    title: "Para Compras",
    subtitle: "Proceso de adquisición transparente y eficiente",
    icon: ShoppingCart,
    points: [
      {
        icon: Clock,
        title: "Cotización en 24h",
        description: "Respuesta rápida con precios claros, configuraciones detalladas y tiempos de entrega confirmados.",
      },
      {
        icon: FileCheck,
        title: "Documentación completa",
        description: "Facturas, garantías, certificaciones y toda la documentación que tu empresa necesita.",
      },
      {
        icon: Users,
        title: "Atención personalizada",
        description: "Ejecutivo de cuenta dedicado. Un solo punto de contacto para todas tus necesidades.",
      },
    ],
  },
  negocio: {
    title: "Para Negocio",
    subtitle: "ROI comprobado y productividad aumentada",
    icon: TrendingUp,
    points: [
      {
        icon: BarChart3,
        title: "ROI demostrable",
        description: "Menor TCO vs PC. Reducción de tickets de soporte y mayor vida útil de equipos.",
      },
      {
        icon: Award,
        title: "Productividad mejorada",
        description: "Empleados más satisfechos y productivos. Integración perfecta con herramientas empresariales.",
      },
      {
        icon: Target,
        title: "Continuidad operativa",
        description: "Menor downtime, actualizaciones sin interrupciones y soporte prioritario incluido.",
      },
    ],
  },
};

export function AudienceTabs() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soluciones para cada área
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ya sea que trabajes en TI, Compras o lideres el negocio, tenemos respuestas a tus necesidades específicas
          </p>
        </div>

        <Tabs defaultValue="it" className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid w-full grid-cols-3 bg-secondary/50">
            {Object.entries(audiences).map(([key, audience]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <audience.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{audience.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(audiences).map(([key, audience]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {audience.subtitle}
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {audience.points.map((point) => (
                  <Card
                    key={point.title}
                    className="border-border/50 bg-background/50"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <point.icon className="h-6 w-6" />
                      </div>
                      <h4 className="mb-2 font-semibold text-foreground">
                        {point.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {point.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
