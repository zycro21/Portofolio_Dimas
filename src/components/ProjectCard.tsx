import Image from "next/image";

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  description: string;
  techStack: string[];
  repoUrl: string;
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
  const isRepoAvailable = repoUrl !== "-";
  const isProjectAvailable = projectUrl !== "-";

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md mx-auto transform transition duration-500 hover:scale-[1.03] hover:rotate-[0.5deg] hover:shadow-2xl hover:ring-2 hover:ring-green-400/60">
      {/* Thumbnail */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
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
      <div className="flex gap-4">
        {/* View Project */}
        <a
          href={isProjectAvailable ? projectUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded font-medium text-white transition-colors duration-300 ${
            isProjectAvailable
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!isProjectAvailable) e.preventDefault();
          }}
        >
          View Project
        </a>

        {/* View Repo */}
        <a
          href={isRepoAvailable ? repoUrl : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 rounded font-medium text-white transition-colors duration-300 ${
            isRepoAvailable
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-600 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!isRepoAvailable) e.preventDefault();
          }}
        >
          View Repo
        </a>
      </div>
    </div>
  );
}
