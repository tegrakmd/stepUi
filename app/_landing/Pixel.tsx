import { ChevronRight } from "lucide-react";
// import { Vercel } from "@/components/ui/svgs/vercel";
// import { Supabase } from "@/components/ui/svgs/supabase";
// import { Linear } from "@/components/ui/svgs/linear";
// import { Slack } from "@/components/ui/svgs/slack";
// import { Firebase } from "@/components/ui/svgs/firebase";
// import { ClerkIconDark as Clerk } from "@/components/ui/svgs/clerk";
// import { Logo } from "@/components/logo";

// import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { VoLogo } from "./components/icons";
import {
  BracesIcon,
  XShapeIcon,
  CodeIcon,
  TailArk,
  MCPLogo,
  ClaudSonnetLogo,
} from "./components/icons";

export function Pixel() {
  return (
    <section className="bg-background @container py-24">
      <div className="mx-auto max-w-2xl px-6">
        <IntegrationsIllustration />

        <IntegrationsIllustrations />
        {/* <div className="mx-auto mt-12 max-w-md text-balance text-center">
          <h2 className=" text-4xl font-medium">Connect Your Favorite Tools</h2>
          <p className="text-muted-foreground mb-6 mt-4">
            Seamlessly integrate with the services you already use. Set up in
            minutes, not days.
          </p>
          <Button
            variant="secondary"
            size="sm"
            asChild
            className="gap-1 pr-1.5">
            <Link href="#">
              Learn more
              <ChevronRight />
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}

const IntegrationsIllustrations = () => {
  return (
    <div
      aria-hidden
      className="**:fill-foreground @max-md:scale-85 relative mx-auto flex size-96">
      <div className="bg-card shadow-black/6.5 ring-border absolute relative inset-0 m-auto flex size-12 items-center rounded-full shadow-sm ring *:m-auto">
        <VoLogo className="size-5" />
      </div>
      <div className="rotate-120 *:-rotate-120 absolute inset-0 flex items-center justify-between gap-12">
        <div className="border-foreground/10 absolute inset-4 rounded-full border border-dashed" />

        <div className="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto">
          <CodeIcon className="size-3.5" />
        </div>
        <div className="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto">
          <BracesIcon className="size-3.5" />
        </div>
      </div>
      <div className="absolute inset-12 flex items-center justify-between gap-12">
        <div className="border-foreground/10 absolute inset-4 rounded-full border border-dashed" />

        <div className="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto">
          <XShapeIcon className="size-3.5" />
        </div>
        <div className="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto">
          <CodeIcon className="size-3.5" />
        </div>
      </div>
      <div className="absolute inset-24 flex rotate-45 items-center justify-between gap-12 *:-rotate-45">
        <div className="border-foreground/10 absolute inset-4 rounded-full border border-dashed" />

        <div className="bg-card shadow-black/6.5 ring-border relative flex size-9 items-center rounded-full shadow-sm ring *:m-auto">
          <ClaudSonnetLogo className="size-3.5" />
        </div>
        <div className="bg-muted relative flex size-9 items-center rounded-full border backdrop-blur *:m-auto">
          <TailArk className="size-3.5" />
        </div>
      </div>
    </div>
  );
};
const IntegrationsIllustration = () => {
  return (
    <div
      aria-hidden
      className="**:fill-foreground mx-auto flex h-44 max-w-lg flex-col justify-between">
      <div className="@lg:px-6 relative flex h-10 items-center justify-between gap-12">
        <div className="bg-border absolute inset-0 my-auto h-px"></div>

        <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <TailArk className="size-3.5" />
        </div>
        <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <VoLogo className="size-3.5" />
        </div>
      </div>
      <div className="@lg:px-24 relative flex h-10 items-center justify-between px-12">
        <div className="bg-border absolute inset-0 my-auto h-px"></div>
        <div className="bg-linear-to-r mask-l-from-15% mask-l-to-40% mask-r-from-75% mask-r-to-75% from-primary absolute inset-0 my-auto h-px w-1/2 via-amber-500 to-pink-400"></div>
        <div className="bg-linear-to-r mask-r-from-15% mask-r-to-40% mask-l-from-75% mask-l-to-75% absolute inset-0 my-auto ml-auto h-px w-1/2 from-indigo-500 via-emerald-500 to-blue-400"></div>

        <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <MCPLogo className="size-3.5" />
        </div>
        <div className="border-foreground/15 rounded-full border border-dashed p-2">
          <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
            <ClaudSonnetLogo className="h-4" />
          </div>
        </div>
        <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <BracesIcon className="size-3.5" />
        </div>
      </div>
      <div className="@lg:px-6 relative flex h-10 items-center justify-between gap-12">
        <div className="bg-border absolute inset-0 my-auto h-px"></div>

        <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <XShapeIcon className="size-3.5" />
        </div>
        <div className="bg-card shadow-black/6.5 ring-border relative flex h-8 items-center rounded-full px-3 shadow-sm ring">
          <CodeIcon className="size-3.5" />
        </div>
      </div>
    </div>
  );
};
