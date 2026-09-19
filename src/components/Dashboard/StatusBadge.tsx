import React from 'react';
import { StatusVariant, type StatusBadgeData } from '../../types/dashboard';

interface StatusBadgeProps {
  data: StatusBadgeData;
}

const statusColorMap: Record<StatusVariant, string> = {
  [StatusVariant.Compliant]: 'bg-emerald-50 text-emerald-700',
  [StatusVariant.Warning]: 'bg-yellow-50 text-yellow-700',
  [StatusVariant.Critical]: 'bg-red-50 text-red-700',
  [StatusVariant.Safe]: 'bg-blue-50 text-blue-700',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ data }) => {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColorMap[data.status]}`}>
      {data.label}
    </span>
  );
};

StatusBadge.displayName = 'StatusBadge';

export default React.memo(StatusBadge);

