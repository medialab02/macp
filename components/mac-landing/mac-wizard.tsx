"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Users,
  Target,
  RefreshCw,
} from "lucide-react";
import { products } from "@/lib/data";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils"; // Declare the formatPrice variable

const questions = [
  {
    id: "role",
    title: "¿Cuál es el rol principal de los usuarios?",
    icon: Users,
    options: [
      { value: "design", label: "Diseño / Creativos", tags: ["Diseño", "Video", "3D"] },
      { value: "dev", label: "Desarrollo / Ingeniería", tags: ["Dev", "Machine Learning"] },
      { value: "sales", label: "Ventas / Comercial", tags: ["Ventas", "Ejecutivo"] },
      { value: "ops", label: "Operaciones / Admin", tags: ["Operaciones", "Call Center"] },
      { value: "exec", label: "Ejecutivos / Dirección", tags: ["Ejecutivo"] },
    ],
  },
  {
    id: "team",
    title: "¿Cuántas personas necesitan equipos?",
    icon: Users,
    options: [
      { value: "1-10", label: "1 - 10 personas" },
      { value: "11-50", label: "11 - 50 personas" },
      { value: "51-200", label: "51 - 200 personas" },
      { value: "200+", label: "200+ personas" },
    ],
  },
  {
    id: "priority",
    title: "¿Qué es más importante para tu equipo?",
    icon: Target,
    options: [
      { value: "mobility", label: "Movilidad y portabilidad", priceRange: "bajo" },
      { value: "power", label: "Máximo rendimiento", priceRange: "alto" },
      { value: "cost", label: "Mejor relación costo-beneficio", priceRange: "bajo" },
      { value: "security", label: "Seguridad y gestión", priceRange: "medio" },
    ],
  },
];

function getRecommendations(answers: Record<string, string>) {
  const roleOption = questions[0].options.find((o) => o.value === answers.role);
  const priorityOption = questions[2].options.find((o) => o.value === answers.priority);
  
  const tags = roleOption?.tags || [];
  
  let filtered = products.filter((p) =>
    p.recommendedFor.some((r) => tags.includes(r))
  );

  // If priority is mobility, prefer laptops with smaller screens
  if (answers.priority === "mobility") {
    filtered = filtered.sort((a, b) => {
      if (a.category === "laptop" && b.category !== "laptop") return -1;
      if (a.category !== "laptop" && b.category === "laptop") return 1;
      return a.screenSize - b.screenSize;
    });
  }
  
  // If priority is power, prefer higher-end chips
  if (answers.priority === "power") {
    filtered = filtered.sort((a, b) => {
      const chipOrder = ["M4 Max", "M4 Pro", "M4"];
      return chipOrder.indexOf(a.chip) - chipOrder.indexOf(b.chip);
    });
  }

  // If priority is cost, sort by price
  if (answers.priority === "cost") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  }

  // Return top 3
  return filtered.slice(0, 3);
}

export function MacWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[step];
  const recommendations = showResults ? getRecommendations(answers) : [];

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      track("wizard_completed", newAnswers);
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setShowResults(false);
  };

  

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            Recomendador inteligente
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Encuentra el Mac ideal
          </h2>
          <p className="text-muted-foreground">
            Responde 3 preguntas y te recomendaremos los equipos perfectos para tu equipo
          </p>
        </div>

        {/* Progress */}
        {!showResults && (
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm text-muted-foreground">
              <span>Pregunta {step + 1} de {questions.length}</span>
              <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-primary transition-all duration-300"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Question or Results */}
        {showResults ? (
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground">
                Equipos recomendados para ti
              </h3>
              <Button variant="ghost" size="sm" onClick={handleReset}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Reiniciar
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {recommendations.map((product, index) => (
                <Card
                  key={product.id}
                  className={cn(
                    "overflow-hidden border-border/50",
                    index === 0 && "ring-2 ring-primary"
                  )}
                >
                  {index === 0 && (
                    <div className="bg-primary px-4 py-1 text-center text-sm font-medium text-primary-foreground">
                      Mejor opción
                    </div>
                  )}
                  <div className="relative aspect-[4/3] bg-secondary/30">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover p-4"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {product.chip}
                    </Badge>
                    <h4 className="mb-1 font-semibold text-foreground">
                      {product.shortName}
                    </h4>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <Button size="sm" className="w-full" asChild>
                      <Link href={`/mac/${product.slug}`}>
                        Ver detalles
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a las preguntas
              </Button>
            </div>
          </div>
        ) : (
          <Card className="border-border/50 bg-card/50">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <currentQuestion.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {currentQuestion.title}
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      "rounded-lg border border-border p-4 text-left transition-all hover:border-primary hover:bg-primary/5",
                      answers[currentQuestion.id] === option.value &&
                        "border-primary bg-primary/10"
                    )}
                  >
                    <span className="font-medium text-foreground">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {step > 0 && (
                <div className="mt-6">
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Anterior
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
