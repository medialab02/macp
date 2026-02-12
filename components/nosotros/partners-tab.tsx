import Image from "next/image";

export function PartnersTab() {
  const partners = [
    { name: "Partner 1", logo: "/images/partners/partner1.svg" },
    { name: "Partner 2", logo: "/images/partners/partner2.svg" },
    { name: "Partner 3", logo: "/images/partners/partner3.svg" },
    { name: "Partner 4", logo: "/images/partners/partner4.svg" },
    { name: "Partner 5", logo: "/images/partners/partner5.svg" },
    { name: "Partner 6", logo: "/images/partners/partner6.svg" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Aliados Estratégicos y Certificaciones
          </h2>
        </div>

        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={40}
                  className="w-full h-auto max-w-[80px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
