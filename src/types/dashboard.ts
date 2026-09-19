export enum MetricColor {
  Blue = 'metric-blue',
  Green = 'metric-green',
  Orange = 'metric-orange',
  Purple = 'metric-purple',
}

export enum StatusVariant {
  Compliant = 'compliant',
  Warning = 'warning',
  Critical = 'critical',
  Safe = 'safe',
}

export interface MetricCardData {
  label: string;
  value: string | number;
  icon: string;
  color: MetricColor;
}

export interface QuickActionData {
  label: string;
  icon: string;
}

export interface StatusBadgeData {
  status: StatusVariant;
  label: string;
}

export interface AppCardData {
  title: string;
  description: string;
  status: StatusBadgeData;
}

export interface ReminderCardData {
  title: string;
  date: string;
  daysUntil: number;
}

export interface AppointmentCardData {
  date: string;
  time: string;
  doctor: string;
  location: string;
  icon: string;
}

