"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchBar } from "@/components/shared/search-bar";
import {
  Menu,
  ChevronDown,
  Monitor,
  Laptop,
  GraduationCap,
  ShieldCheck,
  Cloud,
  FlaskConical,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Portafolio",
    href: "#",
    children: [
      { name: "Soluciones IT", href: "/portafolio/valor-it", icon: ShieldCheck },
      { name: "Soluciones DaaS", href: "/portafolio/daas", icon: Cloud },
      { name: "LabPower", href: "/labpower", icon: FlaskConical },
    ],
  },
  {
    name: "Apple",
    href: "/apple",
    children: [
      { name: "Apple para empresas", href: "/mac-para-empresas", icon: Laptop },
      { name: "Apple para educación", href: "/apple-educacion", icon: GraduationCap },
      { name: "Catálogo Apple", href: "/mac", icon: Monitor },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isItemActive = (href: string) => {
    if (href === "/" || href === "#") return pathname === href;
    return pathname.startsWith(href);
  };

  const isParentActive = (item: any) => {
    if (item.name === "Portafolio") return pathname.startsWith("/portafolio");
    if (item.children) {
      return item.children.some((child: any) => isItemActive(child.href));
    }
    return isItemActive(item.href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo - color on light, white on dark */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/macpower-logo-color.svg"
            alt="MacPower IT Solutions - Apple Business Partner"
            width={320}
            height={60}
            className="h-10 w-auto dark:hidden"
            priority
          />
          <Image
            src="/images/macpower-logo-white.svg"
            alt="MacPower IT Solutions - Apple Business Partner"
            width={320}
            height={60}
            className="hidden h-10 w-auto dark:block"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground relative transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[rgb(0,255,227)] after:to-[rgb(0,166,214)] after:transition-all after:duration-300 hover:after:w-3/4",
                      isParentActive(item) && "text-[rgb(0,255,227)] font-semibold after:w-3/4"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-black/80 backdrop-blur-md border border-white/10 shadow-xl rounded-xl p-2"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild className="focus:bg-transparent">
                      <Link
                        href={child.href}
                        className={cn(
                          "flex items-center gap-2 cursor-pointer w-full rounded-full px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgb(0,255,227)] hover:to-[rgb(0,166,214)] hover:text-black focus:bg-gradient-to-r focus:from-[rgb(0,255,227)] focus:to-[rgb(0,166,214)] focus:text-black hover:scale-105 hover:shadow-md",
                          mounted && pathname === child.href && "bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] text-black font-semibold"
                        )}
                      >
                        {child.icon && (
                          <child.icon className="h-4 w-4" />
                        )}
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground relative transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[rgb(0,255,227)] after:to-[rgb(0,166,214)] after:transition-all after:duration-300 hover:after:w-3/4",
                  isItemActive(item.href) && "text-[rgb(0,255,227)] font-semibold after:w-3/4"
                )}
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          )}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <SearchBar variant="compact" />
          </div>

          <ThemeToggle />

          <Button
            asChild
            size="sm"
            className="hidden lg:flex bg-gradient-to-r from-[rgb(0,255,227)] to-[rgb(0,166,214)] hover:from-[rgb(0,235,207)] hover:to-[rgb(0,146,194)] text-black font-semibold border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Link href="#contacto">Contáctanos</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-background border-border"
            >
              <div className="flex flex-col gap-4 pt-8">
                <SearchBar variant="full" />
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <>
                          <div className="px-3 py-2 text-base font-medium text-foreground">
                            {item.name}
                          </div>
                          <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-4">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                              >
                                {child.icon && (
                                  <child.icon className="h-4 w-4 text-primary" />
                                )}
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
