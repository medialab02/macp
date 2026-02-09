"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LeadForm } from "./lead-form";
import { MessageCircle, FileText, X } from "lucide-react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  variant?: "default" | "product";
  productName?: string;
  productId?: string;
}

export function StickyCTA({
  variant = "default",
  productName,
  productId,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormOpen = () => {
    track("leadform_opened", { source: variant, productId });
    setFormOpen(true);
  };

  const handleContactOpen = () => {
    track("contact_advisor_opened", { source: variant, productId });
    setContactOpen(true);
  };

  // Mobile bottom sticky bar
  const MobileCTA = () => (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t-2 border-[rgb(0,255,227)]/20 bg-background/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden shadow-2xl",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Button 
          className="flex-1 bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] hover:from-[rgb(0,235,207)] hover:to-[rgb(0,146,194)] text-black font-bold border-0" 
          asChild
        >
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contactar asesor
          </a>
        </Button>
      </div>
    </div>
  );

  // Desktop floating button - only WhatsApp
  const DesktopCTA = () => (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 hidden transition-all duration-300 lg:block",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <Button 
        size="lg" 
        className="shadow-2xl bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] hover:from-[rgb(0,235,207)] hover:to-[rgb(0,146,194)] text-black font-bold border-0 transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/50" 
        asChild
      >
        <a
          href="https://wa.me/573001234567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Hablar con asesor
        </a>
      </Button>
    </div>
  );

  // WhatsApp floating button (always visible on mobile when CTA is not showing)
  const WhatsAppButton = () => (
    <a
      href="https://wa.me/573001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] text-black shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-cyan-500/50 lg:hidden"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );

  return (
    <>
      <MobileCTA />
      <DesktopCTA />
      {!isVisible && <WhatsAppButton />}
    </>
  );
}
