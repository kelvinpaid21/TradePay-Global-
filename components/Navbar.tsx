import React from 'react';
import { ShieldCheck } from 'lucide-react';
export default function Navbar({ onViewChange }: any) {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/50 backdrop-blur-lg border-b border-slate-800 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2" onClick={() => onViewChange('home')}>
          <ShieldCheck className="text-blue-500 w-8 h-8" />
          <span className="text-xl font-black text-white italic">TradePay</span>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => onViewChange('login')} className="text-white font-bold text-sm">Login</button>
          <button onClick={() => onViewChange('register')} className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold">Join</button>
        </div>
      </div>
    </nav>
  );
}
