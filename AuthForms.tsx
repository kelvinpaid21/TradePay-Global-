import React, { useState } from 'react';
import { ShieldCheck, Mail, Lock, User, ArrowRight } from 'lucide-react';
export default function AuthForms({ initialMode, onViewChange }: any) {
  const [mode, setMode] = useState(initialMode);
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl">
        <h2 className="text-3xl font-black text-slate-900 mb-2 italic tracking-tighter">{mode === 'login' ? 'Welcome Back.' : 'Elite Membership.'}</h2>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed">{mode === 'login' ? 'Authenticate to access your terminal.' : 'Join thousands of professional traders today.'}</p>
        <div className="space-y-4">
          {mode === 'register' && <input className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none text-slate-900 font-medium" placeholder="Full Legal Name" />}
          <input className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none text-slate-900 font-medium" placeholder="Gmail Address" />
          <input className="w-full bg-slate-50 border border-slate-200 p-5 rounded-2xl outline-none text-slate-900 font-medium" type="password" placeholder="Passkey" />
          <button onClick={() => onViewChange('dashboard')} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-slate-900/20 active:scale-95 transition-all">Authorize Terminal</button>
        </div>
        <p className="text-center mt-10 text-[10px] text-slate-400 font-black uppercase tracking-widest">
          {mode === 'login' ? "Don't have an account?" : "Already a member?"}
          <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="ml-2 text-blue-600">Switch View</button>
        </p>
      </div>
    </div>
  );
}
