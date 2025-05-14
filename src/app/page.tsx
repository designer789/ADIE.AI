import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ProductAdvantages from "@/components/ProductAdvantages";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative">
        <Hero />
        <Features />
        <ProductAdvantages />
        <Tokenomics />
        <Roadmap />
        <FAQ />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  );
}
