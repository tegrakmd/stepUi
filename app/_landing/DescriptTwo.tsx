import React from "react";

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "Secure & Reliable",
    description:
      "Built with enterprise-grade security protocols and a 99.9% uptime guarantee, ensuring your data remains protected and your services stay available around the clock.",
  },
  {
    title: "Fast & Scalable",
    description:
      "Optimized for lightning-fast performance with intelligent caching and load balancing that seamlessly grows with your business demands without compromising speed.",
  },
  {
    title: "Easy to Use",
    description:
      "Intuitive interface designed for seamless onboarding and daily use, with comprehensive documentation and guided workflows that reduce the learning curve significantly.",
  },
  {
    title: "Attention to Detail",
    description:
      "Crafted with precision and care for a polished user experience, where every interaction has been thoughtfully designed to delight users and enhance productivity.",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section aria-labelledby="features-title" className=" py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <header className="space-y-3">
          <h2
            id="features-title"
            className="text-balance text-primary text-2xl font-medium ">
            What makes your perfect fit
          </h2>

          <p className="text-foreground/80 dark:text-muted-foreground">
            Optimized for lightning-fast performance with intelligent caching
            and load balancing that seamlessly grows with your business demands
            without compromising speed.
          </p>
        </header>

        <div className="mt-12 space-y-6">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-border dark:border-border pb-6 last:border-b-0">
              {/* <div className="sr-only">{feature.title}</div> */}
              <span className="mt-0.5 w-14 font-mono text-sm text-muted-foreground/80 dark:text-muted-foreground font-medium">
                {String(index + 1).padStart(2, "0")}.
              </span>

              <div className="space-y-3">
                <h3 className="font-medium text-primary ">{feature.title}</h3>
                <p className="text-muted-foreground/80 dark:text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
