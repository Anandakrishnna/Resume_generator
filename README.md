Resume Craft

A clean, single-page resume builder built with React, TypeScript, Vite, and Tailwind CSS. Resume Craft lets users enter resume details, preview the result instantly, switch between light and dark mode, and download the finished resume as a PDF.

## Features

- Live resume preview that updates as you type
- Editable sections for personal information, summary, work experience, education, and skills
- Add and remove experience entries, education entries, and experience bullet points
- Sample data reset for quick testing
- Clear-all option for starting from a blank resume
- PDF export with a generated resume filename
- Light and dark theme toggle with saved preference
- Auto-save to browser storage so data survives refreshes
- Responsive layout with mobile tabs for editing and previewing

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
- React To Print for PDF/print export
- Browser `localStorage` for persistence

## Getting Started

### Prerequisites

Install Node.js and npm before running the project.

### Installation

```bash
git clone https://github.com/Anandakrishnna/Resume_generator.git
cd Resume_generator
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## How to Use

1. Fill in your personal details, professional summary, experience, education, and skills.
2. Watch the resume preview update instantly on the right side of the screen.
3. Use the theme button in the header to switch between light and dark mode.
4. Use **Sample Data** to restore the example resume or **Clear** to start fresh.
5. Click **Download PDF** to save or print the resume.

## Project Structure

```text
Resume_generator/
├── src/
│   ├── components/
│   │   ├── Form/              # Resume input forms
│   │   ├── Preview/           # Printable resume preview
│   │   └── Header.tsx         # App header, theme toggle, PDF button
│   ├── constants/             # Initial sample resume data
│   ├── context/               # Resume and theme state providers
│   ├── types/                 # Resume TypeScript types
│   ├── App.tsx                # Main app layout
│   ├── index.css              # Global styles
│   └── main.tsx               # React entry point
├── PRD.md                     # Product requirements document
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks the project and creates a production build |
| `npm run preview` | Serves the production build locally |

## Data Persistence

Resume data and theme preference are stored in the browser using `localStorage`. There is no backend, account system, or database, so the data stays on the user's device.

## Future Improvements

- Add multiple resume templates
- Add JSON import/export
- Add projects, certifications, and languages sections
- Add drag-and-drop section ordering
- Improve PDF pagination for longer resumes

## License

This project currently does not include a license file. Add one before distributing or accepting external contributions.
