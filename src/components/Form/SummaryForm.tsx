import React from 'react';
import { FileText } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export const SummaryForm: React.FC = () => {
  const { resumeData, updateSummary } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <FileText className="w-5 h-5 text-indigo-500" />
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
          Professional Summary
        </h3>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
          Summary / Executive Bio
        </label>
        <textarea
          rows={4}
          value={resumeData.summary}
          onChange={(e) => updateSummary(e.target.value)}
          placeholder="Brief overview of your background, key technical strengths, and career achievements..."
          className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors resize-y"
        />
      </div>
    </div>
  );
};
