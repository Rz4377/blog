import React from 'react';

interface Blog {
  id: number;
  title: string;
  authorName: string;
  publishDate: string;
}

interface BlogListProps {
  posts: Blog[];
  onBlogClick: (id: number) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ posts, onBlogClick }) => {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          onClick={() => onBlogClick(post.id)}
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            By {post.authorName} on {post.publishDate}
          </p>
        </li>
      ))}
    </ul>
  );
};