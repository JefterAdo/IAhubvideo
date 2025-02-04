import { Brain } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Footer } from './Footer';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3 group">
              <Brain className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                AI Videos Hub
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}