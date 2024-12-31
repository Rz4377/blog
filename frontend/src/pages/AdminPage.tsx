import { useState } from 'react';
import { BlogForm } from '../components/BlogForm';
import type { BlogFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

export function AdminPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: BlogFormData) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('prompt', data.prompt);
      if (data.image) {
        formData.append('image', data.image);
      }
      formData.append('adLinks', JSON.stringify(data.adLinks));

      // TODO: Replace with your actual API endpoint
      // await fetch('/api/posts', {
      //   method: 'POST',
      //   body: formData,
      // });
      
      // Simulated delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error('Failed to create post:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className={`text-3xl font-bold   ${isDark ? 'text-gray-100' : 'text-gray-800'} text-gray-100 mb-8`}>Create New Blog Post</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-2">
          <BlogForm  />
          {/* <BlogForm onSubmit={handleSubmit} isLoading={isLoading} /> */}
        </div>
      </div>
    </div>
  );
}