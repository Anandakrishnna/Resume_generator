# Execution Plan: Resume Generator Web Application

This document serves as an actionable, phase-by-phase execution plan for an AI coding agent to implement the Minimal Resume Generator App according to `PRD.md`.

---

## 🎯 Project Overview & Objective

Build a single-page web app where users fill out a resume form and see a real-time live preview of their resume. The user can export the preview as a PDF and toggle between light and dark themes. All state is auto-saved locally in `localStorage`.

### Key Technical Specifications & Stack
- **Framework**: React (Vite template, TypeScript recommended)
- **Styling**: Tailwind CSS (with `dark:` class variant for dark mode)
- **Icons**: `lucide-react`
- **PDF Export**: `react-to-print` (or `html2canvas` + `jspdf`)
- **State & Persistence**: React Hooks + `localStorage` (No backend, no database, no auth)

---

## 📂 Data Model & TypeScript Contracts

Define the central state structure in `src/types/resume.ts`:

```typescript
export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  link: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
}
```

---

## 🚀 Execution Phases

### Phase 1: Project Scaffolding & Design System Setup
**Goal**: Initialize Vite + React application, configure Tailwind CSS with dark mode support, and set up the main responsive page shell.

- [x] **1.1 Initialize Project**
  - Run `npm create vite@latest . -- --template react-ts` (or `react`).
  - Install dependencies: `npm install lucide-react react-to-print`.
  - Install & configure Tailwind CSS (with PostCSS / Vite plugin). Ensure `darkMode: 'class'` is configured in Tailwind config or CSS directives (`.dark`).
- [x] **1.2 Create Theme Context & Hook (`useTheme`)**
  - Create `src/context/ThemeContext.tsx` handling `'light' | 'dark'`.
  - Check `localStorage.getItem('theme')`, falling back to `window.matchMedia('(prefers-color-scheme: dark)')`.
  - Toggle adds/removes the `dark` class on `document.documentElement`.
  - Persist theme choice in `localStorage`.
- [x] **1.3 Create Main App Layout**
  - Header component with app title, dark/light theme switch button (Sun/Moon icons), and PDF Download button placeholder.
  - Main container with desktop 2-column split view (Left: Form panel, Right: Preview panel) and mobile toggle/scroll support.

---

### Phase 2: State Management & LocalStorage Auto-Save
**Goal**: Implement initial state defaults, custom state management hooks, and seamless local storage synchronization.

- [x] **2.1 Default Resume Data & Mock State**
  - Define `INITIAL_RESUME_DATA` in `src/constants/initialData.ts` populated with realistic sample data so preview is not empty on first launch.
- [x] **2.2 Implement `useResumeData` Hook**
  - Create custom hook to load initial state from `localStorage.getItem('resume_data')`.
  - Fallback to `INITIAL_RESUME_DATA` if local storage is empty.
  - Expose helper actions:
    - `updatePersonalInfo(field, value)`
    - `updateSummary(text)`
    - Dynamic Experience methods (`addExperience`, `updateExperience`, `removeExperience`, `addBullet`, `updateBullet`, `removeBullet`)
    - Dynamic Education methods (`addEducation`, `updateEducation`, `removeEducation`)
    - Dynamic Skills methods (`addSkill`, `removeSkill`)
    - `resetData()` to restore sample data or clear.
- [x] **2.3 Auto-Save Middleware**
  - Set up a `useEffect` trigger on state changes to write updated JSON state to `localStorage.setItem('resume_data', JSON.stringify(data))`.

---

### Phase 3: Form Panel Construction (Left Pane)
**Goal**: Build a single scrollable form container with accordion or clean section cards to manage resume input fields.

- [x] **3.1 Personal Info Component (`PersonalInfoForm.tsx`)**
  - Inputs: Full Name, Job Title, Email, Phone, Location, Portfolio/LinkedIn Link.
  - Controlled inputs linked to `useResumeData`.
- [x] **3.2 Professional Summary Component (`SummaryForm.tsx`)**
  - Multi-line `textarea` for professional summary.
- [x] **3.3 Work Experience Form (`ExperienceForm.tsx`)**
  - Dynamic list of experience cards.
  - "Add Experience" button (generates unique ID).
  - Inputs for Company, Role, Start Date, End Date.
  - Bullet points section: dynamic list of input lines with "Add Bullet" and "Delete Bullet" options.
  - "Remove Experience" action for each item.
- [x] **3.4 Education Form (`EducationForm.tsx`)**
  - Dynamic list of education items.
  - "Add Education" button.
  - Inputs for Institution, Degree, Start Date, End Date.
  - "Remove Education" action.
- [x] **3.5 Skills Input Form (`SkillsForm.tsx`)**
  - Input field for adding skills (adds on Enter or "Add" button click).
  - Skill chips/tags list with individual "×" remove buttons.

---

### Phase 4: Live Preview & Printable Template (Right Pane)
**Goal**: Build a pixel-perfect, clean, single-template live preview component that instantly updates as form data changes.

- [x] **4.1 Resume Template Component (`ResumePreview.tsx`)**
  - Forwarded ref component for `react-to-print`.
  - High-legibility typography, clear hierarchy (Header, Summary, Experience, Education, Skills).
  - Standard paper dimension ratio (A4 / Letter styling wrapper for preview container).
  - Explicit styling to ensure print preview maintains crisp contrast on both light/dark app modes (PDF sheet itself uses clean white background with dark text for PDF compliance).
- [x] **4.2 Responsive / Mobile Navigation**
  - Split screen layout on desktop (`md:grid-cols-2` or `lg:w-1/2` side-by-side).
  - Mobile mode: Floating toggle bar or tab switcher ("Edit Form" vs "Preview Resume") for smaller viewports.

---

### Phase 5: PDF Export Functionality
**Goal**: Enable downloading the resume preview directly as a clean PDF document.

- [x] **5.1 PDF Export Handler**
  - Wrap `ResumePreview` ref with `useReactToPrint` (or `jspdf`/`html2canvas` generator).
  - Dynamic document name formatting: `<fullName>_Resume.pdf` (defaults to `Resume.pdf` if full name is blank).
- [x] **5.2 Print CSS Rules & Page Break Optimization**
  - Add `@media print` rules:
    - Hide header, form pane, buttons, theme switches during print output.
    - Set page margins, paper dimensions, background printing (`-webkit-print-color-adjust: exact`).
    - Avoid page breaking inside experience blocks (`page-break-inside: avoid;`).

---

### Phase 6: Edge Cases, Accessibility & Verification
**Goal**: Ensure robust UI state handling, zero errors, and verify against PRD acceptance criteria.

- [x] **6.1 Edge Cases & Empty States**
  - Gracefully hide empty sections in the preview if user deletes all bullets, skills, or experience entries.
  - Handle long text wraps gracefully without breaking layout bounds.
- [x] **6.2 Verification Checklist**
  - [x] Dark/Light theme switches instantly, persists across page refreshes.
  - [x] Dynamic additions/removals work smoothly in Experience, Education, and Skills sections.
  - [x] Real-time updates reflect without visible latency in preview pane.
  - [x] PDF exports correctly formatted page with custom dynamic file name.
  - [x] Form data survives page reloads via `localStorage`.

---

## 🚫 Out of Scope Rules (Strictly Enforce)
- Do NOT implement multiple resume templates.
- Do NOT implement section drag-and-drop reordering.
- Do NOT implement user auth, backend APIs, or database connections.
- Do NOT implement AI content suggestions.
- Do NOT add extraneous sections (certifications, projects, languages).
- Do NOT implement JSON file import/export.
