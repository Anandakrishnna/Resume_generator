import React from 'react';
import { Eye } from 'lucide-react';

export const PreviewPanelPlaceholder: React.FC = () => {
  return (
    <div className="sticky top-20 bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl p-6 shadow-md min-h-[600px] flex flex-col justify-center items-center text-center">
      <div className="w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
        <Eye className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
        Live Resume Preview Shell
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
        Your formatted resume document will render here in real time as you fill out the form.
      </p>
    </div>
  );
};
