import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorks from "@/components/home/HowItWorks";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import FeatureFlow from "@/components/home/FeatureFlow";
import EngineeringPillarsSection from "@/components/home/EngineeringPillarsSection";
import FormAnalyticsPreviewSection from "@/components/home/FormAnalyticsPreviewSection";

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
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
}
