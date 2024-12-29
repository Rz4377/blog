import { useState } from 'react';
import { Camera, Users, Settings, Edit3, Share2 } from 'lucide-react';

import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';

const ICONS = [
  { name: 'Camera', component: Camera },
  { name: 'Users', component: Users },
  { name: 'Settings', component: Settings },
  { name: 'Edit', component: Edit3 },
  { name: 'Share', component: Share2 },
] as const;

type IconName = typeof ICONS[number]['name'];

interface Section {
  icon: IconName;
  title: string;
  paragraphs: string[];
}

interface BlogPost {
  imageUrl: string;
  sections: Section[];
}

const SAMPLE_BLOGS: BlogPost[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2071',
    sections: [
      {
        icon: 'Settings',
        title: 'Step 1: Setting Up Your Account',
        paragraphs: [
          'Before you start creating content, you’ll need to set up your YouTube channel properly. Sign in to YouTube using your Google account and follow these steps:',
          'Go to YouTube and sign in with your Google account. Click on your profile picture and select "Create a channel". Choose whether to use your name or create a custom name. Fill in basic channel information and branding.',
        ],
      },
      {
        icon: 'Camera',
        title: 'Step 2: Essential Equipment',
        paragraphs: [
          'While you don’t need expensive equipment to start, here’s what you’ll need:',
          'Basic Setup: Smartphone with a good camera, basic lighting (natural light works), quiet recording space. Upgrades: External microphone, ring light or softbox, simple editing software.',
        ],
      },
      {
        icon: 'Edit',
        title: 'Step 3: Content Planning',
        paragraphs: [
          'Success on YouTube starts with good content planning. Choose your niche, research trending topics, create a content calendar, and plan your first 10 videos before starting.',
        ],
      },
      {
        icon: 'Users',
        title: 'Step 4: Building Your Community',
        paragraphs: [
          'Growing your channel is about building a community. Respond to comments regularly, create engaging end screens, and collaborate with other creators.',
        ],
      },
      {
        icon: 'Share',
        title: 'Step 5: Promotion and Growth',
        paragraphs: [
          'Promote your channel across different platforms: Share clips on Instagram, create Twitter threads, and use relevant hashtags. For SEO: Use keyword-rich titles, write detailed descriptions, and create custom thumbnails.',
        ],
      },
    ],
  },
];

export function BlogForm() {
  const [blogs, setBlogs] = useState<BlogPost[]>(SAMPLE_BLOGS);

  const addBlogPost = () => {
    setBlogs([...blogs, { imageUrl: '', sections: [] }]);
  };

  const updateBlogPost = (index: number, field: keyof BlogPost, value: any) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = { ...updatedBlogs[index], [field]: value };
    setBlogs(updatedBlogs);
  };

  const addSectionToBlog = (blogIndex: number) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogIndex].sections.push({
      icon: 'Camera',
      title: '',
      paragraphs: [''],
    });
    setBlogs(updatedBlogs);
  };

  const updateSection = (
    blogIndex: number,
    sectionIndex: number,
    field: keyof Section,
    value: any
  ) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[blogIndex].sections[sectionIndex] = {
      ...updatedBlogs[blogIndex].sections[sectionIndex],
      [field]: value,
    };
    setBlogs(updatedBlogs);
  };

  const deleteBlogPost = (index: number) => {
    setBlogs(blogs.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Manage Blog Posts</h1>
      <Button onClick={addBlogPost} className="w-full bg-blue-500 text-white mb-6">
        Add New Blog Post
      </Button>
      {blogs.map((blog, blogIndex) => (
        <div key={blogIndex} className="bg-gray-100 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Blog Post {blogIndex + 1}</h2>
          <Input
            label="Image URL"
            value={blog.imageUrl}
            onChange={(e) =>
              updateBlogPost(blogIndex, 'imageUrl', e.target.value)
            }
          />
          <div className="mt-4">
            <Button
              onClick={() => addSectionToBlog(blogIndex)}
              className="w-full bg-green-500 text-white"
            >
              Add Section
            </Button>
          </div>
          {blog.sections.map((section, sectionIndex) => {
            const Icon = ICONS.find((icon) => icon.name === section.icon)?.component;
            return (
              <div key={sectionIndex} className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <select
                    value={section.icon}
                    onChange={(e) =>
                      updateSection(blogIndex, sectionIndex, 'icon', e.target.value as IconName)
                    }
                    className="p-2 border rounded-lg"
                  >
                    {ICONS.map((icon) => (
                      <option key={icon.name} value={icon.name}>
                        {icon.name}
                      </option>
                    ))}
                  </select>
                  <Button
                    variant="secondary"
                    className="text-red-500"
                    onClick={() =>
                      updateBlogPost(blogIndex, 'sections', blog.sections.filter((_, i) => i !== sectionIndex))
                    }
                  >
                    Remove Section
                  </Button>
                </div>
                <Input
                  label="Section Title"
                  value={section.title}
                  onChange={(e) =>
                    updateSection(blogIndex, sectionIndex, 'title', e.target.value)
                  }
                />
                {section.paragraphs.map((paragraph, pIndex) => (
                  <TextArea
                    key={pIndex}
                    label={`Paragraph ${pIndex + 1}`}
                    value={paragraph}
                    onChange={(e) => {
                      const updatedSections = [...blog.sections];
                      updatedSections[sectionIndex].paragraphs[pIndex] = e.target.value;
                      updateBlogPost(blogIndex, 'sections', updatedSections);
                    }}
                  />
                ))}
              </div>
            );
          })}
          <Button
            onClick={() => deleteBlogPost(blogIndex)}
            className="w-full bg-red-500 text-white mt-4"
          >
            Delete Blog Post
          </Button>
        </div>
      ))}
    </div>
  );
}