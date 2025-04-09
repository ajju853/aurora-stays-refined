
import { Link } from "react-router-dom";
import { Globe, Instagram, Twitter, Facebook } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { toast } from "sonner";

export function Footer() {
  const handleLinkClick = (section: string, item: string) => {
    // Prevent default navigation since these are placeholder links
    
    // Enhanced toast messages for Aurora Stays section
    if (section === "Aurora Stays") {
      switch (item) {
        case "About":
          toast.info("About Aurora Stays", {
            description: "Founded in 2020, Aurora Stays revolutionized the way people travel by connecting guests with unique accommodations around the world.",
            duration: 5000
          });
          break;
        case "Careers":
          toast.info("Join Our Team", {
            description: "We're always looking for talented individuals. Discover exciting opportunities across technology, design, customer service, and more.",
            duration: 5000
          });
          break;
        case "Press":
          toast.info("Aurora Stays Press Room", {
            description: "Get the latest news, updates, and media resources from the Aurora Stays press team. Contact press@aurorastays.com for inquiries.",
            duration: 5000
          });
          break;
        case "Investors":
          toast.info("Investor Relations", {
            description: "Aurora Stays is committed to creating long-term value for our shareholders. Access financial reports, presentations, and governance information.",
            duration: 5000
          });
          break;
        default:
          toast.info(`Navigating to ${section}: ${item}`, {
            description: "This would navigate to the actual page in a production app."
          });
      }
    } else {
      toast.info(`Navigating to ${section}: ${item}`, {
        description: "This would navigate to the actual page in a production app."
      });
    }
  };

  return (
    <footer className="bg-background border-t py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => handleLinkClick("Support", "Help Center")} className="hover:underline hover:text-primary transition-colors">Help Center</button></li>
              <li><button onClick={() => handleLinkClick("Support", "AirCover")} className="hover:underline hover:text-primary transition-colors">AirCover</button></li>
              <li><button onClick={() => handleLinkClick("Support", "Safety information")} className="hover:underline hover:text-primary transition-colors">Safety information</button></li>
              <li><button onClick={() => handleLinkClick("Support", "Supporting people with disabilities")} className="hover:underline hover:text-primary transition-colors">Supporting people with disabilities</button></li>
              <li><button onClick={() => handleLinkClick("Support", "Cancellation options")} className="hover:underline hover:text-primary transition-colors">Cancellation options</button></li>
              <li><button onClick={() => handleLinkClick("Support", "Report a concern")} className="hover:underline hover:text-primary transition-colors">Report a concern</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => handleLinkClick("Community", "Aurora Stays for Work")} className="hover:underline hover:text-primary transition-colors">Aurora Stays for Work</button></li>
              <li><button onClick={() => handleLinkClick("Community", "Gift cards")} className="hover:underline hover:text-primary transition-colors">Gift cards</button></li>
              <li><button onClick={() => handleLinkClick("Community", "Referrals")} className="hover:underline hover:text-primary transition-colors">Referrals</button></li>
              <li><button onClick={() => handleLinkClick("Community", "Forum")} className="hover:underline hover:text-primary transition-colors">Forum</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => handleLinkClick("Hosting", "List your property")} className="hover:underline hover:text-primary transition-colors">List your property</button></li>
              <li><button onClick={() => handleLinkClick("Hosting", "AuroraCovers for Hosts")} className="hover:underline hover:text-primary transition-colors">AuroraCovers for Hosts</button></li>
              <li><button onClick={() => handleLinkClick("Hosting", "Hosting resources")} className="hover:underline hover:text-primary transition-colors">Hosting resources</button></li>
              <li><button onClick={() => handleLinkClick("Hosting", "Community forum")} className="hover:underline hover:text-primary transition-colors">Community forum</button></li>
              <li><button onClick={() => handleLinkClick("Hosting", "How to host responsibly")} className="hover:underline hover:text-primary transition-colors">How to host responsibly</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Aurora Stays</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => handleLinkClick("Aurora Stays", "About")} className="hover:underline hover:text-primary transition-colors">About</button></li>
              <li><button onClick={() => handleLinkClick("Aurora Stays", "Careers")} className="hover:underline hover:text-primary transition-colors">Careers</button></li>
              <li><button onClick={() => handleLinkClick("Aurora Stays", "Press")} className="hover:underline hover:text-primary transition-colors">Press</button></li>
              <li><button onClick={() => handleLinkClick("Aurora Stays", "Investors")} className="hover:underline hover:text-primary transition-colors">Investors</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-muted-foreground">© 2023 Aurora Stays, Inc.</span>
            <span className="text-sm text-muted-foreground">·</span>
            <button onClick={() => handleLinkClick("Legal", "Privacy")} className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors">Privacy</button>
            <span className="text-sm text-muted-foreground">·</span>
            <button onClick={() => handleLinkClick("Legal", "Terms")} className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors">Terms</button>
            <span className="text-sm text-muted-foreground">·</span>
            <button onClick={() => handleLinkClick("Legal", "Sitemap")} className="text-sm text-muted-foreground hover:underline hover:text-primary transition-colors">Sitemap</button>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              <span className="text-sm">English (US)</span>
            </div>
            
            <ThemeToggle />
            
            <div className="flex gap-3">
              <button onClick={() => handleLinkClick("Social", "Instagram")} aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-primary transition-transform hover:scale-110" />
              </button>
              <button onClick={() => handleLinkClick("Social", "Twitter")} aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-primary transition-transform hover:scale-110" />
              </button>
              <button onClick={() => handleLinkClick("Social", "Facebook")} aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-primary transition-transform hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
