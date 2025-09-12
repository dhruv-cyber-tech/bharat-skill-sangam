import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BS</span>
              </div>
              <span className="font-bold text-2xl">BharatSkill Connect</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              Empowering communities through skill sharing. Connect with local Gurus, 
              learn new skills, and build meaningful relationships in your neighborhood.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary hover:bg-background/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Browse Skills</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Find Gurus</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Workshops</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">GramSeva</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Safety</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-background/80">support@bharatskillconnect.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-background/80">+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-background/80">Available across India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/70 text-sm">
              © 2024 BharatSkill Connect. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-background/70 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Bharat</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;