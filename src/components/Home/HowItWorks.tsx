import { Search, MessageCircle, Star, HandHeart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover Skills",
      description: "Browse skills by category or search for specific abilities in your local area. Use location filters to find nearby Gurus.",
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "Connect & Chat",
      description: "Message Gurus directly to discuss your learning goals, schedule sessions, and ask any questions about the skill.",
      color: "secondary"
    },
    {
      icon: HandHeart,
      title: "Learn Together",
      description: "Attend sessions, workshops, or one-on-one learning experiences. Build meaningful connections in your community.",
      color: "success"
    },
    {
      icon: Star,
      title: "Share Experience",
      description: "Rate and review your learning experience. Help others discover amazing Gurus and build trust in the community.",
      color: "primary"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple steps to connect with local skill experts and start your learning journey
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className={`
                w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center
                ${step.color === 'primary' ? 'bg-gradient-primary' : 
                  step.color === 'secondary' ? 'bg-secondary' : 
                  'bg-success'} 
                shadow-soft group-hover:shadow-glow transition-all duration-300 transform group-hover:scale-110
              `}>
                <step.icon className="w-10 h-10 text-white" />
              </div>

              {/* Step Number */}
              <div className="flex items-center justify-center mb-4">
                <span className="bg-muted text-muted-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Connecting Lines - Hidden on mobile */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="absolute top-10 left-1/4 right-3/4 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
          <div className="absolute top-10 left-2/4 right-1/4 h-0.5 bg-gradient-to-r from-secondary to-success"></div>
          <div className="absolute top-10 left-3/4 right-0 h-0.5 bg-gradient-to-r from-success to-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;