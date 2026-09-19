import React from 'react';
import { MetricColor, type MetricCardData } from '../../types/dashboard';

interface MetricCardProps {
  card: MetricCardData;
}

const colorMap: Record<MetricColor, string> = {
  [MetricColor.Blue]: 'bg-blue-50 text-blue-600',
  [MetricColor.Green]: 'bg-emerald-50 text-emerald-600',
  [MetricColor.Orange]: 'bg-orange-50 text-orange-600',
  [MetricColor.Purple]: 'bg-purple-50 text-purple-600',
};

const MetricCard: React.FC<MetricCardProps> = ({ card }) => {
  return (
    <button
      type="button"
      onClick={() => {
        /* Handle click */
      }}
      className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p className="text-sm text-gray-600">{card.label}</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{card.value}</p>
        </div>
        <div className={`rounded-lg p-3 ${colorMap[card.color]}`}>
          <i className={`fas ${card.icon} text-xl`} aria-hidden="true" />
        </div>
      </div>
    </button>
  );
};

MetricCard.displayName = 'MetricCard';

export default React.memo(MetricCard);

