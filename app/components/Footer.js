import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { personalData } from '../../lib/data';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
          RamyM.io
        </div>
        <p className="text-gray-400 mb-6">
          Building solutions that bridge strategy and code.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href={`mailto:${personalData.email}`}
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalData.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <div className="mt-8 text-gray-500 text-sm">
          © 2025 Ramy Mohareb. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
