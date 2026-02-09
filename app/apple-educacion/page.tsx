import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EducationHero } from "@/components/apple-education/education-hero";
import { EducationEcosystem } from "@/components/apple-education/education-ecosystem";
import { EducationHowWeDoIt } from "@/components/apple-education/education-how-we-do-it";
import { EducationServices } from "@/components/apple-education/education-services";
import { EducationBenefits } from "@/components/apple-education/education-benefits";
import { EducationTarget } from "@/components/apple-education/education-target";

export const metadata = {
  title: "Apple para Educación | MacPower - Apple Business Partner",
  description: "Soluciones Apple para instituciones educativas. Apple School Manager, MDM, apps especializadas y capacitación docente.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <EducationHero />
        <EducationEcosystem />
        <EducationHowWeDoIt />
        <EducationServices />
        <EducationBenefits />
        <EducationTarget />
      </main>
      <Footer />
    </div>
  );
}
