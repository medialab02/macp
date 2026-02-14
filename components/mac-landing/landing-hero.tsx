import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustStrip } from "@/components/shared/trust-strip";
import { ArrowRight, Play } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Mac Surface Background - Subtle abstract texture */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,30,40,0.4),transparent_70%)]" />
      </div>

      {/* Neon Green Energy Pulses - Very subtle, phosphorescent */}
      <div className="pointer-events-none absolute inset-0">
        {/* Pulse 1 - Top left */}
        <div
          className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 50%, transparent 100%)'
          }}
        />

        {/* Pulse 2 - Right side */}
        <div
          className="absolute right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, rgba(34, 197, 94, 0.04) 50%, transparent 100%)',
            animation: 'float 8s ease-in-out infinite'
          }}
        />

        {/* Pulse 3 - Bottom center */}
        <div
          className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(34, 197, 94, 0.03) 50%, transparent 100%)',
            animation: 'float 10s ease-in-out infinite 2s'
          }}
        />
      </div>

      {/* Animated gradient overlay - Slow movement */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-transparent to-cyan-950/10"
          style={{ animation: 'gradient-shift 15s ease-in-out infinite alternate' }}
        />
      </div>

      {/* Subtle grid pattern for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 shadow-lg shadow-green-500/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Apple Business Partner
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl text-balance">
              Apple para empresas,{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">listo para TI</span>
            </h1>

            <p className="mb-8 text-lg text-gray-200 md:text-xl text-pretty">
              Despliegue zero-touch, gestión centralizada MDM y seguridad de nivel empresarial.
              Todo el ecosistema Apple con soporte local certificado.
            </p>

            {/* CTAs */}
            <div className="mb-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#cotizar">
                  Solicitar cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mac">
                  Ver catálogo
                </Link>
              </Button>
            </div>

            {/* Trust strip */}
            <TrustStrip variant="compact" />
          </div>

          {/* Image with glassmorphism */}
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 -z-10 translate-y-4 rounded-3xl bg-gradient-to-br from-green-500/20 via-cyan-500/10 to-transparent blur-2xl" />

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=800&fit=crop"
                alt="Apple para empresas - Equipo profesional trabajando"
                fill
                className="object-cover opacity-90 mix-blend-luminosity"
                priority
              />
              {/* Glassmorphic overlay with subtle green tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />

              {/* Soft light reflection effect */}
              <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-to-br from-white/5 to-transparent blur-2xl" />

              {/* Video play button overlay - with glassmorphism */}
              <button className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-green-500/20 backdrop-blur-md transition-all hover:scale-110 hover:border-green-400/40 hover:bg-green-500/30">
                <Play className="ml-1 h-8 w-8 text-white drop-shadow-lg" />
              </button>
            </div>

            {/* Floating card - Glassmorphic with subtle animation */}
            <div
              className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-gray-900/40 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1"
              style={{ animation: 'float-card 6s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20 shadow-lg shadow-green-500/20">
                  <svg className="h-6 w-6 text-green-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Zero-touch deploy</p>
                  <p className="text-sm text-gray-300">Configuración automática</p>
                </div>
              </div>
            </div>

            {/* Floating card 2 - Glassmorphic with subtle animation */}
            <div
              className="absolute -right-4 top-8 rounded-xl border border-white/10 bg-gray-900/40 p-4 shadow-2xl backdrop-blur-xl transition-transform hover:-translate-y-1"
              style={{ animation: 'float-card 6s ease-in-out infinite 1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20 shadow-lg shadow-cyan-500/20">
                  <svg className="h-6 w-6 text-cyan-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Seguridad nativa</p>
                  <p className="text-sm text-gray-300">FileVault + MDM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
