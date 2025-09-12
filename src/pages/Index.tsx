import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import FeaturedSkills from "@/components/Home/FeaturedSkills";
import CategoryGrid from "@/components/Home/CategoryGrid";
import HowItWorks from "@/components/Home/HowItWorks";
import CTASection from "@/components/Home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedSkills />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
