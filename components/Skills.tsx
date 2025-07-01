import { Section } from "./Section";
import { SKILLS_DATA } from "@/data/portfolio";
import { CertificationIcon, CodeIcon, ServerIcon, DatabaseIcon, CloudIcon, DeviceIcon } from "./icons";

export default function Skills() {
  return (
    <Section title="Technical & Soft Skills" variant="default">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_DATA.map((skillCategory, index) => (
          <SkillCard key={index} skillCategory={skillCategory} />
        ))}
      </div>

      {/* Certification Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Certification</h3>
        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <CertificationIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900">Fullstack Web Development</h4>
              <p className="text-gray-600 font-medium">RevoU</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

interface SkillCardProps {
  skillCategory: {
    category: string;
    items: string[];
    icon: string;
    color: string;
  };
}

function SkillCard({ skillCategory }: SkillCardProps) {
  const iconComponents = {
    code: <CodeIcon className="w-6 h-6 text-white" />,
    server: <ServerIcon className="w-6 h-6 text-white" />,
    database: <DatabaseIcon className="w-6 h-6 text-white" />,
    cloud: <CloudIcon className="w-6 h-6 text-white" />,
    device: <DeviceIcon className="w-6 h-6 text-white" />
  };

  return (
    <div className="group p-6 bg-white/80 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategory.color} text-white text-xl shadow-md`}>
          {iconComponents[skillCategory.icon as keyof typeof iconComponents] || skillCategory.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {skillCategory.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skillCategory.items.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}


