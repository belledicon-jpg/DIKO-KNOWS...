import React from 'react';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">
          Health & Sanitation Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's your inspection overview.
        </p>
      </div>
      <button
        type="button"
        onClick={() => onNavigate('notifications')}
        className="relative rounded-full bg-white p-3 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label="Notifications"
      >
        <i className="fas fa-bell text-blue-600" aria-hidden="true" />
        <span
          className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"
          aria-hidden="true"
        />
      </button>
    </header>
  );
};

export default HeroSection;

