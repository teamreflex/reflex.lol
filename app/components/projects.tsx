import Image from "next/image";

type Project = {
  title: string;
  image: string;
  url: string;
  github: string;
  description: string;
  tags: string[];
};

const projects = [
  {
    title: "Apollo",
    image: "apollo.svg",
    url: "https://apollo.cafe",
    github: "https://github.com/teamreflex/cosmo-web",
    description:
      "An unofficial web client for MODHAUS' Cosmo the Gate mobile app.",
    tags: ["nextjs", "react", "web3"],
  },
];

export default function ProjectList() {
  return (
    <div className="w-full flex flex-col gap-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-4 transition-transform hover:scale-105 hover:rotate-[0.2deg]">
      <div className="flex flex-col gap-2">
        <Image
          src={project.image}
          alt={project.title}
          width={100}
          height={100}
        />
        <Links
          className="flex sm:hidden gap-2 justify-center"
          project={project}
        />
      </div>

      <div className="flex flex-col">
        <h3 className="font-lg font-semibold">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <Links
        className="hidden sm:flex flex-col gap-2 justify-center"
        project={project}
      />
    </div>
  );
}

function Links({
  className,
  project,
}: {
  className?: string;
  project: Project;
}) {
  return (
    <div className={className}>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <LinkIcon />
      </a>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
    </div>
  );
}

function Tag({ tag }: { tag: string }) {
  return (
    <span className="bg-tag text-white rounded-full px-2 py-0.5 text-xs">
      {tag}
    </span>
  );
}

function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
