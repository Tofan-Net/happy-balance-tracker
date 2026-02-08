import { 
  PieChart, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Bell, 
  Zap,
  Target,
  CreditCard
} from "lucide-react";

const features = [
  {
    icon: PieChart,
    title: "Smart Analytics",
    description: "Visualize your spending patterns with beautiful charts and get AI-powered insights to optimize your budget."
  },
  {
    icon: TrendingUp,
    title: "Income Tracking",
    description: "Track multiple income sources, set goals, and watch your wealth grow with detailed progress reports."
  },
  {
    icon: Target,
    title: "Budget Goals",
    description: "Set monthly budgets per category and receive alerts when you're approaching your limits."
  },
  {
    icon: CreditCard,
    title: "Expense Categories",
    description: "Organize expenses with custom categories. Auto-categorization learns your spending habits."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get timely reminders for bills, unusual spending, and weekly financial summaries."
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is encrypted and protected with the same security standards used by major banks."
  },
  {
    icon: Smartphone,
    title: "Works Everywhere",
    description: "Access your finances from any device. Sync seamlessly between desktop and mobile."
  },
  {
    icon: Zap,
    title: "Instant Sync",
    description: "Changes sync instantly across all devices. Never miss a transaction or update."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(142_76%_45%_/_0.05)_0%,transparent_70%)]" />
      
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Powerful Features</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Everything You Need to{" "}
            <span className="gradient-text">Master Your Money</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful tools designed to give you complete control over your finances, 
            all in one beautiful, easy-to-use platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
