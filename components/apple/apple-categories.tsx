import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, GraduationCap, ShoppingBag, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "empresas",
    title: "Apple para empresas",
    description: "Soluciones completas para organizaciones: despliegue, gestión MDM, soporte y servicios empresariales.",
    icon: Laptop,
    href: "/mac-para-empresas",
    features: ["Zero-touch deployment", "Gestión MDM", "Soporte dedicado"],
  },
  {
    id: "educacion",
    title: "Apple para educación",
    description: "Tecnología educativa con Apple School Manager, apps especializadas y soporte para instituciones.",
    icon: GraduationCap,
    href: "#",
    features: ["Apple School Manager", "Apps educativas", "Capacitación docente"],
  },
  {
    id: "catalogo",
    title: "Catálogo Apple",
    description: "Explora nuestra selección completa de Mac, iPad, iPhone y accesorios con filtros y comparación.",
    icon: ShoppingBag,
    href: "/mac",
    features: ["Comparar productos", "Filtros avanzados", "Especificaciones completas"],
  },
];

export function AppleCategories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Explora el ecosistema Apple
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Encuentra la solución Apple perfecta para tus necesidades
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group relative overflow-hidden border-border/50 bg-card/50 transition-all hover:border-primary/50 hover:bg-card"
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {category.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="ghost"
                  className="group/btn -ml-2 text-primary"
                  asChild
                >
                  <Link href={category.href}>
                    Explorar
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
