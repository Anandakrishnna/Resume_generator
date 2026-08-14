# Product Requirements Document (Minimal): Resume Generator App

## Goal
Build a single-page web app where a user fills a form and gets a live-preview resume they can download as a PDF. Support dark/light theme toggle.

## Tech Stack
- React (Vite)
- Tailwind CSS (use `dark:` variant for theming)
- `react-to-print` or `html2canvas` + `jspdf` for PDF export
- `localStorage` for saving form data (no backend, no auth)

## Core Features (build in this order)

1. **Theme toggle**
   - Sun/moon button in header switches dark/light mode.
   - Apply `dark` class to `<html>`; use Tailwind `dark:` classes throughout.
   - Persist choice in `localStorage`. Default to system preference (`prefers-color-scheme`).

2. **Resume form** (single scrollable form, no multi-step wizard)
   - Personal Info: name, title, email, phone, location, LinkedIn/portfolio link
   - Summary: textarea
   - Experience: repeatable list — company, role, start date, end date, bullet points (add/remove entries)
   - Education: repeatable list — institution, degree, start date, end date
   - Skills: simple comma-separated input or tag chips (add/remove)

3. **Live preview**
   - Split-screen: form on left, resume preview on right (desktop).
   - On mobile: stack vertically, or add a "Preview" toggle button.
   - Preview updates instantly as user types.
   - Use ONE clean resume template (no multi-template switching needed).

4. **PDF export**
   - "Download PDF" button exports the preview panel as `Name_Resume.pdf`.

5. **Auto-save**
   - Save form state to `localStorage` on every change; reload on page load.

## Data Model

```json
{
  "personalInfo": { "fullName": "", "title": "", "email": "", "phone": "", "location": "", "link": "" },
  "summary": "",
  "experience": [
    { "company": "", "role": "", "startDate": "", "endDate": "", "bullets": [""] }
  ],
  "education": [
    { "institution": "", "degree": "", "startDate": "", "endDate": "" }
  ],
  "skills": [""]
}
```

## Explicitly Out of Scope (skip these for speed)
- Multiple templates
- Section drag-and-drop reordering
- User accounts / backend / database
- AI content suggestions
- Cover letters, projects, certifications, languages sections
- JSON import/export

## Done When
- [ ] Form works for all core sections (add/remove experience & education entries)
- [ ] Live preview reflects input in real time
- [ ] Dark/light toggle works and persists on reload
- [ ] PDF downloads correctly with all entered data visible
- [ ] Data survives a page refresh (localStorage)
