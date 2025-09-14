import { useState, useEffect } from 'react';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SkillCard from "@/components/Home/SkillCard";
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import { Skeleton } from "@/components/ui/skeleton";

const Skills = () => {
  const [skills, setSkills] = useState<Tables<'skills'>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('skills').select('*');
      
      if (error) {
        console.error('Error fetching skills:', error);
        setError('Could not fetch the skills at this time.');
      } else {
        setSkills(data);
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Skills
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover a wide range of skills offered by passionate Gurus in your community.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">All Available Skills</h2>
            </div>

            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-xl shadow-card border border-border p-6">
                    <Skeleton className="h-48 w-full mb-4" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))}
              </div>
            )}

            {error && <p className="text-center text-destructive">{error}</p>}

            {!loading && !error && (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;