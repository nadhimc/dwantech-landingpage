import React from "react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isRealProject?: boolean;
  metrics?: {
    omzet?: string;
    users?: string;
    growth?: string;
    timeline?: string;
  };
  challenges?: string[];
  solutions?: string[];
  techStack?: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  tags,
  isRealProject = true,
  metrics,
  challenges,
  solutions,
  techStack,
}) => {
  return (
    <div className="portfolio-card bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        {isRealProject && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Real Project
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Metrics */}
        {metrics && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-sm text-gray-700 mb-2">
              Key Results:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {metrics.omzet && (
                <div>
                  <span className="font-medium">Omzet:</span> {metrics.omzet}
                </div>
              )}
              {metrics.users && (
                <div>
                  <span className="font-medium">Users:</span> {metrics.users}
                </div>
              )}
              {metrics.growth && (
                <div>
                  <span className="font-medium">Growth:</span> {metrics.growth}
                </div>
              )}
              {metrics.timeline && (
                <div>
                  <span className="font-medium">Timeline:</span>{" "}
                  {metrics.timeline}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Challenges & Solutions */}
        {(challenges || solutions) && (
          <div className="mb-4">
            {challenges && (
              <div className="mb-2">
                <h4 className="font-semibold text-sm text-red-600 mb-1">
                  Challenges:
                </h4>
                <ul className="text-sm text-gray-600">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="mb-1">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {solutions && (
              <div className="mb-2">
                <h4 className="font-semibold text-sm text-green-600 mb-1">
                  Solutions:
                </h4>
                <ul className="text-sm text-gray-600">
                  {solutions.map((solution, index) => (
                    <li key={index} className="mb-1">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        {techStack && (
          <div className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 mb-2">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-1">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-[#00C4CC]/10 text-[#00C4CC] text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
