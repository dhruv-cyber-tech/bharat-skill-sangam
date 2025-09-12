import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Bell } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BS</span>
          </div>
          <span className="font-bold text-xl text-foreground">BharatSkill</span>
          <span className="text-primary font-semibold">Connect</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Browse Skills</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Find Gurus</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Workshops</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">GramSeva</a>
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
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="hero" size="lg">Become a Guru</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Browse Skills</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Find Gurus</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Workshops</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">GramSeva</a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="outline" size="lg" className="w-full">Sign In</Button>
              <Button variant="hero" size="lg" className="w-full">Become a Guru</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;