import { Calendar, Clock, X } from 'lucide-react';
import Image from 'next/image';
import { formatDate } from './utils';

export default function ArticleModal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center text-sm text-gray-400 mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(post.publishDate)}</span>
              <Clock className="w-4 h-4 ml-4 mr-2" />
              <span>{post.readTime}</span>
              <span className="ml-4 px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs">
                {post.category}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {post.title}
            </h1>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {post.image && (
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2
                      key={index}
                      className="text-xl font-bold text-white mt-6 mb-4"
                    >
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="text-lg font-bold text-orange-400 mt-4 mb-2"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <p key={index} className="ml-4">
                      • {paragraph.replace('- ', '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-bold text-white">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
