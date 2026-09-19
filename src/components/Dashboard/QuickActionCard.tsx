import React from 'react';
import { type QuickActionData } from '../../types/dashboard';

interface QuickActionCardProps {
  action: QuickActionData;
  onNavigate: (action: string) => void;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  action,
  onNavigate,
}) => {
  return (
    <button
      type="button"
      onClick={() => onNavigate(action.label)}
      className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <i className={`fas ${action.icon} text-xl text-blue-600`} aria-hidden="true" />
      <span className="text-sm font-medium text-gray-700">{action.label}</span>
    </button>
  );
};

QuickActionCard.displayName = 'QuickActionCard';

export default React.memo(QuickActionCard);

