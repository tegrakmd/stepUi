"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import explicite nécessaire
import { cn } from "@/lib/utils"; // Utilisation de cn pour la fusion des classes

// Enregistrement du plugin à l'extérieur du composant
// Cela évite les bugs lors du build de production Next.js
gsap.registerPlugin(ScrollTrigger);

interface RevealLineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const RevealLine: React.FC<RevealLineProps> = ({
  children,
  className,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap.context est la "Best Practice" React pour gérer le nettoyage (cleanup)
    const ctx = gsap.context(() => {
      // Sélection scopée uniquement à ce conteneur
      const imgSpans =
        containerRef.current?.querySelectorAll(".img-reveal-span");

      if (imgSpans && imgSpans.length > 0) {
        gsap.to(imgSpans, {
          // width: correspond à la taille max de l'image dans TextLine (300px)
          width: "min(25vw, 250px)",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%", // Déclenchement légèrement plus bas pour un meilleur effet visuel
            end: "top 35%",
            scrub: 1, // Fluidité liée au scroll
          },
        });
      }
    }, containerRef);

    // Nettoyage propre lors du démontage du composant
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 lg:gap-x-8 py-2 w-full select-none",
        className
      )}
      {...props}>
      {children}
    </div>
  );
};

export default RevealLine;
