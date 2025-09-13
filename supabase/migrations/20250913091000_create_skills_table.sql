CREATE TABLE public.skills (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  image TEXT,
  price NUMERIC,
  duration TEXT,
  group_size INTEGER,
  guru_name TEXT,
  guru_avatar TEXT,
  guru_rating NUMERIC,
  guru_review_count INTEGER,
  guru_location TEXT,
  guru_distance TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public skills are viewable by everyone"
ON public.skills
FOR SELECT
USING (true);