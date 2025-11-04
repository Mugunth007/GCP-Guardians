
import React from 'react';
import { GlobeIcon } from '../components/icons';

const PublicPortal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GlobeIcon className="h-8 w-8 text-brand-blue" />
            <h1 className="text-2xl font-bold text-brand-dark">Maharashtra Public Portal</h1>
          </div>
          <div>
            <a href="#/alerts" className="text-gray-600 hover:text-brand-blue">Admin Login</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-dark">Governance as a Service (GaaS)</h2>
          <p className="text-lg text-gray-600 mt-2">Transparent updates on civic services in your area.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4">Potholes Repaired This Month</h3>
            <p className="text-5xl font-bold text-green-600">1,247</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4">Active Water Main Repairs</h3>
            <p className="text-5xl font-bold text-blue-600">83</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Submit a Report</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="report" className="block text-sm font-medium text-gray-700">
                Describe the issue
              </label>
              <div className="mt-1">
                <textarea
                  id="report"
                  name="report"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-2"
                  placeholder="e.g., A large pothole on Main Street near the post office."
                ></textarea>
              </div>
            </div>
             <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location (optional)
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue sm:text-sm p-2"
                  placeholder="Aundh, Pune"
                />
              </div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-brand-blue py-3 px-8 text-sm font-medium text-white shadow-sm hover:bg-brand-blue/90 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="bg-white mt-12 py-6 border-t">
        <div className="container mx-auto px-6 text-center text-gray-500">
            <p>&copy; 2024 Government of Maharashtra Initiative. Powered by GCP Guardians.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicPortal;
