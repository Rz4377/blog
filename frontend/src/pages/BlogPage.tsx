import { useNavigate } from 'react-router-dom';
import { BlogList } from '../components/BlogList';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useTheme } from '../context/ThemeContext';

export function BlogPage() {
  const { posts, isLoading } = useBlogPosts(); // Custom hook to fetch all blogs
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigate = useNavigate();

  // Function to handle blog click
  const handleBlogClick = (id: number) => {
    navigate(`/page/${id}`); // Navigate to the specific blog page
  };

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <h1
        className={`text-3xl font-bold ${
          isDark ? 'text-white' : 'text-gray-900'
        } mb-8`}
      >
        Latest Sports Stories
      </h1>
      {isLoading ? (
        <div
          className={`text-center py-12 ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Loading posts...
        </div>
      ) : (
        <BlogList posts={posts} onBlogClick={handleBlogClick} />
      )}
    </div>
  );
}