import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(142_76%_45%_/_0.1)_0%,transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="glass-card mx-auto max-w-4xl overflow-hidden rounded-3xl p-1" style={{ boxShadow: 'var(--shadow-glow)' }}>
          <div className="rounded-[22px] bg-gradient-to-br from-card to-secondary/50 p-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Take Control of Your{" "}
              <span className="gradient-text">Finances?</span>
            </h2>
            
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Join 50,000+ users who are already saving more and spending smarter. 
              Start your free trial today — no credit card required.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule a Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              ✓ Free 14-day trial &nbsp; ✓ No credit card required &nbsp; ✓ Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
