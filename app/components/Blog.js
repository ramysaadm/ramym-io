import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../lib/data';

export default function Blog() {
  // Get featured posts and latest posts
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 2);
  const latestPosts = blogPosts.slice(0, 3);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const BlogCard = ({ post, featured = false }) => (
    <article
      className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 group ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-center text-sm text-gray-400 mb-3">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{formatDate(post.publishDate)}</span>
        <Clock className="w-4 h-4 ml-4 mr-2" />
        <span>{post.readTime}</span>
        <span className="ml-4 px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
          {post.category}
        </span>
      </div>

      <h3
        className={`font-bold text-white mb-3 group-hover:text-orange-400 transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}
      >
        {post.title}
      </h3>

      <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <button className="flex items-center text-orange-400 hover:text-orange-300 transition-colors group">
        <span>Read full article</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </article>
  );

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
            Insights & Perspectives
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge from the field: enterprise architecture patterns,
            innovation stories, and lessons learned from complex digital
            transformations.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-orange-400 mb-8">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Latest Posts */}
        <div>
          <h3 className="text-2xl font-bold text-orange-400 mb-8">
            Latest Posts
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl p-8 border border-orange-400/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get insights on enterprise architecture, cloud innovation, and
            digital transformation delivered directly to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            No spam. Unsubscribe anytime. Usually 1-2 emails per month.
          </p>
        </div>
      </div>
    </section>
  );
}
