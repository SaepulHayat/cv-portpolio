import { Section } from "./Section";
import { PROJECTS_DATA } from "@/data/portfolio";
import { RocketLaunchIcon, AcademicCapIcon, BriefcaseIcon, GithubIcon as GitHubIcon, ExternalLinkIcon as ExtLinkIcon } from "./icons";

export default function Projects() {
  return (
    <Section title="Featured Projects" variant="accent">
      <div className="space-y-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}

interface ProjectCardProps {
  project: {
    title: string;
    type: 'RevoU' | 'Personal' | 'Academic';
    period: string;
    description: string;
    background: string;
    methodology: string;
    results: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'RevoU':
        return 'from-green-500 to-emerald-600';
      case 'Academic':
        return 'from-blue-500 to-indigo-600';
      default:
        return 'from-purple-500 to-pink-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'RevoU':
        return <RocketLaunchIcon className="w-5 h-5" />;
      case 'Academic':
        return <AcademicCapIcon className="w-5 h-5" />;
      default:
        return <BriefcaseIcon className="w-5 h-5" />;
    }
  };

  return (
    <div className="group p-6 bg-white/90 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(project.type)} text-white shadow-md`}>
            {getTypeIcon(project.type)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {project.type} Project • {project.period}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-4">{project.description}</p>

      {/* Project Details */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Background</h4>
          <p className="text-sm text-gray-600">{project.background}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Methodology</h4>
          <p className="text-sm text-gray-600">{project.methodology}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Results</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {project.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-1">
                <span className="text-green-500 mt-1">•</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <GitHubIcon />
            View Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <ExtLinkIcon />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}


