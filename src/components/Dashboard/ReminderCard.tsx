import React from 'react';
import { type ReminderCardData } from '../../types/dashboard';

interface ReminderCardProps {
  reminder: ReminderCardData;
  onNavigate: (action: string) => void;
}

const ReminderCard: React.FC<ReminderCardProps> = ({ reminder, onNavigate }) => {
  return (
    <div className="rounded-lg bg-yellow-50 p-4">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-gray-900">{reminder.title}</h4>
          <p className="mt-1 text-sm text-gray-600">
            {reminder.daysUntil} days until {reminder.date}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onNavigate('view-reminder')}
        className="mt-3 text-sm font-semibold text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:underline"
      >
        View →
      </button>
    </div>
  );
};

ReminderCard.displayName = 'ReminderCard';

export default React.memo(ReminderCard);

