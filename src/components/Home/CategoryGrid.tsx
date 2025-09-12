import { 
  Code, 
  Palette, 
  Music, 
  Utensils, 
  Dumbbell, 
  BookOpen, 
  Wrench, 
  Languages,
  Camera,
  Leaf,
  Heart,
  Briefcase
} from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    {
      name: "Technology & Programming",
      icon: Code,
      skillCount: "1,200+",
      color: "bg-gradient-to-br from-blue-500 to-purple-600",
      description: "Web development, mobile apps, AI/ML"
    },
    {
      name: "Arts & Design",
      icon: Palette,
      skillCount: "800+",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      description: "Digital art, traditional crafts, UI/UX"
    },
    {
      name: "Music & Performance",
      icon: Music,
      skillCount: "650+",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      description: "Instruments, vocals, dance, theater"
    },
    {
      name: "Culinary Arts",
      icon: Utensils,
      skillCount: "920+",
      color: "bg-gradient-to-br from-orange-500 to-red-600",
      description: "Cooking, baking, regional cuisines"
    },
    {
      name: "Fitness & Sports",
      icon: Dumbbell,
      skillCount: "540+",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      description: "Yoga, fitness training, sports coaching"
    },
    {
      name: "Academic Subjects",
      icon: BookOpen,
      skillCount: "2,100+",
      color: "bg-gradient-to-br from-blue-600 to-cyan-600",
      description: "Mathematics, sciences, languages"
    },
    {
      name: "Handyman & Repair",
      icon: Wrench,
      skillCount: "380+",
      color: "bg-gradient-to-br from-gray-600 to-slate-700",
      description: "Home repair, electronics, mechanics"
    },
    {
      name: "Language Exchange",
      icon: Languages,
      skillCount: "750+",
      color: "bg-gradient-to-br from-teal-500 to-cyan-600",
      description: "English, Hindi, regional languages"
    },
    {
      name: "Photography",
      icon: Camera,
      skillCount: "420+",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
      description: "Portrait, wedding, product photography"
    },
    {
      name: "Sustainable Living",
      icon: Leaf,
      skillCount: "310+",
      color: "bg-gradient-to-br from-green-600 to-lime-600",
      description: "Gardening, eco-friendly practices"
    },
    {
      name: "Health & Wellness",
      icon: Heart,
      skillCount: "680+",
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      description: "Meditation, therapy, nutrition"
    },
    {
      name: "Business Skills",
      icon: Briefcase,
      skillCount: "890+",
      color: "bg-gradient-to-br from-indigo-600 to-blue-700",
      description: "Marketing, finance, entrepreneurship"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skill <span className="text-primary">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore diverse skill categories and find the perfect learning opportunity
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-card border border-border hover:shadow-soft transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                {/* Icon and Count */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {category.skillCount}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-success transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;