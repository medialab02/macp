import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/shared/sticky-cta";

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
