import React from 'react';
import { PersonalInfoForm } from './PersonalInfoForm';
import { SummaryForm } from './SummaryForm';
import { ExperienceForm } from './ExperienceForm';
import { EducationForm } from './EducationForm';
import { SkillsForm } from './SkillsForm';
import { RotateCcw, Trash2, Edit3 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export const FormPanel: React.FC = () => {
  const { resetToSampleData, clearAllData } = useResume();

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-8 no-print">
      {/* Panel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Edit3 className="w-5 h-5 text-indigo-500" />
            Resume Editor
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Changes auto-save instantly to your browser.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={resetToSampleData}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
            title="Reset form with realistic sample data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Sample Data
          </button>
          <button
            type="button"
            onClick={clearAllData}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/50 hover:bg-red-100 dark:hover:bg-red-900/60 border border-red-200 dark:border-red-900/50 rounded-lg transition-colors"
            title="Clear all fields"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>
      </div>

      {/* Form Sections */}
      <PersonalInfoForm />
      <SummaryForm />
      <ExperienceForm />
      <EducationForm />
      <SkillsForm />
    </div>
  );
};
