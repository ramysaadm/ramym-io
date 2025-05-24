import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { formatDate } from './utils';

export default function BlogCard({ post, featured = false, onReadMore }) {
  return (
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

      {/* Article Image */}
      {post.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={192}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

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

      <button
        onClick={() => onReadMore(post)}
        className="flex items-center text-orange-400 hover:text-orange-300 transition-colors group cursor-pointer"
      >
        <span>Read full article</span>
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </article>
  );
}
