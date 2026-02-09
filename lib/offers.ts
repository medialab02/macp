// B2B Offers and Promotions

export interface Offer {
  id: string;
  title: string;
  description: string;
  validUntil: string;
  discountType: "percentage" | "fixed" | "bundle" | "financing";
  discountValue?: number;
  applicableProducts?: string[]; // Product IDs
  applicableCategories?: ("laptop" | "desktop")[];
  minQuantity?: number;
  terms: string[];
  badge?: string;
  priority: number;
}

export const offers: Offer[] = [
  {
    id: "offer-fleet-10",
    title: "Descuento por Flota 10+",
    description: "Ahorra en pedidos de 10 o más equipos. Descuento escalonado según volumen para renovaciones o nuevos despliegues.",
    validUntil: "2026-03-31",
    discountType: "percentage",
    discountValue: 5,
    minQuantity: 10,
    terms: [
      "Válido para pedidos de 10 o más unidades del mismo modelo",
      "Descuento aplicable sobre precio de lista",
      "No acumulable con otras promociones",
      "Sujeto a disponibilidad de inventario",
      "Requiere cotización formal aprobada",
    ],
    badge: "Empresas",
    priority: 1,
  },
  {
    id: "offer-mdm-free",
    title: "MDM Gratis por 12 Meses",
    description: "Implementación y primer año de gestión MDM incluido con la compra de 5+ equipos Mac.",
    validUntil: "2026-02-28",
    discountType: "bundle",
    minQuantity: 5,
    terms: [
      "Incluye setup inicial y configuración de políticas",
      "Válido para nuevos clientes MDM",
      "Soporte básico incluido durante el periodo",
      "Renovación posterior a precio preferencial",
      "Requiere Apple Business Manager configurado",
    ],
    badge: "Popular",
    priority: 2,
  },
  {
    id: "offer-financing-0",
    title: "Financiamiento 0% a 12 Meses",
    description: "Distribuye tu inversión en cuotas sin intereses. Ideal para empresas que buscan optimizar flujo de caja.",
    validUntil: "2026-04-30",
    discountType: "financing",
    terms: [
      "Sujeto a aprobación crediticia",
      "Aplica para compras mayores a $15.000.000 COP",
      "Requiere documentación empresarial",
      "Tasa 0% con entidad financiera aliada",
      "Desembolso en 5 días hábiles tras aprobación",
    ],
    badge: "Financiamiento",
    priority: 3,
  },
  {
    id: "offer-applecare-bundle",
    title: "AppleCare+ Empresarial -15%",
    description: "Protege tu inversión con cobertura extendida a precio especial para flotas empresariales.",
    validUntil: "2026-03-15",
    discountType: "percentage",
    discountValue: 15,
    minQuantity: 3,
    terms: [
      "Descuento sobre precio de AppleCare+ individual",
      "Aplica para 3 o más equipos",
      "Incluye soporte técnico prioritario",
      "Cobertura por daño accidental (2 incidentes/año)",
      "Gestión centralizada de casos",
    ],
    badge: "Recomendado",
    priority: 4,
  },
  {
    id: "offer-startup-program",
    title: "Programa Startups",
    description: "Condiciones especiales para startups en etapa temprana. Incluye asesoría, descuentos y financiamiento flexible.",
    validUntil: "2026-06-30",
    discountType: "bundle",
    terms: [
      "Para empresas con menos de 3 años de operación",
      "Requiere validación de estado startup",
      "Incluye sesión de consultoría gratuita",
      "Acceso a programa de referidos",
      "Condiciones de pago flexibles",
    ],
    badge: "Startups",
    priority: 5,
  },
];

export function getApplicableOffers(productId?: string, category?: "laptop" | "desktop", quantity?: number): Offer[] {
  return offers
    .filter(offer => {
      // Check product applicability
      if (offer.applicableProducts && productId) {
        if (!offer.applicableProducts.includes(productId)) return false;
      }
      
      // Check category applicability
      if (offer.applicableCategories && category) {
        if (!offer.applicableCategories.includes(category)) return false;
      }
      
      // Check minimum quantity
      if (offer.minQuantity && quantity) {
        if (quantity < offer.minQuantity) return false;
      }
      
      // Check validity date
      const validUntil = new Date(offer.validUntil);
      if (validUntil < new Date()) return false;
      
      return true;
    })
    .sort((a, b) => a.priority - b.priority);
}

export function getActiveOffers(): Offer[] {
  const now = new Date();
  return offers
    .filter(offer => new Date(offer.validUntil) >= now)
    .sort((a, b) => a.priority - b.priority);
}
