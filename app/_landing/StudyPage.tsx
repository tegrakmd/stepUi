import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ExternalLink, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function CaseStudyPage() {
  return (
    <div
      className={cn(
        "pt-22 relative mx-auto max-w-5xl px-6 pb-16 md:pb-24 md:pt-32"
      )}>
      {/* Breadcrumb Section */}
      <nav aria-label="breadcrumb" data-slot="breadcrumb">
        <ol
          data-slot="breadcrumb-list"
          className={cn(
            "text-muted-foreground wrap-break-words flex flex-wrap items-center gap-1.5 text-sm sm:gap-2.5"
          )}>
          <li
            data-slot="breadcrumb-item"
            className={cn("inline-flex items-center gap-1.5")}>
            <Link
              data-slot="breadcrumb-link"
              className={cn(
                "hover:text-foreground transition-colors cursor-pointer"
              )}
              href="/">
              Customers
            </Link>
          </li>
          <li
            data-slot="breadcrumb-separator"
            role="presentation"
            aria-hidden="true"
            className={cn("[&>svg]:size-3.5")}>
            <ChevronRight className="lucide lucide-chevron-right" />
          </li>
          <li
            data-slot="breadcrumb-item"
            className={cn("inline-flex items-center gap-1.5")}>
            <span
              data-slot="breadcrumb-link"
              className={cn("hover:text-foreground transition-colors")}>
              Bolt
            </span>
          </li>
        </ol>
      </nav>

      <article className={cn("mt-12 grid lg:grid-cols-[auto_1fr] lg:gap-1")}>
        <div className="w-full max-w-2xl">
          {/* Main Content Header */}
          <header className={cn("mb-12")}>
            <h1
              className={cn(
                "text-foreground mb-12 text-balance text-3xl font-bold md:text-4xl lg:text-5xl lg:font-medium"
              )}>
              Bolt implemented our streaming optimization suite to reduce
              buffering by 62% during peak viewing hours.
            </h1>
            <p className={cn("text-foreground text-xl leading-relaxed")}>
              Bolt New is an AI-powered coding agent designed to help developers
              ship production-ready features in minutes.
            </p>
          </header>

          {/* Article Body */}
          <div
            className={cn(
              "prose prose-slate dark:prose-invert mb-12 max-w-none"
            )}>
            <p
              className={cn(
                "text-muted-foreground mb-4 text-base leading-relaxed"
              )}>
              Bolt began with a frustration that felt small at first but kept
              growing louder: moving around a city was unnecessarily difficult.
              Taxis were unpredictable, ride-hailing apps were either expensive
              or slow, and the people doing the actual work — drivers — often
              earned the least. The experience didn’t feel modern. It didn’t
              feel fair. And for the founders, it didn’t make sense that
              something as fundamental as transportation was this broken.
            </p>
            <p
              className={cn(
                "text-muted-foreground mb-4 text-base leading-relaxed"
              )}>
              They started with a different belief:
              <br />
              moving from one place to another shouldn’t require a luxury budget
              or endless waiting. It should be simple, affordable, and built
              around real human needs.
            </p>
            <p
              className={cn(
                "text-muted-foreground mb-4 text-base leading-relaxed"
              )}>
              The first version of Bolt wasn’t glamorous — just a lean student
              project stitched together with determination and a clear idea:
              create a ride-hailing service that respected both riders and
              drivers. But once it launched, it became obvious that the idea
              solved a real pain point. People wanted speed without inflated
              fees. Drivers wanted fair pay without hidden deductions. Cities
              wanted mobility without chaos.
            </p>
            <p
              className={cn(
                "text-muted-foreground mb-4 text-base leading-relaxed"
              )}>
              As Bolt expanded, the mission didn’t change — it deepened. They
              added scooters. Then food delivery. Then car-sharing. Each step
              wasn’t an attempt to build yet another feature, but an answer to
              the same question that started it all:
              <br />
              <strong className={cn("text-foreground font-semibold")}>
                How do we make moving through a city effortless?
              </strong>
            </p>
            <p
              className={cn(
                "text-muted-foreground mb-4 text-base leading-relaxed"
              )}>
              Today, Bolt operates in dozens of countries, connecting millions
              of people with rides, meals, wheels, and everyday mobility
              options. But at its core, Bolt still feels like that original
              student project — obsessed with simplicity, grounded in fairness,
              and built by people who believe technology should make cities more
              human, not more complicated.
            </p>
            <p
              className={cn(
                "text-muted-foreground mb-4 text-base leading-relaxed"
              )}>
              Bolt didn’t set out to disrupt transportation.
              <br />
              It set out to{" "}
              <strong className={cn("text-foreground font-semibold")}>
                fix it
              </strong>
              .
            </p>
          </div>

          {/* Blockquote Section */}
          <div className={cn("relative mt-12 border-t pt-12")}>
            <Quote
              className={cn(
                "lucide lucide-quote fill-muted-foreground stroke-muted-foreground md:absolute md:-left-16 md:size-8"
              )}
            />
            <blockquote className={cn("mb-6 max-md:mt-6")}>
              <p className="text-foreground text-lg leading-relaxed">
                "We needed a solution that could handle our complex UI
                requirements while maintaining performance. delivered exactly
                that - their component system integrated seamlessly with our
                existing architecture and helped us launch new features in
                record time."
              </p>
            </blockquote>
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "ring-border bg-card aspect-square size-12 shrink-0 overflow-hidden rounded-sm border-transparent shadow-md shadow-black/15 ring-1"
                )}>
                <img
                  alt="Tegrakmd"
                  loading="lazy"
                  width="96"
                  height="96"
                  decoding="async"
                  className={cn("size-full object-cover")}
                  src="/avat.jpg"
                />
              </div>
              <div className={cn("text-foreground space-y-1")}>
                <h3 className="text-foreground font-semibold">Tegra Kmd</h3>
                <p className="text-muted-foreground font-semibold text-sm">
                  Co-Founder-CEO, Frontend developer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar Section */}
        <SideBarComp />
      </article>
    </div>
  );
}
const SideBarComp = () => {
  return (
    <div className="h-fit max-lg:mt-12 lg:sticky lg:top-20 lg:pl-12">
      <Card className={cn(" rounded-xl  p-5 shadow-none")}>
        <div className="bg-background flex size-20 rounded border *:size-12">
          <Image
            alt="Bolt"
            width="120"
            height="120"
            decoding="async"
            className={cn("m-auto w-full p-2 hidden dark:block")}
            src="https://cdn.sanity.io/images/6e6amfga/production/a64ef88ec8417cea843b103c2e9dc6e6d12ef90a-160x69.svg"
          />
          <Image
            alt="Mr"
            width="120"
            height="120"
            decoding="async"
            className={cn("m-auto w-full p-2 dark:hidden")}
            src="/avat.jpg"
          />
        </div>
        <div className="mt-6 space-y-4 *:space-y-2">
          <p className="text-muted-foreground max-md:text-balance  md:text-sm">
            Bolt New is an AI-powered coding agent designed to help developers
            ship production-ready features in minutes.
          </p>
          <div>
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
              Joined
            </p>
            <p className="text-foreground">June 4, 2024</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">
              Back
            </p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 flex items-center gap-1 transition-colors font-medium"
              href="/">
              Home
              <ExternalLink className="lucide lucide-external-link size-3.5" />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};
