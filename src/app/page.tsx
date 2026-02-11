import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { PropertyTeaser } from "@/components/sections/PropertyTeaser";
import { Location } from "@/components/sections/Location";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <AboutTeaser />
        <PropertyTeaser />
        <Location />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
