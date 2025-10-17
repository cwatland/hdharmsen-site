import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | HDHarmsen',
  description: 'Get in touch with HDHarmsen for bookings and inquiries',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
        <p className="text-lg text-gray-600 mb-8">
          Coming soon - contact information and booking details will be available here.
        </p>
        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-gray-500">
            Contact form and booking information will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
}
