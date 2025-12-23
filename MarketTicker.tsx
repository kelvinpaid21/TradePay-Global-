import React from 'react';
export default function MarketTicker() {
  const data = [
    { s: 'BTC/INR', p: '₹54,23,150', c: '+2.4%' },
    { s: 'ETH/INR', p: '₹2,90,452', c: '-1.1%' },
    { s: 'GOLD', p: '₹62,140', c: '+0.8%' },
    { s: 'USD/INR', p: '₹83.42', c: '+0.1%' }
  ];
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-3 overflow-hidden">
      <div className="flex space-x-12 animate-pulse px-4">
        {data.map(i => (
          <div key={i.s} className="flex space-x-2 text-sm shrink-0">
            <span className="text-slate-500 font-bold">{i.s}</span>
            <span className="text-white font-black">{i.p}</span>
            <span className={i.c.includes('+') ? 'text-green-500' : 'text-red-500'}>{i.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
