'use client'; // Add this at the top
// app/not-found.js
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-gray-400">
          <p>Looking for something specific? Try these links:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/#about"
              className="hover:text-orange-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#expertise"
              className="hover:text-orange-400 transition-colors"
            >
              Expertise
            </Link>
            <Link
              href="/#innovations"
              className="hover:text-orange-400 transition-colors"
            >
              Innovations
            </Link>
            <Link
              href="/#blog"
              className="hover:text-orange-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className="hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
