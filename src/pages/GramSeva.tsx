import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection"; // Reusing for similar style
import { Button } from "@/components/ui/button";

// Placeholder data for projects
const featuredProjects = [
  {
    id: 1,
    title: "Digital Literacy for Village Elders",
    location: "Anand, Gujarat",
    description: "Teaching basic computer and smartphone skills to senior citizens.",
    imageUrl: "https://placehold.co/600x400/3498db/ffffff?text=Project+1",
  },
  {
    id: 2,
    title: "Handicraft Skill Workshop",
    location: "Kutch, Gujarat",
    description: "Empowering local artisans by teaching new techniques and business skills.",
    imageUrl: "https://placehold.co/600x400/e74c3c/ffffff?text=Project+2",
  },
  {
    id: 3,
    title: "Sustainable Farming Initiative",
    location: "Nashik, Maharashtra",
    description: "Introducing organic farming methods to improve crop yield and soil health.",
    imageUrl: "https://placehold.co/600x400/2ecc71/ffffff?text=Project+3",
  },
];

const GramSeva = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20 text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Villages Through Skill Sharing</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                    Join our GramSeva initiatives to bring valuable skills and opportunities to rural communities across Bharat.
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="hero" size="xl">View Projects</Button>
                    <Button variant="outline" size="xl">Volunteer Now</Button>
                </div>
            </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project) => (
                        <div key={project.id} className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm font-medium text-primary mb-2">{project.location}</p>
                                <p className="text-muted-foreground text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// This is the line that was missing
export default GramSeva;
