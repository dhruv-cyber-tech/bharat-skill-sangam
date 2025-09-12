import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users, Heart } from "lucide-react";
import { useState } from "react";

interface SkillCardProps {
  title: string;
  guru: {
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
    location: string;
    distance: string;
  };
  category: string;
  description: string;
  price: string | null;
  duration: string;
  groupSize: number;
  image: string;
  tags: string[];
}

const SkillCard = ({ title, guru, category, description, price, duration, groupSize, image, tags }: SkillCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-card rounded-xl shadow-card border border-border hover:shadow-soft transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
        
        {/* Favorite Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
        </Button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
        
        {/* Guru Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src={guru.avatar} 
            alt={guru.name}
            className="w-10 h-10 rounded-full object-cover border-2 border-border"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-foreground truncate">{guru.name}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{guru.rating}</span>
                <span className="text-xs text-muted-foreground">({guru.reviewCount})</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{guru.location} • {guru.distance}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-muted-foreground px-2 py-1">
              +{tags.length - 3} more
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Max {groupSize}</span>
            </div>
          </div>
          <div className="font-semibold text-foreground">
            {price ? `₹${price}` : 'Free'}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" className="flex-1">
            View Details
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Connect Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;