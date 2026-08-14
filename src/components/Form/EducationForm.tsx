import React from 'react';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export const EducationForm: React.FC = () => {
  const { resumeData, addEducation, updateEducation, removeEducation } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-indigo-500" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            Education
          </h3>
        </div>
        <button
          type="button"
          onClick={addEducation}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-800 rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Education
        </button>
      </div>

      {resumeData.education.length === 0 ? (
        <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center py-3">
          No education entries added yet. Click "Add Education" to add degree or school info.
        </p>
      ) : (
        <div className="space-y-4">
          {resumeData.education.map((edu, eduIdx) => (
            <div
              key={edu.id}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3 relative group"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Education #{eduIdx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeEducation(edu.id)}
                  className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 p-1 rounded-md transition-colors"
                  title="Delete Education Entry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Institution / University
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder="e.g. UC Berkeley"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Degree / Certification
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder="e.g. B.S. Computer Science"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    placeholder="e.g. Sep 2016"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                    placeholder="e.g. May 2020"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
