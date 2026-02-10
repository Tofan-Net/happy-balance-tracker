import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Tofan One" className="h-10" />
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Testimonials
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://admin.tofan.net">Sign In</a>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <a href="https://admin.tofan.net">Sign Up</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
