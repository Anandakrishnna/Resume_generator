import React, { useState } from 'react';
import { Award, Plus, X } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export const SkillsForm: React.FC = () => {
  const { resumeData, addSkill, removeSkill } = useResume();
  const [skillInput, setSkillInput] = useState('');

  const handleAdd = () => {
    if (!skillInput.trim()) return;
    // Support comma separated strings
    if (skillInput.includes(',')) {
      const skills = skillInput.split(',').map((s) => s.trim()).filter(Boolean);
      skills.forEach((s) => addSkill(s));
    } else {
      addSkill(skillInput.trim());
    }
    setSkillInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <Award className="w-5 h-5 text-indigo-500" />
        <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
          Skills & Technical Expertise
        </h3>
      </div>

      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add skill (e.g. React, TypeScript, GraphQL)... press Enter"
          className="flex-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition-colors inline-flex items-center gap-1"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Skills Chip List */}
      <div className="flex flex-wrap gap-2 pt-1">
        {resumeData.skills.length === 0 ? (
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            No skills added yet. Type above and press Enter.
          </p>
        ) : (
          resumeData.skills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 rounded-lg text-xs font-medium group transition-all"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(idx)}
                className="text-indigo-400 hover:text-indigo-900 dark:hover:text-white rounded-full p-0.5 transition-colors"
                title={`Remove ${skill}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))
        )}
      </div>
    </div>
  );
};
