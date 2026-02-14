// Mock Data for MacPower B2B Site

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: "laptop" | "desktop" | "phone" | "tablet" | "watch" | "speaker";
  chip: string;
  ram: number[];
  storage: number[];
  screenSize: number;
  price: number;
  image: string;
  images: string[];
  badge?: "Nuevo" | "Recomendado" | "Popular";
  inStock: boolean;
  leadTime?: string;
  description: string;
  benefits: string[];
  specs: Record<string, string>;
  recommendedFor: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  quote: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  industry: string;
  logo: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: { metric: string; value: string }[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "general" | "compras" | "soporte" | "seguridad";
}

export interface Event {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  type: "webinar" | "evento" | "capacitacion";
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "macbook-air-m4-13",
    name: 'MacBook Air 13" con chip M4',
    shortName: "MacBook Air 13\"",
    category: "laptop",
    chip: "M4",
    ram: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    screenSize: 13.6,
    price: 4999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Air-M4-zgucNhW9Q9FboXGj8wQ97WDk8cWyft.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Air-M4-zgucNhW9Q9FboXGj8wQ97WDk8cWyft.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    description: "El MacBook Air más delgado y ligero, potenciado por el chip M4. Ideal para profesionales móviles.",
    benefits: [
      "Hasta 18 horas de batería para productividad sin interrupciones",
      "Diseño silencioso sin ventilador",
      "Compatible con gestión MDM empresarial",
      "Seguridad integrada con Secure Enclave"
    ],
    specs: {
      "Chip": "Apple M4 (CPU 10 núcleos, GPU 10 núcleos)",
      "Pantalla": "Liquid Retina 13.6\" (2560x1664)",
      "Batería": "Hasta 18 horas",
      "Peso": "1.24 kg",
      "Puertos": "2x Thunderbolt/USB 4, MagSafe 3, Audio",
      "Cámara": "FaceTime HD 1080p"
    },
    recommendedFor: ["Ventas", "Ejecutivo", "Operaciones"]
  },
  {
    id: "2",
    slug: "macbook-air-m4-15",
    name: 'MacBook Air 15" con chip M4',
    shortName: "MacBook Air 15\"",
    category: "laptop",
    chip: "M4",
    ram: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    screenSize: 15.3,
    price: 5999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Air-M4-zgucNhW9Q9FboXGj8wQ97WDk8cWyft.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Air-M4-zgucNhW9Q9FboXGj8wQ97WDk8cWyft.jpg",
    ],
    badge: "Recomendado",
    inStock: true,
    description: "Pantalla más grande para mayor productividad. El equilibrio perfecto entre portabilidad y espacio de trabajo.",
    benefits: [
      "Pantalla 15.3\" para multitarea eficiente",
      "Sistema de audio con 6 altavoces",
      "Ideal para presentaciones y colaboración",
      "Despliegue zero-touch con ABM"
    ],
    specs: {
      "Chip": "Apple M4 (CPU 10 núcleos, GPU 10 núcleos)",
      "Pantalla": "Liquid Retina 15.3\" (2880x1864)",
      "Batería": "Hasta 18 horas",
      "Peso": "1.51 kg",
      "Puertos": "2x Thunderbolt/USB 4, MagSafe 3, Audio",
      "Cámara": "FaceTime HD 1080p"
    },
    recommendedFor: ["Diseño", "Ejecutivo", "Ventas"]
  },
  {
    id: "3",
    slug: "macbook-pro-m4-14",
    name: 'MacBook Pro 14" con chip M4',
    shortName: "MacBook Pro 14\"",
    category: "laptop",
    chip: "M4",
    ram: [16, 24, 32],
    storage: [512, 1024, 2048],
    screenSize: 14.2,
    price: 7999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Pro-M4-C8uJTSbOAAZtrYZx708A79G3y5hUzs.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Pro-M4-C8uJTSbOAAZtrYZx708A79G3y5hUzs.jpg",
    ],
    badge: "Popular",
    inStock: true,
    description: "Potencia profesional en un diseño compacto. Para flujos de trabajo exigentes.",
    benefits: [
      "Pantalla XDR con ProMotion para creativos",
      "Rendimiento sostenido para cargas pesadas",
      "3 puertos Thunderbolt 4 + HDMI + SD",
      "Ideal para desarrollo y diseño"
    ],
    specs: {
      "Chip": "Apple M4 (CPU 10 núcleos, GPU 10 núcleos)",
      "Pantalla": "Liquid Retina XDR 14.2\" (3024x1964)",
      "Batería": "Hasta 24 horas",
      "Peso": "1.55 kg",
      "Puertos": "3x Thunderbolt 4, HDMI, SD, MagSafe 3",
      "Cámara": "FaceTime HD 1080p"
    },
    recommendedFor: ["Dev", "Diseño", "Video"]
  },
  {
    id: "4",
    slug: "macbook-pro-m4-pro-14",
    name: 'MacBook Pro 14" con chip M4 Pro',
    shortName: "MacBook Pro 14\" M4 Pro",
    category: "laptop",
    chip: "M4 Pro",
    ram: [24, 48],
    storage: [512, 1024, 2048, 4096],
    screenSize: 14.2,
    price: 9999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Pro-M4-C8uJTSbOAAZtrYZx708A79G3y5hUzs.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Pro-M4-C8uJTSbOAAZtrYZx708A79G3y5hUzs.jpg",
    ],
    inStock: true,
    description: "Para profesionales que necesitan máximo rendimiento. Compila, renderiza y crea sin límites.",
    benefits: [
      "CPU 14 núcleos y GPU 20 núcleos",
      "Soporte para hasta 48GB de memoria unificada",
      "Ideal para virtualización y contenedores",
      "Perfecto para equipos de desarrollo"
    ],
    specs: {
      "Chip": "Apple M4 Pro (CPU 14 núcleos, GPU 20 núcleos)",
      "Pantalla": "Liquid Retina XDR 14.2\" (3024x1964)",
      "Batería": "Hasta 24 horas",
      "Peso": "1.60 kg",
      "Puertos": "3x Thunderbolt 4, HDMI, SD, MagSafe 3",
      "Cámara": "FaceTime HD 1080p"
    },
    recommendedFor: ["Dev", "Video", "3D"]
  },
  {
    id: "5",
    slug: "macbook-pro-m4-max-16",
    name: 'MacBook Pro 16" con chip M4 Max',
    shortName: "MacBook Pro 16\" M4 Max",
    category: "laptop",
    chip: "M4 Max",
    ram: [36, 48, 64, 128],
    storage: [1024, 2048, 4096, 8192],
    screenSize: 16.2,
    price: 15999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Pro-M4-C8uJTSbOAAZtrYZx708A79G3y5hUzs.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MacBook-Pro-M4-C8uJTSbOAAZtrYZx708A79G3y5hUzs.jpg",
    ],
    inStock: false,
    leadTime: "2-3 semanas",
    description: "La estación de trabajo portátil definitiva. Para los flujos de trabajo más exigentes.",
    benefits: [
      "Hasta 128GB de memoria unificada",
      "GPU de hasta 40 núcleos para renderizado",
      "Pantalla de 16.2\" para trabajo intensivo",
      "Soporte para hasta 4 pantallas externas"
    ],
    specs: {
      "Chip": "Apple M4 Max (CPU 16 núcleos, GPU 40 núcleos)",
      "Pantalla": "Liquid Retina XDR 16.2\" (3456x2234)",
      "Batería": "Hasta 24 horas",
      "Peso": "2.14 kg",
      "Puertos": "3x Thunderbolt 4, HDMI, SD, MagSafe 3",
      "Cámara": "FaceTime HD 1080p"
    },
    recommendedFor: ["Video", "3D", "Machine Learning"]
  },
  {
    id: "6",
    slug: "mac-mini-m4",
    name: "Mac mini con chip M4",
    shortName: "Mac mini M4",
    category: "desktop",
    chip: "M4",
    ram: [16, 24, 32],
    storage: [256, 512, 1024, 2048],
    screenSize: 0,
    price: 2999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mac-Mini-M4-wuf8l3ljVoHcaJzXlQBCVoonQhrsoU.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mac-Mini-M4-wuf8l3ljVoHcaJzXlQBCVoonQhrsoU.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    description: "Potencia de sobremesa compacta. Ideal para oficinas y centros de datos.",
    benefits: [
      "El Mac de escritorio más asequible",
      "Tamaño compacto para cualquier espacio",
      "Conectividad completa con múltiples puertos",
      "Fácil de gestionar en flotas grandes"
    ],
    specs: {
      "Chip": "Apple M4 (CPU 10 núcleos, GPU 10 núcleos)",
      "Almacenamiento": "SSD de hasta 2TB",
      "Puertos frontales": "2x USB-C, Audio",
      "Puertos traseros": "3x Thunderbolt 4, 2x USB-A, HDMI, Ethernet",
      "Dimensiones": "12.7 x 12.7 x 5 cm",
      "Peso": "0.67 kg"
    },
    recommendedFor: ["Operaciones", "Call Center", "Desarrollo"]
  },
  {
    id: "7",
    slug: "mac-studio-m4-max",
    name: "Mac Studio con chip M4 Max",
    shortName: "Mac Studio M4 Max",
    category: "desktop",
    chip: "M4 Max",
    ram: [64, 128, 192],
    storage: [512, 1024, 2048, 4096, 8192],
    screenSize: 0,
    price: 12999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mac-Studio-WVtesYkcTSwoSbdmFHkOgT0uyzFW3E.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mac-Studio-WVtesYkcTSwoSbdmFHkOgT0uyzFW3E.jpg",
    ],
    inStock: true,
    description: "Estación de trabajo profesional de sobremesa. Rendimiento extremo para estudios y equipos creativos.",
    benefits: [
      "Rendimiento de nivel estación de trabajo",
      "Hasta 192GB de memoria unificada",
      "Conectividad masiva para periféricos",
      "Perfecto para edición de video 8K"
    ],
    specs: {
      "Chip": "Apple M4 Max (CPU 16 núcleos, GPU 40 núcleos)",
      "Memoria": "Hasta 192GB unificada",
      "Puertos frontales": "2x USB-C, SDXC",
      "Puertos traseros": "4x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet",
      "Dimensiones": "19.7 x 19.7 x 9.4 cm",
      "Peso": "2.7 kg"
    },
    recommendedFor: ["Video", "3D", "Postproducción"]
  },
  {
    id: "8",
    slug: "imac-m4-24",
    name: 'iMac 24" con chip M4',
    shortName: "iMac 24\"",
    category: "desktop",
    chip: "M4",
    ram: [8, 16, 24],
    storage: [256, 512, 1024, 2048],
    screenSize: 24,
    price: 6499000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iMac-24-k6PolIqwQTX8qRUzCxRgtkiUwUFDek.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iMac-24-k6PolIqwQTX8qRUzCxRgtkiUwUFDek.jpg",
    ],
    badge: "Popular",
    inStock: true,
    description: "Todo en uno con pantalla 4.5K Retina. Diseño elegante para oficinas modernas.",
    benefits: [
      "Pantalla 4.5K Retina de 24 pulgadas",
      "Diseño todo en uno minimalista",
      "Cámara FaceTime HD 1080p con Center Stage",
      "Sistema de audio con 6 altavoces"
    ],
    specs: {
      "Chip": "Apple M4 (CPU 10 núcleos, GPU 10 núcleos)",
      "Pantalla": "Retina 4.5K 24\" (4480x2520)",
      "Cámara": "FaceTime HD 1080p con Center Stage",
      "Puertos": "2x Thunderbolt/USB 4, 2x USB 3, Ethernet",
      "Audio": "Sistema de 6 altavoces con Spatial Audio",
      "Peso": "4.43 kg"
  },
  recommendedFor: ["Ejecutivo", "Recepción", "Diseño"]
  },
  // iPhone Products
  {
    id: "9",
    slug: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    shortName: "iPhone 17 Pro Max",
    category: "phone",
    chip: "A18 Pro",
    ram: [8],
    storage: [256, 512, 1024],
    screenSize: 6.9,
    price: 5999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-Pro-Max-ZFDlM4jXSt3ktW3HQdsWhwSYd525Yl.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-Pro-Max-ZFDlM4jXSt3ktW3HQdsWhwSYd525Yl.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "2-3 días",
    description: "El iPhone más grande y potente con chip A18 Pro, sistema de cámaras profesional avanzado y pantalla Super Retina XDR de 6.9 pulgadas.",
    benefits: [
      "Chip A18 Pro con Neural Engine de 16 núcleos",
      "Sistema de cámaras Pro con teleobjetivo 5x",
      "Pantalla ProMotion de 120Hz con Always-On",
      "Batería de hasta 29 horas de reproducción de video",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A18 Pro con Neural Engine de 16 núcleos",
      "Pantalla": "Super Retina XDR 6.9\" ProMotion (120Hz)",
      "Cámara": "Triple 48MP (Principal, Ultra Wide, Teleobjetivo 5x)",
      "Batería": "Hasta 29 horas de video",
      "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3",
      "Materiales": "Titanio de grado aeroespacial",
      "Peso": "221 g"
    },
    recommendedFor: ["Ejecutivo", "Fotografía", "Productividad"]
  },
  {
    id: "10",
    slug: "iphone-17-pro",
    name: "iPhone 17 Pro",
    shortName: "iPhone 17 Pro",
    category: "phone",
    chip: "A18 Pro",
    ram: [8],
    storage: [128, 256, 512, 1024],
    screenSize: 6.3,
    price: 4999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-Pro-GQkBXFTnuaEX2kojcmK3lW47TL2GwK.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-Pro-GQkBXFTnuaEX2kojcmK3lW47TL2GwK.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "2-3 días",
    description: "iPhone Pro con chip A18 Pro, sistema de cámaras profesional y pantalla Super Retina XDR de 6.3 pulgadas.",
    benefits: [
      "Chip A18 Pro con Neural Engine de 16 núcleos",
      "Sistema de cámaras Pro con teleobjetivo 3x",
      "Pantalla ProMotion de 120Hz con Always-On",
      "Batería de hasta 23 horas de reproducción de video",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A18 Pro con Neural Engine de 16 núcleos",
      "Pantalla": "Super Retina XDR 6.3\" ProMotion (120Hz)",
      "Cámara": "Triple 48MP (Principal, Ultra Wide, Teleobjetivo 3x)",
      "Batería": "Hasta 23 horas de video",
      "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3",
      "Materiales": "Titanio de grado aeroespacial",
      "Peso": "187 g"
    },
    recommendedFor: ["Ejecutivo", "Fotografía", "Productividad"]
  },
  {
    id: "11",
    slug: "iphone-17-air",
    name: "iPhone 17 Air",
    shortName: "iPhone 17 Air",
    category: "phone",
    chip: "A18",
    ram: [6],
    storage: [128, 256, 512],
    screenSize: 6.6,
    price: 4299000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-Air-hZZC8i7IMJq9CmYnFiPFvmLjLa87BG.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-Air-hZZC8i7IMJq9CmYnFiPFvmLjLa87BG.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "1-2 semanas",
    description: "El iPhone más delgado jamás creado con chip A18, diseño ultraligero y pantalla Super Retina XDR de 6.6 pulgadas.",
    benefits: [
      "Diseño ultrafino y ligero",
      "Chip A18 con Neural Engine",
      "Cámara principal de 48MP",
      "Batería de día completo",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A18 con Neural Engine",
      "Pantalla": "Super Retina XDR 6.6\"",
      "Cámara": "Principal 48MP",
      "Batería": "Hasta 22 horas de video",
      "Conectividad": "5G, Wi-Fi 6E, Bluetooth 5.3",
      "Materiales": "Aluminio aeroespacial",
      "Peso": "165 g"
    },
    recommendedFor: ["Ejecutivo", "Movilidad", "Productividad"]
  },
  {
    id: "12",
    slug: "iphone-17",
    name: "iPhone 17",
    shortName: "iPhone 17",
    category: "phone",
    chip: "A18",
    ram: [6],
    storage: [128, 256, 512],
    screenSize: 6.1,
    price: 3799000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-cMvO4GYMUCaNrtif6mc36wFdrxz3S3.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-17-cMvO4GYMUCaNrtif6mc36wFdrxz3S3.jpg",
    ],
    badge: "Recomendado",
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPhone con chip A18, cámara dual avanzada y pantalla Super Retina XDR de 6.1 pulgadas. Balance perfecto entre rendimiento y precio.",
    benefits: [
      "Chip A18 con Neural Engine",
      "Cámara dual de 48MP",
      "Pantalla Super Retina XDR",
      "Batería de día completo",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A18 con Neural Engine",
      "Pantalla": "Super Retina XDR 6.1\"",
      "Cámara": "Dual 48MP (Principal, Ultra Wide)",
      "Batería": "Hasta 20 horas de video",
      "Conectividad": "5G, Wi-Fi 6, Bluetooth 5.3",
      "Materiales": "Aluminio y vidrio",
      "Peso": "171 g"
    },
    recommendedFor: ["General", "Productividad", "Estudiantes"]
  },
  {
    id: "13",
    slug: "iphone-16-plus",
    name: "iPhone 16 Plus",
    shortName: "iPhone 16 Plus",
    category: "phone",
    chip: "A17",
    ram: [6],
    storage: [128, 256, 512],
    screenSize: 6.7,
    price: 3499000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-16-plus-WvfXlvmyKgtUOLD3dmrHKbgwrWRWgo.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-16-plus-WvfXlvmyKgtUOLD3dmrHKbgwrWRWgo.jpg",
    ],
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPhone con pantalla grande de 6.7 pulgadas, chip A17 y batería de larga duración. Ideal para consumo multimedia.",
    benefits: [
      "Pantalla grande de 6.7 pulgadas",
      "Chip A17 con Neural Engine",
      "Cámara dual avanzada",
      "Batería de hasta 26 horas de video",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A17 con Neural Engine",
      "Pantalla": "Super Retina XDR 6.7\"",
      "Cámara": "Dual 48MP (Principal, Ultra Wide)",
      "Batería": "Hasta 26 horas de video",
      "Conectividad": "5G, Wi-Fi 6, Bluetooth 5.3",
      "Materiales": "Aluminio y vidrio",
      "Peso": "201 g"
    },
    recommendedFor: ["Multimedia", "Productividad", "General"]
  },
  {
    id: "14",
    slug: "iphone-16",
    name: "iPhone 16",
    shortName: "iPhone 16",
    category: "phone",
    chip: "A17",
    ram: [6],
    storage: [128, 256, 512],
    screenSize: 6.1,
    price: 2999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-16-BYPXmxLFF1PVkqiZKMNs0CAEOe0bBv.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-16-BYPXmxLFF1PVkqiZKMNs0CAEOe0bBv.jpg",
    ],
    badge: "Popular",
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPhone con chip A17, cámara dual y pantalla Super Retina XDR de 6.1 pulgadas. Excelente opción para uso diario.",
    benefits: [
      "Chip A17 con Neural Engine",
      "Cámara dual de 48MP",
      "Pantalla Super Retina XDR",
      "Batería de día completo",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A17 con Neural Engine",
      "Pantalla": "Super Retina XDR 6.1\"",
      "Cámara": "Dual 48MP (Principal, Ultra Wide)",
      "Batería": "Hasta 20 horas de video",
      "Conectividad": "5G, Wi-Fi 6, Bluetooth 5.3",
      "Materiales": "Aluminio y vidrio",
      "Peso": "170 g"
    },
    recommendedFor: ["General", "Productividad", "Estudiantes"]
  },
  {
    id: "15",
    slug: "iphone-16e",
    name: "iPhone 16e",
    shortName: "iPhone 16e",
    category: "phone",
    chip: "A16",
    ram: [4],
    storage: [64, 128, 256],
    screenSize: 6.1,
    price: 2299000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-16e-7E7Ahbs1sjIQe0NsAcm2GrOSLSAFq7.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-16e-7E7Ahbs1sjIQe0NsAcm2GrOSLSAFq7.jpg",
    ],
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPhone accesible con chip A16, cámara dual y pantalla Super Retina XDR de 6.1 pulgadas. La mejor opción de entrada al ecosistema iPhone.",
    benefits: [
      "Chip A16 Bionic",
      "Cámara dual avanzada",
      "Pantalla Super Retina XDR",
      "Batería de día completo",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A16 Bionic",
      "Pantalla": "Super Retina XDR 6.1\"",
      "Cámara": "Dual 12MP (Principal, Ultra Wide)",
      "Batería": "Hasta 20 horas de video",
      "Conectividad": "5G, Wi-Fi 6, Bluetooth 5.3",
      "Materiales": "Aluminio y vidrio",
      "Peso": "172 g"
    },
    recommendedFor: ["Estudiantes", "General", "Primera compra"]
  },
  {
    id: "16",
    slug: "iphone-15",
    name: "iPhone 15",
    shortName: "iPhone 15",
    category: "phone",
    chip: "A16",
    ram: [6],
    storage: [128, 256, 512],
    screenSize: 6.1,
    price: 2599000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-15-cIde403jc7QlQiNftmR0X1WPu6Gmo6.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPhone-15-cIde403jc7QlQiNftmR0X1WPu6Gmo6.jpg",
    ],
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPhone 15 con chip A16 Bionic, cámara dual de 48MP y Dynamic Island. Rendimiento confiable a excelente precio.",
    benefits: [
      "Chip A16 Bionic probado",
      "Cámara principal de 48MP",
      "Dynamic Island",
      "Batería de día completo",
      "Resistencia al agua IP68"
    ],
    specs: {
      "Chip": "A16 Bionic",
      "Pantalla": "Super Retina XDR 6.1\"",
      "Cámara": "Dual 48MP (Principal, Ultra Wide)",
      "Batería": "Hasta 20 horas de video",
      "Conectividad": "5G, Wi-Fi 6, Bluetooth 5.3",
      "Materiales": "Aluminio y vidrio",
      "Peso": "171 g"
    },
    recommendedFor: ["General", "Productividad", "Estudiantes"]
  },
  // Apple Watch Products
  {
    id: "17",
    slug: "apple-watch-ultra-3",
    name: "Apple Watch Ultra 3",
    shortName: "Watch Ultra 3",
    category: "watch",
    chip: "S10",
    ram: [2],
    storage: [64],
    screenSize: 2.1,
    price: 3699000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-Ultra-3-2mYr9iIN27CsD5UpxMd5JX0wfKc2VX.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-Ultra-3-2mYr9iIN27CsD5UpxMd5JX0wfKc2VX.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "2-3 días",
    description: "El reloj más robusto de Apple con caja de titanio, pantalla ultra brillante y batería de hasta 36 horas. Diseñado para aventuras extremas.",
    benefits: [
      "Caja de titanio de 49mm ultra resistente",
      "Pantalla de hasta 3000 nits",
      "Batería de hasta 36 horas",
      "Resistencia al agua hasta 100m",
      "GPS de precisión dual"
    ],
    specs: {
      "Chip": "Apple S10 SiP",
      "Pantalla": "Always-On Retina 2.1\" (3000 nits)",
      "Conectividad": "LTE, GPS dual, Wi-Fi, Bluetooth",
      "Sensores": "ECG, oxígeno en sangre, temperatura",
      "Resistencia": "WR100, IP6X, MIL-STD 810H",
      "Batería": "Hasta 36 horas",
      "Caja": "Titanio 49mm"
    },
    recommendedFor: ["Deportes", "Aventura", "Ejecutivo"]
  },
  {
    id: "18",
    slug: "apple-watch-hermes-ultra-3",
    name: "Apple Watch Hermès Ultra 3",
    shortName: "Watch Hermès Ultra 3",
    category: "watch",
    chip: "S10",
    ram: [2],
    storage: [64],
    screenSize: 2.1,
    price: 5999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-Hermes-ultra-3-Ujm5OG188pMC4PgzNqA1Y1TzrNEFXq.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-Hermes-ultra-3-Ujm5OG188pMC4PgzNqA1Y1TzrNEFXq.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "1-2 semanas",
    description: "Edición Hermès del Apple Watch Ultra con correas exclusivas de cuero y esferas personalizadas de lujo.",
    benefits: [
      "Correa Hermès de cuero premium",
      "Esferas exclusivas Hermès",
      "Caja de titanio de 49mm",
      "Batería de hasta 36 horas",
      "Embalaje Hermès exclusivo"
    ],
    specs: {
      "Chip": "Apple S10 SiP",
      "Pantalla": "Always-On Retina 2.1\" (3000 nits)",
      "Conectividad": "LTE, GPS dual, Wi-Fi, Bluetooth",
      "Sensores": "ECG, oxígeno en sangre, temperatura",
      "Resistencia": "WR100, IP6X, MIL-STD 810H",
      "Batería": "Hasta 36 horas",
      "Correa": "Hermès cuero genuino"
    },
    recommendedFor: ["Lujo", "Ejecutivo", "Regalo corporativo"]
  },
  {
    id: "19",
    slug: "apple-watch-series-11",
    name: "Apple Watch Series 11",
    shortName: "Watch Series 11",
    category: "watch",
    chip: "S10",
    ram: [1],
    storage: [32],
    screenSize: 1.9,
    price: 1899000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-series-11-TjvWkNs1ZYDG2vNvuRiUyMQxoHAFy7.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-series-11-TjvWkNs1ZYDG2vNvuRiUyMQxoHAFy7.jpg",
    ],
    badge: "Recomendado",
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "Apple Watch con pantalla Always-On, monitoreo avanzado de salud y batería de día completo. Perfecto para uso diario.",
    benefits: [
      "Pantalla Always-On Retina",
      "ECG y monitoreo de oxígeno",
      "Detección de caídas y choques",
      "Resistencia al agua hasta 50m",
      "Batería de hasta 18 horas"
    ],
    specs: {
      "Chip": "Apple S10 SiP",
      "Pantalla": "Always-On Retina 1.9\"",
      "Conectividad": "LTE, GPS, Wi-Fi, Bluetooth",
      "Sensores": "ECG, oxígeno en sangre, temperatura",
      "Resistencia": "WR50, IP6X",
      "Batería": "Hasta 18 horas",
      "Caja": "Aluminio 45mm"
    },
    recommendedFor: ["Salud", "Productividad", "General"]
  },
  {
    id: "20",
    slug: "apple-watch-hermes-3",
    name: "Apple Watch Hermès Series 11",
    shortName: "Watch Hermès 11",
    category: "watch",
    chip: "S10",
    ram: [1],
    storage: [32],
    screenSize: 1.9,
    price: 3299000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-Hermes-3-fsGPj7mKDEbGQbislFbacPKaDhuA8M.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watch-Hermes-3-fsGPj7mKDEbGQbislFbacPKaDhuA8M.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "1-2 semanas",
    description: "Apple Watch Series 11 edición Hermès con correas de cuero exclusivas y esferas personalizadas de lujo.",
    benefits: [
      "Correa Hermès de cuero tejido",
      "Esferas exclusivas Hermès",
      "Caja de acero inoxidable",
      "Monitoreo avanzado de salud",
      "Embalaje Hermès exclusivo"
    ],
    specs: {
      "Chip": "Apple S10 SiP",
      "Pantalla": "Always-On Retina 1.9\"",
      "Conectividad": "LTE, GPS, Wi-Fi, Bluetooth",
      "Sensores": "ECG, oxígeno en sangre, temperatura",
      "Resistencia": "WR50, IP6X",
      "Batería": "Hasta 18 horas",
      "Correa": "Hermès cuero tejido"
    },
    recommendedFor: ["Lujo", "Ejecutivo", "Regalo corporativo"]
  },
  {
    id: "21",
    slug: "apple-watch-se-3",
    name: "Apple Watch SE 3",
    shortName: "Watch SE 3",
    category: "watch",
    chip: "S9",
    ram: [1],
    storage: [32],
    screenSize: 1.7,
    price: 1199000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watchSE-3-tzA8n2VQa4ToJgfiG2tyclkC6DfATn.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-watchSE-3-tzA8n2VQa4ToJgfiG2tyclkC6DfATn.jpg",
    ],
    badge: "Popular",
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "Apple Watch accesible con funciones esenciales de salud, fitness y conectividad. La mejor opción de entrada.",
    benefits: [
      "Monitoreo de frecuencia cardíaca",
      "Detección de caídas",
      "Resistencia al agua hasta 50m",
      "Notificaciones inteligentes",
      "Batería de hasta 18 horas"
    ],
    specs: {
      "Chip": "Apple S9 SiP",
      "Pantalla": "Retina 1.7\"",
      "Conectividad": "GPS, Wi-Fi, Bluetooth",
      "Sensores": "Frecuencia cardíaca, acelerómetro",
      "Resistencia": "WR50",
      "Batería": "Hasta 18 horas",
      "Caja": "Aluminio 44mm"
    },
    recommendedFor: ["Estudiantes", "Primera compra", "Fitness"]
  },
  // iPad Products
  {
    id: "22",
    slug: "ipad-pro-m5-13",
    name: 'iPad Pro 13" con chip M5',
    shortName: "iPad Pro 13\" M5",
    category: "tablet",
    chip: "M5",
    ram: [16, 24],
    storage: [256, 512, 1024, 2048],
    screenSize: 13,
    price: 5999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-Pro-M5-k6lMfgTb0uZjV4mSwbY1uPsHl27JNR.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-Pro-M5-k6lMfgTb0uZjV4mSwbY1uPsHl27JNR.jpg",
    ],
    badge: "Nuevo",
    inStock: true,
    leadTime: "2-3 días",
    description: "iPad Pro con chip M5, pantalla OLED XDR de 13 pulgadas y rendimiento de nivel profesional. Compatible con Apple Pencil Pro y Magic Keyboard.",
    benefits: [
      "Chip M5 con Neural Engine",
      "Pantalla Tandem OLED XDR",
      "Cámara Pro con LiDAR",
      "Thunderbolt 4",
      "Compatibilidad con Apple Pencil Pro"
    ],
    specs: {
      "Chip": "Apple M5 con Neural Engine",
      "Pantalla": "Tandem OLED 13\" XDR (1600 nits)",
      "Cámara": "12MP Wide + 10MP Ultra Wide + LiDAR",
      "Conectividad": "Wi-Fi 6E, 5G opcional, Thunderbolt 4",
      "Batería": "Hasta 10 horas",
      "Accesorios": "Apple Pencil Pro, Magic Keyboard",
      "Peso": "682 g"
    },
    recommendedFor: ["Diseño", "Productividad", "Creación de contenido"]
  },
  {
    id: "23",
    slug: "ipad-pro-m4-11",
    name: 'iPad Pro 11" con chip M4',
    shortName: "iPad Pro 11\" M4",
    category: "tablet",
    chip: "M4",
    ram: [8, 16],
    storage: [128, 256, 512, 1024],
    screenSize: 11,
    price: 3999000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-Pro-M4-Dl7S7BufPYsp3YRJlD720KWfD6myxI.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-Pro-M4-Dl7S7BufPYsp3YRJlD720KWfD6myxI.jpg",
    ],
    badge: "Recomendado",
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPad Pro compacto con chip M4, pantalla OLED XDR y portabilidad profesional. Ideal para trabajo móvil.",
    benefits: [
      "Chip M4 con Neural Engine",
      "Pantalla Tandem OLED XDR",
      "Cámara Pro con LiDAR",
      "USB-C con Thunderbolt",
      "Diseño ultraligero"
    ],
    specs: {
      "Chip": "Apple M4 con Neural Engine",
      "Pantalla": "Tandem OLED 11\" XDR (1600 nits)",
      "Cámara": "12MP Wide + 10MP Ultra Wide + LiDAR",
      "Conectividad": "Wi-Fi 6E, 5G opcional, Thunderbolt",
      "Batería": "Hasta 10 horas",
      "Accesorios": "Apple Pencil Pro, Magic Keyboard",
      "Peso": "466 g"
    },
    recommendedFor: ["Movilidad", "Productividad", "Diseño"]
  },
  {
    id: "24",
    slug: "ipad-air-m3-11",
    name: 'iPad Air 11" con chip M3',
    shortName: "iPad Air 11\" M3",
    category: "tablet",
    chip: "M3",
    ram: [8],
    storage: [128, 256, 512],
    screenSize: 11,
    price: 2799000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-Air-M3-aHXebnMpVNRrHjtMFGOsuc9KGXK4nX.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-Air-M3-aHXebnMpVNRrHjtMFGOsuc9KGXK4nX.jpg",
    ],
    badge: "Popular",
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPad Air con chip M3, pantalla Liquid Retina de 11 pulgadas y rendimiento profesional a excelente precio.",
    benefits: [
      "Chip M3 con Neural Engine",
      "Pantalla Liquid Retina",
      "Cámara frontal horizontal",
      "USB-C",
      "Compatibilidad con Apple Pencil"
    ],
    specs: {
      "Chip": "Apple M3 con Neural Engine",
      "Pantalla": "Liquid Retina 11\" (500 nits)",
      "Cámara": "12MP Wide, 12MP Ultra Wide frontal",
      "Conectividad": "Wi-Fi 6, 5G opcional, USB-C",
      "Batería": "Hasta 10 horas",
      "Accesorios": "Apple Pencil (USB-C), Magic Keyboard Folio",
      "Peso": "462 g"
    },
    recommendedFor: ["Productividad", "Estudiantes", "General"]
  },
  {
    id: "25",
    slug: "ipad-mini-a17",
    name: "iPad mini con chip A17 Pro",
    shortName: "iPad mini A17",
    category: "tablet",
    chip: "A17 Pro",
    ram: [8],
    storage: [128, 256, 512],
    screenSize: 8.3,
    price: 2399000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-mini-A17-k75T0OMeYHk3J7no0y6937dCb34qvK.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iPad-mini-A17-k75T0OMeYHk3J7no0y6937dCb34qvK.jpg",
    ],
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "iPad mini ultraportátil con chip A17 Pro y pantalla de 8.3 pulgadas. Máxima movilidad con rendimiento completo.",
    benefits: [
      "Diseño ultraportátil",
      "Chip A17 Pro potente",
      "Pantalla Liquid Retina",
      "USB-C",
      "Compatibilidad con Apple Pencil"
    ],
    specs: {
      "Chip": "Apple A17 Pro",
      "Pantalla": "Liquid Retina 8.3\" (500 nits)",
      "Cámara": "12MP Wide, 12MP Ultra Wide frontal",
      "Conectividad": "Wi-Fi 6, 5G opcional, USB-C",
      "Batería": "Hasta 10 horas",
      "Accesorios": "Apple Pencil (USB-C)",
      "Peso": "293 g"
    },
    recommendedFor: ["Movilidad", "Lectura", "Punto de venta"]
  },
  // HomePod
  {
    id: "26",
    slug: "homepod-2024",
    name: "HomePod (2024)",
    shortName: "HomePod",
    category: "speaker",
    chip: "S8",
    ram: [1],
    storage: [0],
    screenSize: 0,
    price: 1499000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomePod-cD285qzipIBInmEB6kndlsB4fEygVq.jpg",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomePod-cD285qzipIBInmEB6kndlsB4fEygVq.jpg",
    ],
    inStock: true,
    leadTime: "Entrega inmediata",
    description: "Altavoz inteligente con audio espacial, HomeKit y Siri. Perfecto para oficinas, salas de reuniones y espacios corporativos.",
    benefits: [
      "Audio espacial de alta fidelidad",
      "Control por voz con Siri",
      "HomeKit para automatización",
      "Multiroom con AirPlay 2",
      "Diseño premium en malla"
    ],
    specs: {
      "Chip": "Apple S8",
      "Audio": "Woofer de alta excursión + 5 tweeters",
      "Micrófonos": "4 micrófonos para Siri",
      "Conectividad": "Wi-Fi 6, Thread, Bluetooth 5.3",
      "Integración": "HomeKit, Matter, AirPlay 2",
      "Dimensiones": "172 x 142 mm",
      "Peso": "2.3 kg"
    },
    recommendedFor: ["Oficina", "Sala de reuniones", "Recepción"]
  }
];

export const services: Service[] = [
  {
    id: "1",
    title: "Implementación y Despliegue",
    description: "Ponemos en marcha tu entorno Apple de forma ordenada y alineada a tu infraestructura actual.",
    icon: "rocket",
    features: [
      "Configuración inicial personalizada",
      "Migración segura de datos",
      "Integración con infraestructura existentes",
      "Entrega lista para trabajar (zero-touch si aplica)",
      "Resultado: equipos productivos desde el primer día."
    ]
  },
  {
    id: "2",
    title: "Gestión y Administración (MDM)",
    description: "Control centralizado y seguro de todos tus dispositivos Apple.",
    icon: "settings",
    features: [
      "Implementación de Apple Business Manager (ABM)",
      "Configuración remota de políticas y restricciones",
      "Gestión de usuarios y Apple ID administrados",
      "Distribución automática de aplicaciones y actualizaciones",
      "Inventario y monitoreo en tiempo real",
      "Resultado: menos carga operativa para TI y mayor control corporativo."
    ]
  },
  {
    id: "3",
    title: "Seguridad y Continuidad",
    description: "Protegemos la información de tu empresa y garantizamos estabilidad operativa.",
    icon: "shield",
    features: [
      "Cifrado de disco con FileVault gestionado",
      "Políticas de seguridad centralizadas",
      "Gestión de parches y actualizaciones",
      "Estrategias de respaldo empresarial",
      "Cumplimiento de buenas prácticas de seguridad",
      "Resultado: reducción de riesgos y continuidad del negocio."
    ]
  },
  {
    id: "4",
    title: "Soporte Técnico Empresarial",
    description: "Servicio Técnico Autorizado por Apple.",
    icon: "headphones",
    features: [
      "Atención en sitio cuando se requiera",
      "Gestión de garantías",
      "SLA empresariales personalizados",
      "Acompañamiento continuo postimplementación",
      "Resultado: menor tiempo de inactividad y mayor eficiencia operativa."
    ]
  },
  {
    id: "5",
    title: "Formación y Onboarding",
    description: "Maximizamos la adopción y el uso estratégico de la tecnología.",
    icon: "graduation",
    features: [
      "Capacitación en herramientas de productividad",
      "Workshops para equipos de TI",
      "Buenas prácticas de uso y seguridad",
      "Resultado: mayor productividad y mejor experiencia del usuario."
    ]
  },
  {
    id: "6",
    title: "Garantías para Empresas",
    description: "Cobertura extendida y soporte oficial Apple.",
    icon: "heart",
    features: [
      "Garantía extendida hasta 3 años",
      "Soporte técnico prioritario",
      "Reparaciones con piezas originales",
      "Gestión centralizada de incidencias",
      "Resultado: protección de la inversión tecnológica."
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana López",
    role: "CTO",
    company: "TechGroup",
    companyLogo: "/logos/techgroup.svg",
    quote: "MacPower nos ayudó a migrar 200+ equipos a Mac sin interrumpir operaciones. El ROI fue evidente en 6 meses: menos tickets de soporte y mayor productividad.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: "2",
    name: "Fred López",
    role: "CEO",
    company: "BancoPlus",
    companyLogo: "/logos/bancoplus.svg",
    quote: "La seguridad era nuestra prioridad. MacPower implementó FileVault y MDM en todos nuestros equipos, cumpliendo con regulaciones del sector financiero.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
  },
  {
    id: "3",
    name: "Pao López",
    role: "CTO",
    company: "CreativeHub",
    companyLogo: "/logos/creativehub.svg",
    quote: "La implementación de Mac Studio transformó nuestro flujo de trabajo creativo. Renderizamos en minutos lo que antes tomaba horas.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "techgroup-migracion-200-equipos",
    company: "TechGroup",
    industry: "Tecnología",
    logo: "/logos/techgroup.svg",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    overview: "TechGroup, empresa líder en desarrollo de software con 500+ empleados, necesitaba modernizar su infraestructura de equipos.",
    challenge: "Parque de 200+ PCs Windows heterogéneos con altos costos de soporte, problemas de seguridad y empleados insatisfechos con sus herramientas.",
    solution: "Migración completa a Mac con MacBook Pro para desarrolladores, MacBook Air para equipos comerciales, e iMac para áreas administrativas. Implementación de MDM con Jamf.",
    impact: [
      { metric: "Reducción tickets soporte", value: "-45%" },
      { metric: "Satisfacción empleados", value: "+68%" },
      { metric: "ROI en primer año", value: "2.3x" }
    ]
  },
  {
    id: "2",
    slug: "bancoplus-seguridad-financiera",
    company: "BancoPlus",
    industry: "Financiero",
    logo: "/logos/bancoplus.svg",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
    overview: "BancoPlus, entidad financiera con estrictos requerimientos de seguridad, buscaba modernizar su infraestructura cumpliendo regulaciones.",
    challenge: "Necesidad de cumplir normativas de seguridad del sector financiero, gestión centralizada de 150 equipos y protección de datos sensibles.",
    solution: "Despliegue de Mac mini y MacBook Air con FileVault, gestión MDM centralizada, e integración con sistemas de autenticación existentes.",
    impact: [
      { metric: "Cumplimiento normativo", value: "100%" },
      { metric: "Incidentes seguridad", value: "-90%" },
      { metric: "Tiempo de auditoría", value: "-60%" }
    ]
  },
  {
    id: "3",
    slug: "creativehub-estudio-produccion",
    company: "CreativeHub",
    industry: "Medios",
    logo: "/logos/creativehub.svg",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
    overview: "CreativeHub, estudio de producción audiovisual, necesitaba actualizar su infraestructura para proyectos en 4K y 8K.",
    challenge: "Equipos obsoletos incapaces de manejar proyectos en alta resolución, tiempos de render excesivos y pérdida de productividad.",
    solution: "Implementación de Mac Studio con M4 Max para estaciones de edición, MacBook Pro para trabajo en campo, y flujos de trabajo optimizados.",
    impact: [
      { metric: "Tiempo de render", value: "-75%" },
      { metric: "Proyectos completados/mes", value: "+40%" },
      { metric: "Capacidad 8K", value: "100%" }
    ]
  }
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "¿Cuál es el tiempo de entrega para pedidos empresariales?",
    answer: "Para configuraciones estándar en stock, entregamos en 3-5 días hábiles. Configuraciones personalizadas o pedidos grandes pueden tomar 2-3 semanas. Siempre confirmamos tiempos exactos en la cotización.",
    category: "compras"
  },
  {
    id: "2",
    question: "¿Ofrecen financiamiento o leasing para empresas?",
    answer: "Sí, trabajamos con varias opciones de financiamiento y leasing operativo para empresas. Esto permite distribuir la inversión y optimizar flujos de caja. Contáctenos para conocer las opciones disponibles.",
    category: "compras"
  },
  {
    id: "3",
    question: "¿Qué es Apple Business Manager (ABM)?",
    answer: "ABM es la plataforma gratuita de Apple para empresas que permite gestionar dispositivos, apps y cuentas corporativas. Facilita el despliegue zero-touch y la administración centralizada de flotas Apple.",
    category: "general"
  },
  {
    id: "4",
    question: "¿Pueden integrar Mac con nuestra infraestructura Windows/Active Directory?",
    answer: "Absolutamente. Mac se integra nativamente con Active Directory y la mayoría de servicios empresariales. Además, configuramos soluciones MDM que unifican la gestión de dispositivos multiplataforma.",
    category: "general"
  },
  {
    id: "5",
    question: "¿Qué nivel de soporte incluyen sus servicios?",
    answer: "Ofrecemos diferentes niveles de SLA según sus necesidades: desde soporte en horario laboral hasta 7/24 para operaciones críticas. Todos incluyen soporte remoto y en sitio cuando se requiera.",
    category: "soporte"
  },
  {
    id: "6",
    question: "¿Cómo manejan la seguridad de datos corporativos?",
    answer: "Implementamos múltiples capas: FileVault para cifrado de disco, gestión de políticas vía MDM, configuración de firewall, y controles de acceso. Todo alineado con estándares como ISO 27001 y normativas locales.",
    category: "seguridad"
  },
  {
    id: "7",
    question: "¿Qué garantía tienen los equipos Apple?",
    answer: "Todos los Mac incluyen 1 año de garantía de hardware de Apple y 90 días de soporte técnico. Recomendamos AppleCare+ para extender la cobertura a 3 años con soporte prioritario y protección contra daños.",
    category: "soporte"
  },
  {
    id: "8",
    question: "¿Pueden ayudar con la migración desde PC Windows?",
    answer: "Sí, tenemos un proceso probado de migración que incluye transferencia de datos, configuración de apps equivalentes, capacitación de usuarios y soporte post-migración. Minimizamos el impacto en productividad.",
    category: "general"
  }
];

export const events: Event[] = [
  {
    id: "1",
    title: "Colombia Modo",
    date: "2026-01-30",
    month: "Julio",
    day: "30",
    type: "evento",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "Evento presencial sobre transformación digital con Apple en empresas colombianas."
  },
  {
    id: "2",
    title: "Webinar: Seguridad de la Información",
    date: "2026-02-14",
    month: "Agosto",
    day: "14",
    type: "webinar",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop",
    description: "Aprenda a proteger datos corporativos con las herramientas de seguridad de macOS."
  },
  {
    id: "3",
    title: "Desayuno Ejecutivo Onistec",
    date: "2026-02-18",
    month: "Septiembre",
    day: "18",
    type: "evento",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    description: "Networking y presentación de soluciones MDM para líderes de TI."
  },
  {
    id: "4",
    title: "Capacitación ASUS",
    date: "2026-02-23",
    month: "Septiembre",
    day: "23",
    type: "capacitacion",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
    description: "Sesión técnica sobre integración de periféricos y accesorios profesionales."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "apple-m4-pro-revolucion-rendimiento",
    title: "Apple M4 Pro: Revolución en el Rendimiento",
    excerpt: "Descubre las nuevas capacidades del chip M4 Pro y cómo puede transformar el flujo de trabajo en tu empresa.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
    date: "15 Ene 2026",
    category: "Tecnología"
  },
  {
    id: "2",
    slug: "ciberseguridad-empresarial-tendencias-2026",
    title: "Ciberseguridad Empresarial: Tendencias 2026",
    excerpt: "Las principales amenazas y soluciones de seguridad que toda empresa debe conocer para proteger sus datos.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    date: "10 Ene 2026",
    category: "Seguridad"
  },
  {
    id: "3",
    slug: "domotica-en-el-hogar",
    title: "Domótica en el Hogar",
    excerpt: "Cómo la tecnología Apple HomeKit está revolucionando la automatización del hogar y la oficina.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    date: "5 Ene 2026",
    category: "Innovación"
  }
];

export const partners = [
  { name: "Apple", logo: "apple" },
  { name: "Microsoft", logo: "microsoft" },
  { name: "Cisco", logo: "cisco" },
  { name: "Adobe", logo: "adobe" },
  { name: "VMware", logo: "vmware" },
  { name: "Jamf", logo: "jamf" },
  { name: "Dell", logo: "dell" }
];

export const metrics = {
  yearsExperience: 15,
  countriesPresence: 5,
  enterpriseClients: 500,
  certifiedTechnicians: 25
};
