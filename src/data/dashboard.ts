import {
  MetricColor,
  StatusVariant,
  type MetricCardData,
  type QuickActionData,
  type AppCardData,
  type ReminderCardData,
  type AppointmentCardData,
} from '../types/dashboard';

export const statCards: MetricCardData[] = [
  {
    label: 'Facilities Inspected',
    value: '1,248',
    icon: 'fa-building',
    color: MetricColor.Blue,
  },
  {
    label: 'Violations Found',
    value: '47',
    icon: 'fa-exclamation-triangle',
    color: MetricColor.Orange,
  },
  {
    label: 'Compliance Rate',
    value: '94%',
    icon: 'fa-check-circle',
    color: MetricColor.Green,
  },
  {
    label: 'Pending Actions',
    value: '12',
    icon: 'fa-clock',
    color: MetricColor.Purple,
  },
];

export const quickActions: QuickActionData[] = [
  { label: 'New Inspection', icon: 'fa-plus' },
  { label: 'Report Violation', icon: 'fa-flag' },
  { label: 'View Analytics', icon: 'fa-chart-bar' },
  { label: 'Settings', icon: 'fa-cog' },
];

export const myApplications: AppCardData[] = [
  {
    title: 'Health Department Portal',
    description: 'Track all facility inspections',
    status: { status: StatusVariant.Compliant, label: 'Active' },
  },
  {
    title: 'Violation Management',
    description: 'Manage reported violations',
    status: { status: StatusVariant.Warning, label: 'Review Needed' },
  },
];

export const vaccinationReminders: ReminderCardData[] = [
  {
    title: 'Annual Health Review',
    date: '2024-02-15',
    daysUntil: 28,
  },
  {
    title: 'Staff Training',
    date: '2024-03-01',
    daysUntil: 44,
  },
];

export const upcomingAppointments: AppointmentCardData[] = [
  {
    date: 'Feb 10, 2024',
    time: '2:00 PM',
    doctor: 'Dr. Sarah Johnson',
    location: 'Main Office',
    icon: 'fa-calendar',
  },
  {
    date: 'Feb 15, 2024',
    time: '10:30 AM',
    doctor: 'Dr. Michael Chen',
    location: 'District Health Center',
    icon: 'fa-calendar',
  },
];

