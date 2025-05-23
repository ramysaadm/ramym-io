import TechCard from './ui/TechCard';
import { techStack, certifications } from '../../lib/data';

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {techStack.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              title={tech.title}
              skills={tech.skills}
            />
          ))}
        </div>

        {/* Key Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-orange-400">
            Key Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20"
              >
                <span className="font-semibold text-white">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
