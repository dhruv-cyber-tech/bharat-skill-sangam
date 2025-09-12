import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedSkills = () => {
  const featuredSkills = [
    {
      title: "Traditional Indian Cooking & Spices",
      guru: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        reviewCount: 127,
        location: "Delhi",
        distance: "2.5 km"
      },
      category: "Culinary Arts",
      description: "Learn authentic Indian cooking techniques, spice combinations, and family recipes passed down through generations.",
      price: "500",
      duration: "2 hours",
      groupSize: 6,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      tags: ["Traditional", "Spices", "Family Recipes", "Authentic"]
    },
    {
      title: "Digital Marketing for Small Business",
      guru: {
        name: "Rajesh Kumar",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 4.8,
        reviewCount: 89,
        location: "Mumbai",
        distance: "1.2 km"
      },
      category: "Digital Skills",
      description: "Master social media marketing, SEO basics, and online advertising to grow your local business effectively.",
      price: "800",
      duration: "3 hours",
      groupSize: 8,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["SEO", "Social Media", "Business Growth", "Online Marketing"]
    },
    {
      title: "Yoga & Meditation for Beginners",
      guru: {
        name: "Anita Devi",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        reviewCount: 156,
        location: "Bangalore",
        distance: "800m"
      },
      category: "Wellness",
      description: "Find inner peace and physical wellness through traditional yoga practices and guided meditation sessions.",
      price: null,
      duration: "1.5 hours",
      groupSize: 12,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      tags: ["Yoga", "Meditation", "Wellness", "Beginner-Friendly"]
    },
    {
      title: "Handicraft & Pottery Making",
      guru: {
        name: "Suresh Patel",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 4.7,
        reviewCount: 73,
        location: "Jaipur",
        distance: "3.1 km"
      },
      category: "Traditional Arts",
      description: "Create beautiful pottery and handicrafts using traditional techniques and modern tools for contemporary designs.",
      price: "600",
      duration: "2.5 hours",
      groupSize: 4,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tags: ["Pottery", "Handicraft", "Traditional", "Art"]
    },
    {
      title: "Smartphone Photography Mastery",
      guru: {
        name: "Kavya Singh",
        avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
        rating: 4.8,
        reviewCount: 94,
        location: "Chennai",
        distance: "1.8 km"
      },
      category: "Photography",
      description: "Transform your smartphone into a powerful camera and learn composition, lighting, and editing techniques.",
      price: "400",
      duration: "2 hours",
      groupSize: 10,
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400&h=300&fit=crop",
      tags: ["Photography", "Mobile", "Editing", "Creative"]
    },
    {
      title: "Organic Vegetable Gardening",
      guru: {
        name: "Ramesh Gupta",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        reviewCount: 112,
        location: "Pune",
        distance: "2.3 km"
      },
      category: "Sustainable Living",
      description: "Grow your own organic vegetables at home using sustainable methods and natural pest control techniques.",
      price: "300",
      duration: "1.5 hours",
      groupSize: 8,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      tags: ["Organic", "Gardening", "Sustainable", "Home Growing"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing skills from expert Gurus in your neighborhood. 
            From traditional arts to modern digital skills.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            Explore All Skills
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;