import { Link } from 'react-router-dom';
import { Dumbbell, Trophy, Users, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function HomePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] md:min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd"
            alt="Sports background"
            className="h-full w-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-75
            }`}
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-24">
          <h1
            className={`text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl`}
          >
            <span className="block text-white">
              Welcome to Sport Fusion
            </span>
            <span className="block text-blue-400">
              Your Ultimate Sports Blog
            </span>
          </h1>
          <p
            className={`mx-auto mt-6 max-w-lg text-center text-xl text-gray-300 sm:max-w-3xl`}
          >
            Discover the latest insights, analysis, and stories from the world
            of sports.
          </p>
          <div className="mt-10">
            <Link
              to="/blog"
              className={`inline-flex items-center justify-center rounded-md ${
                isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'
              } px-6 py-3 text-base font-medium text-white shadow-lg transition-colors`}
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: 'Expert Analysis',
                description:
                  'In-depth coverage and analysis of your favorite sports, teams, and athletes.',
              },
              {
                icon: Users,
                title: 'Community Driven',
                description:
                  'Join our community of sports enthusiasts and share your thoughts and opinions.',
              },
              {
                icon: TrendingUp,
                title: 'Latest Updates',
                description:
                  'Stay up to date with the latest news, scores, and highlights from around the sports world.',
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="space-y-4">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                    isDark ? 'bg-blue-900' : 'bg-blue-100'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                </div>
                <h2
                  className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {title}
                </h2>
                <p
                  className={`${
                    isDark ? 'text-gray-400' : 'text-gray-700'
                  }`}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}