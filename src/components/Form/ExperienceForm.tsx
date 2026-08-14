import React from 'react';
import { Briefcase, Plus, Trash2, PlusCircle, MinusCircle } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export const ExperienceForm: React.FC = () => {
  const {
    resumeData,
    addExperience,
    updateExperience,
    removeExperience,
    addBullet,
    updateBullet,
    removeBullet,
  } = useResume();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-500" />
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            Work Experience
          </h3>
        </div>
        <button
          type="button"
          onClick={addExperience}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-800 rounded-lg transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Role
        </button>
      </div>

      {resumeData.experience.length === 0 ? (
        <p className="text-xs text-slate-500 dark:text-slate-400 italic text-center py-3">
          No experience items added yet. Click "Add Role" to add work history.
        </p>
      ) : (
        <div className="space-y-5">
          {resumeData.experience.map((exp, expIdx) => (
            <div
              key={exp.id}
              className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3 relative group"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Role #{expIdx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeExperience(exp.id)}
                  className="text-slate-400 hover:text-red-500 dark:hover:text-red-400 p-1 rounded-md transition-colors"
                  title="Delete Experience Entry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    placeholder="e.g. Acme Corp"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Job Title / Role
                  </label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                    placeholder="e.g. Senior Developer"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Start Date
                  </label>
                  <input
                    type="text"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    placeholder="e.g. Jan 2021"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    End Date
                  </label>
                  <input
                    type="text"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    placeholder="e.g. Present"
                    className="w-full px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                  />
                </div>
              </div>

              {/* Dynamic Bullets List */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Key Achievements / Bullet Points
                  </label>
                  <button
                    type="button"
                    onClick={() => addBullet(exp.id)}
                    className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Add Bullet
                  </button>
                </div>

                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) => updateBullet(exp.id, bIdx, e.target.value)}
                      placeholder={`Bullet point ${bIdx + 1}...`}
                      className="flex-1 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                    <button
                      type="button"
                      onClick={() => removeBullet(exp.id, bIdx)}
                      className="text-slate-400 hover:text-red-500 p-1"
                      title="Remove Bullet"
                    >
                      <MinusCircle className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
