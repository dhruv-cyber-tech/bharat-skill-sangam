import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Gurus = () => {
  // Placeholder data for gurus
  const featuredGurus = [
    {
      id: 1,
      name: "Aanya Sharma",
      skill: "Classical Dance",
      location: "Mumbai, Maharashtra",
      imageUrl: "https://placehold.co/400x400/3498db/ffffff?text=Aanya",
    },
    {
      id: 2,
      name: "Rohan Joshi",
      skill: "Yoga & Meditation",
      location: "Rishikesh, Uttarakhand",
      imageUrl: "https://placehold.co/400x400/e74c3c/ffffff?text=Rohan",
    },
    {
      id: 3,
      name: "Priya Singh",
      skill: "Pottery",
      location: "Jaipur, Rajasthan",
      imageUrl: "https://placehold.co/400x400/2ecc71/ffffff?text=Priya",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Guru
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with experienced and passionate Gurus from your community.
            </p>
          </div>
        </section>

        {/* Featured Gurus Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Gurus</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredGurus.map((guru) => (
                <Card key={guru.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      src={guru.imageUrl}
                      alt={guru.name}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-semibold mb-2">
                      {guru.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-primary mb-2">
                      {guru.skill}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {guru.location}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gurus;