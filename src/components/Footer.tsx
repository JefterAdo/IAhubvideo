import { getCurrentYear } from '../lib/utils/date';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-600">
          Arnaud DAPA - Copyright © {getCurrentYear()}
        </p>
      </div>
    </footer>
  );
}