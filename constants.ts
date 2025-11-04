
import { Alert, AlertStatus } from './types';

export const ALERTS: Alert[] = [
  {
    id: 'pune-road-001',
    title: 'Predicted Road Failure',
    location: 'Aundh, Pune',
    status: AlertStatus.Critical,
    riskScore: 95,
    category: 'Infrastructure',
    geminiSummary: 'AI predicts a high probability of imminent road collapse on the Aundh-Baner link road due to subterranean water erosion.'
  },
  {
    id: 'mumbai-water-002',
    title: 'Water Main Pressure Drop',
    location: 'Dadar, Mumbai',
    status: AlertStatus.High,
    riskScore: 82,
    category: 'Utilities',
    geminiSummary: 'Anomalous pressure readings suggest a significant leak in a primary water main, risking contamination and service disruption.'
  },
  {
    id: 'nagpur-health-003',
    title: 'Unseasonal Vector-Borne Disease Spike',
    location: 'Sitabuldi, Nagpur',
    status: AlertStatus.High,
    riskScore: 78,
    category: 'Public Health',
    geminiSummary: 'Data indicates a localized, unseasonal spike in mosquito populations, elevating the risk of a dengue or malaria outbreak.'
  },
  {
    id: 'pune-power-004',
    title: 'Substation Transformer Overheating',
    location: 'Koregaon Park, Pune',
    status: AlertStatus.Critical,
    riskScore: 91,
    category: 'Utilities',
    geminiSummary: 'Thermal sensors show critical overheating in a key transformer, posing an immediate risk of a widespread power outage.'
  },
  {
    id: 'mumbai-traffic-005',
    title: 'Traffic Congestion Anomaly',
    location: 'Western Express Highway, Mumbai',
    status: AlertStatus.Routine,
    riskScore: 45,
    category: 'Transportation',
    geminiSummary: 'Predictive models show non-peak hour congestion is likely tomorrow due to a planned VIP movement, suggesting traffic diversion.'
  },
  {
    id: 'nashik-air-006',
    title: 'Air Quality Degradation Alert',
    location: 'MIDC Area, Nashik',
    status: AlertStatus.High,
    riskScore: 75,
    category: 'Environment',
    geminiSummary: 'Satellite and ground sensor data correlate to show a plume of industrial pollutants exceeding safe levels, requiring investigation.'
  },
  {
    id: 'aurangabad-struct-007',
    title: 'Historic Building Structural Stress',
    location: 'Bibi Ka Maqbara vicinity, Aurangabad',
    status: AlertStatus.Routine,
    riskScore: 55,
    category: 'Infrastructure',
    geminiSummary: 'Vibration sensor data from nearby construction suggests potential long-term structural stress to a protected heritage site.'
  },
   {
    id: 'pune-waste-008',
    title: 'Waste Management Overflow',
    location: 'Hinjewadi IT Park, Pune',
    status: AlertStatus.High,
    riskScore: 80,
    category: 'Sanitation',
    geminiSummary: 'Waste collection data indicates a high probability of bin overflow in the commercial sector, posing a public health risk.'
  }
];
