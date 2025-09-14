// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from "../components/Layout/Header";
// import Footer from "../components/Layout/Footer";
// import { Button } from "../components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import { Badge } from "../components/ui/badge";
// import { useAuth } from '../contexts/AuthContext';
// import { supabase } from '../integrations/supabase/client';
// import { toast } from '../hooks/use-toast';
// import { WorkshopForm } from '../components/Workshops/WorkshopForm';
// import { 
//   Save, 
//   Eye, 
//   ArrowLeft,
//   Clock,
//   Users,
//   Monitor,
//   Home,
//   Link as LinkIcon
// } from "lucide-react";

// // Define the form data structure
// interface WorkshopFormData {
//     title: string;
//     description: string;
//     category: string;
//     price: string;
//     duration: string;
//     maxParticipants: string;
//     mode: 'online' | 'offline' | 'hybrid' | '';
//     location: string;
//     meetingLink: string;
//     startDate: string;
//     endDate: string;
//     startTime: string;
//     endTime: string;
//     timezone: string;
//     requirements: string;
//     materialsNeeded: string;
//     skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'all' | '';
//     tags: string[];
// }

// // Constants for select dropdowns
// const CATEGORIES = ['Digital Skills', 'Traditional Arts', 'Technology', 'Wellness', 'Creative Arts', 'Business', 'Languages', 'Cooking', 'Photography', 'Music', 'Dance', 'Fitness', 'Other'];
// const TIMEZONES = ['Asia/Kolkata', 'Asia/Dubai', 'Europe/London', 'America/New_York', 'America/Los_Angeles'];

// const CreateWorkshop = () => {
//   const navigate = useNavigate();
//   const { user, profile } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [tagInput, setTagInput] = useState('');
  
//   const [formData, setFormData] = useState<WorkshopFormData>({
//     title: '', description: '', category: '', price: '', duration: '',
//     maxParticipants: '', mode: '', location: '', meetingLink: '',
//     startDate: '', endDate: '', startTime: '', endTime: '',
//     timezone: 'Asia/Kolkata', requirements: '', materialsNeeded: '',
//     skillLevel: '', tags: []
//   });

//   const handleSubmit = async (status: 'draft' | 'published') => {
//     if (!user || !profile) {
//       toast({ title: "Authentication required", description: "Please sign in to create a workshop.", variant: "destructive" });
//       return;
//     }
//     if (profile.user_role !== 'guru') {
//       toast({ title: "Access denied", description: "Only Gurus can create workshops.", variant: "destructive" });
//       return;
//     }
//     if (!formData.title.trim() || !formData.description.trim() || !formData.category || !formData.mode) {
//       toast({ title: "Missing required fields", description: "Please fill out Title, Description, Category, and Mode.", variant: "destructive" });
//       return;
//     }

//     setLoading(true);
//     try {
//       const workshopData = {
//         title: formData.title,
//         description: formData.description,
//         category: formData.category,
//         price: formData.price ? parseFloat(formData.price) : null,
//         duration: formData.duration || null,
//         max_participants: formData.maxParticipants ? parseInt(formData.maxParticipants) : null,
//         mode: formData.mode,
//         location: (formData.mode === 'offline' || formData.mode === 'hybrid') ? formData.location : null,
//         meeting_link: (formData.mode === 'online' || formData.mode === 'hybrid') ? formData.meetingLink : null,
//         start_date: formData.startDate || null,
//         end_date: formData.endDate || null,
//         start_time: formData.startTime || null,
//         end_time: formData.endTime || null,
//         timezone: formData.timezone,
//         requirements: formData.requirements || null,
//         materials_needed: formData.materialsNeeded || null,
//         skill_level: formData.skillLevel || null,
//         tags: formData.tags.length > 0 ? formData.tags : null,
//         status: status,
//         guru_id: user.id,
//         guru_name: profile.full_name || 'Unnamed Guru',
//         guru_avatar: profile.avatar_url,
//       };

//       const { data, error } = await supabase.from('workshops').insert([workshopData]).select().single();

//       if (error) throw error;

//       toast({ title: `Workshop ${status}!`, description: "Your workshop has been saved." });
//       navigate(`/workshops/${data.id}`);

//     } catch (error: any) {
//       console.error('Error creating workshop:', error);
//       toast({ title: "Error creating workshop", description: error.message, variant: "destructive" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user || profile?.user_role !== 'guru') {
//     return (
//       <div className="flex flex-col min-h-screen">
//         <Header />
//         <main className="container mx-auto px-4 py-16 flex-grow flex items-center justify-center">
//           <div className="max-w-2xl mx-auto text-center">
//             <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
//             <p className="text-xl text-muted-foreground mb-8">Only Gurus can create workshops. Please sign in with a Guru account.</p>
//             <Button onClick={() => navigate('/auth')}>Sign In</Button>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <div className="mb-8">
//           <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back
//           </Button>
//           <h1 className="text-4xl font-bold mb-2">Create New <span className="text-primary">Workshop</span></h1>
//           <p className="text-xl text-muted-foreground">Share your knowledge and skills with eager learners</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2">
//              <WorkshopForm 
//                 formData={formData}
//                 setFormData={setFormData}
//                 tagInput={tagInput}
//                 setTagInput={setTagInput}
//                 categories={CATEGORIES}
//                 timezones={TIMEZONES}
//              />
//           </div>

//           <aside className="space-y-6">
//             <Card>
//               <CardHeader><CardTitle>Actions</CardTitle></CardHeader>
//               <CardContent className="space-y-3">
//                 <Button onClick={() => handleSubmit('published')} disabled={loading} className="w-full" size="lg">
//                   <Eye className="w-4 h-4 mr-2" />
//                   {loading ? 'Publishing...' : 'Publish Workshop'}
//                 </Button>
//                 <Button onClick={() => handleSubmit('draft')} disabled={loading} variant="outline" className="w-full" size="lg">
//                   <Save className="w-4 h-4 mr-2" />
//                   {loading ? 'Saving...' : 'Save as Draft'}
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                   <CardTitle>Preview</CardTitle>
//                   <CardDescription>How your workshop will appear</CardDescription>
//               </CardHeader>
//               <CardContent>
//                   <div className="space-y-3">
//                       <h3 className="font-semibold text-lg">{formData.title || 'Workshop Title'}</h3>
//                       <p className="text-sm text-muted-foreground">by {profile?.full_name || 'You'}</p>
//                       {formData.category && <Badge variant="secondary">{formData.category}</Badge>}
//                       {formData.price && <div className="text-2xl font-bold text-primary">₹{formData.price}</div>}
//                       <div className="text-sm space-y-1 text-muted-foreground">
//                           {formData.duration && <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />{formData.duration}</div>}
//                           {formData.maxParticipants && <div className="flex items-center"><Users className="w-4 h-4 mr-2" />Max {formData.maxParticipants} participants</div>}
//                           {formData.mode && <div className="flex items-center">
//                                 {formData.mode === 'online' && <Monitor className="w-4 h-4 mr-2" />}
//                                 {formData.mode === 'offline' && <Home className="w-4 h-4 mr-2" />}
//                                 {formData.mode === 'hybrid' && <LinkIcon className="w-4 h-4 mr-2" />}
//                                 {formData.mode.charAt(0).toUpperCase() + formData.mode.slice(1)}
//                             </div>}
//                       </div>
//                   </div>
//               </CardContent>
//             </Card>
//           </aside>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default CreateWorkshop;

