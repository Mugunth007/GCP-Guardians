# Proactive Maharashtra - Governance Dashboard

A multi-page governance dashboard built for the "GCP Guardians" hackathon team. This project demonstrates a proactive approach to managing and triaging civic alerts using AI-driven insights and a clear, actionable user interface.

![Proactive Maharashtra Dashboard](https://i.imgur.com/8a6P2hH.png)

## Project Overview

In traditional governance, civic issues are often handled reactively. "Proactive Maharashtra" flips this model by leveraging predictive analytics and AI to identify potential problems *before* they escalate. This dashboard serves as the central hub for government officials to monitor, triage, and act upon AI-generated alerts related to infrastructure, public health, utilities, and more.

The core of the system is the **Gemini AI Analysis**, which provides a concise, human-readable summary for each alert, enabling officials to quickly grasp the situation and make informed decisions.

## ✨ Key Features

-   **Role-Based Views**: A secure admin dashboard for officials and a separate public-facing portal for citizen engagement.
-   **At-a-Glance Dashboard**: Features key metrics, a prioritized triage list for critical/high-risk alerts, and a simulated live risk heatmap for geographical insights.
-   **Comprehensive Alert Management**: A filterable and sortable table allows officials to efficiently browse all alerts.
-   **AI-Powered Insights**: Each alert has a detailed view that includes a "Gemini AI Analysis" summary, providing immediate context and urgency.
-   **Public Engagement (GaaS)**: A simple "Governance as a Service" portal keeps the public informed about ongoing work and allows them to submit their own reports.

## 🛠️ Tech Stack

-   **Frontend**: React (v18) with React Router for client-side navigation.
-   **Styling**: Tailwind CSS for a modern, utility-first design system.
-   **Icons**: Custom, lightweight SVG components inspired by `lucide-react`.
-   **Data**: Static mock data is used to simulate a live backend feed of AI-generated alerts.

## 📂 Project Structure

The codebase is organized logically into components, pages, and shared constants/types to ensure maintainability and scalability.

```
/
├── components/       # Reusable React components (Header, Sidebar, StatCard, etc.)
├── pages/            # Page-level components (Dashboard, AllAlerts, etc.)
├── App.tsx           # Main application component with routing logic
├── constants.ts      # Mock data for the alerts
├── types.ts          # TypeScript type definitions (Alert, AlertStatus)
├── index.html        # The main HTML entry point
├── index.tsx         # The React application entry point
├── metadata.json     # Project metadata
└── README.md         # This file
```

## 🚀 Getting Started

This project is designed to run in a web-based development environment that supports HTML, CSS, and TypeScript/JSX out of the box.

1.  Ensure all project files are present in the project directory.
2.  Open `index.html` in a browser using a local web server or the platform's live preview feature.
3.  The application will load, starting with the main Dashboard page.

### How to Use

-   **Navigate** between the `Dashboard`, `All Alerts`, and `Public Portal` using the sidebar links.
-   On the **All Alerts** page, use the dropdown menu to **filter** alerts by their status (Critical, High, Routine).
-   **Click on any alert** in the table or the prioritized list to view its detailed analysis page.
-   The **Public Portal** is a standalone view, accessible directly, simulating how a citizen would interact with the service.

---

Built with ❤️ by the **GCP Guardians**.
