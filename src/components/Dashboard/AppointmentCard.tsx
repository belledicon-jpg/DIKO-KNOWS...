import React from 'react';
import { type AppointmentCardData } from '../../types/dashboard';

interface AppointmentCardProps {
  appointment: AppointmentCardData;
  onNavigate: (action: string) => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onNavigate,
}) => {
  return (
    <div className="flex items-start justify-between rounded-lg bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
          <i className={`fas ${appointment.icon} text-blue-600`} aria-hidden="true" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{appointment.doctor}</p>
          <p className="text-sm text-gray-600">
            {appointment.date} at {appointment.time}
          </p>
          <p className="text-sm text-gray-500">{appointment.location}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onNavigate('view-appointment')}
        className="text-sm font-semibold text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:underline"
      >
        View
      </button>
    </div>
  );
};

AppointmentCard.displayName = 'AppointmentCard';

export default React.memo(AppointmentCard);

