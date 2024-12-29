import { useTheme } from '../../context/ThemeContext';

const BlogFooter = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${
      isDark ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
            alt="Author"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />
          <div>
            <h3 className={`font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Written by John Doe</h3>
            <p className="text-sm sm:text-base text-gray-400">Content Creator & YouTube Expert</p>
          </div>
        </div>
        <div className="flex space-x-3 sm:space-x-4">
          <button className="flex-1 sm:flex-none px-4 py-2 bg-red-500 text-white text-sm sm:text-base rounded-lg hover:bg-red-600 transition-colors">
            Subscribe
          </button>
          <button className={`flex-1 sm:flex-none px-4 py-2 border text-sm sm:text-base rounded-lg transition-colors ${
            isDark 
              ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}>
            Share
          </button>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;