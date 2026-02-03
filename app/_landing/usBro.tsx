import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Import de l'utilitaire shadcn

export function UShiSection() {
  return (
    <div
      className={cn(
        "grid min-h-dvh",
        // Configuration de la grille complexe du design original
        "grid-cols-[var(--padding)_1px_1fr_1px_var(--padding)]",
        "grid-rows-[var(--padding)_1px_1fr_1px_var(--padding)]",
        // Définition des variables CSS pour le spacing
        "[--padding:theme(spacing.4)] sm:[--padding:theme(spacing.10)]",
        "dark:bg-neutral-950 bg-white"
      )}>
      {/* --- ÉLÉMENTS DE LA GRILLE (Lignes décoratives) --- */}

      {/* Horizontal Divider 1 (Top) */}
      <div className="relative col-span-5 col-start-1 row-start-2 bg-black/10 before:absolute before:inset-x-0 before:-inset-y-2 before:content-[''] dark:bg-white/10" />

      {/* Horizontal Divider 2 (Bottom) */}
      <div className="relative col-span-5 col-start-1 row-start-4 bg-black/10 before:absolute before:inset-x-0 before:-inset-y-2 before:content-[''] dark:bg-white/10" />

      {/* Vertical Divider 1 (Left) */}
      <div className="relative col-start-2 row-span-5 row-start-1 bg-black/10 before:absolute before:-inset-x-2 before:inset-y-0 before:content-[''] dark:bg-white/10" />

      {/* Vertical Divider 2 (Right) */}
      <div className="relative col-start-4 row-span-5 row-start-1 bg-black/10 before:absolute before:-inset-x-2 before:inset-y-0 before:content-[''] dark:bg-white/10" />

      {/* --- MARQUEURS DE COINS --- */}
      <CornerMarker className="-right-1 -bottom-1 col-start-1 row-start-1 place-self-end" />
      <CornerMarker className="-bottom-1 -left-1 col-start-5 row-start-1 self-end justify-self-start" />
      <CornerMarker className="-top-1 -right-1 col-start-1 row-start-5 self-start justify-self-end" />
      <CornerMarker className="-top-1 -left-1 col-start-5 row-start-5 place-self-start" />

      {/* --- CONTENU CENTRAL --- */}
      <div className="col-start-3 row-start-3 flex flex-col gap-16 p-4 sm:p-10">
        {/* Header Section with Logo */}
        <header className="flex items-center justify-between">
          <Link href="/">
            <Logo className="h-7 fill-black sm:h-9 dark:fill-white" />
            <span className="sr-only">ui.sh landing page</span>
          </Link>
        </header>

        {/* Main Hero Content */}
        <main className="flex-1">
          <div className="grid h-full content-end selection:bg-[#bef264] selection:text-black">
            <h1 className="max-w-7xl text-[min(8.5vw,128px)]/[1] font-[450] tracking-tighter text-black dark:text-white">
              <span className="block">Turn your terminal into</span>
              <span className="whitespace-nowrap flex items-baseline">
                <span>a design engineer.</span>
                {/* Typewriter cursor effect */}
                <span
                  className="ml-[0.05em] -mt-[27px] inline-block h-[0.8em] w-[0.15em] bg-black/15 align-baseline dark:bg-white/15 animate-pulse"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg/8 text-neutral-700 sm:text-xl/9 md:text-2xl/10 dark:text-neutral-400">
              A toolkit for coding assistants like Claude Code, Cursor, and
              Codex to help you build UIs that don&apos;t suck.
            </p>

            <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              {/* Call to Action - Style personnalisé conservé car trop spécifique pour un bouton Shadcn standard */}
              <div>
                <Link
                  href="/sign-up"
                  className={cn(
                    "inline-flex items-center justify-between gap-6 rounded-xl p-1.5 pl-6 shadow-lg select-none transition-colors",
                    "bg-black text-white hover:bg-neutral-800",

                    "dark:bg-linear-to-b dark:from-[oklch(0.93_0.26_110)] dark:to-[oklch(0.90_0.29_132)]  dark:text-black dark:shadow-none dark:hover:bg-neutral-500",
                    "text-base/7 font-medium"
                    // inline-flex items-center justify-between gap-6 rounded-xl bg-black p-1.5 pl-6 text-base/7 font-medium text-white shadow-lg select-none hover:bg-neutral-800 dark:bg-linear-to-b dark:from-[oklch(0.93_0.26_110)] dark:to-[oklch(0.90_0.29_132)] dark:text-black dark:shadow-none dark:hover:bg-neutral-500
                  )}>
                  Request an invite
                  {/* <ArrowUpIcon className="size-4 stroke-black dark:stroke-white animate-pulse " /> */}
                  <span className="flex size-11 items-center justify-center rounded-md bg-linear-to-b from-[#bef264] to-[#a3e635] dark:bg-black dark:bg-none">
                    <svg
                      aria-hidden="true"
                      className="size-4 stroke-black dark:stroke-white"
                      fill="none"
                      viewBox="0 0 16 16">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13.25 2.75v7.5m0-7.5h-7.5m7.5 0-10.5 10.5"></path>
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Authors / Credits Section */}
              <div className="flex flex-row-reverse items-center gap-4 self-start md:flex-row md:self-auto">
                <p className="text-sm/6 text-neutral-700 md:text-right dark:text-neutral-300">
                  By the people who made
                  <br />
                  <Link
                    href="/"
                    className="font-semibold text-neutral-950 underline decoration-neutral-950/50 decoration-dotted dark:text-white dark:decoration-white/50">
                    Tailwind CSS
                  </Link>{" "}
                  &amp;{" "}
                  <Link
                    href="/"
                    className="font-semibold text-neutral-950 underline decoration-neutral-950/50 decoration-dotted dark:text-white dark:decoration-white/50">
                    Refactoring UI
                  </Link>
                </p>
                <div className="flex shrink-0">
                  <AvatarLink
                    href="/"
                    src="https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg"
                    alt="Adam Wathan"
                    className="z-10 -mr-3"
                  />
                  <AvatarLink
                    href="/"
                    src="https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg"
                    alt="Steve Schoger"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// --- SOUS-COMPOSANTS POUR GARDER LE CODE PROPRE ---

function CornerMarker({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative size-1.75 border bg-white dark:bg-neutral-950",
        "border-black/10 dark:border-white/10",
        className
      )}
    />
  );
}

function AvatarLink({
  href,
  src,
  alt,
  className,
}: {
  href: string;
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("relative block", className)}
      target="_blank"
      rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="size-10 rounded-full outline-2 outline-white dark:outline-neutral-950 bg-neutral-200"
      />
    </Link>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      aria-label="ui.sh"
      className={className}
      viewBox="0 0 100 36"
      fill="none">
      <path
        d="M19.26 13.2V30h-3.84v-2.18c-1.19 1.38-3.17 2.53-6.05 2.53-4.58 0-7.3-3.1-7.3-7.8V13.2h3.84v8.93c0 2.97 1.47 4.73 4.55 4.73 3.23 0 4.96-1.98 4.96-5.08V13.2zm3.66-2.24V7.02h3.97v3.94zm3.9 2.24V30h-3.84V13.2zM29.97 30v-4.64h4.64V30zm6.25-3.55 2.72-2.47c1.72 2.24 4.1 3.2 7.07 3.2 2.65 0 4.45-.6 4.45-2.04 0-1.48-1.44-1.5-5.44-1.99-4.39-.54-7.72-1.28-7.72-4.83 0-3.17 3.08-5.44 7.94-5.44 4.03 0 7.17 1.54 8.6 3.46l-2.46 2.36c-1.24-1.66-3.52-2.65-6.3-2.65s-4.1.77-4.1 1.92c0 1.18 1.25 1.34 4.93 1.79 4.51.54 8.32 1.09 8.32 5 0 3.77-3.93 5.6-8.19 5.6-4.29 0-7.97-1.42-9.82-3.91M56.57 30V7.02h3.84v8.39c1.19-1.38 3.3-2.53 6.21-2.53 4.67 0 7.3 3.26 7.3 7.97V30h-3.84v-8.51c0-2.98-1.54-5.09-4.64-5.09-3.27 0-5.03 2.05-5.03 5.15V30z"
        fill="currentColor"></path>
      <path fill="#bef264" d="M78 .79h21.28v34.43H78z"></path>
    </svg>
  );
}
