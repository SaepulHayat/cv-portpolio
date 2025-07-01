import { Section } from "./Section";
import { EXPERIENCE_DATA } from "@/data/portfolio";
import { BriefcaseIcon } from "./icons";

export default function Experience() {
  // Jika tidak ada pengalaman kerja, tampilkan pesan
  if (EXPERIENCE_DATA.length === 0) {
    return (
      <Section title="Work Experience" variant="accent">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BriefcaseIcon className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for New Opportunities</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Currently seeking internship or entry-level Full Stack developer positions to apply my skills and grow professionally.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Work Experience" variant="accent">
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-white/80 border border-gray-200 hover:bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {exp.title}
                </h3>
                <p className="text-lg font-medium text-blue-600">{exp.company}</p>
              </div>
              <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}