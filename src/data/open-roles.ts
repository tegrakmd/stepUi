// data/open-roles.ts
// types/open-role.ts
export type Role = {
  title: string;
  location: string;
  href: string;
};

export type RoleCategory = {
  name: string;
  roles: Role[];
};

export const openRoles: RoleCategory[] = [
  {
    name: "engeneering",
    roles: [
      { title: "AI Engineer", location: "San Francisco", href: "ai-engineer" },
      {
        title: "Design Engineer",
        location: "San Francisco",
        href: "design-engineer",
      },
      {
        title: "Product Engineer",
        location: "Remote",
        href: "product-engineer",
      },
      {
        title: "Backend Engineer",
        location: "San Francisco",
        href: "backend-engineer",
      },
      {
        title: "Software Engineer",
        location: "New York",
        href: "software-engineer",
      },
    ],
  },
  {
    name: "marketing",
    roles: [
      {
        title: "Marketing Manager",
        location: "New York",
        href: "marketing-manager",
      },
      {
        title: "Content Strategist",
        location: "Remote",
        href: "content-strategist",
      },
    ],
  },
  {
    name: "compliance",
    roles: [
      {
        title: "Compliance Officer",
        location: "San Francisco",
        href: "compliance-officer",
      },
      {
        title: "Regulatory Analyst",
        location: "New York",
        href: "regulatory-analyst",
      },
    ],
  },
  {
    name: "data",
    roles: [
      { title: "Data Scientist", location: "Remote", href: "data-scientist" },
      {
        title: "Data Analyst",
        location: "San Francisco",
        href: "data-analyst",
      },
    ],
  },
  {
    name: "finance",
    roles: [
      {
        title: "Financial Analyst",
        location: "New York",
        href: "financial-analyst",
      },
      { title: "Accountant", location: "San Francisco", href: "accountant" },
    ],
  },
];
