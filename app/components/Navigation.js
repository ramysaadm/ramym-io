'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalData } from '../../lib/data';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'Home',
    'About',
    'Expertise',
    'Innovations',
    'Blog',
    'Contact',
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            RamyM.io
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-orange-400 transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
            <a
              href={personalData.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-1"
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block hover:text-orange-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href={personalData.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-1"
              onClick={() => setMobileMenuOpen(false)}
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
        )}
      </div>
    </nav>
  );
}
