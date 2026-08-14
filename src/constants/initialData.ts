import { ResumeData } from '../types/resume';

export const INITIAL_RESUME_DATA: ResumeData = {
  personalInfo: {
    fullName: 'Alex Morgan',
    title: 'Senior Full-Stack Engineer',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    link: 'https://linkedin.com/in/alexmorgan',
  },
  summary:
    'Passionate and results-driven Senior Engineer with over 6 years of experience designing scalable web applications, modern microfrontends, and high-performance APIs. Proven track record of leading cross-functional engineering teams and delivering user-centric web products.',
  experience: [
    {
      id: 'exp-1',
      company: 'TechFlow Solutions',
      role: 'Senior Software Engineer',
      startDate: 'Jan 2022',
      endDate: 'Present',
      bullets: [
        'Architected and launched a microfrontend React framework serving 500k+ monthly active users, improving core web vitals by 40%.',
        'Led a team of 5 engineers to migrate legacy REST monolith to Node.js GraphQL APIs, reducing page load latency by 250ms.',
        'Mentored junior software engineers and spearheaded weekly engineering architecture review sessions.',
      ],
    },
    {
      id: 'exp-2',
      company: 'Innovate Labs',
      role: 'Frontend Developer',
      startDate: 'Jun 2019',
      endDate: 'Dec 2021',
      bullets: [
        'Developed interactive dashboard analytics using React, TypeScript, and Tailwind CSS.',
        'Integrated real-time WebSocket notifications and data charts for enterprise financial client applications.',
        'Collaborated closely with UX designers to build an accessible component design system.',
      ],
    },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Computer Science',
      startDate: 'Sep 2015',
      endDate: 'May 2019',
    },
  ],
  skills: [
    'React & React Native',
    'TypeScript',
    'Node.js & Express',
    'Tailwind CSS',
    'Next.js',
    'GraphQL & REST APIs',
    'PostgreSQL',
    'Docker & CI/CD',
    'Git',
  ],
};
