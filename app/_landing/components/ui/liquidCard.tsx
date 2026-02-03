import React from "react";
import { cn } from "@/lib/utils";

interface LiquidCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({
  children,
  className,
  ...props
}) => {
  // Styles de forme communs pour synchroniser l'animation
  const shapeStyles =
    "rounded-[2rem] hover:rounded-[2.5rem] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)]";

  return (
    <div
      className={cn(
        "relative flex font-semibold overflow-hidden shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] p-[0.6rem] hover:p-[0.8rem]",
        shapeStyles,
        className
      )}
      {...props}>
      {/* Couche d'effet Liquide (Backdrop) */}
      <div
        className={cn(
          "absolute inset-0 z-0 backdrop-blur-[3px] overflow-hidden",
          shapeStyles
        )}
        style={{ filter: "url(#glass-distortion)" }}
      />

      {/* Couche de teinte (Tint) */}
      <div className={cn("absolute inset-0 z-10 bg-white/50", shapeStyles)} />

      {/* Couche de brillance (Shine) */}
      <div
        className={cn(
          "absolute inset-0 z-20 overflow-hidden shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.5),inset_-1px_-1px_1px_1px_rgba(255,255,255,0.5)]",
          shapeStyles
        )}
      />

      {/* Couche de contenu */}
      <div className="relative z-30">{children}</div>
    </div>
  );
};
