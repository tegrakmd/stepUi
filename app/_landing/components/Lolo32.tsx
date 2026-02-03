import { StickyCard_003 } from "@/components/ui/skiper-ui/skiper34";

const images = [
  // Lummi images
  "https://lummi.co/cdn/shop/files/lummi-abstract-painting-minimalist-modern-wall-art-234014.webp",
  "https://lummi.co/cdn/shop/files/lummi-floral-art-minimalist-wall-decor-748134.webp",
  "https://lummi.co/cdn/shop/files/lummi-illustration-scandinavian-wall-art-427891.webp",
  "https://lummi.co/cdn/shop/files/lummi-modern-art-printed-canvas-387921.webp",
  "https://lummi.co/cdn/shop/files/lummi-vintage-wall-decor-art-204289.webp",
  "https://lummi.co/cdn/shop/files/lummi-minimalist-print-contemporary-art-423826.webp",
  "https://lummi.co/cdn/shop/files/lummi-geometric-abstract-wall-art-102384.webp",
];

export function Skiper34() {
  return (
    <section className="relative flex w-screen flex-col items-center gap-[10vh] px-4 pt-[50vh]">
      <div className="absolute left-1/2 top-24 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
        <span className="after:from-background after:to-foreground relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:content-['']">
          scroll down to see effect
        </span>
      </div>
      {images.map((img, idx) => (
        <StickyCard_003 key={idx} imgUrl={img} />
      ))}
    </section>
  );
}
