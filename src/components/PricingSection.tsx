import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Standard",
    description: "Essential tools for personal finance tracking",
    monthlyPrice: 9,
    yearlyPrice: 89,
    features: [
      "Track up to 500 transactions/month",
      "Basic expense categories",
      "Monthly summary reports",
      "Mobile app access",
      "Email support"
    ],
    cta: "Start 14-Day Trial",
    popular: false
  },
  {
    name: "Premium",
    description: "For serious budgeters and savers",
    monthlyPrice: 19,
    yearlyPrice: 189,
    features: [
      "Unlimited transactions",
      "Custom categories & tags",
      "Advanced analytics & charts",
      "Budget goals & alerts",
      "Export to CSV/PDF",
      "Priority support",
      "Multi-currency support"
    ],
    cta: "Start 14-Day Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Manage finances together as a team",
    monthlyPrice: 39,
    yearlyPrice: 389,
    features: [
      "Everything in Premium",
      "Up to 10 team members",
      "Shared budgets & goals",
      "Individual & combined views",
      "Bill splitting",
      "Team spending insights",
      "Dedicated account manager"
    ],
    cta: "Start 14-Day Trial",
    popular: false
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(142_76%_45%_/_0.08)_0%,transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Simple Pricing</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Choose Your{" "}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            All plans include a 14-day free trial. No credit card required to start.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-secondary/50 p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                !isYearly ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                isYearly ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-1 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/50 to-primary/10' 
                  : 'bg-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`h-full rounded-xl p-6 ${plan.popular ? 'bg-card' : 'bg-card/50'}`}>
                <div className="mb-6">
                  <h3 className="mb-1 text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href="https://admin.tofan.net">{plan.cta}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            🔒 Secured with 256-bit encryption • 14-day free trial on all plans
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
