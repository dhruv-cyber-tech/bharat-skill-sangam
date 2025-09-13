// src/components/Home/FeaturedSkills.tsx

import { useState, useEffect } from 'react';
import SkillCard from "./SkillCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedSkills = () => {
  const [featuredSkills, setFeaturedSkills] = useState<Tables<'skills'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('skills').select('*').limit(6);
      if (error) {
        console.error('Error fetching skills:', error);
        setError('Could not fetch the featured skills.');
      } else {
        setFeaturedSkills(data);
      }
      setLoading(false);
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

        {/* Loading and Error States */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-xl shadow-card border border-border p-6">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-center text-destructive">{error}</p>}

        {/* Skills Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        )}

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