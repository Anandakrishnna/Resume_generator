import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Link as LinkIcon } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';

export const ResumePreview = forwardRef<HTMLDivElement>((_, ref) => {
  const { resumeData } = useResume();
  const { personalInfo, summary, experience, education, skills } = resumeData;

  return (
    <div className="w-full flex justify-center sticky top-20">
      {/* Printable Sheet Container */}
      <div
        ref={ref}
        className="w-full max-w-[800px] bg-white text-slate-900 shadow-xl dark:shadow-slate-900/50 rounded-xl p-8 sm:p-12 transition-all duration-200 border border-slate-200 dark:border-slate-800 font-sans print:shadow-none print:border-none print:p-0 print:m-0 print:w-full print:max-w-none min-h-[900px]"
        id="printable-resume"
      >
        {/* Header Section */}
        <header className="border-b-2 border-slate-800 pb-5 mb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {personalInfo.fullName || 'Your Name'}
          </h1>
          {personalInfo.title && (
            <p className="text-lg font-semibold text-indigo-700 mt-1">
              {personalInfo.title}
            </p>
          )}

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 mt-3 text-xs text-slate-600 font-medium">
            {personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500 print:hidden" />
                <span>{personalInfo.email}</span>
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-500 print:hidden" />
                <span>{personalInfo.phone}</span>
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500 print:hidden" />
                <span>{personalInfo.location}</span>
              </div>
            )}
            {personalInfo.link && (
              <div className="flex items-center gap-1">
                <LinkIcon className="w-3.5 h-3.5 text-slate-500 print:hidden" />
                <a
                  href={personalInfo.link.startsWith('http') ? personalInfo.link : `https://${personalInfo.link}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline text-indigo-700 print:text-slate-900"
                >
                  {personalInfo.link}
                </a>
              </div>
            )}
          </div>
        </header>

        <div className="space-y-6 text-slate-800 text-sm">
          {/* Professional Summary */}
          {summary && summary.trim().length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs leading-relaxed text-slate-700 whitespace-pre-line">
                {summary}
              </p>
            </section>
          )}

          {/* Work Experience */}
          {experience && experience.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
                Work Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id} className="space-y-1.5 break-inside-avoid">
                    <div className="flex flex-wrap justify-between items-baseline">
                      <span className="font-bold text-slate-900 text-sm">
                        {exp.role || 'Role / Title'}
                        {exp.company && (
                          <span className="font-semibold text-slate-700 font-normal">
                            {' '}
                            | {exp.company}
                          </span>
                        )}
                      </span>
                      {(exp.startDate || exp.endDate) && (
                        <span className="text-xs font-medium text-slate-500">
                          {exp.startDate} {exp.startDate && exp.endDate ? '–' : ''} {exp.endDate}
                        </span>
                      )}
                    </div>

                    {exp.bullets && exp.bullets.filter(b => b.trim().length > 0).length > 0 && (
                      <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-normal">
                        {exp.bullets
                          .filter((bullet) => bullet.trim().length > 0)
                          .map((bullet, idx) => (
                            <li key={idx}>{bullet}</li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education && education.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
                Education
              </h2>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.id} className="flex flex-wrap justify-between items-baseline break-inside-avoid">
                    <div>
                      <span className="font-bold text-slate-900 text-sm">
                        {edu.institution || 'University / Institution'}
                      </span>
                      {edu.degree && (
                        <p className="text-xs text-slate-700">{edu.degree}</p>
                      )}
                    </div>
                    {(edu.startDate || edu.endDate) && (
                      <span className="text-xs font-medium text-slate-500">
                        {edu.startDate} {edu.startDate && edu.endDate ? '–' : ''} {edu.endDate}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills && skills.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1">
                Skills & Technical Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-800 rounded font-medium text-xs border border-slate-200 print:border-slate-300 print:bg-slate-50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';
