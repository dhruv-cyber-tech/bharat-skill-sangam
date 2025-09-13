// src/components/Home/SkillCard.tsx

import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users, Heart } from "lucide-react";
import { useState } from "react";
import { Tables } from '@/integrations/supabase/types';

interface SkillCardProps {
  skill: Tables<'skills'>;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-card rounded-xl shadow-card border border-border hover:shadow-soft transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={skill.image || ''}
          alt={skill.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {skill.category}
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
        <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{skill.title}</h3>

        {/* Guru Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={skill.guru_avatar || ''}
            alt={skill.guru_name || ''}
            className="w-10 h-10 rounded-full object-cover border-2 border-border"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-foreground truncate">{skill.guru_name}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{skill.guru_rating}</span>
                <span className="text-xs text-muted-foreground">({skill.guru_review_count})</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <MapPin className="w-3 h-3 mr-1" />
              <span>{skill.guru_location} • {skill.guru_distance}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{skill.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skill.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
          {skill.tags && skill.tags.length > 3 && (
            <span className="text-xs text-muted-foreground px-2 py-1">
              +{skill.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{skill.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Max {skill.group_size}</span>
            </div>
          </div>
          <div className="font-semibold text-foreground">
            {skill.price ? `₹${skill.price}` : 'Free'}
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