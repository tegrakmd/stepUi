// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";

// type Feature = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
// };

// const FEATURES: Feature[] = [
//   {
//     id: 1,
//     title: "Smart email composition",
//     description:
//       "AI-powered suggestions, templates, and seamless collaboration for faster communication.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811576/c1_sc01ut.png",
//     alt: "Email composition preview",
//   },
//   {
//     id: 2,
//     title: "Organized note-taking",
//     description:
//       "Rich formatting, tagging, and instant search to capture and retrieve ideas effortlessly.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811568/c2_ynz6fw.png",
//     alt: "Task and notes organization UI",
//   },
//   {
//     id: 3,
//     title: "AI autocomplete",
//     description:
//       "Context-aware suggestions that adapt to your writing style to boost productivity.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
//     alt: "AI autocomplete suggestions UI",
//   },
//   {
//     id: 4,
//     title: "Real-time translation",
//     description:
//       "Automatic language detection and natural translations across 50+ languages.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811572/c4_rg6vjt.png",
//     alt: "Real-time translation interface",
//   },
//   {
//     id: 5,
//     title: "AI-powered insights",
//     description:
//       "Context-aware suggestions that adapt to your writing style to boost productivity.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
//     alt: "AI autocomplete suggestions UI",
//   },
//   {
//     id: 6,
//     title: "AI-powered insights",
//     description:
//       "Context-aware suggestions that adapt to your writing style to boost productivity.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
//     alt: "AI autocomplete suggestions UI",
//   },
//   {
//     id: 7,
//     title: "AI-powered insights",
//     description:
//       "Context-aware suggestions that adapt to your writing style to boost productivity.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
//     alt: "AI autocomplete suggestions UI",
//   },
//   {
//     id: 8,
//     title: "AI-powered insights",
//     description:
//       "Context-aware suggestions that adapt to your writing style to boost productivity.",
//     image:
//       "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
//     alt: "AI autocomplete suggestions UI",
//   },
// ];

// export function FeaturesCarousel() {
//   const [index, setIndex] = useState(0);

//   const prev = () => setIndex((i) => (i === 0 ? FEATURES.length - 2 : i - 2));
//   const next = () => setIndex((i) => (i >= FEATURES.length - 2 ? 0 : i + 2));

//   const getVisibleItems = () => {
//     if (typeof window !== "undefined") {
//       return window.innerWidth >= 1200 ? 2 : 1;
//     }

//     return 3;
//   };

//   const visibleItems = getVisibleItems();

//   return (
//     <section className="relative bg-background py-24">
//       <div className="mx-auto max-w-5xl px-2">
//         <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-2 lg:mb-10">
//           <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold">
//             Powerful features for modern teams
//           </h2>
//           <div className="flex items-center gap-2">
//             <CarouselButton onClick={prev} label="Previous slide">
//               <ArrowLeft />
//             </CarouselButton>
//             <CarouselButton onClick={next} label="Next slide">
//               <ArrowRight />
//             </CarouselButton>
//           </div>
//         </div>

//         <div
//           className="relative overflow-hidden"
//           role="region"
//           aria-roledescription="carousel">
//           <ul
//             className="flex transition-transform duration-500 ease-out"
//             style={{ transform: `translateX(-${index * 50}%)` }}>
//             {FEATURES.map((feature) => (
//               <li
//                 key={feature.id}
//                 // md:w-1/2
//                 className="w-full shrink-0 px-2 md:w-1/2"
//                 role="group"
//                 aria-label={feature.title}>
//                 <FeatureCard {...feature} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }
// function CarouselButton({
//   children,
//   onClick,
//   label,
// }: {
//   children: React.ReactNode;
//   onClick: () => void;
//   label: string;
// }) {
//   return (
//     <Button
//       onClick={onClick}
//       variant={"outline"}
//       className={cn("rounded-full")}>
//       {children}
//     </Button>
//   );
// }
// function FeatureCard({ title, description, image, alt, id }: Feature) {
//   return (
//     <div className="space-y-4 ">
//       <div className="relative aspect-square overflow-hidden rounded-2xl bg-card shadow-md">
//         <Image
//           src={image}
//           alt={alt}
//           width={1200}
//           height={1200}
//           className="object-cover opacity-60"
//           sizes="(min-width: 768px) 50vw, 100vw"
//           priority={false}
//         />
//         {/* Crée un tableau pour récupérer les trois UiFeature sur les trois premiers éléments */}
//         {(() => {
//           // On suppose que les trois premiers éléments ont id 1, 2, 3
//           const uiFeatureIds = [1, 2, 3];
//           return uiFeatureIds.includes(id) ? (
//             <UiFeatureCard />
//           ) : (
//             <UiFeatureCard2 />
//           );
//         })()}
//       </div>

//       <p className="text-balance text-muted-foreground">
//         <strong className="font-medium text-foreground">{title}</strong>{" "}
//         {description}
//       </p>
//     </div>
//   );
// }
// const UiFeatureCard = () => {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center p-8 scale-95">
//       <div aria-hidden="true" className="min-w-2xs scale-90">
//         <div className="ring-border-border relative rounded-lg p-3 ring-1">
//           <div className="relative flex w-fit items-center gap-1">
//             <div className="bg-gradient-to-r absolute inset-0 h-5 via-indigo-500/15 to-emerald-500/15"></div>
//             <span className="text-xs">How do I implement</span>
//             <div className="text-primary h-5 w-px animate-pulse bg-current"></div>
//           </div>
//         </div>
//         <div className="bg-background/80 ring-border-border dark:ring-foreground/25 shadow-black/6.5 mt-2 overflow-hidden rounded-xl shadow-lg ring-1">
//           <div className="bg-indigo-700/10 border-primary/20 flex items-center gap-2 border-b px-3 py-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-sparkles text-primary fill-primary *:nth-2:text-purple-400 *:nth-3:text-purple-400 *:not-first:text-foreground/25 size-3.5">
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
//               <path d="M20 3v4"></path>
//               <path d="M22 5h-4"></path>
//               <path d="M4 17v2"></path>
//               <path d="M5 18H3"></path>
//             </svg>
//             <div className="text-xs font-medium">AI Suggestions</div>
//           </div>
//           <div className="divide-border divide-y">
//             <div className="bg-indigo-700/5 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
//               <div className="flex-1 text-xs">
//                 ...authentication with OAuth 2.0?
//               </div>
//               <div className="bg-background/40 ring-border text-muted-foreground flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] ring-1">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-corner-down-left size-2.5">
//                   <polyline points="9 10 4 15 9 20"></polyline>
//                   <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
//                 </svg>
//                 Tab
//               </div>
//             </div>
//             <div className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
//               <div className="text-muted-foreground flex-1 text-xs">
//                 ...a dark mode toggle in React?
//               </div>
//             </div>
//             <div className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 px-3 py-2.5 transition-colors">
//               <div className="text-muted-foreground flex-1 text-xs">
//                 ...caching for API responses?
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-4 flex items-center justify-between text-xs">
//           <div className="text-muted-foreground">3 suggestions</div>
//           <div className="text-muted-foreground flex items-center gap-1">
//             <span className="bg-background ring-border-border rounded px-2 ring-1">
//               ↑
//             </span>
//             <span className="bg-background ring-border-border rounded px-2 ring-1">
//               ↓
//             </span>
//             to navigate
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const UiFeatureCard2 = () => {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center p-8">
//       <div aria-hidden="true" className="min-w-xs max-w-xs scale-90">
//         <div className="space-y-3">
//           <div className="mask-y-from-35%">
//             <p className="text-sm/6">
//               Corporis voluptates voluptatem atque excepturi, tempore dolor
//               distinctio libero dicta vel, nihil rem consequatur esse aspernatur
//               nostrum, minus magnam labore quas optio?
//             </p>
//           </div>
//           <div className="relative flex w-fit items-center gap-1">
//             <span className="bg-linear-to-r from-primary rounded to-emerald-500 bg-clip-text text-sm text-transparent dark:from-white dark:via-indigo-300">
//               Auto translated from English
//             </span>
//           </div>
//           <div className="bg-background ring-primary/50 dark:ring-foreground/50 shadow-black/6.5 rounded-xl p-3 shadow-md ring-1">
//             <div className="text-muted-foreground mb-3 text-xs">Spanish</div>
//             <p className="text-foreground text-sm/6">
//               Hola, ¿cómo puedo ayudarte hoy? Estoy aquí para responder
//               cualquier pregunta que tengas sobre nuestros servicios y
//               productos.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const UiFeatureCard3 = () => {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center p-8 scale-95">
//       <div
//         aria-hidden="true"
//         className="min-w-2xs max-w-xs px-4 pt-4 selection:bg-amber-500/25">
//         <div className="relative">
//           <div className="absolute -bottom-2 left-1 right-1 h-full rotate-2 rounded-sm bg-gradient-to-br from-amber-200 to-yellow-300 shadow-sm dark:from-amber-300 dark:to-yellow-400"></div>
//           <div className="absolute -bottom-1 left-0.5 right-0.5 h-full -rotate-1 rounded-sm bg-gradient-to-br from-amber-100 to-yellow-200 shadow-sm dark:from-amber-200 dark:to-yellow-300"></div>
//           <div className="relative rounded-sm bg-gradient-to-br from-amber-100 to-yellow-200 p-5 pb-12 shadow-lg shadow-amber-900/15 dark:from-amber-300 dark:to-yellow-300">
//             <div className="mb-4 flex items-center justify-between pt-2">
//               <span className="text-sm font-semibold text-amber-950">
//                 Quick Tasks
//               </span>
//               <span className="text-xs text-amber-700">3/5</span>
//             </div>
//             <div className="space-y-2">
//               <div className="flex cursor-pointer items-center gap-2.5">
//                 <div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-check size-3 text-emerald-700">
//                     <path d="M20 6 9 17l-5-5"></path>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-amber-800/60 line-through">
//                   Review pull requests
//                 </span>
//               </div>
//               <div className="flex cursor-pointer items-center gap-2.5">
//                 <div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-check size-3 text-emerald-700">
//                     <path d="M20 6 9 17l-5-5"></path>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-amber-800/60 line-through">
//                   Update documentation
//                 </span>
//               </div>
//               <div className="flex cursor-pointer items-center gap-2.5">
//                 <div className="flex size-4 items-center justify-center rounded bg-emerald-500/30">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="lucide lucide-check size-3 text-emerald-700">
//                     <path d="M20 6 9 17l-5-5"></path>
//                   </svg>
//                 </div>
//                 <span className="text-sm font-medium text-amber-800/60 line-through">
//                   Deploy to staging
//                 </span>
//               </div>
//               <div className="flex cursor-pointer items-center gap-2.5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-circle size-4 text-amber-700/40">
//                   <circle cx="12" cy="12" r="10"></circle>
//                 </svg>
//                 <span className="text-sm font-medium text-amber-900 dark:text-amber-950">
//                   Write unit tests
//                 </span>
//               </div>
//               <div className="flex cursor-pointer items-center gap-2.5">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="lucide lucide-circle size-4 text-amber-700/40">
//                   <circle cx="12" cy="12" r="10"></circle>
//                 </svg>
//                 <span className="text-sm font-medium text-amber-900 dark:text-amber-950">
//                   Send weekly report
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  CornerDownLeft,
  Circle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Feature = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Smart email composition",
    description:
      "AI-powered suggestions, templates, and seamless collaboration.",
    image:
      "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811576/c1_sc01ut.png",
    alt: "Email composition preview",
  },
  {
    id: 2,
    title: "Organized note-taking",
    description:
      "Rich formatting, tagging, and instant search to capture ideas.",
    image:
      "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811568/c2_ynz6fw.png",
    alt: "Task and notes organization UI",
  },
  {
    id: 3,
    title: "AI autocomplete",
    description: "Context-aware suggestions that adapt to your writing style.",
    image:
      "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811581/c3_fzqepj.png",
    alt: "AI autocomplete suggestions UI",
  },
  {
    id: 4,
    title: "Real-time translation",
    description: "Automatic language detection and natural translations.",
    image:
      "https://res.cloudinary.com/dohqjvu9k/image/upload/v1768811572/c4_rg6vjt.png",
    alt: "Real-time translation interface",
  },
  {
    id: 5,
    title: "Contextual Analytics",
    description: "Get insights based on your team's usage patterns.",
    image: "/allo.avif",
    alt: "Analytics UI",
  },
];

export function FeaturesCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  // Gestion de la taille d'écran pour l'hydratation correcte
  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth >= 768 ? 2 : 1);
    };

    // Initial call
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setIndex((i) => Math.min(FEATURES.length - visibleItems, i + 1));
  };

  // Calcul du pourcentage de translation
  // Sur mobile (1 item) : on bouge de 100% par index
  // Sur desktop (2 items) : on bouge de 50% par index
  const translatePercentage = index * (100 / visibleItems);

  return (
    <section className="relative bg-background py-24" id="features-carousel">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-12">
          <h2 className="text-foreground max-w-xs text-balance text-4xl font-semibold tracking-tight">
            Powerful features for modern teams
          </h2>
          <div className="flex items-center gap-2">
            <CarouselButton
              onClick={prev}
              disabled={index === 0}
              label="Previous slide">
              <ArrowLeft className="size-4" />
            </CarouselButton>
            <CarouselButton
              onClick={next}
              disabled={index >= FEATURES.length - visibleItems}
              label="Next slide">
              <ArrowRight className="size-4" />
            </CarouselButton>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-roledescription="carousel">
          <ul
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${translatePercentage}%)` }}>
            {FEATURES.map((feature) => (
              <li
                key={feature.id}
                className="w-full shrink-0 px-2 md:w-1/2"
                role="group"
                aria-label={feature.title}>
                <FeatureCard {...feature} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  children,
  onClick,
  disabled,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      size="icon"
      aria-label={label}
      className={cn(
        "rounded-full bg-background transition-opacity",
        disabled && "opacity-50"
      )}>
      {children}
    </Button>
  );
}

function FeatureCard({ title, description, image, alt, id }: Feature) {
  return (
    <div className="group h-full space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted/20 shadow-sm ring-1 ring-border/50">
        <Image
          src={image}
          alt={alt}
          width={800}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        {/* Composant de gestion de l'overlay UI */}
        <FeatureOverlay id={id} />
      </div>

      <div className="space-y-1">
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-muted-foreground text-balance text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

// Séparation de la logique de sélection de l'UI
function FeatureOverlay({ id }: { id: number }) {
  switch (id) {
    case 1:
    case 3:
      return <UiFeatureCard className="scale-90 md:scale-100" />;
    case 2:
      return <UiFeatureCard3 className="scale-90 md:scale-100" />;
    case 4:
      return <UiFeatureCard2 className="scale-90 md:scale-100" />;
    default:
      // Fallback par défaut
      return <UiFeatureCard className="scale-90 md:scale-100" />;
  }
}

// --- UI Components ---

const UiFeatureCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-4",
        className
      )}>
      <div aria-hidden="true" className="w-full max-w-[280px]">
        {/* Cursor Input simulation */}
        <div className="relative mb-2 rounded-lg border bg-background/95 p-2 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-0.5 animate-pulse bg-primary"></div>
            <span className="text-xs text-muted-foreground">
              How do I implement
            </span>
          </div>
          <div className="absolute -inset-px -z-10 rounded-lg bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 opacity-50 blur-sm" />
        </div>

        {/* Dropdown Menu */}
        <div className="overflow-hidden rounded-xl border bg-background/90 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2 border-b bg-muted/30 px-3 py-2">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-xs font-medium">AI Suggestions</span>
          </div>

          <div className="divide-y divide-border/50">
            <div className="flex cursor-pointer items-center justify-between bg-primary/5 px-3 py-2.5 transition-colors hover:bg-primary/10">
              <span className="text-xs font-medium">
                ...authentication with OAuth 2.0?
              </span>
              <kbd className="hidden h-5 items-center rounded border bg-background px-1.5 text-[10px] text-muted-foreground shadow-sm sm:inline-flex">
                <CornerDownLeft className="mr-1 size-2.5" />
                Tab
              </kbd>
            </div>

            <div className="flex cursor-pointer items-center px-3 py-2.5 transition-colors hover:bg-muted/50">
              <span className="text-xs text-muted-foreground">
                ...a dark mode toggle?
              </span>
            </div>

            <div className="flex cursor-pointer items-center px-3 py-2.5 transition-colors hover:bg-muted/50">
              <span className="text-xs text-muted-foreground">
                ...caching for API responses?
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between bg-muted/20 px-3 py-1.5 text-[10px] text-muted-foreground">
            <span>3 suggestions</span>
            <div className="flex gap-1">
              <span>↑</span>
              <span>↓</span> to navigate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UiFeatureCard2 = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-4",
        className
      )}>
      <div aria-hidden="true" className="w-full max-w-[260px] space-y-4">
        <div className="relative overflow-hidden rounded-lg bg-background/50 p-3 text-xs leading-relaxed text-muted-foreground backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
          <p>
            Corporis voluptates voluptatem atque excepturi, tempore dolor
            distinctio libero dicta vel...
          </p>
        </div>

        <div className="relative">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              Auto translated
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="relative rounded-xl border bg-background p-4 shadow-lg ring-1 ring-black/5">
            <div className="mb-2 text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              Spanish
            </div>
            <p className="text-sm font-medium text-foreground">
              Hola, ¿cómo puedo ayudarte hoy? Estoy aquí para responder...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const UiFeatureCard3 = ({ className }: { className?: string }) => {
//   return (
//     <div
//       className={cn(
//         "absolute inset-0 flex items-center justify-center p-4",
//         className
//       )}>
//       <div aria-hidden="true" className="relative w-full max-w-[240px]">
//         {/* Stacked paper effect */}
//         <div className="absolute -bottom-2 left-2 right-2 h-full rotate-2 rounded-lg bg-amber-100 shadow-sm dark:bg-amber-900/20" />
//         <div className="absolute -bottom-1 left-1 right-1 h-full -rotate-1 rounded-lg bg-amber-50 shadow-sm dark:bg-amber-900/30" />

//         {/* Main Note */}
//         <div className="relative rounded-lg border border-amber-100 bg-amber-50 p-5 shadow-lg dark:border-amber-900/50 dark:bg-amber-950/50">
//           <div className="mb-4 flex items-center justify-between">
//             <span className="text-sm font-semibold text-amber-900 dark:text-amber-100">
//               Quick Tasks
//             </span>
//             <span className="rounded-full bg-amber-200/50 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 dark:text-amber-200">
//               3/5
//             </span>
//           </div>

//           <div className="space-y-3">
//             {[
//               { text: "Review pull requests", done: true },
//               { text: "Update documentation", done: true },
//               { text: "Deploy to staging", done: true },
//               { text: "Write unit tests", done: false },
//               { text: "Send weekly report", done: false },
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-2.5">
//                 <div
//                   className={cn(
//                     "flex size-4 items-center justify-center rounded border",
//                     item.done
//                       ? "border-emerald-500 bg-emerald-500 text-white"
//                       : "border-amber-200 bg-white dark:border-amber-800 dark:bg-transparent"
//                   )}>
//                   {item.done ? <Check className="size-2.5" /> : null}
//                 </div>
//                 <span
//                   className={cn(
//                     "text-xs font-medium",
//                     item.done
//                       ? "text-amber-900/40 line-through dark:text-amber-100/30"
//                       : "text-amber-900 dark:text-amber-100"
//                   )}>
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

type Task = {
  text: string;
  done: boolean;
};

const INITIAL_TASKS: Task[] = [
  { text: "Review pull requests", done: true },
  { text: "Update documentation", done: true },
  { text: "Deploy to staging", done: true },
  { text: "Write unit tests", done: false },
  { text: "Send weekly report", done: false },
];

const UiFeatureCard3 = ({ className }: { className?: string }) => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const completedCount = tasks.filter((t) => t.done).length;

  const toggleTask = (index: number) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center p-4",
        className
      )}>
      <div aria-hidden="true" className="relative w-full max-w-[240px]">
        {/* Stacked paper effect */}
        <div className="absolute -bottom-2 left-2 right-2 h-full rotate-2 rounded-lg from-amber-200 to-yellow-300 shadow-sm dark:from-amber-300 dark:to-yellow-400" />
        <div className="absolute -bottom-1 left-1 right-1 h-full -rotate-1 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-200 shadow-sm dark:from-amber-200 dark:to-yellow-300" />

        {/* Main Card */}
        <div className="relative rounded-lg border  bg-gradient-to-br from-amber-100 to-yellow-200 p-5 shadow-amber-900/15 dark:from-amber-300 dark:to-yellow-300">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-yellow-900 dark:text-amber-100">
              Quick Tasks
            </span>
            <span className="rounded-full bg-amber-200/50 px-1.5 py-0.5 text-[10px] font-medium text-amber-800 dark:text-amber-200">
              {completedCount}/{tasks.length}
            </span>
          </div>

          <div className="space-y-3">
            {tasks.map((item, i) => (
              <button
                key={i}
                onClick={() => toggleTask(i)}
                className="flex w-full items-center gap-2.5 text-left">
                <div
                  className={cn(
                    "flex size-4 items-center justify-center rounded border transition",
                    item.done
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-amber-200 bg-white dark:border-amber-800 dark:bg-transparent"
                  )}>
                  {item.done && <Check className="size-2.5" />}
                </div>

                <span
                  className={cn(
                    "text-xs font-medium transition",
                    item.done
                      ? "text-amber-900/40 line-through dark:text-amber-100/30"
                      : "text-amber-900 dark:text-amber-100"
                  )}>
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
