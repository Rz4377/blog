import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface BlogSectionProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

const BlogSection = ({ icon: Icon, title, children, className = '' }: BlogSectionProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`mb-8 sm:mb-12 ${className}`}>
      <h2 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`} />
        {title}
      </h2>
      {children}
    </section>
  );
};

export default BlogSection;