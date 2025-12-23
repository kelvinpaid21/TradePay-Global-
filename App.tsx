import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AuthForms from './components/AuthForms';
import MarketTicker from './components/MarketTicker';

export default function App() {
  const [view, setView] = useState('home');
  const user = { name: "Trader", balance: 50000, profits: 1250, status: "Verified" };

  if (view === 'dashboard') return <Dashboard user={user} onLogout={() => setView('home')} />;
  if (view === 'login' || view === 'register') return <AuthForms initialMode={view === 'login' ? 'login' : 'register'} onViewChange={setView} />;
  
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar currentView={view} onViewChange={setView} />
      <main className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent italic">Trade Smart.</h1>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">Access global markets with TradePay Global. The most secure broker platform for modern investors.</p>
        <button onClick={() => setView('register')} className="bg-blue-600 px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-600/30 hover:scale-105 transition-transform">Get Started</button>
      </main>
      <MarketTicker />
    </div>
  );
}
