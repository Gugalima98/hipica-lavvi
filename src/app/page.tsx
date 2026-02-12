import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { PropertyTeaser } from "@/components/sections/PropertyTeaser";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { FloorPlans } from "@/components/sections/FloorPlans";
import { ContactForm } from "@/components/forms/ContactForm";
import { LocationMap } from "@/components/sections/LocationMap";
import { BigNumbers } from "@/components/sections/BigNumbers";
import { ProjectTeaser } from "@/components/sections/ProjectTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <BigNumbers />
      <ProjectTeaser />
      <Highlights />
      <FloorPlans />
      <LifestyleGallery />
      <AboutTeaser />
      <PropertyTeaser />

      <section className="py-24 bg-muted relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-primary rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-medium tracking-[0.2em] text-secondary uppercase mb-3">Localização Privilegiada</h2>
              <h3 className="text-4xl font-serif font-light text-primary mb-6">
                Onde a Natureza Encontra a <span className="italic font-medium">Urbanidade</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg font-light">
                Viva ao lado da Hípica de Santo Amaro, com fácil acesso às principais vias da cidade e cercado por uma infraestrutura completa de serviços e lazer.
              </p>
              <div className="mt-8">
                <LocationMap />
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-3xl border border-white/40 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
