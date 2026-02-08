import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    content: "This app completely changed how I manage my freelance income. I can finally see where every dollar goes and plan for tax season stress-free.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Small Business Owner",
    content: "The analytics are incredible. I discovered I was overspending on subscriptions by $200/month. Paid for itself in the first week!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Software Engineer",
    content: "Simple, beautiful, and actually useful. I've tried dozens of finance apps, but this is the only one that stuck. Love the dark theme too!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm">
            <Star className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-muted-foreground">Loved by Users</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            What Our Users{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join thousands of satisfied users who have transformed their financial habits.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-primary/30"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-primary" fill="currentColor" />
                ))}
              </div>

              <p className="mb-6 text-muted-foreground">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
