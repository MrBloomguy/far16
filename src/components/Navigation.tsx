import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

const menuItems = [
  { emoji: "🎭", label: 'Events' },
  { emoji: "🏆", label: 'Leaderboard' },
  { emoji: "👛", label: 'Wallet' },
];

export function Navigation() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">⚡ Swap</span>
            </div>

            <div className="flex items-center gap-2">
              {menuItems.map(({ emoji, label }) => (
                <button
                  key={label}
                  className="hidden md:flex items-center gap-2 px-6 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-2xl transition-all duration-200"
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="font-medium">{label}</span>
                </button>
              ))}
              
              <ConnectWallet
                theme="light"
                btnTitle="Connect Wallet"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Footer Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 safe-bottom">
        <div className="flex items-center justify-around h-16">
          {menuItems.map(({ emoji, label }) => (
            <button
              key={label}
              className="flex flex-col items-center justify-center w-full h-full text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <span className="text-xl mb-0.5">{emoji}</span>
              <span className="text-xs">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}