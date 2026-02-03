import { Brain, Clock, Puzzle, Sliders, Target, Zap } from "lucide-react";
import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
// gsap.from("dl > div", { opacity: 0, y: 24, stagger: 0.1 });

const FEATURES: Feature[] = [
  {
    title: "AI-Powered Analytics",
    description:
      "Leverage machine learning to gain deeper insights from your marketing data and optimize campaigns in real-time.",
    icon: <Brain className="size-4" />,
  },
  {
    title: "Intelligent Automation",
    description:
      "Automate repetitive tasks and workflows, allowing your team to focus on strategic initiatives.",
    icon: <Zap className="size-4" />,
  },
  {
    title: "Predictive Targeting",
    description:
      "Identify high-value audiences with precision using advanced predictive modeling.",
    icon: <Target className="size-4" />,
  },
  {
    title: "Smart Personalization",
    description:
      "Deliver tailored content and experiences to each user based on their behavior and preferences.",
    icon: <Sliders className="size-4" />,
  },
  {
    title: "Real-Time Insights",
    description:
      "Monitor campaign performance with live dashboards and instant notifications for critical metrics.",
    icon: <Clock className="size-4" />,
  },
  {
    title: "Cross-Channel Integration",
    description:
      "Seamlessly connect all your marketing channels for unified reporting and coordinated campaigns.",
    icon: <Puzzle className="size-4" />,
  },
];

export function MarketingToolsSection() {
  return (
    <section
      aria-labelledby="marketing-tools-title"
      className="bg-background py-16 md:py-32"
      id="marketing">
      <div className="mx-auto max-w-5xl px-6">
        <h2
          id="marketing-tools-title"
          className="mb-12 text-balance text-4xl font-semibold text-foreground">
          AI-powered Marketing Tools
        </h2>

        <dl className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="space-y-2">
              <dt className="flex items-center gap-2 font-medium text-foreground">
                {feature.icon}
                {feature.title}
              </dt>
              <dd className="text-muted-foreground">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
