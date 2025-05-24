import { Mail, Linkedin } from 'lucide-react';
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
            className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-1"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <polygon
                points="16 28.896 16 28.896 21.156 13.029 10.844 13.029 16 28.896"
                style={{ fill: '#e24329' }}
              />
              <polygon
                points="16 28.896 10.844 13.029 3.619 13.029 16 28.896"
                style={{ fill: '#fc6d26' }}
              />
              <path
                d="M3.619,13.029h0L2.052,17.851a1.067,1.067,0,0,0,.388,1.193L16,28.9,3.619,13.029Z"
                style={{ fill: '#fca326' }}
              />
              <path
                d="M3.619,13.029h7.225L7.739,3.473a.534.534,0,0,0-1.015,0L3.619,13.029Z"
                style={{ fill: '#e24329' }}
              />
              <polygon
                points="16 28.896 21.156 13.029 28.381 13.029 16 28.896"
                style={{ fill: '#fc6d26' }}
              />
              <path
                d="M28.381,13.029h0l1.567,4.822a1.067,1.067,0,0,1-.388,1.193L16,28.9,28.381,13.029Z"
                style={{ fill: '#fca326' }}
              />
              <path
                d="M28.381,13.029H21.156l3.105-9.557a.534.534,0,0,1,1.015,0l3.105,9.557Z"
                style={{ fill: '#e24329' }}
              />
            </svg>
            <span className="text-sm">GitLab</span>
          </a>
        </div>
        <div className="mt-8 text-gray-500 text-sm">
          © 2025 Ramy Mohareb. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
