// components/ProjectCard.tsx
import Image from "next/image";

type RepoUrl = string | string[];

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  repoUrl: RepoUrl;        // <- union
  projectUrl: string;
}

export default function ProjectCard({
  title,
  thumbnail,
  description,
  techStack,
  repoUrl,
  projectUrl,
}: ProjectCardProps) {
  // Normalisasi: jadikan array bersih dari tanda "-"
  const repoUrls = Array.isArray(repoUrl)
    ? repoUrl.filter((u) => u && u !== "-")
    : repoUrl && repoUrl !== "-"
    ? [repoUrl]
    : [];

  const hasRepo = repoUrls.length > 0;
  const hasProject = projectUrl && projectUrl !== "-";

  // Buat label tombol repo dari nama repo (bagian setelah / terakhir)
  const repoLabel = (url: string, idx: number) => {
    try {
      const name = new URL(url).pathname.split("/").filter(Boolean).pop();
      return name || `Repo ${idx + 1}`;
    } catch {
      return `Repo ${idx + 1}`;
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md mx-auto transform transition duration-500 hover:scale-[1.03] hover:rotate-[0.5deg] hover:shadow-2xl hover:ring-2 hover:ring-green-400/60">
      {/* Thumbnail */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="rounded-md object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="bg-green-500 text-white px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {/* View Project */}
        <a
          href={hasProject ? projectUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded font-medium text-white transition-colors duration-300 ${
            hasProject
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!hasProject) e.preventDefault();
          }}
        >
          View Project
        </a>

        {/* View Repo(s) */}
        {hasRepo ? (
          repoUrls.map((url, i) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
            >
              {repoLabel(url, i)}
            </a>
          ))
        ) : (
          <span className="px-4 py-2 rounded font-medium text-white bg-gray-600 cursor-not-allowed">
            View Repo
          </span>
        )}
      </div>
    </div>
  );
}
