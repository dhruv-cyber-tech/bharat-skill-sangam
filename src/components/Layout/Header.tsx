import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Bell, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BS</span>
          </div>
          <span className="font-bold text-xl text-foreground">BharatSkill</span>
          <span className="text-primary font-semibold">Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/skills" // Example link
            className="text-foreground hover:text-primary transition-colors"
          >
            Browse Skills
          </Link>
          <Link
            to="/gurus" // Example link
            className="text-foreground hover:text-primary transition-colors"
          >
            Find Gurus
          </Link>
          <Link
            to="/workshops" // Example link
            className="text-foreground hover:text-primary transition-colors"
          >
            Workshops
          </Link>
          <Link
            to="/gramseva" // Changed from <a> to <Link>
            className="text-foreground hover:text-primary transition-colors"
          >
            GramSeva
          </Link>
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search skills, gurus, or workshops..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {loading ? (
            <Skeleton className="h-8 w-24" />
          ) : user && profile ? (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {profile ? (
                    <>
                      <DropdownMenuItem className="flex flex-col items-start">
                        <div className="font-medium">
                          {profile.full_name || user.email}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {profile.user_role || "User"}
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={signOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign out</span>
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <DropdownMenuItem>
                      <Skeleton className="h-5 w-full" />
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              {profile.user_role !== "guru" && (
                <Button variant="hero" size="lg">
                  Become a Guru
                </Button>
              )}
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
              <Button variant="hero" size="lg" onClick={() => navigate("/auth")}>
                Join Now
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search skills, gurus..."
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/skills" className="text-foreground hover:text-primary transition-colors py-2">Browse Skills</Link>
              <Link to="/gurus" className="text-foreground hover:text-primary transition-colors py-2">Find Gurus</Link>
              <Link to="/workshops" className="text-foreground hover:text-primary transition-colors py-2">Workshops</Link>
              <Link to="/gramseva" className="text-foreground hover:text-primary transition-colors py-2">GramSeva</Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              {user ? (
                <>
                  <div className="text-sm text-foreground">
                    <div className="font-medium">
                      {profile?.full_name || user.email}
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {profile?.user_role || "User"}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={signOut}
                  >
                    Sign Out
                  </Button>
                  {profile?.user_role !== "guru" && (
                    <Button variant="hero" size="lg" className="w-full">
                      Become a Guru
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => navigate("/auth")}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => navigate("/auth")}
                  >
                    Join Now
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;