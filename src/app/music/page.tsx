import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music | HDHarmsen',
  description: 'Music releases and recordings by HDHarmsen',
};

export default function MusicPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Music</h1>
        <p className="text-lg text-gray-600 mb-8">
          Coming soon - music releases, recordings, and streaming links will be available here.
        </p>
        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-gray-500">
            Stay tuned for the latest music releases and streaming platform links.
          </p>
        </div>
      </div>
    </div>
  );
}
