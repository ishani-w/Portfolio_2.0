/**
 * Portfolio project data — 3 realistic UI/UX engineering case studies
 */

import projectFinflow from '../assets/images/project-finflow.png';
import projectHealthbridge from '../assets/images/project-healthbridge.png';
import projectDevcollab from '../assets/images/project-devcollab.png';

const projects = [
  {
    id: 1,
    slug: 'finflow-dashboard',
    title: 'FinFlow Analytics Dashboard',
    category: 'UI Design & Frontend Engineering',
    heroImage: projectFinflow,
    overview:
      'Redesigning a complex financial analytics platform from a legacy desktop application to a modern, responsive web dashboard serving over 12,000 daily active traders.',
    meta: {
      role: 'Lead UI/UX Engineer',
      timeline: '6 Months',
      tools: 'Figma, React, D3.js, TypeScript',
      platform: 'Web (Desktop & Tablet)',
    },
    problem:
      'The legacy trading platform was built on aging desktop technology with fragmented data views, inconsistent UI patterns, and zero mobile support. Traders were losing critical time navigating between disconnected screens during high-volatility market events. The core challenge was condensing 14 separate dashboard views into a unified, real-time analytics experience without sacrificing data density.',
    processCaptions: [
      'Early wireframes exploring information hierarchy — how do we surface the most critical KPIs without burying secondary data?',
      'Component audit of the legacy system revealed 47 unique button styles and 12 different data table implementations.',
      'User flow mapping for the real-time alert system, showing the notification pipeline from WebSocket to UI toast.',
      'Iteration on the portfolio overview card — balancing data density with readability across 3 breakpoints.',
    ],
    solution:
      'A modular dashboard system built on a custom design system with real-time WebSocket data feeds. Drag-and-drop widget architecture lets traders customize their workspace. Dark mode by default with a carefully calibrated color system for data visualization that accounts for color-blind accessibility.',
    impactQuote: 'Reduced average task completion time by 42% and increased daily platform engagement by 3.2x within the first quarter.',
    impacts: [
      {
        number: '01',
        title: 'Performance',
        description: 'Achieved sub-200ms render times for real-time chart updates using virtualized rendering and Web Workers.',
      },
      {
        number: '02',
        title: 'Adoption',
        description: 'Platform migration saw 94% voluntary adoption within 8 weeks, surpassing the 70% target.',
      },
      {
        number: '03',
        title: 'Accessibility',
        description: 'Full WCAG 2.1 AA compliance with custom color-blind safe palettes for all data visualizations.',
      },
    ],
  },
  {
    id: 2,
    slug: 'healthbridge-app',
    title: 'HealthBridge Patient Portal',
    category: 'Product Strategy & UX Engineering',
    heroImage: projectHealthbridge,
    overview:
      'Designing and engineering a patient-facing healthcare portal that unifies appointment scheduling, medical records, telehealth, and prescription management into a single cohesive mobile experience.',
    meta: {
      role: 'Product Manager & UX Lead',
      timeline: '8 Months',
      tools: 'Figma, React Native, Node.js, FHIR API',
      platform: 'iOS & Android',
    },
    problem:
      'Patients were juggling 4 separate apps and a web portal to manage their healthcare. Each touchpoint had different authentication, different UI patterns, and no shared data context. The result was missed appointments, medication non-adherence, and frustrated users who often reverted to phone calls. The technical challenge was integrating with 3 different EHR systems through the FHIR standard while maintaining a seamless user experience.',
    processCaptions: [
      'Journey mapping across 5 patient personas — from tech-savvy millennials to elderly users with accessibility needs.',
      'API architecture diagram showing the middleware layer that normalizes data from 3 different EHR systems.',
      'Prototyping the appointment booking flow — 7 iterations to reduce the booking process from 12 taps to 4.',
      'Accessibility testing sessions with users aged 65+ revealed critical touch target and contrast issues.',
    ],
    solution:
      'A unified React Native application with a custom middleware layer that abstracts EHR complexity. The design system prioritizes large touch targets, high contrast, and progressive disclosure. Offline-first architecture ensures critical health data is always accessible.',
    impactQuote: 'Patient satisfaction scores increased from 3.2 to 4.7 out of 5, with appointment no-show rates dropping by 34%.',
    impacts: [
      {
        number: '01',
        title: 'Unification',
        description: 'Consolidated 4 separate apps into one cohesive experience, reducing patient onboarding time by 60%.',
      },
      {
        number: '02',
        title: 'Engagement',
        description: 'Daily active users increased by 280% within 3 months of launch across both iOS and Android.',
      },
      {
        number: '03',
        title: 'Reliability',
        description: 'Offline-first architecture achieved 99.7% uptime with seamless data sync across all connected EHR systems.',
      },
    ],
  },
  {
    id: 3,
    slug: 'devcollab-platform',
    title: 'DevCollab Code Review Platform',
    category: 'UX Engineering & Design Systems',
    heroImage: projectDevcollab,
    overview:
      'Building a next-generation code review and collaboration platform that integrates AI-powered suggestions, real-time pair programming, and team analytics into a developer-first experience.',
    meta: {
      role: 'UX Engineer & Design System Lead',
      timeline: '10 Months',
      tools: 'Figma, Next.js, Monaco Editor, WebRTC',
      platform: 'Web (Desktop)',
    },
    problem:
      'Developer teams were context-switching between 6+ tools for code review, project management, documentation, and communication. Existing code review tools treated design review as an afterthought, with no support for visual diffs, component previews, or design token validation. The challenge was creating a unified workspace that felt native to developers while bridging the gap between code and design review.',
    processCaptions: [
      'Competitive analysis of 8 code review tools — mapping feature gaps and UX pain points across the developer workflow.',
      'Information architecture for the unified workspace — how do we merge code, design, and project management without overwhelming the user?',
      'Design system token architecture — 340 tokens organized across 5 categories with automatic dark/light theme generation.',
      'Real-time collaboration protocol design — handling concurrent edits, presence indicators, and conflict resolution.',
    ],
    solution:
      'A Monaco Editor-based workspace with custom extensions for visual component previews, AI-powered code suggestions, and real-time collaboration via WebRTC. The design system includes 340 tokens and 68 components with automatic accessibility validation.',
    impactQuote: 'Code review cycle time decreased by 58%, and cross-functional collaboration between design and engineering teams improved by 4x.',
    impacts: [
      {
        number: '01',
        title: 'Velocity',
        description: 'Average PR review time dropped from 4.2 hours to 1.8 hours through contextual AI suggestions and inline previews.',
      },
      {
        number: '02',
        title: 'Design System',
        description: '340-token design system with 68 components achieved 98% adoption across 12 product teams within 6 months.',
      },
      {
        number: '03',
        title: 'Collaboration',
        description: 'Real-time pair programming sessions increased cross-team knowledge sharing by 4x, measured through survey data.',
      },
    ],
  },
];

export const corporateProjects = [
  {
    id: 'corp-1',
    title: 'Orange Electric Website',
    type: 'Corporate Website Development',
    year: '2024 - Ongoing',
    details: 'Official website developed using WordPress and designed in Figma. Features product lines and company services with a focus on seamless user navigation.'
  },
  {
    id: 'corp-2',
    title: 'OREL Corporation Website',
    type: 'Corporate Website Development',
    year: '2024',
    details: 'Developed using WordPress and designed in Figma, presenting brand identity, corporate values, and services.'
  },
  {
    id: 'corp-3',
    title: "i'Orel Management System",
    type: 'UI/UX Design',
    year: '2023 - Ongoing',
    details: 'Internal operations management system. Responsible for wireframing, user journeys, and high-fidelity Figma designs.'
  },
  {
    id: 'corp-4',
    title: 'Signamax Website',
    type: 'Web Design & WordPress Development',
    year: '2023',
    details: 'Official website for a U.S.-based networking and connectivity solution provider. Designed in Figma and developed in WordPress.'
  },
  {
    id: 'corp-5',
    title: 'Analytica Project',
    type: 'Internal Analytics Management Portal',
    year: '2022',
    details: 'Designed to track and optimize key business metrics. Handled UI/UX designs to support easy data visualization.'
  },
  {
    id: 'corp-6',
    title: 'OrelBuy Marketplace',
    type: 'E-Commerce Platform UI/UX',
    year: '2021',
    details: 'Crafted mobile apps, consumer web, and backend office portals for a multi-merchant electronic marketplace.'
  },
  {
    id: 'corp-7',
    title: 'Document Tracker — BOI',
    type: 'Web & Mobile App UI/UX',
    year: '2021',
    details: 'Collaborative document workflow tracker for the Board of Investment (BOI) teams to create, dispatch, and close files.'
  },
  {
    id: 'corp-8',
    title: 'Icitizen Mobile App',
    type: 'Mobile UI/UX Design',
    year: '2021',
    details: 'Application facilitating user check-in/out, emergency contact directories, QR profile sharing, and health metrics recording.'
  },
  {
    id: 'corp-9',
    title: 'V-Force Portal',
    type: 'Medical Logistics App UI/UX',
    year: '2021',
    details: 'Real-time dashboard capturing Covid-19 hospital requirements, equipment inventories, and resource constraints.'
  },
  {
    id: 'corp-10',
    title: 'LECO Customer Portal',
    type: 'Mobile App UI/UX',
    year: '2020',
    details: 'Customer portal assisting Lankapuvath Electrical Company users to view billing and report outages.'
  },
  {
    id: 'corp-11',
    title: 'Orel Office App',
    type: 'Mobile App Design',
    year: '2020',
    details: 'Portal application serving as an internal launchpad to group all OREL corporate apps in one dashboard.'
  },
  {
    id: 'corp-12',
    title: 'Simpli5 Suite (Mgmt, Analytica, Ayubowan, Uni)',
    type: 'Web Product Design',
    year: '2020',
    details: 'A suite of web products: Simpli5Mgmt (goal & task alignment), Simpli5Analytica (data visualization dashboards), Simpli5Ayubowan (SSO gateway), and Simpli5Uni (online learning course portal).'
  },
  {
    id: 'corp-13',
    title: 'Orel Share',
    type: 'Web UI/UX Design',
    year: '2020',
    details: 'Sharing/donation app allowing tracking of donation packages (meals, essentials) using GPS routing.'
  },
  {
    id: 'corp-14',
    title: 'Lions Brewery Web Portal',
    type: 'T-20 Cricket World Cup Portal',
    year: '2019',
    details: 'Responsive interactive entertainment hub designed for promotional campaigns.'
  }
];

export default projects;

