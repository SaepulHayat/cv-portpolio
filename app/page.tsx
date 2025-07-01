import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Portfolio CV</h1>
        <p className="text-gray-600">Professional Software Developer</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-8">
        {/* Section 1: About & Skills*/}
        <div className="min-h-screen flex flex-col justify-center space-y-8">
          <AboutMe />
          <Skills />
        </div>

        {/* Section 2: Education & Experience */}
        <div className="min-h-screen flex flex-col justify-center space-y-8">
          <Education />
          <Experience />
        </div>

        {/* Section 3: Projects & Contact*/}
        <div className="min-h-screen flex flex-col justify-center space-y-8">
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
