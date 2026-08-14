import React, { createContext, useContext, useEffect, useState } from 'react';
import { ResumeData, PersonalInfo, ExperienceItem, EducationItem } from '../types/resume';
import { INITIAL_RESUME_DATA } from '../constants/initialData';

interface ResumeContextType {
  resumeData: ResumeData;
  updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
  updateSummary: (summary: string) => void;

  // Experience actions
  addExperience: () => void;
  updateExperience: (id: string, field: keyof Omit<ExperienceItem, 'id' | 'bullets'>, value: string) => void;
  removeExperience: (id: string) => void;
  addBullet: (expId: string) => void;
  updateBullet: (expId: string, index: number, value: string) => void;
  removeBullet: (expId: string, index: number) => void;

  // Education actions
  addEducation: () => void;
  updateEducation: (id: string, field: keyof Omit<EducationItem, 'id'>, value: string) => void;
  removeEducation: (id: string) => void;

  // Skills actions
  addSkill: (skill: string) => void;
  removeSkill: (index: number) => void;

  // Reset / Clear actions
  resetToSampleData: () => void;
  clearAllData: () => void;
}

const STORAGE_KEY = 'resume_data';

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === 'object' && parsed.personalInfo) {
          return parsed as ResumeData;
        }
      }
    } catch (e) {
      console.error('Failed to parse resume_data from localStorage:', e);
    }
    return INITIAL_RESUME_DATA;
  });

  // Auto-save to localStorage on state changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
    } catch (e) {
      console.error('Failed to save resume_data to localStorage:', e);
    }
  }, [resumeData]);

  // Personal Info
  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  // Summary
  const updateSummary = (summary: string) => {
    setResumeData((prev) => ({
      ...prev,
      summary,
    }));
  };

  // Experience
  const addExperience = () => {
    const newExp: ExperienceItem = {
      id: `exp-${Date.now()}`,
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      bullets: [''],
    };
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExp],
    }));
  };

  const updateExperience = (
    id: string,
    field: keyof Omit<ExperienceItem, 'id' | 'bullets'>,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((item) => item.id !== id),
    }));
  };

  const addBullet = (expId: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === expId ? { ...item, bullets: [...item.bullets, ''] } : item
      ),
    }));
  };

  const updateBullet = (expId: string, index: number, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) => {
        if (item.id === expId) {
          const updatedBullets = [...item.bullets];
          updatedBullets[index] = value;
          return { ...item, bullets: updatedBullets };
        }
        return item;
      }),
    }));
  };

  const removeBullet = (expId: string, index: number) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.map((item) => {
        if (item.id === expId) {
          return {
            ...item,
            bullets: item.bullets.filter((_, i) => i !== index),
          };
        }
        return item;
      }),
    }));
  };

  // Education
  const addEducation = () => {
    const newEdu: EducationItem = {
      id: `edu-${Date.now()}`,
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
    };
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, newEdu],
    }));
  };

  const updateEducation = (
    id: string,
    field: keyof Omit<EducationItem, 'id'>,
    value: string
  ) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((item) => item.id !== id),
    }));
  };

  // Skills
  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed) return;
    setResumeData((prev) => {
      if (prev.skills.includes(trimmed)) return prev;
      return {
        ...prev,
        skills: [...prev.skills, trimmed],
      };
    });
  };

  const removeSkill = (index: number) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  // Reset / Clear
  const resetToSampleData = () => {
    setResumeData(INITIAL_RESUME_DATA);
  };

  const clearAllData = () => {
    setResumeData({
      personalInfo: {
        fullName: '',
        title: '',
        email: '',
        phone: '',
        location: '',
        link: '',
      },
      summary: '',
      experience: [],
      education: [],
      skills: [],
    });
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updatePersonalInfo,
        updateSummary,
        addExperience,
        updateExperience,
        removeExperience,
        addBullet,
        updateBullet,
        removeBullet,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        removeSkill,
        resetToSampleData,
        clearAllData,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
