import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactOptions } from "@/components/contact/contact-options";
import { ContactInfo } from "@/components/contact/contact-info";

export const metadata = {
  title: "Contacto Empresarial | MacPower - Apple Business Partner",
  description: "Contacta a nuestro equipo de ventas empresariales. Cotizaciones, asesoría y soporte para tu proyecto de Mac en empresa.",
};

export default function ContactoEmpresasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Hablemos de tu proyecto
              </h1>
              <p className="text-xl text-muted-foreground">
                Nuestro equipo de especialistas está listo para ayudarte a transformar 
                tu empresa con soluciones Apple. Elige cómo prefieres contactarnos.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 -mt-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <ContactOptions />
          </div>
        </section>

        {/* Main Content: Form + Info */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form - Takes 3 columns */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              
              {/* Info - Takes 2 columns */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
