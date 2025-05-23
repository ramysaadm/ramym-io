import { Award } from 'lucide-react';

export default function ProjectCard({
  title,
  description,
  tags,
  highlight = false,
}) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${
        highlight ? 'border-orange-400/50 bg-orange-400/10' : 'border-white/10'
      } hover:border-orange-400/50 transition-all duration-300`}
    >
      {highlight && (
        <div className="flex items-center mb-4">
          <Award className="w-5 h-5 text-orange-400 mr-2" />
          <span className="text-orange-400 font-semibold text-sm">
            Innovation Award Finalist 2025
          </span>
        </div>
      )}
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
