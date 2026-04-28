import { FeatureGrid } from "../components/FeatureGrid";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";

/** View pública de apresentação do produto (rota `/`). */
export function MarketingView() {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
