import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default function Projects({
  projects = [],
}: {
  projects: SanityDocument[];
}) {
  const title =
    projects.length === 1 ? `1 Project` : `${projects.length} Projects`;

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      {projects.map((project) => (
        <Link
          key={project._id}
          href={project.slug.current}
          className="p-4 hover:bg-blue-50"
        >
          <h2>{project.title}</h2>
        </Link>
      ))}
    </main>
  );
}
