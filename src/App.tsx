import React from 'react';
import { SwapInterface } from './components/SwapInterface';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
        <SwapInterface />
      </main>
    </div>
  );
}

export default App;