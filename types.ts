
export enum AlertStatus {
  Critical = 'Critical',
  High = 'High',
  Routine = 'Routine',
}

export interface Alert {
  id: string;
  title: string;
  location: string;
  status: AlertStatus;
  riskScore: number;
  category: string;
  geminiSummary: string;
}
