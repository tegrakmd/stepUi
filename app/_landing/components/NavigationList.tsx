"use client";
import { useLenis } from "@studio-freight/react-lenis";
import { Button } from "@/components/ui/button";

type LinkProps = { id: string; name: string };

const sections: LinkProps[] = [
  { id: "hero", name: "Accueil" },
  { id: "features-carousel", name: "Caractéristiques" },
  { id: "leadership", name: "Équipe" },
  { id: "engineer", name: "Ingénierie" },
  { id: "case-study", name: "Études" },
  { id: "open-roles", name: "Postes" },
  { id: "open-Deux", name: "Poste deux" },
  { id: "readme", name: "Documentation" },
  { id: "learn-more", name: "En savoir plus" },
  { id: "features", name: "Fonctionnalités" },
  { id: "marketing", name: "Marketing" },
];

export default function NavigationList() {
  const lenis = useLenis();

  const handleScroll = (sectionId: string) => {
    lenis?.scrollTo(`#${sectionId}`, {
      offset: -80,
      duration: 1.5,
      immediate: false,
    });
  };

  return (
    <div className="fixed  top-2 right-2 z-20 bg-white/90 dark:bg-card max-w-[250px] overflow-hidden  backdrop-blur-sm rounded-lg p-2 shadow-lg">
      <nav className="space-y-1  w-fit">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            size="sm"
            onClick={() => handleScroll(section.id)}
            className="w-full justify-start text-sm hover:bg-card/10 dark:hover:bg-border/40 cursor-pointer">
            {section.name}
          </Button>
        ))}
      </nav>
    </div>
  );
}
