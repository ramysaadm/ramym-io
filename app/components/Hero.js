import Counter from './ui/Counter';
import TypingAnimation from './ui/TypingAnimation';
import { personalData, typingRoles, stats } from '../../lib/data';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              {personalData.name}
            </span>
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 font-mono h-12 flex items-center justify-center">
            <TypingAnimation roles={typingRoles} />
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Award-nominated Solution Architect bridging deep technical execution
          with high-level business architecture.
          <span className="text-orange-400 font-semibold">
            {' '}
            Innovation Award Finalist 2025
          </span>{' '}
          for automating engineering governance.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <Counter key={index} target={stat.target} label={stat.label} />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#innovations"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 cursor-pointer"
          >
            View Innovation Award Project
          </a>
          <a
            href="#contact"
            className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all cursor-pointer"
          >
            Book Strategy Call
          </a>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-16 px-6 bg-black/20 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl italic text-gray-300 mb-4">
            &quot;I believe the strongest architects still think like engineers
            — building solutions that aren&apos;t just drawn, but delivered.
            It&apos;s where strategy meets code.&quot;
          </blockquote>
          <cite className="text-orange-400 font-semibold">— Ramy Mohareb</cite>
        </div>
      </div>
    </section>
  );
}
