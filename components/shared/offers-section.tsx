"use client";

import React from "react"

import { useState, useEffect } from "react";
import { ArrowRight, Tag, Clock, X, Check, Gift, CreditCard, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getActiveOffers, type Offer } from "@/lib/offers";
import { trackEvent } from "@/lib/analytics";

const iconMap: Record<string, React.ReactNode> = {
  percentage: <Percent className="h-5 w-5" />,
  fixed: <Tag className="h-5 w-5" />,
  bundle: <Gift className="h-5 w-5" />,
  financing: <CreditCard className="h-5 w-5" />,
};

export function OffersSection() {
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [mounted, setMounted] = useState(false);
  const offers = getActiveOffers().slice(0, 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOfferClick = (offer: Offer) => {
    trackEvent("promo_clicked", { promo_id: offer.id, promo_name: offer.title });
    setSelectedOffer(offer);
  };

  if (offers.length === 0) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4">
            Ofertas Exclusivas
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Ofertas para empresas
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Aprovecha condiciones especiales diseñadas para potenciar la transformación digital de tu negocio
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard 
              key={offer.id} 
              offer={offer} 
              onClick={() => handleOfferClick(offer)} 
            />
          ))}
        </div>
      </div>

      {/* Offer Details Modal */}
      <Dialog open={!!selectedOffer} onOpenChange={() => setSelectedOffer(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {selectedOffer && iconMap[selectedOffer.discountType]}
              </div>
              {selectedOffer?.badge && (
                <Badge variant="secondary">{selectedOffer.badge}</Badge>
              )}
            </div>
            <DialogTitle className="text-xl text-foreground">
              {selectedOffer?.title}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedOffer?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-4">
            {/* Validity */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Válido hasta: {mounted && selectedOffer ? new Date(selectedOffer.validUntil).toLocaleDateString('es-CO', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) : selectedOffer?.validUntil}</span>
            </div>

            {/* Terms */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Términos y condiciones:</p>
              <ul className="space-y-2">
                {selectedOffer?.terms.map((term, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Solicitar esta oferta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="mt-2 text-xs text-center text-muted-foreground">
                Un asesor te contactará para aplicar esta promoción a tu cotización
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function OfferCard({ offer, onClick }: { offer: Offer; onClick: () => void }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format date only on client to avoid hydration mismatch
  const formattedDate = mounted 
    ? new Date(offer.validUntil).toLocaleDateString('es-CO', { month: 'short', day: 'numeric' })
    : offer.validUntil.slice(5); // Fallback to MM-DD format from ISO string

  return (
    <div 
      className="group relative bg-card rounded-xl border border-border p-6 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1"
      onClick={onClick}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      {/* Subtle green-teal glow behind card on hover - BEHIND everything */}
      <div 
        className="absolute -inset-2 -z-10 rounded-xl opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.25) 0%, rgba(14, 165, 233, 0.15) 50%, transparent 70%)'
        }}
      />
      
      {/* Gradient border on hover */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.5) 0%, rgba(14, 165, 233, 0.4) 100%)',
          padding: '1.5px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
      />
      
      {/* Orange accent spark - top right corner on hover */}
      <div 
        className="absolute top-0 right-0 w-24 h-24 rounded-xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at top right, rgba(255, 138, 0, 0.4) 0%, transparent 60%)'
        }}
      />
      
      {/* Enhanced shadow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-20"
        style={{
          boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.15), 0 10px 10px -5px rgba(14, 165, 233, 0.1)'
        }}
      />
      
      {/* Card content wrapper - ensures content stays on top with proper z-index */}
      <div className="relative z-10">
      {/* Badge */}
      {offer.badge && (
        <Badge 
          className="absolute -top-2 right-4 bg-primary text-primary-foreground"
        >
          {offer.badge}
        </Badge>
      )}

      {/* Icon */}
      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit text-primary">
        {iconMap[offer.discountType]}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground dark:text-white dark:group-hover:text-white transition-colors">
        {offer.title}
      </h3>
      <p className="mb-4 text-sm text-muted-foreground dark:text-gray-300 dark:group-hover:text-gray-300 line-clamp-2">
        {offer.description}
      </p>

      {/* Validity */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-gray-400 dark:group-hover:text-gray-400 mb-4">
        <Clock className="h-3 w-3" />
        <span>Hasta {formattedDate}</span>
      </div>

      {/* CTA - with teal accent on hover (only element that changes) */}
      <Button 
        variant="ghost" 
        size="sm" 
        className="p-0 h-auto text-primary hover:bg-transparent transition-colors dark:text-cyan-400 dark:group-hover:text-[#2EAFC7]"
      >
        Ver detalles
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      </div>
    </div>
  );
}
