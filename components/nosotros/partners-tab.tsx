import Image from "next/image";

export function PartnersTab() {
  const partners = [
    { name: "Canon", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2020%201-fUC4zuD6pmJgzV4UMq1CB4gKS60pv8.png" },
    { name: "Cross Identity", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliad%2025o%20%201-yWyIbIqlWVPaNBtjoTPqjUkEV7ZXc4.png" },
    { name: "Targus", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2021%201-Pxf5hyWHgil9EhHfPbysmGuHhsRrbP.png" },
    { name: "ASUS", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2016_1%201-WgS1h8qBDU1fd6VH47A7gjMBv1b4zI.png" },
    { name: "Aruba", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2016%201-oAhtIUaQNQuUVmgK1PjQiGwWZYh4HX.png" },
    { name: "Comforte", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2024%201-YxbIYmNH66J9RPkLn0TwQzYbgYnsu3.png" },
    { name: "Vertiv", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2026%201-UBqa4ITvcRva2kJj7Y8MqmSSgsMkzh.png" },
    { name: "Hewlett Packard Enterprise", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2028%201-CkByi8T3zSrGLrwVwQ2rlYmVDb2Ebd.png" },
    { name: "Huawei", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%2044%201-9AjgzgKyQSpM6KDWMQx7RQmT9xAzWL.png" },
    { name: "BeyondTrust", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/181x112px%20banner%20aliado%20%2019%201-RiMvw7qMCUsNz5wazsjE4RlWByucWL.png" },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={181}
                  height={112}
                  className="w-full h-auto max-w-[120px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
