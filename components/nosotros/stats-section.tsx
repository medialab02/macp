export function StatsSection() {
  const stats = [
    { value: "00 +", label: "Años experiencia" },
    { value: "00", label: "Países" },
    { value: "0000 +", label: "Clientes" },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/70">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
