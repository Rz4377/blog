import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Trophy, Users, TrendingUp } from 'lucide-react';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
            alt="Sports background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply" />
        </div>
        
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-white">Welcome to Sport Fusion</span>
            <span className="block text-blue-200">Your Ultimate Sports Blog</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-blue-100 sm:max-w-3xl">
            Discover the latest insights, analysis, and stories from the world of sports.
          </p>
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <Link
              to="/blog"
              className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 sm:px-8"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Trophy className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Expert Analysis</h2>
              <p className="text-gray-600">In-depth coverage and analysis of your favorite sports, teams, and athletes.</p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Community Driven</h2>
              <p className="text-gray-600">Join our community of sports enthusiasts and share your thoughts and opinions.</p>
            </div>
            <div className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Latest Updates</h2>
              <p className="text-gray-600">Stay up to date with the latest news, scores, and highlights from around the sports world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}