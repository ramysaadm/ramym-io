import Image from 'next/image';
import { careerTimeline } from '../../lib/data';

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          The Architect&apos;s Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">
              From Engineer to Innovation Leader
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 14 years in enterprise solutions, I&apos;ve evolved from
              a hands-on consultant to a hybrid delivery and pre-sales
              architect, trusted to own complex customer journeys and lead
              modernization programs across Energy, Engineering, and Government
              sectors.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Currently at OpenText Professional Services, I design scalable,
              cloud-ready systems while presenting architecture to C-level
              clients and influencing product strategy. My approach combines
              deep technical execution with strategic business thinking.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <div className="text-orange-400 text-2xl mb-2">🚀</div>
                <div className="font-semibold">Innovation</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <div className="text-orange-400 text-2xl mb-2">⚡</div>
                <div className="font-semibold">Excellence</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <div className="text-orange-400 text-2xl mb-2">🎯</div>
                <div className="font-semibold">Strategy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Photo & Timeline */}
          <div className="space-y-8">
            {/* Professional Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-400/30 shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Ramy Mohareb - Senior Solution Architect"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Decorative gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-orange-400/20 -z-10 blur-xl"></div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-400"></div>

              {careerTimeline.map((job, index) => (
                <div key={index} className="relative mb-8">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {job.company}
                      </h4>
                      <p className="text-orange-400 text-sm">{job.period}</p>
                      <p className="text-blue-400">{job.role}</p>
                      <p className="text-gray-300 text-sm mt-1">
                        {job.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
