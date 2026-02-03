"use client";
import React, { useState, useEffect, PropsWithChildren } from "react";
import {
  BracesIcon,
  XShapeIcon,
  CodeIcon,
  TailArk,
  VoLogo,
  MCPLogo,
  ClaudSonnetLogo,
} from "./icons";

import { cn } from "@/lib/utils";
//MCPLogo
const animationStates = [
  { Icon: TailArk, color: " white" }, // White
  { Icon: VoLogo, color: "#34A853" }, // Green
  { Icon: MCPLogo, color: "#4285F4" }, // Blue
  { Icon: ClaudSonnetLogo, color: "#D97757" }, // Brown
  { Icon: BracesIcon, color: "#FFCA28" }, // Yellow
  { Icon: XShapeIcon, color: "#34A853" }, // Green
  { Icon: CodeIcon, color: "#4285F4" }, // Blue
];

export function LogoAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animationStates.length);
    }, 3000); // Change icon every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative inline-block align-middle size-10 sm:size-12 rounded-sm md:rounded-md transition-colors duration-900 ease-in-out"
      )}
      style={{
        backgroundColor: animationStates[currentIndex].color,
        willChange: "background-color",
      }}>
      {animationStates.map(({ Icon }, index) => (
        <span
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "scale-100 opacity-100 blur-none"
              : "scale-90 opacity-0 blur-md"
          }`}
          style={{ willChange: "transform, opacity, filter" }}>
          <Icon className="size-4 sm:size-6" />
        </span>
      ))}
    </div>
  );
}
const CardLogoAnimation = (
  props: PropsWithChildren<{ className?: string }>
) => {
  return (
    <div
      className={
        (cn(
          "relative inline-block align-middle size-10 sm:size-12 rounded-sm md:rounded-md transition-colors duration-900 ease-in-out"
        ),
        props.className)
      }>
      {props.children}
    </div>
  );
};
