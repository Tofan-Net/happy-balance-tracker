import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, TrendingDown, Wallet } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_76%_45%_/_0.08)_0%,transparent_50%)]" />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container relative mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-muted-foreground">Now with AI-powered insights</span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Take Control of Your{" "}
          <span className="gradient-text">Financial Future</span>
        </h1>

        {/* Subheading */}
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Track your income and expenses effortlessly. Get insights that help you save more, 
          spend smarter, and achieve your financial goals faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button variant="hero" size="xl">
            Start Free Trial
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold md:text-4xl">50K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold md:text-4xl">$2.5M+</div>
            <div className="text-sm text-muted-foreground">Tracked Monthly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold md:text-4xl">4.9★</div>
            <div className="text-sm text-muted-foreground">User Rating</div>
          </div>
        </div>

        {/* Floating Cards Preview */}
        <div className="relative mt-20 w-full max-w-4xl">
          <div className="absolute -left-4 top-8 z-10 animate-float md:-left-12">
            <div className="glass-card flex items-center gap-3 rounded-xl p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Income</div>
                <div className="font-semibold text-primary">+$4,250.00</div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-16 z-10 animate-float md:-right-12" style={{ animationDelay: '2s' }}>
            <div className="glass-card flex items-center gap-3 rounded-xl p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/20">
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Expenses</div>
                <div className="font-semibold text-destructive">-$1,890.00</div>
              </div>
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-2xl p-1" style={{ boxShadow: 'var(--shadow-glow)' }}>
            <div className="rounded-xl bg-card p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Wallet className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Total Balance</div>
                    <div className="text-2xl font-bold">$12,485.00</div>
                  </div>
                </div>
                <div className="rounded-lg bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  +12.5%
                </div>
              </div>
              
              <div className="h-32 w-full rounded-lg bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
