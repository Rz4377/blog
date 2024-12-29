import React from 'react';
import type { BlogPost } from '../types';
import { Loader2 } from 'lucide-react';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">{post.title}</h2>
            {post.status === 'generating' ? (
              <div className="flex items-center space-x-2 text-gray-400">
                <Loader2 className="animate-spin h-4 w-4" />
                <span>Generating content...</span>
              </div>
            ) : (
              <div className="prose prose-invert max-w-none">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <div className="mt-4 text-sm text-gray-400">
              Created on {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}