"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function HistoryTabs() {
  return (
    <section id="historia" className="py-16 md:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Tabs defaultValue="historia" className="w-full">
          <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-3 mb-12 bg-card/50 p-1 h-auto">
            <TabsTrigger value="historia" className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg">
              Nuestra historia
            </TabsTrigger>
            <TabsTrigger value="mision" className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg">
              Misión
            </TabsTrigger>
            <TabsTrigger value="valores" className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg">
              Valores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="historia" className="mt-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Nuestra Historia</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    25 años de experiencia nos ha permitido evolucionar la adopción inteligente de
                    tecnología en un entorno empresarial colombiano. Lo que comenzó como un
                    Reseller especializado evolucionó hasta convertirse en un referente en
                    soluciones tecnológicas para empresas.
                  </p>
                  <p>
                    Ser nombrados <strong className="text-foreground">Apple Authorized Service
                    Provider</strong>, que nos permitió en el 2024 dar un paso clave: ampliamos nuestro
                    portafolio para responder a los nuevos retos del mercado con tres líneas
                    estratégicas: Soluciones Daas, Infraestructura, ciberseguridad y un Centro de
                    Servicio Autorizado de alto nivel.
                  </p>
                  <p>
                    Hoy, MacPower IT Solutions, continúa escribiendo su historia de más de empresas que buscan
                    crecer, innovar y operar con seguridad.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                  <Image
                    src="/images/nosotros/history.jpg"
                    alt="Historia de MacPower"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mision" className="mt-0">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Nuestra Misión</h2>
              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 md:p-12">
                <p className="text-lg text-foreground/90 leading-relaxed text-pretty text-center">
                  Impulsar el crecimiento y la competitividad de las empresas a través de soluciones
                  tecnológicas integrales, seguras y escalables, basadas en el ecosistema Apple y las
                  mejores prácticas de la industria. Somos el aliado estratégico que transforma la
                  tecnología en ventaja competitiva.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="valores" className="mt-0">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">Nuestros Valores</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valores.map((valor, idx) => (
                  <div
                    key={idx}
                    className="bg-card/50 border border-border/50 rounded-xl p-6 hover:border-accent/50 transition-all group"
                  >
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                      {valor.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{valor.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {valor.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

const valores = [
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de mejorar y evolucionar nuestras soluciones tecnológicas.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Excelencia",
    description: "Comprometidos con la más alta calidad en cada proyecto y servicio que entregamos a nuestros clientes.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  },
  {
    title: "Confianza",
    description: "Construimos relaciones duraderas basadas en la transparencia y el cumplimiento de nuestros compromisos.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
  },
  {
    title: "Colaboración",
    description: "Trabajamos en equipo con nuestros clientes y partners para alcanzar objetivos comunes.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    title: "Seguridad",
    description: "Priorizamos la protección de datos y sistemas con las mejores prácticas de ciberseguridad.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Pasión",
    description: "Amor por la tecnología y entusiasmo en cada proyecto que emprendemos con nuestros clientes.",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  },
];
