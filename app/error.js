'use client';

import { useEffect } from 'react';
import { RefreshCw, Home, Link } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Oops!
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We encountered an unexpected error. Don&apos;t worry, it&apos;s not
            your fault. Please try refreshing the page or contact me if the
            problem persists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>

        <div className="mt-12 bg-white/5 rounded-lg p-6 border border-white/10">
          <p className="text-gray-300 mb-4">
            If this error persists, please contact me:
          </p>
          <a
            href="mailto:ramy.mohareb1@gmail.com?subject=Website Error Report"
            className="text-orange-400 hover:text-orange-300 transition-colors"
          >
            ramy.mohareb1@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
