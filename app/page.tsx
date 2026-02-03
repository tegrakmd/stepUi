import { ModeToggle } from "@/components/themeToggle";
import { Hero } from "./_landing/hero";
import { FeaturesCarousel } from "./_landing/featureSection";
import { LeadershipSection } from "./_landing/team";
import { MarketingToolsSection } from "./_landing/DescriptS";
import { FeaturesSection } from "./_landing/DescriptTwo";
import { EngeneerCat } from "./_landing/AllPositionEngeneer";
import { OpenRolesSection } from "./_landing/openRoll";
import { ReadMe } from "./_landing/Read";
import { ReadMoreSection } from "./_landing/learnMore";
import OpenRoleDeux from "./_landing/OpenRolleDeux";
import { CaseStudyPage } from "./_landing/StudyPage";
import { TextLine } from "./_landing/sectionText";
import { UShiSection } from "./_landing/usBro";
// import { Skiper54 } from "@/components/ui/skiper-ui/skiper54";
// import { Skiper34 } from "./_landing/components/Lolo32";
import { Pixel } from "./_landing/Pixel";
import { TeamDeux } from "./_landing/teamDeux";
import { LogoCloud } from "./_landing/Cloud";

export default function Page() {
  /* <div
          className={cn("pointer-events-none fixed inset-0 dark:bg-black/50")}
        /> */

  return (
    <>
      <div className="font-ubuntu-sans w-full relative before:fixed before:inset-0 before:-z-40 dark:before:bg-[url('/grainy-bg.svg')] dark:before:opacity-[0.03]">
        <div className="fixed top-2 left-2 z-20 flex gap-2">
          <ModeToggle />
        </div>
        <Hero />
        <Pixel />
        <LogoCloud />
        <TeamDeux />

        <UShiSection />
        {/* <Skiper54 /> */}
        <FeaturesCarousel />
        <TextLine />
        <LeadershipSection />
        <EngeneerCat />
        <CaseStudyPage />
        <OpenRolesSection />

        {/* <Skiper34 /> */}
        <OpenRoleDeux />
        <ReadMe />
        <ReadMoreSection />
        <FeaturesSection />
        <MarketingToolsSection />
      </div>
    </>
  );
}
