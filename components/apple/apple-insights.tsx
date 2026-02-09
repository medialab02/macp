"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  Briefcase,
  GraduationCap,
  Zap,
  TrendingUp,
  Shield,
  Accessibility,
  Heart,
  Lock,
  Boxes,
  Settings,
  HeadphonesIcon,
  BookOpen,
  Users,
  Monitor,
  LifeBuoy,
} from "lucide-react";

const insights = {
  personal: {
    title: "Para ti",
    subtitle: "Experiencia Apple para uso personal y profesional",
    icon: User,
    points: [
      {
        icon: Zap,
        title: "Productividad",
        description: "Trabaja más rápido con apps optimizadas y ecosistema integrado.",
      },
      {
        icon: TrendingUp,
        title: "Rendimiento",
        description: "Chips Apple Silicon que superan la competencia en eficiencia.",
      },
      {
        icon: Accessibility,
        title: "Accesibilidad",
        description: "Funciones inclusivas integradas desde el diseño.",
      },
      {
        icon: Heart,
        title: "Salud / bienestar",
        description: "Seguimiento de salud y bienestar desde tu dispositivo.",
      },
    ],
  },
  business: {
    title: "Para tu empresa",
    subtitle: "Implementación y gestión empresarial de dispositivos Apple",
    icon: Briefcase,
    points: [
      {
        icon: Lock,
        title: "Seguridad empresarial",
        description: "Cifrado nativo hardware y software. Protección de datos desde el diseño.",
      },
      {
        icon: Boxes,
        title: "Integración completa",
        description: "Conectividad fluida entre Mac, iPad e iPhone. Todo funciona en conjunto.",
      },
      {
        icon: Settings,
        title: "Gestión MDM y ABM",
        description: "Control centralizado con Apple Business Manager. Inscripción automatizada y distribución de contenido.",
      },
      {
        icon: HeadphonesIcon,
        title: "Implementación y soporte",
        description: "Despliegue zero-touch desde el primer día. Apple ID gestionados y escalabilidad garantizada.",
      },
    ],
  },
  education: {
    title: "Para educación",
    subtitle: "Implementación y gestión de tecnología educativa Apple",
    icon: GraduationCap,
    points: [
      {
        icon: BookOpen,
        title: "Aprendizaje digital",
        description: "Apps educativas integradas. Contenido distribuido de forma centralizada para estudiantes y docentes.",
      },
      {
        icon: Settings,
        title: "Gestión MDM y ASM",
        description: "Apple School Manager para administración unificada. Despliegue automatizado y Apple ID gestionados.",
      },
      {
        icon: Monitor,
        title: "Seguridad escolar",
        description: "Entorno controlado y seguro para estudiantes. Operación ordenada y escalable desde día uno.",
      },
      {
        icon: LifeBuoy,
        title: "Implementación educativa",
        description: "Soporte especializado para instituciones. Capacitación docente y recursos de adopción incluidos.",
      },
    ],
  },
};

export function AppleInsights() {
  return (
    <section className="py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Soluciones para cada necesidad
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Descubre cómo Apple puede transformar tu forma de trabajar, aprender y crear
          </p>
        </div>

        <Tabs defaultValue="personal" className="mx-auto max-w-5xl">
          <TabsList className="mb-8 grid w-full grid-cols-3 bg-secondary/50">
            {Object.entries(insights).map(([key, insight]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <insight.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{insight.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(insights).map(([key, insight]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="mb-6 text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {insight.subtitle}
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {insight.points.map((point) => (
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
