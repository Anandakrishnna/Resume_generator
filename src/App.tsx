import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ThemeProvider } from './context/ThemeContext';
import { ResumeProvider, useResume } from './context/ResumeContext';
import { Header } from './components/Header';
import { FormPanel } from './components/Form/FormPanel';
import { ResumePreview } from './components/Preview/ResumePreview';
import { Edit3, Eye } from 'lucide-react';

export const AppContent: React.FC = () => {
  const [activeMobileTab, setActiveMobileTab] = useState<'form' | 'preview'>('form');
  const previewRef = useRef<HTMLDivElement>(null);
  const { resumeData } = useResume();

  const handlePrint = useReactToPrint({
    contentRef: previewRef,
    documentTitle: resumeData.personalInfo.fullName
      ? `${resumeData.personalInfo.fullName.trim().replace(/\s+/g, '_')}_Resume`
      : 'Resume',
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Header Navigation with PDF Download handler */}
      <Header onDownloadPdf={() => handlePrint()} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile View Switcher */}
        <div className="lg:hidden flex rounded-xl p-1 bg-slate-200 dark:bg-slate-800 mb-6 no-print">
          <button
            onClick={() => setActiveMobileTab('form')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeMobileTab === 'form'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            Edit Form
          </button>
          <button
            onClick={() => setActiveMobileTab('preview')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
              activeMobileTab === 'preview'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            Preview
          </button>
        </div>

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Pane (Left 5 cols on lg) */}
          <div
            className={`lg:col-span-5 ${
              activeMobileTab === 'form' ? 'block' : 'hidden lg:block'
            }`}
          >
            <FormPanel />
          </div>

          {/* Live Resume Preview Pane (Right 7 cols on lg) */}
          <div
            className={`lg:col-span-7 ${
              activeMobileTab === 'preview' ? 'block' : 'hidden lg:block'
            }`}
          >
            <ResumePreview ref={previewRef} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <AppContent />
      </ResumeProvider>
    </ThemeProvider>
  );
}
