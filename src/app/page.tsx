import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20 w-full py-16">
        <FeaturesSection />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
}
