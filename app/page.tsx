import { ModeToggle } from "@/components/themeToggle";
import { FeaturesCarousel } from "./_landing/featureSection";
import { Hero } from "./_landing/hero";

import { LeadershipSection } from "./_landing/team";
import { MarketingToolsSection } from "./_landing/DescriptS";
import { FeaturesSection } from "./_landing/DescriptTwo";
import { EngeneerCat } from "./_landing/AllPositionEngeneer";
import { OpenRolesSection } from "./_landing/openRoll";
import { ReadMe } from "./_landing/Read";
import { ReadMoreSection } from "./_landing/learnMore";
import OpenRoleDeux from "./_landing/OpenRolleDeux";
import { CaseStudyPage } from "./_landing/StudyPage";

export default function Page() {
  return (
    <>
      <div className="font-ubuntu-sans w-full relative before:fixed before:inset-0 before:-z-40 dark:before:bg-[url('/grainy-bg.svg')] dark:before:opacity-[.015]">
        {/* <div
          className={cn("pointer-events-none fixed inset-0 dark:bg-black/50")}
        /> */}
        <div className="fixed top-2 left-2 z-20">
          <ModeToggle />
        </div>
        <Hero />
        <FeaturesCarousel />
        <LeadershipSection />
        <EngeneerCat />
        <CaseStudyPage />
        <OpenRolesSection />
        <OpenRoleDeux />
        <ReadMe />
        <ReadMoreSection />
        <FeaturesSection />
        <MarketingToolsSection />
      </div>
    </>
  );
}
