import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import FeatureFlow from "@/components/home/FeatureFlow";
import EngineeringPillarsSection from "@/components/home/EngineeringPillarsSection";
import FormAnalyticsPreviewSection from "@/components/home/FormAnalyticsPreviewSection";
import EvolutionSection from "@/components/home/EvolutionSection";
import PricingSection from "@/components/pricing/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <HeroSection />

      <div className="max-w-full mx-auto px-4 sm:px-6 space-y-20 w-full py-16">
        <FeatureFlow />
        <FeaturesSection />
        <EngineeringPillarsSection />
        <FormAnalyticsPreviewSection />
        <HowItWorks />
        <EvolutionSection />
        <PricingSection />
        <TestimonialsSection></TestimonialsSection>
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
}
