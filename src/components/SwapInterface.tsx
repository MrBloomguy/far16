import React, { useState } from 'react';
import { Settings, ArrowDownUp } from 'lucide-react';
import { Button } from './ui/button';
import { TokenInput } from './TokenInput';

const DEFAULT_TOKENS = {
  eth: {
    symbol: 'ETH',
    logo: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png'
  },
  usdc: {
    symbol: 'USDC',
    logo: 'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png'
  }
};

export function SwapInterface() {
  const [tokenFrom, setTokenFrom] = useState('');
  const [tokenTo, setTokenTo] = useState('');

  return (
    <div className="w-full max-w-[464px] mx-auto bg-white rounded-3xl border border-neutral-200 shadow-sm">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Swap</h1>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-1">
          <TokenInput
            label="You pay"
            value={tokenFrom}
            onChange={setTokenFrom}
            token={DEFAULT_TOKENS.eth}
            onSelectToken={() => {}}
          />

          <div className="relative h-8">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-xl shadow-md"
              >
                <ArrowDownUp className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <TokenInput
            label="You receive"
            value={tokenTo}
            onChange={setTokenTo}
            token={DEFAULT_TOKENS.usdc}
            onSelectToken={() => {}}
          />
        </div>

        <Button className="w-full mt-4 h-14 text-base font-semibold rounded-2xl">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}