import { Camera, Users, Settings, Edit3, Share2 } from 'lucide-react';
import BlogHeader from './BlogHeader';
import BlogSection from './BlogSection';
import BlogFooter from './BlogFooter';
import RelatedProducts from './RelatedProducts';
import { useTheme } from '../../context/ThemeContext';

export const BlogPost = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <article className={`max-w-4xl mx-auto px-4 py-6 sm:py-8 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <BlogHeader />

      <img
        src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071"
        alt="YouTube Content Creation Setup"
        className="w-full h-[200px] sm:h-[400px] object-cover rounded-lg mb-8"
      />

      <div className={`prose prose-sm sm:prose lg:prose-lg max-w-none ${
        isDark ? 'prose-invert' : ''
      }`}>
        <BlogSection icon={Settings} title="Step 1: Setting Up Your Account">
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Before you start creating content, you'll need to set up your YouTube channel properly. Sign in to YouTube using your Google account and follow these steps:
          </p>
          <ul className={`list-disc pl-4 sm:pl-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base`}>
            <li className="mb-2">Go to YouTube and sign in with your Google account</li>
            <li className="mb-2">Click on your profile picture and select "Create a channel"</li>
            <li className="mb-2">Choose whether to use your name or create a custom name</li>
            <li>Fill in basic channel information and branding</li>
          </ul>
        </BlogSection>

        <BlogSection icon={Camera} title="Step 2: Essential Equipment">
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            While you don't need expensive equipment to start, here's what you'll need:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h3 className={`font-semibold mb-2 text-sm sm:text-base ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Basic Setup:</h3>
              <ul className={`list-disc pl-4 sm:pl-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              } text-sm sm:text-base`}>
                <li className="mb-1">Smartphone with a good camera</li>
                <li className="mb-1">Basic lighting (natural light works)</li>
                <li>Quiet recording space</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h3 className={`font-semibold mb-2 text-sm sm:text-base ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Upgrades to Consider:</h3>
              <ul className={`list-disc pl-4 sm:pl-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              } text-sm sm:text-base`}>
                <li className="mb-1">External microphone</li>
                <li className="mb-1">Ring light or softbox</li>
                <li>Simple editing software</li>
              </ul>
            </div>
          </div>
        </BlogSection>

        <BlogSection icon={Edit3} title="Step 3: Content Planning">
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Success on YouTube starts with good content planning:
          </p>
          <div className={`p-4 sm:p-6 rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <h3 className={`font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Content Strategy Tips:</h3>
            <ul className={`space-y-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <li>• Choose your niche and stick to it</li>
              <li>• Research trending topics in your field</li>
              <li>• Create a content calendar</li>
              <li>• Plan your first 10 videos before starting</li>
            </ul>
          </div>
        </BlogSection>

        <BlogSection icon={Users} title="Step 4: Building Your Community">
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Growing your channel is about building a community:
          </p>
          <div className={`p-4 sm:p-6 rounded-lg ${
            isDark ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <ul className={`space-y-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <li>• Respond to comments regularly</li>
              <li>• Create engaging end screens</li>
              <li>• Use cards and descriptions effectively</li>
              <li>• Collaborate with other creators</li>
            </ul>
          </div>
        </BlogSection>

        <BlogSection icon={Share2} title="Step 5: Promotion and Growth">
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Promote your channel across different platforms:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Social Media:</h3>
              <ul className={`list-disc pl-4 sm:pl-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="mb-1">Share clips on Instagram</li>
                <li className="mb-1">Create Twitter threads</li>
                <li>Use relevant hashtags</li>
              </ul>
            </div>
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h3 className={`font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>SEO:</h3>
              <ul className={`list-disc pl-4 sm:pl-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="mb-1">Use keyword-rich titles</li>
                <li className="mb-1">Write detailed descriptions</li>
                <li>Create custom thumbnails</li>
              </ul>
            </div>
          </div>
        </BlogSection>
        <RelatedProducts />
      </div>
      <BlogFooter />
    </article>
  );
};