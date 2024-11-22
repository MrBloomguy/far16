import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface TokenInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  token: {
    symbol: string;
    logo: string;
  };
  onSelectToken: () => void;
}

export function TokenInput({ label, value, onChange, token, onSelectToken }: TokenInputProps) {
  return (
    <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-200">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-neutral-500">{label}</span>
        <span className="text-sm text-neutral-500">Balance: 0.0</span>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0.0"
          className="flex-1 bg-transparent text-2xl font-medium outline-none"
        />
        <Button
          variant="secondary"
          onClick={onSelectToken}
          className="flex items-center gap-2 text-base font-semibold"
        >
          <img src={token.logo} alt={token.symbol} className="w-5 h-5 rounded-full" />
          {token.symbol}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}