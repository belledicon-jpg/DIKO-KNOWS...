import React from 'react';
import StatusBadge from './StatusBadge';
import { type AppCardData } from '../../types/dashboard';

interface AppCardProps {
  app: AppCardData;
  onNavigate: (action: string) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onNavigate }) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-bold text-gray-900">{app.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{app.description}</p>
        </div>
        <StatusBadge data={app.status} />
      </div>
      <button
        type="button"
        onClick={() => onNavigate('track')}
        className="text-sm font-semibold text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:underline"
      >
        Track →
      </button>
    </div>
  );
};

AppCard.displayName = 'AppCard';

export default React.memo(AppCard);

