// import { cn } from "@/lib/utils";
// import { Star } from "lucide-react";
// import Link from "next/link";
// import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

// const BlocGrid = (props: PropsWithChildren<{ className?: string }>) => {
//   return (
//     <div
//       className={cn(
//         "group relative min-h-72 max-sm:overflow-hidden",
//         props.className
//       )}>
//       {props.children}
//     </div>
//   );
// };
// const BlockGridContent = (props: PropsWithChildren<{ className?: string }>) => {
//   return (
//     <div
//       className={cn(
//         "bg-card/75 group-hover:bg-card/50 in-data-[theme=dark]:group-hover:bg-black not-dark:in-data-[theme=dark]:bg-black/95 z-1 peer relative flex h-full items-center justify-center p-8 py-12 *:scale-90 dark:bg-black/75 dark:group-hover:bg-black/50",
//         props.className
//       )}>
//       {props.children}
//     </div>
//   );
// };
// const BlocGridDeux = (props: PropsWithChildren<{ className?: string }>) => {
//   return (
//     <div
//       className={cn("max-lg:hidden group relative min-h-72 ", props.className)}>
//       {props.children}
//     </div>
//   );
// };
// const BlocGridDeuxContent = (
//   props: PropsWithChildren<{ className?: string }>
// ) => {
//   return (
//     <div
//       className={cn(
//         "bg-card/75 z-1 peer relative  flex h-full items-center justify-center p-8 dark:bg-black/75",
//         props.className
//       )}>
//       {props.children}
//     </div>
//   );
// };
// export const Code = ({
//   className,
//   ...props
// }: ComponentPropsWithoutRef<"span">) => {
//   return (
//     <span
//       className={cn(
//         "bg-accent/20 border-accent border rounded-sm px-1 py-px hover:bg-accent/50 cursor-pointer transition-colors  font-mono text-primary",
//         className
//       )}
//       {...props}
//     />
//   );
// };
// export function Hero() {
//   return (
//     <>
//       <section className="w-full @container relative overflow-hidden">
//         {/* <div className="pointer-events-none fixed inset-0 dark:bg-black/50" /> */}
//         <div className="relative mt-6 px-4 dark:bg-[color-mix(in_oklab,var(--color-black)25%,transparent_50%)]">
//           <div className="2xl:max-w-336 2xl:mx-auto">
//             <div className="bg-foreground/8 dark:bg-foreground/6 **:rounded-md relative mb-12 grid gap-px p-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               <BlocGridDeux className="">
//                 <BlocGridDeuxContent />
//               </BlocGridDeux>
//               <BlocGridDeux className="col-span-full lg:col-span-1 xl:col-span-2  relative min-h-72 max-lg:block">
//                 <BlocGridDeuxContent className="bg-card/75 z-1 peer relative flex flex-col gap-2 h-full items-center justify-center p-8 dark:bg-black/75">
//                   <h1 className="text-3xl font-medium max-xl:text-center">
//                     Design conception{" "}
//                     <span className="font-mono font-thin opacity-50">127</span>
//                   </h1>
//                   <Link href={"/"}>
//                     <Code className="inline-flex items-center gap-1 opacity-80">
//                       <Star size={"18"} className="inline " />
//                       Youtube
//                     </Code>
//                   </Link>
//                 </BlocGridDeuxContent>
//               </BlocGridDeux>
//               <BlocGridDeux>
//                 <BlocGridDeuxContent />
//               </BlocGridDeux>
//               <BlocGrid>
//                 <BlockGridContent>Hello word</BlockGridContent>
//               </BlocGrid>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// ==============================

import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { LogoAnimation } from "./components/changeLogo";

// 1. Un seul composant Carte générique
// On accepte 'children' et 'className' pour gérer la taille (col-span)
interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  noPadding?: boolean;
}

const BentoCard = ({
  className,
  children,
  noPadding,
  ...props
}: BentoCardProps) => {
  return (
    <div
      className={cn(
        // Base styles: Hauteur min, couleur de fond, gestion du hover
        "group relative flex min-h-72 flex-col overflow-hidden  bg-card/75 transition-colors",
        "bg-background   dark:bg-black/75 ",
        //  padding condition
        !noPadding && "p-4 md:p-8",
        className
      )}
      {...props}>
      {/* Effet de background subtil si besoin */}
      {/* <div className="absolute inset-0 z-0 bg-transparent transition-colors group-hover:bg-accent/5" /> */}

      {/* Le contenu passe au-dessus */}
      <div className=" w-full z-1 peer relative flex h-full items-center justify-center scale-90">
        {children}
      </div>
    </div>
  );
};

// 2. Ton composant Code (très bien, juste nettoyé)
export const CodeBadge = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "inline-flex cursor-pointer items-center gap-1 rounded-sm border border-accent bg-accent/20 px-1.5 py-0.5 font-mono text-sm text-primary transition-colors hover:bg-accent/50",
        className
      )}
      {...props}
    />
  );
};

export function Hero() {
  return (
    <section className="@container  w-full overflow-hidden py-12 " id="hero">
      <div className="2xl:max-w-336 2xl:mx-auto mx-auto max-md:px-4 ">
        {/* Technique "Border Grid" :
          Le parent a un background (la couleur de la bordure) et un gap de 1px.
          Les enfants ont un background solide.
          Cela crée des bordures fines parfaites entre les éléments.
        */}
        <div className="w-full grid-cols-1  overflow-hidden bg-foreground/8 dark:bg-foreground/6 grid gap-px p-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <BentoCard className="max-lg:hidden  relative min-h-72 " />

          {/* Bloc Principal (Titre) - Prend 2 colonnes sur grand écran */}
          <BentoCard className=" col-span-full lg:col-span-1 xl:col-span-2  relative min-h-72 max-lg:block">
            <div className="w-fit max-auto max-md:flex-col flex items-center gap-y-2">
              <h1 className="text-3xl  font-medium max-xl:text-center text-balance">
                Design conception
                <span className="font-mono ml-1 font-thin text-muted-foreground opacity-50">
                  127
                </span>
              </h1>

              {/* <Link href={"/"}>
                <CodeBadge>
                  <Star size={14} />
                  Youtube
                </CodeBadge>
              </Link> */}
            </div>
          </BentoCard>

          <BentoCard className="max-lg:hidden  relative min-h-72 " />

          {/* Autre bloc de contenu */}
          <BentoCard className="flex hover:bg-card/70 dark:hover:bg-black/60   items-center justify-center">
            <span className="text-muted-foreground">Sweet Kit tailark...</span>
          </BentoCard>
          <BentoCard className="flex hover:bg-card/70 dark:hover:bg-black/60  items-center justify-center ">
            <LogoAnimation />
          </BentoCard>
          <BentoCard className="flex hover:bg-card/70 dark:hover:bg-black/60  items-center justify-center">
            <LogoAnimation />
          </BentoCard>
          <BentoCard className="flex hover:bg-card/70 dark:hover:bg-black/60  items-center justify-center">
            <LogoAnimation />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
