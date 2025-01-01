import { Dumbbell } from 'lucide-react';
import { ICONS } from '../components/BlogBlocks/BlogFormHeader';
import { useTheme } from '../context/ThemeContext';

interface BlogHeaderProps {
  title: string;
  icon:string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  publishDate,
  icon,
  readTime,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const SelectedIcon = ICONS.find((item) => item.name === icon)?.component || Dumbbell;
  return (
    <header className="text-center mb-8 sm:mb-12">
      <div className="flex justify-center mb-4 sm:mb-6">
        <SelectedIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
      </div>
      <h1
        className={`text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 px-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h1>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 text-sm sm:text-base text-gray-400">
        <span>Published: {publishDate}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
   
    </header>
  );
};

export default BlogHeader;