import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Start Your
            <br />
            <span className="text-primary-glow">Learning Journey?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of Gurus and Shishyas building skills, 
            sharing knowledge, and creating opportunities in their communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              variant="secondary" 
              size="xl" 
              className="group bg-white text-secondary hover:bg-white/90 shadow-glow"
            >
              <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Find Skills to Learn
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="group border-white text-white hover:bg-white hover:text-secondary"
            >
              <Award className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              Become a Guru
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Active Learners</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5K+</div>
              <div className="text-white/80">Expert Gurus</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">25K+</div>
              <div className="text-white/80">Skills Shared</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;