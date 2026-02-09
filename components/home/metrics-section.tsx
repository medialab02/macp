import Image from "next/image";

export function MetricsSection() {
  return (
    <section className="relative -mt-6 z-10 mx-auto max-w-6xl px-4 lg:px-6">
      <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-card to-primary/10 p-1">
        <div className="rounded-xl bg-card px-6 py-8 md:px-12 md:py-10">
          <div className="relative w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7HXHmRY2MMLK4uPaXTauUmeeHQvdBg.png"
              alt="Hitos Corporativos - +15M USD ventas anuales, +25 años de experiencia, +1000 proyectos ejecutados, 8 países en la región"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
