"use client";
import React, { useEffect, useState } from "react";
import { MCPLogo, VoLogo } from "./components/icons";
import {
  CodeIcon,
  BracesIcon,
  TailArk,
  ClaudSonnetLogo,
  XShapeIcon,
} from "./components/icons";
import { motion, AnimatePresence } from "framer-motion";

const aiLogos: React.ReactNode[] = [
  <VoLogo key="vo" className="h-3.5 w-full" />,
  <CodeIcon key="code" className="h-3.5 w-full" />,
  <BracesIcon key=" braces" className="h-3.5 w-full" />,
];

const paymentsLogos: React.ReactNode[] = [
  <XShapeIcon key="xshape" className="h-3.5 w-full" />,
  <CodeIcon key="code" className="h-3.5 w-full" />,
  <ClaudSonnetLogo key="claud" className="h-5 w-full" />,
];

const hostingLogos: React.ReactNode[] = [
  <MCPLogo key="mcp" className="h-3.5 w-full" />,
  <CodeIcon key="code" className="h-3.5 w-full" />,
  <ClaudSonnetLogo key="claud" className="h-5 w-full" />,
];
const streamingLogos: React.ReactNode[] = [
  <TailArk key="tailark" className="h-5 w-full" />,
  <VoLogo key="vo" className="h-3.5 w-full" />,
  <ClaudSonnetLogo key="claud" className="h-5 w-full" />,
];

type LogoGroup = "ai" | "payments" | "streaming" | "hosting";

const logos: { [key in LogoGroup]: React.ReactNode[] } = {
  ai: aiLogos,
  payments: paymentsLogos,
  streaming: streamingLogos,
  hosting: hostingLogos,
};

export function LogoCloud() {
  const [currentGroup, setCurrentGroup] = useState<LogoGroup>("ai");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => {
        const groups = Object.keys(logos) as LogoGroup[];
        const currentIndex = groups.indexOf(prev);
        const nextIndex = (currentIndex + 1) % groups.length;
        return groups[nextIndex];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid h-8 max-w-2xl grid-cols-3 items-center gap-8">
          <AnimatePresence initial={false} mode="popLayout">
            {logos[currentGroup].map((logo, i) => (
              <motion.div
                key={`${currentGroup}-${i}`}
                className="**:fill-foreground! flex items-center justify-center"
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 12, filter: "blur(6px)", scale: 0.5 }}
                transition={{
                  delay: i * 0.1,
                  duration: 1.5,
                  type: "spring",
                  bounce: 0.2,
                }}>
                {logo}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
