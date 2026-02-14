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
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Button 
          className="flex-1 bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 shadow-lg transition-all duration-300" 
          asChild
        >
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
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
        className="bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 shadow-lg transition-all duration-300" 
        asChild
      >
        <a
          href="https://wa.me/573001234567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Hablar con asesor
        </a>
      </Button>
    </div>
  );

  // WhatsApp floating button (always visible)
  const WhatsAppButton = () => (
    <a
      href="https://wa.me/573001234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 lg:hidden"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
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
