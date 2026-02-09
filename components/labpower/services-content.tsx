import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Wrench, GraduationCap, Users, Briefcase } from "lucide-react";

export function ServicesContent() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Garantías Extendidas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Garantías extendidas Apple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Extiende la protección de tus dispositivos Apple más allá de la garantía original. En LabPower ofrecemos Garantía Extendida Limitada y Garantía Extendida con Daño Accidental, ambas con atención en Centro de Servicio Autorizado Apple, repuestos originales y técnicos certificados.
            </p>
            <p className="text-xl font-semibold text-[#00ffe3] mt-6">
              Más tiempo. Más protección. Más tranquilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl">Garantía Extendida Limitada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Amplía la garantía limitada de Apple por uno, dos o tres años adicionales, manteniendo las mismas condiciones de cobertura y calidad de servicio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <CardTitle className="text-xl">Garantía Extendida con Daño Accidental</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Además de extender la garantía, incluye cobertura ante daños accidentales, brindando mayor protección frente a imprevistos del uso diario.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#00ffe3]/20 bg-card/80">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00ffe3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Centro de Servicio Autorizado Apple</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00ffe3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Atención bajo estándares oficiales de Apple</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00ffe3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Repuestos originales</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00ffe3] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Técnicos certificados por Apple</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic mb-4">
                *Aplican términos y condiciones.
              </p>
              <Button className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold">
                Consultar garantía
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Servicios Profesionales */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Servicios profesionales Apple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              Ofrecemos una experiencia de servicio simple, clara y eficiente, con procesos bien definidos y atención experta. Accede a soluciones tecnológicas confiables respaldadas por repuestos originales, técnicos certificados y los más altos estándares de calidad Apple.
            </p>
            <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
              Nuestro objetivo es que tu tecnología funcione correctamente y sin interrupciones, ya sea para uso personal, educativo o empresarial.
            </p>
          </div>

          <Card className="border-border/50 bg-card/50">
            <CardHeader>
              <CardTitle className="text-xl">¿Qué nos diferencia?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Atención técnica especializada",
                  "Procesos claros y eficientes",
                  "Diagnósticos precisos",
                  "Repuestos originales",
                  "Técnicos certificados",
                  "Estándares oficiales de servicio Apple"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00ffe3] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Servicios Disponibles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-12 text-center">
            Servicios disponibles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Diagnóstico y Soporte */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <Wrench className="h-8 w-8 text-[#00ffe3] mb-2" />
                <CardTitle>Diagnóstico y Soporte</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Diagnósticos técnicos",
                    "Soporte remoto",
                    "Soporte VIP (Ejecutivos)",
                    "Optimización de equipos",
                    "Migración de datos",
                    "Endurecimiento de políticas de seguridad (Hardening)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#00ffe3] mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Mantenimiento y Operación */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <Shield className="h-8 w-8 text-[#00ffe3] mb-2" />
                <CardTitle>Mantenimiento y Operación</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Mantenimientos preventivos",
                    "Programa de préstamo de equipos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#00ffe3] mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Extensiones y Coberturas */}
            <Card className="border-border/50 bg-card/50">
              <CardHeader>
                <Shield className="h-8 w-8 text-[#00ffe3] mb-2" />
                <CardTitle>Extensiones y Coberturas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    "Garantía Extendida Apple",
                    "Garantía por Daño Accidental",
                    "Servicio extendido"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#00ffe3] mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Servicios Gestionados y Empresariales */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Servicios gestionados y empresariales
          </h3>
          <Card className="border-border/50 bg-card/50">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Servicio gestionado",
                  "Bolsa de horas",
                  "Gestión MDM avanzada",
                  "Onboarding empresarial Apple"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-[#00ffe3]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Educación */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Educación
          </h3>
          <Card className="border-border/50 bg-card/50">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Acceso a software educativo",
                  "Punto técnico permanente (In House)",
                  "Plan de adopción educativa Apple",
                  "Evaluación del laboratorio"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-[#00ffe3]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Capacitación y Formación */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Capacitación y formación
          </h3>
          <Card className="border-border/50 bg-card/50">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  "Capacitación técnico–TI",
                  "Capacitación usuario final (Mac Adoption)",
                  "Workshops temáticos"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#00ffe3]" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Centro de Servicio Autorizado */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl mb-4">
              Centro de Servicio Autorizado Apple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-4">
              En LabPower somos Centro de Servicio Autorizado Apple especializado en diagnóstico y reparación certificada de dispositivos Apple. Brindamos atención profesional bajo estándares oficiales, garantizando procesos seguros, trazables y confiables.
            </p>
            <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-4">
              Acompañamos al cliente desde la recepción del equipo hasta su entrega final, asegurando claridad en tiempos, costos y estado del servicio.
            </p>
            <p className="text-base text-foreground max-w-2xl mx-auto">
              Nos distinguimos por trabajar exclusivamente con repuestos originales, herramientas oficiales y técnicos certificados por Apple, priorizando la transparencia, la calidad técnica y la comunicación constante.
            </p>
          </div>

          <Card className="border-[#00ffe3]/20 bg-card/80">
            <CardHeader>
              <CardTitle className="text-xl">Servicios de reparación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Diagnóstico técnico para iPhone, iPad, Mac, Apple Watch y AirPods",
                  "Reparaciones en garantía",
                  "Reparaciones fuera de garantía",
                  "Cambio de batería y pantalla",
                  "Reparación de cámaras, puertos y componentes internos",
                  "Soporte y actualización de software",
                  "Asesoría técnica y revisión previa del equipo"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00ffe3] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold">
                Agendar diagnóstico
              </Button>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
