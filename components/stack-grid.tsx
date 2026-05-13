type Group = {
  title: string;
  items: string[];
};

const groups: Group[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind", "MDX"],
  },
  {
    title: "Mobile",
    items: ["React Native", "iOS / Android releases", "Hermes", "Native modules"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Flask", "REST APIs", "Auth"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "DynamoDB", "Redis"],
  },
  {
    title: "Cloud / Infra",
    items: ["AWS EC2 / ECS / Lambda / Fargate", "S3", "RDS / Aurora", "CloudFront", "Route53"],
  },
];

export function StackGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className="text-sm font-medium uppercase tracking-widest text-ink-muted">
            {g.title}
          </h3>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {g.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-ink/10 px-2.5 py-1 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
