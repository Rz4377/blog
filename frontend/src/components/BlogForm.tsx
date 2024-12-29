import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import type { BlogFormData, AdLink } from '../types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { TextArea } from './ui/TextArea';

interface BlogFormProps {
  onSubmit: (data: BlogFormData) => Promise<void>;
  isLoading: boolean;
}

export function BlogForm({ onSubmit, isLoading }: BlogFormProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    prompt: '',
    image: null,
    adLinks: [],
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, image: file }));
  };

  const addAdLink = () => {
    setFormData(prev => ({
      ...prev,
      adLinks: [...prev.adLinks, { url: '', title: '' }],
    }));
  };

  const removeAdLink = (index: number) => {
    setFormData(prev => ({
      ...prev,
      adLinks: prev.adLinks.filter((_, i) => i !== index),
    }));
  };

  const updateAdLink = (index: number, field: keyof AdLink, value: string) => {
    setFormData(prev => ({
      ...prev,
      adLinks: prev.adLinks.map((link, i) => 
        i === index ? { ...link, [field]: value } : link
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData({ title: '', prompt: '', image: null, adLinks: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Blog Title"
        id="title"
        value={formData.title}
        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        required
      />

      <TextArea
        label="Blog Content Prompt"
        id="prompt"
        rows={4}
        value={formData.prompt}
        onChange={(e) => setFormData(prev => ({ ...prev, prompt: e.target.value }))}
        placeholder="Describe the blog post content..."
        required
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Blog Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 
            file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 
            file:text-gray-200 hover:file:bg-gray-600"
          required
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-300">
            Advertisement Links (Optional)
          </label>
          <Button
            type="button"
            onClick={addAdLink}
            variant="secondary"
            icon={<Plus className="h-4 w-4" />}
          >
            Add Link
          </Button>
        </div>

        {formData.adLinks.map((link, index) => (
          <div key={index} className="flex items-start space-x-2">
            <div className="flex-1 space-y-2">
              <Input
                placeholder="Ad Title"
                value={link.title}
                onChange={(e) => updateAdLink(index, 'title', e.target.value)}
              />
              <Input
                type="url"
                placeholder="Ad URL"
                value={link.url}
                onChange={(e) => updateAdLink(index, 'url', e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => removeAdLink(index)}
              className="mt-1 p-1 text-gray-400 hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <Button type="submit" isLoading={isLoading} className="w-full">
        Create Blog Post
      </Button>
    </form>
  );
}