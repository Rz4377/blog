import { useEffect, useState } from 'react';
import { Dumbbell, Youtube, Camera, Users, Settings, Edit3, Share2, Search, Star, Heart, Globe, Music, Trophy, TrendingUp, Bell } from 'lucide-react';
import BlogField, { Section } from './BlogField';

const ICONS = [
  { name: 'Dumbbell', component: Dumbbell },
  { name: 'Youtube', component: Youtube },
  { name: 'Camera', component: Camera },
  { name: 'Users', component: Users },
  { name: 'Settings', component: Settings },
  { name: 'Edit', component: Edit3 },
  { name: 'Share', component: Share2 },
  { name: 'Search', component: Search },
  { name: 'Star', component: Star },
  { name: 'Heart', component: Heart },
  { name: 'Globe', component: Globe },
  { name: 'Music', component: Music },
  { name: 'Trophy', component: Trophy },
  { name: 'TrendingUp', component: TrendingUp },
  { name: 'Bell', component: Bell },
];

export function BlogFormHeader({onChange}:any) {
  const [icon, setIcon] = useState('Dumbbell');
  const [title, setTitle] = useState('How to Create Your First YouTube Channel: A Complete Guide');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071');
  const [publishDate, setPublishDate] = useState('March 14, 2024');
  const [readTime, setReadTime] = useState('10 min read');
  const [sections, setSections] = useState<Section[]>([]);

  const SelectedIcon = ICONS.find((item) => item.name === icon)?.component || Dumbbell;

  const handleDataChange = () => {
    if (onChange) {
      onChange({ icon, title, image, publishDate, readTime , sections});
    }
  };

  // Trigger onChange whenever relevant state changes
  useEffect(handleDataChange, [icon, title, image, publishDate, readTime,sections]);

  return (
    <article

    >
      {/* Header Configuration */}
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Select heading Icon</label>
        <div className="flex flex-wrap gap-4 mb-4">
          {ICONS.map(({ name, component: Icon }) => (
            <button
              key={name}
              onClick={() => setIcon(name)}
              className={`p-3 rounded-lg border ${
                icon === name ? 'border-blue-500 bg-gray-700' : 'border-gray-600'
              }`}
            >
              <Icon className="w-6 h-6 text-white" />
              <p className="mt-2 text-xs text-white">{name}</p>
            </button>
          ))}
        </div>

        {/* Preview Selected Icon */}
        <div className="flex items-center space-x-4 mb-6">
          <SelectedIcon className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
          <span className="text-lg font-bold">{icon}</span>
        </div>

        {/* Title Input */}
        <Input
          label="Title"
          value={title}
          onChange={(e:any) => setTitle(e.target.value)}
          placeholder="Enter your blog title"
        />

        {/* Publish Date & Read Time */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input
            label="Publish Date"
            value={publishDate}
            onChange={(e:any) => setPublishDate(e.target.value)}
            placeholder="e.g., March 14, 2024"
          />
          <Input
            label="Read Time"
            value={readTime}
            onChange={(e:any) => setReadTime(e.target.value)}
            placeholder="e.g., 10 min read"
          />
        </div>
      </div>

      {/* Image Configuration */}
      <div className="mb-8">
        <Input
          label="Image URL"
          value={image}
          onChange={(e:any) => setImage(e.target.value)}
          placeholder="Enter an image URL"
        />
        {/* Image Preview */}
        <img
          src={image}
          alt="Blog Header"
          className="w-full h-[200px] sm:h-[400px] object-cover rounded-lg mt-4"
        />
      </div>

      {/* BlogField (Black Box) */}
      <BlogField onChange={setSections} />
    </article>
  );
}

function Input({ label, ...props }:any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-3 py-2 border rounded-lg bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
