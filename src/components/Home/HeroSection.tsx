import { Button } from "@/components/ui/button";
import { Search, MapPin, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="BharatSkill Connect - Local skill exchange"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">Connect.</span>
              <br />
              <span className="text-primary">Learn.</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Grow.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Discover local <span className="text-primary font-semibold">Gurus</span> and 
              connect with skilled <span className="text-secondary font-semibold">Shishyas</span> in 
              your neighborhood. Share knowledge, build community, create opportunities.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="xl" className="group">
              <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Find Local Skills
            </Button>
            <Button variant="guru" size="xl" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:bounce transition-transform" />
              Become a Guru
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">5,000+</div>
                  <div className="text-sm text-muted-foreground">Skilled Gurus</div>
                </div>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50 shadow-card">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Cities & Towns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 opacity-20">
        <div className="w-32 h-32 bg-gradient-primary rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-1/4 right-1/4 opacity-10">
        <div className="w-20 h-20 bg-gradient-hero rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default HeroSection;