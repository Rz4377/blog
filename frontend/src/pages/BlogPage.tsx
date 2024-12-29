import React from 'react';
import { BlogList } from '../components/BlogList';
import { useBlogPosts } from '../hooks/useBlogPosts';

export function BlogPage() {
  const { posts, isLoading } = useBlogPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Latest Sports Stories</h1>
      {isLoading ? (
        <div className="text-center py-12 text-gray-400">Loading posts...</div>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}