// src/components/Home/FeaturedSkills.tsx

import { useState, useEffect } from 'react';
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';

const FeaturedSkills = () => {
  const [featuredSkills, setFeaturedSkills] = useState<Tables<'skills'>[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from('skills').select('*').limit(6);
      if (error) {
        console.error('Error fetching skills:', error);
      } else {
        setFeaturedSkills(data);
      }
    };

    fetchSkills();
  }, []);

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
          {featuredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
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