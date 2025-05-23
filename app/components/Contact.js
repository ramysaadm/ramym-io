import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { personalData, services } from '../../lib/data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h2>

        <p className="text-xl text-gray-300 mb-12">
          Ready to discuss your next enterprise architecture challenge?
          Let&apos;s explore how innovative solutions can transform your
          business.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
          <a
            href={`mailto:${personalData.email}`}
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:border-orange-400/50 transition-all"
          >
            <Mail className="w-5 h-5 text-orange-400" />
            <span>{personalData.email}</span>
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20 hover:border-orange-400/50 transition-all"
          >
            <Linkedin className="w-5 h-5 text-orange-400" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-orange-400">
            Services I Offer
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
