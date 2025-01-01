import { BlogForm } from '../components/BlogForm';
import { useTheme } from '../context/ThemeContext';

export function AdminPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-3xl font-bold   ${isDark ? 'text-gray-100' : 'text-gray-800'} text-gray-100 mb-8`}>Create New Blog Post</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-2">
          <BlogForm  />
        </div>
      </div>
    </div>
  );
}