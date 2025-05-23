export default function TechCard({ icon, title, skills }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-bold text-orange-400">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-300">{skill.name}</span>
            <span className="text-orange-400 text-sm font-semibold">
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
