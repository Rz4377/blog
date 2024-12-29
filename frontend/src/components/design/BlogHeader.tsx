import { Youtube } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const BlogHeader = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="text-center mb-8 sm:mb-12">
      <div className="flex justify-center mb-4 sm:mb-6">
        <Youtube className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
      </div>
      <h1 className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        How to Create Your First YouTube Channel: A Complete Guide
      </h1>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-sm sm:text-base text-gray-400">
        <span>Published: March 14, 2024</span>
        <span>•</span>
        <span>10 min read</span>
      </div>
    </header>
  );
};

export default BlogHeader;