import React from 'react';
import { User, FileText, Briefcase, GraduationCap, Award } from 'lucide-react';

export const FormPanelPlaceholder: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <User className="w-5 h-5 text-indigo-500" />
          Resume Details
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Fill out the information below to build your resume in real time.
        </p>
      </div>

      <div className="space-y-4">
        {/* Placeholder Form Fields */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <User className="w-4 h-4 text-indigo-500" /> Personal Info
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
            <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <FileText className="w-4 h-4 text-indigo-500" /> Summary
          </div>
          <div className="h-20 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Briefcase className="w-4 h-4 text-indigo-500" /> Experience
          </div>
          <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <GraduationCap className="w-4 h-4 text-indigo-500" /> Education
          </div>
          <div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-dashed border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Award className="w-4 h-4 text-indigo-500" /> Skills
          </div>
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
