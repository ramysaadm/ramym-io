import ProjectCard from './ui/ProjectCard';
import { projects } from '../../lib/data';

export default function Innovations() {
  return (
    <section id="innovations" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Innovation Spotlight
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              highlight={project.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
