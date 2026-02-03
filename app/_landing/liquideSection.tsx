import { cn } from "@/lib/utils";
import { LiquidCard } from "./components/ui/liquidCard";
import { LiquidDistortionFilter } from "./components/ui/liquideFilter";
import Image from "next/image";

interface DockItemProps {
  src: string;
  alt: string;
  className?: string;
}

export const DockItem: React.FC<DockItemProps> = ({ src, alt, className }) => {
  return (
    <div className={cn("relative w-[75px] h-[75px]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="w-full h-full object-contain transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] cursor-pointer hover:scale-95 hover:origin-center"
      />
    </div>
  );
};
const DOCK_ITEMS = [
  {
    src: "https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/finder.png",
    alt: "Finder",
  },
  {
    src: "https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/messages.png",
    alt: "Messages",
  },
  {
    src: "https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/safari.png",
    alt: "Safari",
  },
  {
    src: "https://raw.githubusercontent.com/lucasromerodb/liquid-glass-effect-macos/refs/heads/main/assets/books.png",
    alt: "Books",
  },
];
export function LiquideSection() {
  return (
    <div>
      <LiquidDistortionFilter />

      {/* SECTION 1: Cartes Simples */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <LiquidCard>
          <div className="px-6 py-2 text-2xl font-bold text-gray-800 tracking-wide">
            binggkk
          </div>
        </LiquidCard>

        <LiquidCard className="!p-4 hover:!p-6 cursor-pointer">
          <div className="px-6 py-2 text-xl font-bold text-blue-900 tracking-wide">
            Next.js + Shadcn
          </div>
        </LiquidCard>
      </div>

      {/* SECTION 2: Dock MacOS (Utilisation de LiquidCard comme conteneur d'icônes) */}
      <div className="mt-8">
        <h2 className="text-white font-bold text-center mb-4 drop-shadow-md">
          Dock Example
        </h2>

        <div className="flex gap-4 p-4 rounded-3xl bg-white/20 backdrop-blur-md border border-white/20">
          {DOCK_ITEMS.map((item, index) => (
            // On peut soit mettre l'image DANS une LiquidCard pour un effet fou
            // Soit utiliser LiquidCard comme conteneur du dock.
            // Ici, essayons de mettre chaque icône dans une petite bulle liquide :
            <LiquidCard
              key={index}
              className="rounded-[1.5rem]! hover:rounded-[2rem]! p-2 hover:p-3">
              <DockItem
                src={item.src}
                alt={item.alt}
                className="w-[50px] h-[50px]"
              />
            </LiquidCard>
          ))}
        </div>
      </div>
    </div>
  );
}
