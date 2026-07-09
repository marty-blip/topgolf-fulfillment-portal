export interface DashboardSummary {
  totalNet: number;
  ytdNet: number;
  totalUnits: number;
  locationCount: number;
  orderCount: number;
  lineCount: number;
}

export interface DashboardData {
  ok: boolean;
  headers: string[];
  rows: any[][];
  lastUpdated: string;
  summary: DashboardSummary;
  error?: string;
}

export type ActiveTab = 'overview' | 'orders' | 'locations' | 'settings';

export interface LocationSummaryItem {
  location: string;
  orderCount: number;
  lineCount: number;
  units: number;
  netSpend: number;
  lastOrderDate: string | null;
}
