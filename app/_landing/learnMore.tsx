"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShadcnCli, VoI } from "./components/icons";

export function ReadMoreSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-muted/25 py-16 md:py-32" id="learn-more">
      <div className="mx-auto max-w-5xl px-2">
        <div className="bg-background ring-foreground/5 relative mx-auto max-w-2xl rounded-3xl border-2 border-transparent p-8 pb-20 shadow ring-1 sm:p-12 sm:pb-24">
          <Button
            variant="secondary"
            size="sm"
            className="group absolute bottom-8 left-8 z-20 flex items-center gap-2 pr-2.5 text-xs sm:bottom-10 sm:left-12"
            onClick={() => setExpanded(!expanded)}>
            <span className="w-16 text-left">
              {expanded ? "Read Less" : "Read More"}
            </span>
            <Plus
              className={cn(
                "!size-3.5 opacity-50 transition-transform duration-300 group-hover:rotate-90",
                expanded && "rotate-45"
              )}
              strokeWidth={2.5}
            />
          </Button>
          {/* Motion Wrapper for Height */}
          <motion.div
            layout
            initial={false}
            animate={{ height: expanded ? "auto" : "22rem" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative overflow-hidden">
            <div className="text-muted-foreground space-y-4 text-lg *:leading-relaxed">
              <p>
                I&apos;m honored to be with you today for your commencement from
                one of the{" "}
                <strong className="text-foreground font-medium">
                  finest universities
                </strong>{" "}
                in the world. Truth be told, I{" "}
                <strong className="text-foreground font-medium">
                  never graduated from college
                </strong>
                . And this is the closest I&apos;ve ever gotten to a college
                graduation.
              </p>
              <p>
                Today I want to tell you{" "}
                <strong className="text-foreground font-medium">
                  three stories
                </strong>{" "}
                from my life. That&apos;s it. No big deal. Just{" "}
                <strong className="text-foreground font-medium">
                  three stories
                </strong>
                .
              </p>
              <p>
                The first story is about{" "}
                <strong className="text-foreground font-medium">
                  connecting the dots
                </strong>
                . I dropped out of{" "}
                <strong className="text-foreground font-medium">
                  Reed College
                </strong>{" "}
                after the first six months, but then stayed around as a drop-in
                for another eighteen months or so before I really quit. So why
                did I drop out?
              </p>
              <p>
                It started before I was born. My biological mother was a young,
                unwed college graduate student, and she decided to put me up for
                adoption. She felt very strongly that I should be adopted by
                college graduates, so everything was all set for me to be
                adopted at birth by a lawyer and his wife.
              </p>
              <p>
                Except that when I popped out they decided at the last minute
                that they really wanted a girl. So my parents, who were on a
                waiting list, got a call in the middle of the night asking:
                &quot;We have an unexpected baby boy; do you want him?&quot;
                They said: &quot;Of course.&quot;
              </p>
              <p>
                My biological mother later found out that my mother had never
                graduated from college and that my father had never graduated
                from high school. She refused to sign the final adoption papers.
                She only relented a few months later when my parents promised
                that I would someday go to college.
              </p>
              <p>
                And 17 years later I did go to college. But I naively chose a
                college that was almost as expensive as Stanford, and all of my
                working-class parents&apos; savings were being spent on my
                college tuition. After six months, I couldn&apos;t see the value
                in it.
              </p>
              <div className="mt-12">
                <div className="flex items-center gap-2">
                  <VoI className="size-12" />
                  <ShadcnCli className="size-8" />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="size-12 overflow-hidden rounded-xl ring-1 ring-foreground/10">
                    <Image
                      src="/avat.jpg"
                      width={120}
                      height={120}
                      alt="Avatar"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="font-medium text-foreground">Tegra Kmd</p>
                    <p className="text-sm text-muted-foreground">
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Gradient Overlay with Opacity Animation */}
            <AnimatePresence>
              {!expanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="from-background pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t to-transparent"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
