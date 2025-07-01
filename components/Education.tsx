import { Section } from "./Section";
import { EDUCATION_DATA } from "@/data/portfolio";
import { RocketLaunchIcon, AcademicCapIcon } from "./icons";

export default function Education() {
  return (
    <Section title="Education" variant="default">
      <div className="space-y-6">
        {EDUCATION_DATA.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </Section>
  );
}

interface EducationCardProps {
  education: {
    institution: string;
    degree: string;
    period: string;
    description: string;
    gpa?: string;
    highlights: string[];
  };
}

function EducationCard({ education }: EducationCardProps) {
  const isRevoU = education.institution === "RevoU";

  return (
    <div className="group p-6 bg-white/80 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg shadow-lg flex items-center justify-center text-white ${isRevoU
          ? "bg-gradient-to-r from-green-500 to-emerald-600"
          : "bg-gradient-to-r from-blue-500 to-indigo-600"
          }`}>
          {isRevoU ? <RocketLaunchIcon className="w-6 h-6" /> : <AcademicCapIcon className="w-6 h-6" />}
        </div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {education.institution}
            </h3>
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {education.period}
            </span>
          </div>
          <p className="text-lg font-medium text-gray-700 mb-2">
            {education.degree}
            {education.gpa && (
              <span className="ml-2 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                GPA: {education.gpa}
              </span>
            )}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">{education.description}</p>

          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800">Highlights:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {education.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
