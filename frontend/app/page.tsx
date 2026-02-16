import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
