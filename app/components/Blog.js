'use client';

import { useState } from 'react';
import { getAllPosts, getFeaturedPosts } from '../../lib/blogData';
import NewsletterSignup from './NewsletterSignup';
import BlogHeader from './blog/BlogHeader';
import BlogCard from './blog/BlogCard';
import ArticleModal from './blog/ArticleModal';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const featuredPosts = getFeaturedPosts().slice(0, 2);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <BlogHeader />

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-orange-400 mb-8">
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  featured={true}
                  onReadMore={setSelectedPost}
                />
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
              <BlogCard
                key={post.id}
                post={post}
                onReadMore={setSelectedPost}
              />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <NewsletterSignup />

        {/* Article Modal */}
        <ArticleModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      </div>
    </section>
  );
}
