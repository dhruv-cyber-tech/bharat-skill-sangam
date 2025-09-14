import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star, 
  BookOpen, 
  TrendingUp,
  Award,
  Play,
  Plus,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for workshops
const featuredWorkshops = [
  {
    id: 1,
    title: "Digital Marketing Masterclass",
    instructor: "Priya Sharma",
    category: "Digital Skills",
    duration: "4 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1247,
    price: "₹2,999",
    image: "https://placehold.co/400x250/3b82f6/ffffff?text=Digital+Marketing",
    description: "Learn modern digital marketing strategies including SEO, social media, and content marketing.",
    startDate: "2024-02-15",
    location: "Online",
    isLive: true
  },
  {
    id: 2,
    title: "Traditional Pottery Techniques",
    instructor: "Rajesh Kumar",
    category: "Traditional Arts",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.9,
    students: 892,
    price: "₹1,499",
    image: "https://placehold.co/400x250/10b981/ffffff?text=Pottery",
    description: "Master the ancient art of pottery making with traditional techniques passed down through generations.",
    startDate: "2024-02-20",
    location: "Delhi, India",
    isLive: false
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    instructor: "Amit Patel",
    category: "Technology",
    duration: "12 weeks",
    level: "Beginner",
    rating: 4.7,
    students: 2156,
    price: "₹4,999",
    image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Web+Dev",
    description: "Complete web development course covering HTML, CSS, JavaScript, and modern frameworks.",
    startDate: "2024-03-01",
    location: "Mumbai, India",
    isLive: true
  },
  {
    id: 4,
    title: "Yoga & Meditation Workshop",
    instructor: "Dr. Sunita Mehta",
    category: "Wellness",
    duration: "8 weeks",
    level: "All Levels",
    rating: 4.9,
    students: 1834,
    price: "₹999",
    image: "https://placehold.co/400x250/f59e0b/ffffff?text=Yoga",
    description: "Discover inner peace and physical wellness through traditional yoga and meditation practices.",
    startDate: "2024-02-25",
    location: "Bangalore, India",
    isLive: false
  },
  {
    id: 5,
    title: "Photography Fundamentals",
    instructor: "Vikram Singh",
    category: "Creative Arts",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.6,
    students: 1456,
    price: "₹2,499",
    image: "https://placehold.co/400x250/ef4444/ffffff?text=Photography",
    description: "Learn the basics of photography, composition, lighting, and post-processing techniques.",
    startDate: "2024-03-10",
    location: "Online",
    isLive: true
  },
  {
    id: 6,
    title: "Financial Literacy for Entrepreneurs",
    instructor: "Dr. Neha Gupta",
    category: "Business",
    duration: "4 weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 987,
    price: "₹1,999",
    image: "https://placehold.co/400x250/06b6d4/ffffff?text=Finance",
    description: "Essential financial knowledge for starting and managing your own business successfully.",
    startDate: "2024-03-05",
    location: "Online",
    isLive: false
  }
];

const categories = [
  { name: "Digital Skills", count: 45, icon: "💻" },
  { name: "Traditional Arts", count: 32, icon: "🎨" },
  { name: "Technology", count: 38, icon: "⚡" },
  { name: "Wellness", count: 28, icon: "🧘" },
  { name: "Creative Arts", count: 41, icon: "🎭" },
  { name: "Business", count: 35, icon: "💼" },
  { name: "Languages", count: 22, icon: "🗣️" },
  { name: "Cooking", count: 29, icon: "👨‍🍳" }
];

const upcomingWorkshops = [
  {
    id: 7,
    title: "AI & Machine Learning Basics",
    instructor: "Dr. Ravi Verma",
    date: "2024-02-18",
    time: "10:00 AM",
    duration: "2 hours",
    location: "Online",
    price: "Free",
    spotsLeft: 15
  },
  {
    id: 8,
    title: "Sustainable Living Workshop",
    instructor: "Green Earth Foundation",
    date: "2024-02-22",
    time: "2:00 PM",
    duration: "3 hours",
    location: "Chennai, India",
    price: "₹500",
    spotsLeft: 8
  },
  {
    id: 9,
    title: "Public Speaking Mastery",
    instructor: "Anita Desai",
    date: "2024-02-25",
    time: "6:00 PM",
    duration: "2.5 hours",
    location: "Online",
    price: "₹1,200",
    spotsLeft: 23
  }
];

const Workshops = () => {
  const navigate = useNavigate();
  const { profile } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  const filteredWorkshops = featuredWorkshops.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workshop.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workshop.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || workshop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Learn from the <span className="text-primary">Best</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hands-on workshops led by expert Gurus. From traditional crafts to cutting-edge technology, 
              discover skills that transform your life and career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search workshops, instructors, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg border-2 border-border focus:border-primary"
                />
                <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <div className="flex items-center justify-center space-x-3">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-sm text-muted-foreground">Workshops</div>
                  </div>
                </div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <div className="flex items-center justify-center space-x-3">
                  <Users className="w-8 h-8 text-success" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">15,000+</div>
                    <div className="text-sm text-muted-foreground">Students</div>
                  </div>
                </div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <div className="flex items-center justify-center space-x-3">
                  <Award className="w-8 h-8 text-secondary" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">4.8</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Explore by <span className="text-primary">Category</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find workshops that match your interests and goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              className="h-auto p-4 flex flex-col items-center space-y-2"
              onClick={() => setSelectedCategory("All")}
            >
              <span className="text-2xl">🌟</span>
              <span className="text-sm font-medium">All</span>
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-center space-y-2"
                onClick={() => setSelectedCategory(category.name)}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Featured <span className="text-primary">Workshops</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Handpicked workshops from our expert Gurus
              </p>
            </div>
            <Button variant="outline" size="lg">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <Card key={workshop.id} className="group hover:shadow-lg transition-all duration-300 border-border">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {workshop.isLive && (
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                      <Play className="w-3 h-3 mr-1" />
                      Live
                    </Badge>
                  )}
                  <Badge variant="secondary" className="absolute top-3 right-3">
                    {workshop.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 line-clamp-2">{workshop.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        by {workshop.instructor}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{workshop.price}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {workshop.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {workshop.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {workshop.location}
                      </div>
                    </div>
                    <Badge variant="outline">{workshop.level}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium ml-1">{workshop.rating}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {workshop.students.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Starts {new Date(workshop.startDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Button className="w-full group">
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Upcoming <span className="text-primary">Workshops</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss these exciting upcoming sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop) => (
              <Card key={workshop.id} className="border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg mb-1">{workshop.title}</CardTitle>
                      <CardDescription>by {workshop.instructor}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {workshop.spotsLeft} spots left
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                      {new Date(workshop.date).toLocaleDateString()} at {workshop.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                      Duration: {workshop.duration}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                      {workshop.location}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">{workshop.price}</div>
                    <Button size="sm">
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Share Your Knowledge?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of expert Gurus and start teaching workshops that make a difference. 
              Share your skills, inspire others, and earn while you teach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {profile?.user_role === 'guru' ? (
                <Button 
                  variant="secondary" 
                  size="xl" 
                  className="group"
                  onClick={() => navigate('/create-workshop')}
                >
                  <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
                  Create Workshop
                </Button>
              ) : (
                <Button variant="secondary" size="xl" className="group">
                  <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
                  Become a Guru
                </Button>
              )}
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshops;
