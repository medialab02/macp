
import { Hero } from "@/components/portafolio/shared/hero";
import { KPIStrip } from "@/components/portafolio/shared/kpi-strip";
import { FlipCardGrid } from "@/components/portafolio/shared/flip-card-grid";
import { Stepper } from "@/components/portafolio/shared/stepper";
import { AccordionSection } from "@/components/portafolio/shared/accordion-section";
import { MidCTA } from "@/components/portafolio/shared/mid-cta";
import { CTABanner } from "@/components/portafolio/shared/cta-banner";
import { PortfolioForm } from "@/components/portafolio/shared/portfolio-form";
import { ImageHighlight } from "@/components/portafolio/shared/image-highlight";
import { 
  Server, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Scan, 
  Eye, 
  Zap, 
  RotateCcw 
} from "lucide-react";

export const metadata = {
  title: "Soluciones IT (Valor IT) | MacPower",
  description: "Infraestructura robusta + ciberseguridad + continuidad para tu empresa.",
};

const kpis = [
  { value: "+15M USD", label: "Ventas anuales" },
  { value: "+25 años", label: "De experiencia" },
  { value: "+1000", label: "Proyectos ejecutados" },
  { value: "8 Países", label: "Presencia regional" },
];

const itSolutionsExplained = [
  { 
    title: "Soluciones IaaS", 
    icon: <Server className="h-8 w-8" />, 
    frontDescription: "Infraestructura como Servicio para tu negocio.",
    backTitle: "Infrastructure-as-a-Service (IaaS)",
    backDescription: "Infraestructura de TI bajo demanda. Renta servidores, almacenamiento y networking sin comprar hardware físico.",
    backBullets: [
      "Servidores virtuales escalables según tu necesidad",
      "Almacenamiento en la nube con alta disponibilidad",
      "Paga solo por lo que usas, sin inversión inicial",
      "Actualización y mantenimiento incluidos",
      "Acceso remoto seguro desde cualquier lugar"
    ]
  },
  { 
    title: "Ciber Recuperación", 
    icon: <RotateCcw className="h-8 w-8" />, 
    frontDescription: "Protección ante ataques y recuperación rápida de datos.",
    backTitle: "¿Qué es Ciber Recuperación?",
    backDescription: "Sistemas diseñados para recuperar tus datos y operaciones después de un ciberataque, como ransomware o brechas de seguridad.",
    backBullets: [
      "Backups inmutables que no pueden ser cifrados por ransomware",
      "Recuperación rápida de datos críticos en minutos",
      "Bóveda de datos aislada de tu red principal",
      "Plan de continuidad del negocio automatizado",
      "Pruebas regulares de recuperación ante desastres"
    ]
  },
  { 
    title: "Ciber Protección", 
    icon: <ShieldCheck className="h-8 w-8" />, 
    frontDescription: "Defensa multicapa contra amenazas digitales.",
    backTitle: "Protección Integral de Ciberseguridad",
    backDescription: "Sistema de seguridad proactivo que protege tus datos y sistemas antes, durante y después de un ataque.",
    backBullets: [
      "Antivirus y antimalware de última generación",
      "Firewall y detección de intrusiones (IDS/IPS)",
      "Protección de endpoints (computadores y móviles)",
      "Cifrado de datos en reposo y en tránsito",
      "Monitoreo continuo de vulnerabilidades"
    ]
  },
  { 
    title: "Soluciones SOC", 
    icon: <Activity className="h-8 w-8" />, 
    frontDescription: "Centro de operaciones de seguridad monitoreando 24/7.",
    backTitle: "Security Operations Center (SOC)",
    backDescription: "Equipo de expertos en seguridad monitoreando tu infraestructura 24/7 para detectar y responder a amenazas en tiempo real.",
    backBullets: [
      "Monitoreo continuo 24/7/365 por especialistas",
      "Detección temprana de amenazas y comportamientos anómalos",
      "Respuesta inmediata a incidentes de seguridad",
      "Análisis de logs y correlación de eventos (SIEM)",
      "Reportes detallados de seguridad y cumplimiento normativo"
    ]
  },
];

const uenFeatures = [
  { title: "Soluciones IaaS", icon: <Server className="h-8 w-8" />, description: "Infraestructura escalable y segura." },
  { title: "Ciber Recuperación", icon: <RotateCcw className="h-8 w-8" />, description: "Resiliencia ante desastres." },
  { title: "Ciber Protección", icon: <ShieldCheck className="h-8 w-8" />, description: "Defensa proactiva de datos." },
  { title: "Soluciones SOC", icon: <Activity className="h-8 w-8" />, description: "Centro de operaciones de seguridad." },
];

const nistSteps = [
  { title: "Identify", description: "Identificamos activos críticos, evaluamos riesgos y vulnerabilidades en tu infraestructura para entender tu postura de seguridad actual." },
  { title: "Protect", description: "Implementamos controles de seguridad, políticas de acceso y capacitación para prevenir incidentes antes de que ocurran." },
  { title: "Detect", description: "Monitoreamos continuamente tu infraestructura 24/7 para detectar anomalías, amenazas y comportamientos sospechosos en tiempo real." },
  { title: "Respond", description: "Activamos protocolos de respuesta inmediata ante incidentes, contenemos amenazas y minimizamos el impacto en tu operación." },
  { title: "Recover", description: "Restauramos servicios, recuperamos datos afectados y mejoramos defensas para prevenir futuros incidentes similares." },
];

const socUseCases = [
  { 
    question: "Protección contra Ransomware", 
    answer: "Detectamos patrones de cifrado anómalos y comportamientos sospechosos en tiempo real. Nuestro SOC bloquea ataques de ransomware antes de que paralicen tu operación.\n\n✓ Detección de actividad de cifrado masivo\n✓ Aislamiento automático de dispositivos comprometidos\n✓ Respuesta inmediata en menos de 15 minutos\n✓ Análisis forense post-incidente\n✓ Recuperación coordinada con Ciber Recuperación" 
  },
  { 
    question: "Suplantación de Marca e Identidad (Phishing)", 
    answer: "Monitoreamos la web superficial y profunda (dark web) para detectar uso no autorizado de tu marca, dominios similares fraudulentos y credenciales comprometidas.\n\n✓ Escaneo de dominios falsos que imitan tu marca\n✓ Monitoreo de dark web para credenciales filtradas\n✓ Detección de campañas de phishing dirigidas\n✓ Alertas inmediatas de amenazas de suplantación\n✓ Acciones legales y takedown de sitios fraudulentos" 
  },
  { 
    question: "Detección de Intrusiones y Accesos no Autorizados", 
    answer: "Identificamos intentos de acceso no autorizado, movimientos laterales dentro de tu red y exfiltración de datos antes de que causen daño.\n\n✓ Monitoreo de intentos de login fallidos y brute force\n✓ Detección de privilegios elevados anormales\n✓ Alertas de acceso desde ubicaciones geográficas inusuales\n✓ Análisis de comportamiento de usuarios (UBA)\n✓ Respuesta automática con bloqueo de cuentas comprometidas" 
  },
  { 
    question: "Cumplimiento Normativo y Auditorías", 
    answer: "Ayudamos a cumplir con regulaciones como ISO 27001, NIST, PCI-DSS y regulaciones locales mediante monitoreo continuo y reportes detallados.\n\n✓ Reportes automáticos de cumplimiento normativo\n✓ Auditoría de logs y trazabilidad completa\n✓ Documentación lista para inspecciones\n✓ Alertas de eventos que requieren reporte obligatorio\n✓ Dashboard ejecutivo con métricas de seguridad" 
  },
];

const faqs = [
  { question: "¿Qué incluye el servicio SOC?", answer: "Incluye monitoreo 24/7, detección de amenazas, respuesta a incidentes y reportes periódicos de seguridad." },
  { question: "¿Cuáles son los tiempos de respuesta?", answer: "Nuestros SLAs garantizan respuesta inicial en menos de 15 minutos para incidentes críticos." },
  { question: "¿Cómo iniciamos?", answer: "Comenzamos con un diagnóstico de seguridad para identificar brechas y diseñar una estrategia a medida." },
  { question: "¿Se integra con mi infraestructura actual?", answer: "Sí, nuestras soluciones son agnósticas y se integran con entornos on-premise y nube." },
];

export default function ValorITPage() {
  return (
    <div className="valor-it-theme">
      <Hero
        title="Soluciones IT (Valor IT)"
        subtitle="Infraestructura robusta + ciberseguridad + continuidad."
        primaryCtaText="Hablar con un asesor"
        primaryCtaHref="#contacto"
        secondaryCtaText="Solicitar propuesta"
        secondaryCtaHref="#contacto"
        imageSrc="/images/portafolio/valor-it/hero.jpg"
      />
      
      <FlipCardGrid 
        title="Nuestras Soluciones IT Explicadas"
        subtitle="Click en cada tarjeta para entender cómo estas tecnologías protegen tu negocio"
        features={itSolutionsExplained} 
        columns={4} 
      />
      
      <Stepper 
        title="Estrategia de Ciberseguridad (NIST)" 
        steps={nistSteps} 
      />

      <AccordionSection 
        title="Casos de Uso: ¿Cómo te protege nuestro SOC?" 
        items={socUseCases}
      />

      <MidCTA 
        title="Tu camino a la seguridad total"
        ctaText="Hablar con un asesor"
        ctaHref="#contacto"
        steps={[
          { label: "Diagnóstico" },
          { label: "Propuesta" },
          { label: "Implementación" },
        ]}
      />

      <ImageHighlight 
        imageSrc="/images/portafolio/valor-it/banner.jpg"
        text="Seguridad y eficiencia sin compromisos."
      />

      <AccordionSection 
        title="Preguntas frecuentes" 
        items={faqs} 
      />

      <CTABanner 
        title="Protege tu empresa hoy"
        subtitle="No esperes a un incidente para tomar acción."
        ctaText="Hablar con un asesor"
        ctaHref="#contacto"
      />

      <PortfolioForm />
    </div>
  );
}
