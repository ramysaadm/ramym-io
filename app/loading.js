export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation Skeleton */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="w-24 h-8 bg-white/20 rounded animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-16 h-6 bg-white/20 rounded animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Name skeleton */}
          <div className="w-96 h-16 bg-white/20 rounded mx-auto mb-6 animate-pulse"></div>

          {/* Typing text skeleton */}
          <div className="w-64 h-8 bg-white/20 rounded mx-auto mb-8 animate-pulse"></div>

          {/* Description skeleton */}
          <div className="space-y-3 mb-12 max-w-4xl mx-auto">
            <div className="w-full h-6 bg-white/20 rounded animate-pulse"></div>
            <div className="w-3/4 h-6 bg-white/20 rounded mx-auto animate-pulse"></div>
          </div>

          {/* Stats skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6">
                <div className="w-12 h-8 bg-white/20 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="w-20 h-4 bg-white/20 rounded mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Buttons skeleton */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="w-48 h-14 bg-orange-500/50 rounded-lg animate-pulse"></div>
            <div className="w-40 h-14 bg-white/20 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quote section skeleton */}
      <section className="py-16 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <div className="w-full h-6 bg-white/20 rounded animate-pulse"></div>
            <div className="w-3/4 h-6 bg-white/20 rounded mx-auto animate-pulse"></div>
            <div className="w-32 h-4 bg-white/20 rounded mx-auto mt-4 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
