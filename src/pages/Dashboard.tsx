import React from 'react';
import HeroSection from '../components/Dashboard/HeroSection';
import MetricCard from '../components/Dashboard/MetricCard';
import QuickActionCard from '../components/Dashboard/QuickActionCard';
import AppCard from '../components/Dashboard/AppCard';
import ReminderCard from '../components/Dashboard/ReminderCard';
import AppointmentCard from '../components/Dashboard/AppointmentCard';
import {
  statCards,
  quickActions,
  myApplications,
  vaccinationReminders,
  upcomingAppointments,
} from '../data/dashboard';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <HeroSection onNavigate={onNavigate} />

      {/* Metrics Section */}
      <section className="mb-8" aria-labelledby="metrics-heading">
        <h2 id="metrics-heading" className="mb-4 text-xl font-bold text-gray-900">
          Key Metrics
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statCards.map((card) => (
            <MetricCard key={card.label} card={card} />
          ))}
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="mb-8" aria-labelledby="actions-heading">
        <h2 id="actions-heading" className="mb-4 text-xl font-bold text-gray-900">
          Quick Actions
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard
              key={action.label}
              action={action}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      {/* My Applications Section */}
      <section className="mb-8" aria-labelledby="applications-heading">
        <h2
          id="applications-heading"
          className="mb-4 text-xl font-bold text-gray-900"
        >
          My Applications
        </h2>
        <div className="space-y-4">
          {myApplications.map((app) => (
            <AppCard
              key={app.title}
              app={app}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      {/* Vaccination Reminders Section */}
      <section className="mb-8" aria-labelledby="reminders-heading">
        <h2 id="reminders-heading" className="mb-4 text-xl font-bold text-gray-900">
          Upcoming Reminders
        </h2>
        <div className="space-y-4">
          {vaccinationReminders.map((reminder) => (
            <ReminderCard
              key={reminder.title}
              reminder={reminder}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Appointments Section */}
      <section aria-labelledby="appointments-heading">
        <h2
          id="appointments-heading"
          className="mb-4 text-xl font-bold text-gray-900"
        >
          Upcoming Appointments
        </h2>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment, index) => (
            <AppointmentCard
              key={`${appointment.doctor}-${index}`}
              appointment={appointment}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;

