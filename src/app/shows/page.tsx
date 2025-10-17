import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shows | HDHarmsen',
  description: 'Upcoming shows and performances by HDHarmsen',
};

export default function ShowsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shows</h1>
        <p className="text-lg text-gray-600 mb-8">
          Coming soon - upcoming performances and show dates will be listed here.
        </p>
        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-gray-500">
            Check back soon for the latest show announcements and ticket information.
          </p>
        </div>
      </div>
    </div>
  );
}
