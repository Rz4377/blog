import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import BlogSection from './BlogSection';
import RelatedProducts from './RelatedProducts';
import { useTheme } from '../context/ThemeContext';
import {
  Dumbbell,
  Youtube,
  Camera,
  Users,
  Settings,
  Edit3,
  Share2,
  Search,
  Star,
  Heart,
  Globe,
  Music,
  Trophy,
  TrendingUp,
  Bell
} from 'lucide-react';
const ICONS_MAP: Record<string, React.FC> = {
  Dumbbell,
  Youtube,
  Camera,
  Users,
  Settings,
  Edit3,
  Share2,
  Search,
  Star,
  Heart,
  Globe,
  Music,
  Trophy,
  TrendingUp,
  Bell,
};
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const BlogPageRender = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { id } = useParams(); // Assuming you have a dynamic route like /blog/:id

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (err: any) {
        console.log(error)
        setError(err.response?.data?.error || 'Failed to fetch blog content');
      } finally {
        console.log(loading)
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Loading blog content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className={`text-lg ${isDark ? 'text-red-500' : 'text-red-600'}`}>{error}</p>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <article
      className={`max-w-4xl mx-auto px-4 py-6 sm:py-8 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Blog Header */}
      <BlogHeader
        title={blog.title}
        icon={blog.icon}
        authorName={blog.authorName}
        authorTitle={blog.authorTitle}
        authorImage={blog.authorImage}
        publishDate={blog.publishDate}
        readTime={blog.readTime}
      />

      <img
        src={blog.imageUrl}
        alt="Blog Header"
        className="w-full h-[200px] sm:h-[400px] object-cover rounded-lg mb-8"
      />

      <div
        className={`prose prose-sm sm:prose lg:prose-lg max-w-none ${
          isDark ? 'prose-invert' : ''
        }`}
      >
        {/* Blog Sections */}
        {blog.sections.map((section: any) => {
          const Icon:any = ICONS_MAP[section.icon] || Settings;

          if (section.type === 'single-paragraph') {
            return (
              <BlogSection key={section.id} icon={Icon} title={section.title}>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {section.paragraph}
                </p>
                <ul
                  className={`list-disc pl-4 sm:pl-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } text-sm sm:text-base`}
                >
                  {section.list.map((item: any, index: number) => (
                    <li key={index} className="mb-2">
                      {item.item}
                    </li>
                  ))}
                </ul>
              </BlogSection>
            );
          }

          if (section.type === 'two-column') {
            return (
              <BlogSection key={section.id} icon={Icon} title={section.title}>
                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {section.paragraph}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {section.columns.map((column: any, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-800' : 'bg-gray-100'
                      }`}
                    >
                      <h3
                        className={`font-semibold mb-2 text-sm sm:text-base ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {column.heading}
                      </h3>
                      <ul
                        className={`list-disc pl-4 sm:pl-6 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        } text-sm sm:text-base`}
                      >
                        {column.list.map((item: any, itemIndex: number) => (
                          <li key={itemIndex} className="mb-1">
                            {item.item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </BlogSection>
            );
          }

          return null;
        })}

        {/* Related Products */}
        <RelatedProducts products={blog.products} />
      </div>

      {/* Blog Footer */}
      {/* <BlogFooter
        authorName={blog.authorName}
        authorTitle={blog.authorTitle}
        authorImage={blog.authorImage}
      /> */}
    </article>
  );
};