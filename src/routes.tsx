import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import GramSeva from "./pages/GramSeva";
import Skills from "./pages/Skills";
import Gurus from "./pages/Gurus";
import Workshops from "./pages/Workshops";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/auth", element: <Auth /> },
  { path: "/gramseva", element: <GramSeva /> },
  { path: "/skills", element: <Skills /> },
  { path: "/gurus", element: <Gurus /> },
  { path: "/workshops", element: <Workshops /> },
  { path: "*", element: <NotFound /> },
];