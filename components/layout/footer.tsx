"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Apple, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  apple: {
    title: "Apple",
    links: [
      { name: "Apple para empresas", href: "/mac-para-empresas" },
      { name: "Apple para educación", href: "/apple-educacion" },
      { name: "Catálogo Apple", href: "/mac" },
    ],
  },
  portafolio: {
    title: "Portafolio",
    links: [
      { name: "Soluciones IT", href: "/portafolio/valor-it" },
      { name: "Soluciones DaaS", href: "/portafolio/daas" },
      { name: "LabPower", href: "/labpower" },
    ],
  },
  empresa: {
    title: "Empresa",
    links: [
      { name: "Inicio", href: "/" },
      { name: "Nosotros", href: "/nosotros" },
      { name: "Eventos", href: "/#eventos" },
    ],
  },
  contacto: {
    title: "Contacto",
    links: [
      { name: "Formulario de contacto", href: "/#contacto" },
      { name: "WhatsApp", href: "https://wa.me/573001234567" },
    ],
  },
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/macpower_itsolutions" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/macpower-it-solutions" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/macpoweritsolutions" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/macpower-logo-color.svg"
                alt="MacPower IT Solutions"
                width={200}
                height={40}
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src="/images/macpower-logo-white.svg"
                alt="MacPower IT Solutions"
                width={200}
                height={40}
                className="hidden h-8 w-auto dark:block"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Somos tu aliado para facilitar la inversión de soluciones IT que optimicen los procesos de tu empresa.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Apple className="h-4 w-4" />
              <span>Apple Authorized Reseller</span>
            </div>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-secondary p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year ?? ""} MacPower. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              Privacidad
            </Link>
            <Link href="#" className="hover:text-primary">
              Términos
            </Link>
            <Link href="#" className="hover:text-primary">
              Cookies
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            Diseñado y desarrollado por MacPower
          </p>
        </div>
      </div>
    </footer>
  );
}
