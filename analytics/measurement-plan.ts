/**
 * MacPower B2B - Measurement Plan
 * 
 * This file defines the complete measurement framework for tracking
 * user behavior and business KPIs across the MacPower B2B site.
 */

// ============================================
// KPIs BY FUNNEL STAGE
// ============================================

export const kpisByStage = {
  awareness: {
    description: "Usuarios conocen MacPower y su propuesta de valor",
    kpis: [
      { name: "Sesiones totales", metric: "sessions", target: "10,000/mes" },
      { name: "Usuarios únicos", metric: "unique_users", target: "7,000/mes" },
      { name: "Páginas vistas", metric: "pageviews", target: "35,000/mes" },
      { name: "Tasa de rebote", metric: "bounce_rate", target: "<45%" },
      { name: "Tiempo en sitio", metric: "avg_session_duration", target: ">2:30" },
    ],
  },
  engagement: {
    description: "Usuarios interactúan activamente con contenido y productos",
    kpis: [
      { name: "Productos vistos/sesión", metric: "products_viewed_per_session", target: ">3" },
      { name: "Uso del buscador", metric: "search_usage_rate", target: ">25%" },
      { name: "Interacción con configurador", metric: "wizard_engagement_rate", target: ">15%" },
      { name: "Comparaciones iniciadas", metric: "comparisons_started", target: ">500/mes" },
      { name: "Descargas de recursos", metric: "resource_downloads", target: ">200/mes" },
    ],
  },
  conversion: {
    description: "Usuarios toman acciones de alto valor (leads)",
    kpis: [
      { name: "Leads generados", metric: "leads_total", target: ">150/mes" },
      { name: "Tasa de conversión", metric: "lead_conversion_rate", target: ">2%" },
      { name: "Cotizaciones solicitadas", metric: "quote_requests", target: ">100/mes" },
      { name: "Llamadas WhatsApp", metric: "whatsapp_clicks", target: ">80/mes" },
      { name: "Formularios completados", metric: "forms_submitted", target: ">120/mes" },
    ],
  },
};

// ============================================
// EVENT DEFINITIONS
// ============================================

export interface EventDefinition {
  name: string;
  description: string;
  properties: Record<string, string>;
  stage: "awareness" | "engagement" | "conversion";
}

export const eventDefinitions: EventDefinition[] = [
  // --- NAVIGATION EVENTS ---
  {
    name: "page_view",
    description: "Usuario visualiza una página",
    properties: {
      page_path: "string - Ruta de la página (/mac, /mac/macbook-pro-m4-14)",
      page_title: "string - Título de la página",
      referrer: "string - Página de origen",
    },
    stage: "awareness",
  },
  {
    name: "search_used",
    description: "Usuario realiza una búsqueda",
    properties: {
      query: "string - Término buscado",
      results_count: "number - Cantidad de resultados",
      has_results: "boolean - Si hubo resultados",
    },
    stage: "engagement",
  },
  {
    name: "search_result_clicked",
    description: "Usuario hace clic en un resultado de búsqueda",
    properties: {
      query: "string - Término buscado",
      product_id: "string - ID del producto clickeado",
      position: "number - Posición en resultados",
    },
    stage: "engagement",
  },

  // --- PRODUCT EVENTS ---
  {
    name: "view_product",
    description: "Usuario visualiza página de detalle de producto",
    properties: {
      product_id: "string - ID del producto",
      product_name: "string - Nombre del producto",
      product_category: "string - Categoría (laptop, desktop)",
      product_price: "number - Precio base",
      chip: "string - Chip del producto (M4, M4 Pro, M4 Max)",
    },
    stage: "engagement",
  },
  {
    name: "product_gallery_interaction",
    description: "Usuario interactúa con galería de imágenes",
    properties: {
      product_id: "string - ID del producto",
      action: "string - Tipo de interacción (thumbnail_click, arrow_click, zoom)",
      image_index: "number - Índice de imagen",
    },
    stage: "engagement",
  },
  {
    name: "product_configuration_changed",
    description: "Usuario cambia configuración de producto",
    properties: {
      product_id: "string - ID del producto",
      config_type: "string - Tipo de config (RAM, Storage)",
      config_value: "string - Valor seleccionado",
      price_delta: "number - Cambio en precio",
    },
    stage: "engagement",
  },

  // --- COMPARISON EVENTS ---
  {
    name: "add_to_compare",
    description: "Usuario agrega producto al comparador",
    properties: {
      product_id: "string - ID del producto",
      product_name: "string - Nombre del producto",
      compare_count: "number - Productos en comparador",
    },
    stage: "engagement",
  },
  {
    name: "comparison_viewed",
    description: "Usuario visualiza página de comparación",
    properties: {
      products_compared: "string[] - IDs de productos comparados",
      products_count: "number - Cantidad de productos",
    },
    stage: "engagement",
  },
  {
    name: "comparison_exported",
    description: "Usuario exporta comparación",
    properties: {
      format: "string - Formato de exportación (pdf, email)",
      products_compared: "string[] - IDs de productos",
    },
    stage: "conversion",
  },

  // --- WIZARD EVENTS ---
  {
    name: "wizard_started",
    description: "Usuario inicia el asistente de selección",
    properties: {
      entry_point: "string - Desde dónde inició (landing, pdp, cta)",
    },
    stage: "engagement",
  },
  {
    name: "wizard_step_completed",
    description: "Usuario completa un paso del wizard",
    properties: {
      step: "number - Número del paso",
      step_name: "string - Nombre del paso (rol, uso, presupuesto)",
      selection: "string - Opción seleccionada",
    },
    stage: "engagement",
  },
  {
    name: "wizard_completed",
    description: "Usuario completa el wizard y ve recomendaciones",
    properties: {
      selections: "object - Todas las selecciones del usuario",
      recommendations_shown: "string[] - IDs de productos recomendados",
    },
    stage: "engagement",
  },
  {
    name: "wizard_recommendation_clicked",
    description: "Usuario hace clic en producto recomendado",
    properties: {
      product_id: "string - ID del producto",
      recommendation_position: "number - Posición en lista",
    },
    stage: "engagement",
  },

  // --- LEAD / CONVERSION EVENTS ---
  {
    name: "lead_form_opened",
    description: "Usuario abre formulario de contacto/cotización",
    properties: {
      form_type: "string - Tipo de formulario (quote, contact, newsletter)",
      source_page: "string - Página desde donde abrió",
      product_context: "string? - ID de producto si aplica",
    },
    stage: "conversion",
  },
  {
    name: "lead_form_submitted",
    description: "Usuario envía formulario exitosamente",
    properties: {
      form_type: "string - Tipo de formulario",
      lead_type: "string - Tipo de lead (hot, warm, cold)",
      company_size: "string? - Tamaño de empresa si se capturó",
      products_interested: "string[]? - Productos de interés",
    },
    stage: "conversion",
  },
  {
    name: "lead_form_error",
    description: "Error al enviar formulario",
    properties: {
      form_type: "string - Tipo de formulario",
      error_type: "string - Tipo de error",
      field_with_error: "string? - Campo con error si aplica",
    },
    stage: "conversion",
  },
  {
    name: "request_quote",
    description: "Usuario solicita cotización desde PDP",
    properties: {
      product_id: "string - ID del producto",
      product_name: "string - Nombre del producto",
      quantity: "number - Cantidad solicitada",
      configuration: "object - Configuración seleccionada",
    },
    stage: "conversion",
  },

  // --- CTA EVENTS ---
  {
    name: "cta_clicked",
    description: "Usuario hace clic en CTA",
    properties: {
      cta_text: "string - Texto del CTA",
      cta_location: "string - Ubicación (header, hero, sticky, footer)",
      cta_type: "string - Tipo (whatsapp, form, phone, calendar)",
      page_path: "string - Página actual",
    },
    stage: "conversion",
  },
  {
    name: "whatsapp_click",
    description: "Usuario hace clic en botón WhatsApp",
    properties: {
      source: "string - Origen del clic (sticky, footer, pdp)",
      page_path: "string - Página actual",
      product_context: "string? - ID de producto si aplica",
    },
    stage: "conversion",
  },
  {
    name: "phone_click",
    description: "Usuario hace clic en número de teléfono",
    properties: {
      source: "string - Origen del clic",
      page_path: "string - Página actual",
    },
    stage: "conversion",
  },

  // --- PROMO EVENTS ---
  {
    name: "promo_viewed",
    description: "Usuario visualiza una promoción",
    properties: {
      promo_id: "string - ID de la promoción",
      promo_name: "string - Nombre de la promoción",
      location: "string - Ubicación (home, landing, pdp)",
    },
    stage: "engagement",
  },
  {
    name: "promo_clicked",
    description: "Usuario hace clic en promoción",
    properties: {
      promo_id: "string - ID de la promoción",
      promo_name: "string - Nombre de la promoción",
      destination: "string - Destino del clic",
    },
    stage: "engagement",
  },

  // --- CONTENT EVENTS ---
  {
    name: "faq_expanded",
    description: "Usuario expande una pregunta FAQ",
    properties: {
      faq_id: "string - ID de la pregunta",
      faq_question: "string - Texto de la pregunta",
      category: "string - Categoría de la FAQ",
    },
    stage: "engagement",
  },
  {
    name: "case_study_clicked",
    description: "Usuario hace clic en caso de éxito",
    properties: {
      case_study_id: "string - ID del caso",
      company: "string - Empresa del caso",
      industry: "string - Industria",
    },
    stage: "engagement",
  },
  {
    name: "blog_post_clicked",
    description: "Usuario hace clic en artículo de blog",
    properties: {
      post_id: "string - ID del post",
      post_title: "string - Título",
      category: "string - Categoría",
    },
    stage: "engagement",
  },
];

// ============================================
// PAGE-SPECIFIC OBJECTIVES
// ============================================

export const pageObjectives = {
  "/": {
    name: "Home",
    primaryObjective: "Generar awareness y dirigir a landing/catálogo",
    secondaryObjectives: [
      "Mostrar credibilidad (testimonios, partners)",
      "Capturar leads via newsletter",
      "Promocionar eventos próximos",
    ],
    keyEvents: ["page_view", "cta_clicked", "promo_viewed", "search_used"],
    conversionGoals: [
      { event: "cta_clicked", target: ">5% de sesiones" },
      { event: "lead_form_submitted", target: ">1% de sesiones" },
    ],
  },
  "/mac-para-empresas": {
    name: "Landing Mac para Empresas",
    primaryObjective: "Educar sobre valor de Mac en empresa y generar leads calificados",
    secondaryObjectives: [
      "Segmentar por audiencia (startup, pyme, enterprise)",
      "Guiar con wizard de selección",
      "Mostrar casos de éxito relevantes",
    ],
    keyEvents: [
      "page_view",
      "wizard_started",
      "wizard_completed",
      "lead_form_opened",
      "promo_viewed",
    ],
    conversionGoals: [
      { event: "wizard_completed", target: ">10% de page views" },
      { event: "lead_form_submitted", target: ">3% de page views" },
    ],
  },
  "/mac": {
    name: "Catálogo Mac",
    primaryObjective: "Facilitar exploración y comparación de productos",
    secondaryObjectives: [
      "Permitir filtrado eficiente",
      "Destacar productos top (merchandising)",
      "Incentivar uso del comparador",
    ],
    keyEvents: [
      "page_view",
      "search_used",
      "view_product",
      "add_to_compare",
      "product_configuration_changed",
    ],
    conversionGoals: [
      { event: "view_product", target: ">60% de sesiones" },
      { event: "add_to_compare", target: ">15% de sesiones" },
    ],
  },
  "/mac/[slug]": {
    name: "PDP - Product Detail Page",
    primaryObjective: "Convencer y generar solicitud de cotización",
    secondaryObjectives: [
      "Permitir configuración personalizada",
      "Mostrar valor enterprise",
      "Cross-sell accesorios y servicios",
    ],
    keyEvents: [
      "view_product",
      "product_configuration_changed",
      "product_gallery_interaction",
      "request_quote",
      "add_to_compare",
      "promo_viewed",
    ],
    conversionGoals: [
      { event: "request_quote", target: ">5% de page views" },
      { event: "whatsapp_click", target: ">3% de page views" },
    ],
  },
  "/comparar": {
    name: "Comparador de Productos",
    primaryObjective: "Facilitar decisión y generar lead calificado",
    secondaryObjectives: [
      "Permitir comparación técnica detallada",
      "Ofrecer exportación para compartir",
      "Conectar con asesor para cerrar",
    ],
    keyEvents: [
      "comparison_viewed",
      "comparison_exported",
      "request_quote",
      "cta_clicked",
    ],
    conversionGoals: [
      { event: "request_quote", target: ">10% de page views" },
      { event: "comparison_exported", target: ">8% de page views" },
    ],
  },
  "/contacto-empresas": {
    name: "Contacto Empresarial",
    primaryObjective: "Capturar lead con información completa",
    secondaryObjectives: [
      "Ofrecer múltiples canales (form, WhatsApp, calendario)",
      "Establecer expectativas de respuesta",
      "Segmentar por necesidad",
    ],
    keyEvents: [
      "page_view",
      "lead_form_opened",
      "lead_form_submitted",
      "whatsapp_click",
      "cta_clicked",
    ],
    conversionGoals: [
      { event: "lead_form_submitted", target: ">25% de page views" },
    ],
  },
};

// ============================================
// SEARCH RANKING RULES (Comments for implementation)
// ============================================

/**
 * SEARCH RANKING RULES
 * 
 * These rules define how search results should be ordered/boosted:
 * 
 * 1. BRAND QUERIES (Apple, Mac, MacPower):
 *    - First result: /mac-para-empresas (brand hub)
 *    - Second: /mac (catalog)
 *    - Then: individual products
 * 
 * 2. PRODUCT LINE QUERIES (MacBook Air, MacBook Pro, iMac, Mac mini):
 *    - First results: Products of that line sorted by popularity
 *    - Boost "Recomendado" and "Popular" badges
 *    - Then: Related content (blog, cases)
 * 
 * 3. CHIP QUERIES (M4, M4 Pro, M4 Max):
 *    - Filter to products with that chip
 *    - Sort by price ascending (entry point first)
 * 
 * 4. USE CASE QUERIES (desarrollo, diseño, video, oficina):
 *    - Match against product.recommendedFor
 *    - Show wizard CTA as first result
 * 
 * 5. EMPTY/NO RESULTS:
 *    - Show category suggestions
 *    - Show popular products
 *    - Show contact CTA
 * 
 * 6. AUTOCOMPLETE BEHAVIOR:
 *    - Show category badge next to results
 *    - Group by: Categories (top), Products, Content
 *    - Max 5 products in autocomplete
 */

export const searchRankingRules = {
  brandQueries: ["apple", "mac", "macpower", "empresa"],
  productLineQueries: ["macbook air", "macbook pro", "imac", "mac mini", "mac studio"],
  chipQueries: ["m4", "m4 pro", "m4 max"],
  useCaseQueries: ["desarrollo", "diseño", "video", "oficina", "ventas", "ejecutivo"],
};

// ============================================
// TRACKING HELPER ENHANCEMENT
// ============================================

export type TrackingEventName = 
  | "page_view"
  | "search_used"
  | "search_result_clicked"
  | "view_product"
  | "product_gallery_interaction"
  | "product_configuration_changed"
  | "add_to_compare"
  | "comparison_viewed"
  | "comparison_exported"
  | "wizard_started"
  | "wizard_step_completed"
  | "wizard_completed"
  | "wizard_recommendation_clicked"
  | "lead_form_opened"
  | "lead_form_submitted"
  | "lead_form_error"
  | "request_quote"
  | "cta_clicked"
  | "whatsapp_click"
  | "phone_click"
  | "promo_viewed"
  | "promo_clicked"
  | "faq_expanded"
  | "case_study_clicked"
  | "blog_post_clicked";
