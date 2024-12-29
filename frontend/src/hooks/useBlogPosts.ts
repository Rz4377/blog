import { useState, useEffect } from 'react';
import type { BlogPost } from '../types';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TODO: Replace with actual API call
        // const response = await fetch('/api/posts');
        // const data = await response.json();
        
        // Simulated data
        const data: BlogPost[] = [
          {
            id: '1',
            title: 'The Evolution of Modern Football Tactics',
            content: 'Sample content about football tactics...',
            imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2',
            createdAt: new Date().toISOString(),
            adLinks: [
              { title: 'Sports Gear', url: 'https://example.com/gear' }
            ]
          },
          // Add more sample posts as needed
        ];
        
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, isLoading };
}