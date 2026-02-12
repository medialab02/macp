"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function PartnersTab() {
  const partners = [
    { name: "Apple", logo: "/images/partners/apple.svg" },
    { name: "Microsoft", logo: "/images/partners/microsoft.svg" },
    { name: "Cisco", logo: "/images/partners/cisco.svg" },
    { name: "Adobe", logo: "/images/partners/adobe.svg" },
    { name: "VMware", logo: "/images/partners/vmware.svg" },
    { name: "Dell", logo: "/images/partners/dell.svg" },
  ];

  const certifications = [
    "Apple Authorized Service Provider",
    "Apple Consultants Network",
    "Microsoft Partner",
    "Cisco Partner",
    "Adobe Solution Partner",
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Tabs defaultValue="partners" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12 bg-card/50 p-1 h-auto">
            <TabsTrigger value="partners" className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg">
              Partners estratégicos
            </TabsTrigger>
            <TabsTrigger value="certifications" className="py-3 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg">
              Certificaciones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="partners" className="mt-0">
            <div className="bg-card/50 border border-border/50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={80}
                      height={40}
                      className="w-full h-auto max-w-[80px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                Aliados Estratégicos y Certificaciones
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                Respaldados por las mejores marcas tecnológicas del mundo
              </p>
              
              <div className="bg-card/50 border border-border/50 rounded-2xl p-8 space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-background/50 rounded-lg border border-border/30 hover:border-accent/50 transition-all"
                  >
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-foreground font-medium">{cert}</span>
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
