
import { Link } from "react-router-dom";
import { Globe, Instagram, Twitter, Facebook } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:underline">Help Center</Link></li>
              <li><Link to="#" className="hover:underline">AirCover</Link></li>
              <li><Link to="#" className="hover:underline">Safety information</Link></li>
              <li><Link to="#" className="hover:underline">Supporting people with disabilities</Link></li>
              <li><Link to="#" className="hover:underline">Cancellation options</Link></li>
              <li><Link to="#" className="hover:underline">Report a concern</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:underline">Aurora Stays for Work</Link></li>
              <li><Link to="#" className="hover:underline">Gift cards</Link></li>
              <li><Link to="#" className="hover:underline">Referrals</Link></li>
              <li><Link to="#" className="hover:underline">Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:underline">List your property</Link></li>
              <li><Link to="#" className="hover:underline">AuroraCovers for Hosts</Link></li>
              <li><Link to="#" className="hover:underline">Hosting resources</Link></li>
              <li><Link to="#" className="hover:underline">Community forum</Link></li>
              <li><Link to="#" className="hover:underline">How to host responsibly</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Aurora Stays</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:underline">About</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Press</Link></li>
              <li><Link to="#" className="hover:underline">Investors</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-muted-foreground">© 2023 Aurora Stays, Inc.</span>
            <span className="text-sm text-muted-foreground">·</span>
            <Link to="#" className="text-sm text-muted-foreground hover:underline">Privacy</Link>
            <span className="text-sm text-muted-foreground">·</span>
            <Link to="#" className="text-sm text-muted-foreground hover:underline">Terms</Link>
            <span className="text-sm text-muted-foreground">·</span>
            <Link to="#" className="text-sm text-muted-foreground hover:underline">Sitemap</Link>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <span className="text-sm">English (US)</span>
            </div>
            
            <ThemeToggle />
            
            <div className="flex gap-3">
              <Link to="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
