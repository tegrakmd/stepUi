import Image from "next/image";
import RevealLine from "./components/ReavealLine"; // J'ai corrigé la typo "Reaveal" -> "Reveal"
import { cn } from "@/lib/utils"; // Assurez-vous d'avoir l'utilitaire ci-dessus

// --- Types ---
interface LineContent {
  id: string;
  textStart: string;
  textEnd?: string; // Optionnel car certaines lignes finissent après l'image
  image?: {
    src: string;
    alt: string;
  };
}

// --- Données (Configuration) ---
const HERO_LINES: LineContent[] = [
  {
    id: "line-1",
    textStart: "We craft",
    textEnd: "digital",
    image: {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop",
      alt: "Technology abstract visualization",
    },
  },
  {
    id: "line-2",
    textStart: "experiences",
    textEnd: "that",
    image: {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop",
      alt: "Coding on a laptop screen",
    },
  },
  {
    id: "line-3",
    textStart: "inspire",
    textEnd: "future",
    image: {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop",
      alt: "Futuristic earth vision",
    },
  },
  {
    id: "line-4",
    textStart: "and move",
    // Pas d'image sur cette ligne
  },
  {
    id: "line-5",
    textStart: "people",
    textEnd: "forward.",
    image: {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
      alt: "Team working together",
    },
  },
];

// --- Sous-composant pour le texte ---
// Permet de centraliser les styles de police géants
const BigText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "text-4xl md:text-7xl lg:text-[7.5rem] font-medium font-instrument-serif tracking-tighter leading-none whitespace-nowrap",
      className
    )}>
    {children}
  </span>
);

export function TextLine() {
  return (
    <div className="w-full relative bg-background text-foreground">
      <section className="w-full max-w-7xl mx-auto min-h-dvh py-32 md:py-64 flex flex-col justify-center items-center px-4 gap-2">
        {HERO_LINES.map((line) => (
          <RevealLine key={line.id}>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <BigText>{line.textStart}</BigText>
              {line.image && (
                <span className="img-reveal-span relative block h-12 md:h-20 lg:h-[110px] w-0 overflow-hidden rounded-lg shadow-2xl shrink-0 transition-all duration-700 ease-out">
                  <Image
                    src={line.image.src}
                    alt={line.image.alt}
                    fill
                    sizes="(max-width: 768px) 100px, 300px"
                    className="object-cover object-center"
                  />
                  <div className="w-[300px]" />
                </span>
              )}
              {line.textEnd && <BigText>{line.textEnd}</BigText>}
            </div>
          </RevealLine>
        ))}
      </section>
    </div>
  );
}
