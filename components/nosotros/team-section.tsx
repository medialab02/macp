import Image from "next/image";

export function TeamSection() {
  const team = [
    {
      name: "David Alejandro Daza Delgado",
      role: "CEO (Chief Executive Officer)",
      image: "/images/nosotros/team/david-daza.jpg"
    },
    {
      name: "Juan Felipe Galindo Vargas",
      role: "CSMO (Chief Sales and Marketing Officer)",
      image: "/images/nosotros/team/juan-felipe-galindo.jpg"
    },
    {
      name: "Juan Camilo Galindo Vargas",
      role: "CFO (Chief Financial Officer)",
      image: "/images/nosotros/team/juan-camilo-galindo.jpg"
    },
    {
      name: "Juan Carlos Carranza Martinez",
      role: "Country Manager, Colombia",
      image: "/images/nosotros/team/juan-carlos-carranza.jpg"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Talento que transforma ideas en soluciones, comprometidos para hacer que las cosas pasen.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-border/50 group-hover:border-accent/50 transition-all shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
