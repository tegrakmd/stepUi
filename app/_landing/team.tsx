import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, XIcon } from "./components/icons";
import { cn } from "@/lib/utils";

type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  gradient: string;
  socials: SocialLink[];
};
type TeamMemberProps = {
  member: TeamMember;
};
function TeamCard({ member }: TeamMemberProps) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-4">
      <div className="relative aspect-5/6 w-24 overflow-hidden rounded-2xl shadow-md ring-accent/40 ring-1">
        <div
          className={cn(
            "pointer-events-none absolute z-1 inset-0 rounded-full opacity-45 dark:opacity-25 blur-2xl bg-gradient-to-br",
            member.gradient
          )}
        />
        <Image
          src={member.image}
          alt={member.name}
            fill
          sizes="120"
          className="object-cover grayscale"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col space-y-2 py-2">
        <h3 className="text-primary text-sm font-medium">{member.name}</h3>
        <p className="text-muted-foreground text-sm ">{member.role}</p>

        <div className="-mx-1 mt-auto flex gap-1">
          {member.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-7 items-center justify-center rounded text-primary/50 transition bg-accent/5 hover:bg-accent/20  hover:text-primary/60 focus-visible:outline-2">
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

const team: TeamMember[] = [
  {
    name: "Tegra Kmd",
    role: "Co-Founder, CEO, Front-End Dev",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Marcus Chen",
    role: "Co-Founder, CTO",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-sky-400 to-emerald-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Sarah Mitchell",
    role: "Co-Founder, CEO",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Tegra ",
    role: "Co-Founder, CEO, Front-End Dev",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Marcus ",
    role: "Co-Founder, CTO",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-sky-400 to-emerald-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Sarah ",
    role: "Co-Founder, CEO",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "Sarah kal ",
    role: "Co-Founder, CEO",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  {
    name: "kmd ",
    role: "Co-Founder, CEO, Front-End Dev",
    image: "/avat.jpg",
    gradient: "from-purple-400 via-blue-400 to-amber-500",
    socials: [
      { label: "Twitter", href: "#", icon: <XIcon /> },
      { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    ],
  },
  // ➕ add more members here
];

export function LeadershipSection() {
  return (
    <section className="py-16 md:py-32" id="leadership">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-xs">
          <h2 className=" text-primary text-balance text-4xl font-semibold">
            Our incredible leadership team
          </h2>
        </div>
        <ul
          role="list"
          className="mt-24 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.name}>
              <TeamCard member={member} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
