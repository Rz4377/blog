import { useEffect, useState } from 'react';
import { Camera, Users, Settings, Edit3, Share2, Search, Star, Heart, Globe, Music } from 'lucide-react';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import BlogSection from '../design/BlogSection';

const ICONS = [
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
] as const;

type IconName = typeof ICONS[number]['name'];

interface TwoColumnSection {
  type: 'two-column';
  icon: IconName;
  title: string;
  paragraph: string;
  columns: Array<{
    heading: string;
    list: string[];
  }>;
}

interface SingleParagraphSection {
  type: 'single-paragraph';
  icon: IconName;
  title: string;
  paragraph: string;
  list: string[];
}

export type Section = TwoColumnSection | SingleParagraphSection;

export default function BlogField({ onChange }: { onChange: (sections: Section[]) => void }) {
    const isDark = true;
    const [sections, setSections] = useState<Section[]>([
      {
        type: 'single-paragraph',
        icon: 'Settings',
        title: 'Step 1: Setting Up Your Account',
        paragraph:
          "Before you start creating content, you'll need to set up your YouTube channel properly. Sign in to YouTube using your Google account and follow these steps:",
        list: [
          'Go to YouTube and sign in with your Google account',
          'Click on your profile picture and select "Create a channel"',
          'Choose whether to use your name or create a custom name',
          'Fill in basic channel information and branding',
        ],
      },
      {
        type: 'two-column',
        icon: 'Camera',
        title: 'Step 2: Essential Equipment',
        paragraph: "While you don't need expensive equipment to start, here's what you'll need:",
        columns: [
          {
            heading: 'Basic Setup:',
            list: ['Smartphone with a good camera', 'Basic lighting (natural light works)', 'Quiet recording space'],
          },
          {
            heading: 'Upgrades to Consider:',
            list: ['External microphone', 'Ring light or softbox', 'Simple editing software'],
          },
        ],
      },
    ]);

    useEffect(() => {
      if (onChange) onChange(sections);
    }, [sections, onChange]);

    const addSection = (type: 'single-paragraph' | 'two-column') => {
      const newSection:Section =
        type === 'single-paragraph'
          ? {
              type,
              icon: 'Camera',
              title: '',
              paragraph: '',
              list: [''],
            }
          : {
              type,
              icon: 'Camera',
              title: '',
              paragraph: '',
              columns: [
                { heading: '', list: [''] },
                { heading: '', list: [''] },
              ],
            };
  
      setSections([...sections, newSection]);
    };
  
    const updateSection = (index: number, field: string, value: any) => {
      const updatedSections = [...sections];
      updatedSections[index] = { ...updatedSections[index], [field]: value };
      setSections(updatedSections);
    };
  
    const updateColumn = (sectionIndex: number, columnIndex: number, field: keyof TwoColumnSection['columns'][0], value: any) => {
      const updatedSections = [...sections];
      if (updatedSections[sectionIndex].type === 'two-column') {
        updatedSections[sectionIndex].columns[columnIndex][field] = value;
        setSections(updatedSections);
      }
    };
  
    const addListItem = (sectionIndex: number, columnIndex?: number) => {
      const updatedSections = [...sections];
      if (updatedSections[sectionIndex].type === 'two-column' && columnIndex !== undefined) {
        updatedSections[sectionIndex].columns[columnIndex].list.push('');
      } else if (updatedSections[sectionIndex].type === 'single-paragraph') {
        updatedSections[sectionIndex].list.push('');
      }
      setSections(updatedSections);
    };
  
    const deleteListItem = (sectionIndex: number, listIndex: number, columnIndex?: number) => {
      const updatedSections = [...sections];
      if (updatedSections[sectionIndex].type === 'two-column' && columnIndex !== undefined) {
        updatedSections[sectionIndex].columns[columnIndex].list.splice(listIndex, 1);
      } else if (updatedSections[sectionIndex].type === 'single-paragraph') {
        updatedSections[sectionIndex].list.splice(listIndex, 1);
      }
      setSections(updatedSections);
    };
  
    return (
        <div
          className={`max-w-4xl mx-auto px-4 pt-8 ${
            isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <h1 className={`text-3xl font-bold mb-6 ${isDark ? ' text-white bg-gray-900' : 'text-gray-800 bg-gray-100'}`}>
            Blog Sections
          </h1>
          <div className='flex flex-row gap-4'>

          <Button
            onClick={() => addSection('single-paragraph')}
            className={`w-full mb-4 ${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            Add Single Paragraph Section
          </Button>
          <Button
            onClick={() => addSection('two-column')}
            className={`w-full mb-4 ${isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'} `}
          >
            Add Two Column Section
          </Button>
          </div>
          {sections.map((section, sectionIndex) => {
            const Icon = ICONS.find((icon) => icon.name === section.icon)?.component || Camera;
    
            return (
              <BlogSection
                key={sectionIndex}
                icon={Icon!}
                title={section.title}
                className={`rounded-lg p-6 mb-6 ${
                  isDark ? ' text-white bg-gray-800' : 'text-gray-800 bg-gray-100'
                }`}
              >
              <div className="flex items-center space-x-4 mb-4">
                <label className="font-medium ">Choose Icon:</label>
                <select
                  value={section.icon}
                  onChange={(e) =>
                    updateSection(sectionIndex, 'icon', e.target.value as IconName)
                  }
                  className="border bg-gray-800 text-slate-200 rounded-md px-3 py-2"
                >
                  {ICONS.map(({ name }) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
                <div className="w-8 h-8 flex items-center justify-centerrounded-md">
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <Input
                label="Title"
                value={section.title}
                onChange={(e) => updateSection(sectionIndex, 'title', e.target.value)}
                required
                className={`border-2 p-2 `}
              />
              <br/>
              <TextArea
                label="Paragraph"
                value={section.paragraph}
                onChange={(e) => updateSection(sectionIndex, 'paragraph', e.target.value)}
                required
                className='border-2 p-2 '
              />
              <br/>
              {section.type === 'single-paragraph' && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Column </h3>
                  {section.list.map((item, listIndex) => (
                    <div key={listIndex} className="flex items-center mb-2">
                      <Input
                        value={item}
                        onChange={(e) => {
                          const updatedList = [...section.list];
                          updatedList[listIndex] = e.target.value;
                          updateSection(sectionIndex, 'list', updatedList);
                        }}
                        className='border-2 p-2 '
                      />
                      <Button
                        onClick={() => deleteListItem(sectionIndex, listIndex)}
                        variant="danger"
                        className="ml-2"
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                  <Button
                    onClick={() => addListItem(sectionIndex)}
                    variant="primary"
                    className="mt-2"
                  >
                    Add List Item
                  </Button>
                </div>
              )}
              {section.type === 'two-column' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.columns.map((column, columnIndex) => (
                    <div key={columnIndex} className="p-4 rounded-lg ">
                      <Input
                        label="Column Heading"
                        value={column.heading}
                        onChange={(e) =>
                          updateColumn(sectionIndex, columnIndex, 'heading', e.target.value)
                        }
                        required
                        className='border-2 p-2 '
                      />
                      <br/>
                      <h3 className="text-lg font-semibold mb-2">Column</h3>
                      {column.list.map((item, listIndex) => (
                        <div key={listIndex} className="flex items-center mb-2">
                          <Input
                            value={item}
                            onChange={(e) => {
                              const updatedList = [...column.list];
                              updatedList[listIndex] = e.target.value;
                              updateColumn(sectionIndex, columnIndex, 'list', updatedList);
                            }}
                            className='border-2 p-2 '
                          />
                          <Button
                            onClick={() => deleteListItem(sectionIndex, listIndex, columnIndex)}
                            variant="danger"
                            className="ml-2"
                          >
                            Delete
                          </Button>
                        </div>
                      ))}
                      <Button
                        onClick={() => addListItem(sectionIndex, columnIndex)}
                        variant="primary"
                        className="mt-2"
                      >
                        Add List Item
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </BlogSection>
          );
        })}
      </div>
    );
  }