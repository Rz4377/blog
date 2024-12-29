import type { BlogPost } from '../types';
import { Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.id}
          className={`rounded-lg shadow-lg overflow-hidden ${
            isDark ? 'bg-gray-800' : 'bg-gray-100'
          }`}
        >
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover"
            />
          )}
          <div className="p-6">
            <h2
              className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              {post.title}
            </h2>
            {post.status === 'generating' ? (
              <div
                className={`flex items-center space-x-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <Loader2 className="animate-spin h-4 w-4" />
                <span>Generating content...</span>
              </div>
            ) : (
              <div
                className={`prose max-w-none ${
                  isDark ? 'prose-invert text-gray-300' : 'text-gray-800'
                }`}
              >
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <div
              className={`mt-4 text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Created on {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}