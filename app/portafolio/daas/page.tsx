
import { DaaSHero } from "@/components/daas/daas-hero";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { FlipCardGrid } from "@/components/portafolio/shared/flip-card-grid";
import { FeatureGrid } from "@/components/portafolio/shared/feature-grid";
import { Stepper } from "@/components/portafolio/shared/stepper";
import { TabsSection } from "@/components/portafolio/shared/tabs-section";
import { AccordionSection } from "@/components/portafolio/shared/accordion-section";
import { CTABanner } from "@/components/portafolio/shared/cta-banner";
import { PortfolioForm } from "@/components/portafolio/shared/portfolio-form";
import { ImageHighlight } from "@/components/portafolio/shared/image-highlight";
import { Globe, DollarSign, Headphones, Clock, Monitor, Laptop } from "lucide-react";

export const metadata = {
  title: "Soluciones DaaS | MacPower",
  description: "Tecnología bajo control, continuidad sin interrupciones.",
};

const kpis = [
  { value: "+15M USD", label: "Ventas anuales" },
  { value: "+25 años", label: "De experiencia" },
  { value: "+1000", label: "Proyectos ejecutados" },
  { value: "8 Países", label: "Presencia regional" },
];

const daasExplanation = [
  { 
    title: "¿Qué es DaaS?", 
    icon: <Monitor className="h-8 w-8" />, 
    frontDescription: "Device-as-a-Service: Tecnología moderna sin inversión inicial.",
    backTitle: "Device-as-a-Service Explicado",
    backDescription: "DaaS significa 'Dispositivo como Servicio'. Es un modelo donde rentas computadores, laptops y equipos tecnológicos en lugar de comprarlos.",
    backBullets: [
      "Pagas una mensualidad fija por cada equipo",
      "Sin inversión inicial de capital (CAPEX)",
      "Incluye mantenimiento, soporte y reemplazo",
      "Renueva tu tecnología cada 2-3 años",
      "Deducible de impuestos como gasto operativo"
    ]
  },
  { 
    title: "Beneficios del Modelo", 
    icon: <Laptop className="h-8 w-8" />, 
    frontDescription: "Más que renta: Un servicio completo de gestión tecnológica.",
    backTitle: "¿Por qué elegir DaaS?",
    backDescription: "El modelo DaaS transforma cómo las empresas gestionan su tecnología, eliminando dolores de cabeza y mejorando la eficiencia.",
    backBullets: [
      "Tecnología siempre actualizada sin obsolescencia",
      "Predictibilidad financiera con pagos mensuales fijos",
      "Sin preocupaciones por reparaciones o fallas",
      "Tu equipo TI se enfoca en proyectos estratégicos",
      "Mejora la satisfacción de empleados con equipos modernos"
    ]
  },
];

const valueProps = [
  { 
    title: "Cobertura", 
    description: "Servicio en +20 ciudades.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-cobertura-648x384px-5kkPkHhPwAsGrGToRhiaB4VLrTByR8.png"
  },
  { 
    title: "Precio", 
    description: "Tarifas competitivas fijas.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-precio-648x384px-STvfPQzphuoDG1v6eZcWWwtZ7Kck9u.png"
  },
  { 
    title: "Soporte", 
    description: "Mesa de ayuda especializada.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-soporte-648x384px-c3yYTy1oXtbCvQuQg3OoYY57MaCBCc.png"
  },
  { 
    title: "Disponibilidad", 
    description: "SLA garantizados.",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-disponibilidad-648x384px-GaIFyvFDgdess5RfATNkBblgWA4HrG.png"
  },
];

const stepperSteps = [
  { title: "Alistamiento", description: "Configuración inicial y personalización." },
  { title: "Migración", description: "Borrado seguro e inventario." },
  { title: "Mantenimiento", description: "Preventivo anual incluido." },
  { title: "Soporte", description: "Reemplazo máx 3 días hábiles." },
];

const benefitsTabs = [
  { 
    value: "financieros", 
    label: "Financieros", 
    bullets: ["Convierte CAPEX en OPEX.", "Canon deducible de renta.", "Sin costos ocultos de mantenimiento."] 
  },
  { 
    value: "operativos", 
    label: "Operativos", 
    bullets: ["Renovación tecnológica programada.", "Estandarización de flota.", "Reducción de carga al equipo TI."] 
  },
  { 
    value: "tributarios", 
    label: "Tributarios", 
    bullets: ["Beneficios fiscales por renta operativa.", "Mejora los índices de liquidez.", "Eficiencia en activos fijos."] 
  },
  { 
    value: "empresa", 
    label: "Empresa", 
    bullets: ["Enfoque en el core de negocio.", "Satisfacción de empleados.", "Continuidad operativa asegurada."] 
  },
];

const terms = [
  { question: "Cuidados del equipo", answer: "El cliente es responsable del buen uso de los equipos. Daños por mal uso, líquidos o golpes no están cubiertos por la garantía estándar." },
  { question: "Responsabilidad del cliente", answer: "Reportar fallas inmediatamente, permitir mantenimientos programados y asegurar los equipos si se requiere movilidad externa." },
  { question: "Condiciones comerciales", answer: "Forma de pago mensual anticipada. Precios en moneda local + IVA. Contratos a 12, 24 o 36 meses. Cancelación anticipada sujeta a penalidad. Devolución de equipos al finalizar el contrato en buen estado." },
];

export default function DaaSPage() {
  return (
    <div className="daas-theme">
      <DaaSHero
        title="Soluciones DaaS"
        subtitle="Tecnología bajo control, continuidad sin interrupciones."
        primaryCtaText="Cotizar DaaS"
        primaryCtaHref="#contacto"
        secondaryCtaText="Hablar con un asesor"
        secondaryCtaHref="#contacto"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner-principal-1500x600px%20%281%29-f2CCjowmxju73CkBC6hqROBDSMvEFQ.png"
      />
      
      <FlipCardGrid 
        title="Entendiendo DaaS"
        subtitle="Click en las tarjetas para descubrir más detalles sobre este modelo de servicio"
        features={daasExplanation} 
        columns={2} 
      />

      <FeatureGrid 
        title="Propuesta de Valor" 
        features={valueProps} 
        columns={4} 
      />
      
      <Stepper 
        title="La renta incluye" 
        steps={stepperSteps} 
      />

      <TabsSection 
        title="Beneficios" 
        items={benefitsTabs} 
      />

      <ImageHighlight 
        imageSrc="/images/portafolio/daas/banner.jpg"
        text="Menos interrupciones. Más control. Mejor previsibilidad."
      />

      <AccordionSection 
        title="Términos y condiciones" 
        items={terms} 
      />

      <CTABanner 
        title="Equipa tu empresa hoy"
        subtitle="Hardware de última generación sin descapitalizarte."
        ctaText="Cotizar DaaS"
        ctaHref="#contacto"
      />

      <PortfolioForm />
    </div>
  );
}
