import React from 'react';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';
import { emojis } from '../data/emojis';

interface EmojiGridProps {
  searchTerm: string;
}

export function EmojiGrid({ searchTerm }: EmojiGridProps) {
  const filteredEmojis = emojis.filter(
    emoji => 
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const copyToClipboard = async (emoji: string) => {
    try {
      await navigator.clipboard.writeText(emoji);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
      {filteredEmojis.map((emoji) => (
        <button
          key={emoji.name}
          onClick={() => copyToClipboard(emoji.emoji)}
          className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl">{emoji.emoji}</span>
            <span className="text-sm text-gray-300 truncate w-full text-center">
              {emoji.name}
            </span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
            <Copy className="w-6 h-6 text-white" />
          </div>
        </button>
      ))}
    </div>
  );
}