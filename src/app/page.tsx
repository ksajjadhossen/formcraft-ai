import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <FAQSection />
      <CTASection />
    </div>
  );
}
