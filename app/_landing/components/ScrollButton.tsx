"use client";
import { Button } from "@/components/ui/button";
import { useLenis } from "@studio-freight/react-lenis";

export default function ScrollButton() {
  const lenis = useLenis();

  const handleScroll = () => {
    // Scroll vers l'élément avec l'ID 'ma-section'
    lenis?.scrollTo("#ma-section", {
      offset: -80, // Compense par exemple un header de 80px
      duration: 1.5, // Durée en secondes
      immediate: false, // Animation fluide (true pour saut instantané)
    });
  };

  return (
    <Button
      onClick={handleScroll}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
      Découvrir la section
    </Button>
  );
}
