/**
 * Portfolio project data — UI/UX engineering & Brand Identity case studies
 */

import projectFinflow from '../assets/images/project-finflow.png';
import projectHealthbridge from '../assets/images/project-healthbridge.png';
import projectDevcollab from '../assets/images/project-devcollab.png';
import projectAmshine from '../assets/images/project-amshine.png';
import projectBuildaura from '../assets/images/project-buildaura.png';
import projectMaldaara from '../assets/images/project-maldaara.png';
import projectSara from '../assets/images/project-sara.svg';

const projects = [
  {
    id: 1,
    slug: 'finflow-dashboard',
    type: 'uiux',
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
    type: 'uiux',
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
    type: 'uiux',
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
  {
    id: 4,
    slug: 'amshine-service-brand-identity',
    type: 'brand-identity',
    title: 'AMSHINE SERVICE — Brand Identity',
    category: 'Brand Identity & Visual Systems',
    heroImage: projectAmshine,
    behanceUrl: 'https://www.behance.net/gallery/233606429/AMSHINE-SERVICE-Brand-Identity',
    overview:
      'A comprehensive corporate brand identity and guidelines system created for AMSHINE SERVICE. The project established a unified, high-trust visual language encompassing a precision geometric brandmark, corporate stationery, vehicle fleet livery, and comprehensive brand guidelines.',
    meta: {
      role: 'Brand Identity Designer & Art Director',
      timeline: '2 Months',
      tools: 'Adobe Illustrator, Photoshop, Figma, InDesign',
      platform: 'Print Collateral & Digital Identity',
    },
    problem:
      'AMSHINE SERVICE operated in a high-demand commercial and residential services sector without a cohesive brand architecture. Fragmented marketing collateral, inconsistent color usage across print materials, and an outdated mark degraded consumer trust and limited commercial partnership opportunities. The objective was creating an authoritative, modern identity communicating cleanliness, precision, and reliable quality.',
    processCaptions: [
      'Comprehensive competitor landscape analysis identifying market visual conventions and white space in commercial services.',
      'Exploration of geometric monogram concepts uniting the letterforms "A" and "S" with dynamic upward motion angles.',
      'Precision grid construction ensuring mark scalability from 16px digital favicons to massive fleet signage.',
      'Development of complete corporate stationery, uniform standards, vehicle livery, and editorial brand guidelines.',
    ],
    solution:
      'An iconic architectural monogram pairing sharp geometry with sleek metallic cyan and refined gold accents. The identity system features high-contrast dark slate stationery, clean typography hierarchies, and strict application rules documented in a 40-page brand guidelines book for seamless execution across all vendors.',
    impactQuote:
      'Transformed AMSHINE from a regional service provider into an authoritative, premium brand with a 65% increase in commercial contract inquiries within 90 days of rollout.',
    impacts: [
      {
        number: '01',
        title: 'Consistency',
        description: 'Standardized 35+ brand touchpoints across print, fleet signage, apparel, and digital media.',
      },
      {
        number: '02',
        title: 'Brand Recall',
        description: 'Post-launch client surveys revealed an 82% increase in visual recognition and perceived service reliability.',
      },
      {
        number: '03',
        title: 'Commercial Growth',
        description: 'Helped secure 14 major commercial contracts through the new polished corporate brand collateral.',
      },
    ],
  },
  {
    id: 5,
    slug: 'buildaura-visual-identity',
    type: 'brand-identity',
    title: 'BUILDAURA — Visual Identity & Brand Book',
    category: 'Visual Identity, Style Guide & Brand Book',
    heroImage: projectBuildaura,
    behanceUrl: 'https://www.behance.net/gallery/211462761/BUILDAURA-Visual-Identity-Style-Guide-Brand-Book',
    overview:
      'Architectural visual identity, comprehensive style guide, and luxury hardcover brand book engineered for BUILDAURA, a bespoke architectural construction and high-end interior development firm.',
    meta: {
      role: 'Lead Visual Designer & Brand Strategist',
      timeline: '3 Months',
      tools: 'Adobe Illustrator, InDesign, Photoshop, Figma',
      platform: 'Editorial Brand Book, Print & Digital',
    },
    problem:
      'High-net-worth architectural and residential clients require uncompromising craftsmanship and spatial precision. BUILDAURA required a luxury visual identity system that reflected structural engineering integrity, bespoke architectural artistry, and premium luxury materials without looking like standard industrial construction companies.',
    processCaptions: [
      'Architectural study translating golden ratio proportions and structural grid lines into an iconic monogram mark.',
      'Optical kerning and bespoke typography pairing combining a modern high-contrast serif with geometric architectural sans-serifs.',
      'Material specification testing with embossed warm gold foil on charcoal tactile linen and raw concrete textures.',
      'Curating a 64-page editorial brand book detailing color systems, photographic art direction, and architectural signage.',
    ],
    solution:
      'A structural geometric monogram symbolizing layered spatial design and architectural elevations, rendered in rich brushed gold against deep charcoal and natural stone textures. Accompanied by a master style guide establishing spatial ratios, tactile print finishes, and digital presentation standards.',
    impactQuote:
      'Created a timeless visual signature that cemented BUILDAURA’s positioning at the pinnacle of luxury architectural construction and bespoke development.',
    impacts: [
      {
        number: '01',
        title: 'Prestige Positioning',
        description: 'Elevated client brand perception to compete directly with tier-one architectural design firms.',
      },
      {
        number: '02',
        title: 'Design System',
        description: 'Delivered a turnkey 64-page brand book and asset library governing architectural blueprints, site banners, and digital collateral.',
      },
      {
        number: '03',
        title: 'Client Acquisition',
        description: 'Directly supported winning 3 flagship multi-million dollar luxury villa projects during the initial brand presentation phase.',
      },
    ],
  },
  {
    id: 6,
    slug: 'maldaara-brand-identity',
    type: 'brand-identity',
    title: 'Maldaara — Logo & Brand Identity',
    category: 'Logo Design & Brand Identity',
    heroImage: projectMaldaara,
    behanceUrl: 'https://www.behance.net/gallery/176679857/Maldaara-logo-brand-identity',
    overview:
      'A romantic, bespoke brand identity and custom handcrafted typography design created for Maldaara, an upscale wedding planning and creative floral decor studio based in Sri Lanka.',
    meta: {
      role: 'Creative Designer & Typographer',
      timeline: '1.5 Months',
      tools: 'Adobe Illustrator, Photoshop, Procreate, Hand Lettering',
      platform: 'Wedding Stationery, Packaging & Social',
    },
    problem:
      'Maldaara needed a brand identity that was intimate, romantic, and uniquely authentic. The challenge was celebrating cultural authenticity through custom Sinhala typography while maintaining a contemporary, high-fashion international aesthetic that resonated with modern bridal couples and luxury venue partners.',
    processCaptions: [
      'Hand-lettered script explorations drawing inspiration from traditional Sinhala floral curves and contemporary calligraphy.',
      'Balancing bilingual typographic rhythm between the custom Sinhala lettering and elegant English serif wordmarks.',
      'Developing the signature blush pink and carbon black color harmony to bridge romance with luxury sophistication.',
      'Stationery suite prototype testing featuring wax seals, cotton rag paper, debossed monogramming, and floral ribbon tags.',
    ],
    solution:
      'A delicate, handcrafted visual identity centered on an organic botanical wreath emblem enclosing a refined monogram, paired with custom hand-drawn Sinhala script. The color system uses blush rose to embody love and romance, grounded by deep carbon black for elegance, prestige, and timeless luxury.',
    impactQuote:
      'The identity captures the enchanting romance of bespoke weddings, helping Maldaara quickly become one of the most sought-after floral design studios.',
    impacts: [
      {
        number: '01',
        title: 'Market Distinction',
        description: 'Stood out distinctly from formulaic wedding brands through custom cultural hand-lettering and bespoke botanical illustrations.',
      },
      {
        number: '02',
        title: 'Engagement Surge',
        description: 'Achieved a 340% increase in social media engagement and inquiry conversions following the identity launch.',
      },
      {
        number: '03',
        title: 'Luxury Partnerships',
        description: 'Facilitated official creative vendor partnerships with 5 premier luxury resort and ballroom wedding venues.',
      },
    ],
  },
  {
    id: 7,
    slug: 'sara-productions-brand-identity',
    type: 'brand-identity',
    title: 'Sara Productions — Logo & Branding Identity',
    category: 'Film & Media Brand Identity',
    heroImage: projectSara,
    behanceUrl: 'https://www.behance.net/gallery/176411445/Sara-Productions-logo-branding-identity',
    overview:
      'A cinematic visual identity and dynamic branding suite crafted for Sara Productions, a film production, commercial videography, and creative media studio.',
    meta: {
      role: 'Brand Identity Designer & Motion Art Director',
      timeline: '2 Months',
      tools: 'Adobe Illustrator, Photoshop, Premiere Pro, Figma',
      platform: 'Cinema Title Cards, Equipment Livery & Digital',
    },
    problem:
      'Sara Productions required a modern, striking identity that could perform effortlessly in high-contrast cinematic environments — from 4K title sequence overlays and social video watermarks to physical production equipment, clapperboards, crew apparel, and digital portfolios.',
    processCaptions: [
      'Geometry exploration based on 35mm camera lens apertures, optical iris blades, and focal rings.',
      'Monogram development creating a seamless flow between the letter "S" and cinematic framing geometry.',
      'Calibration of optical weights to ensure legibility when overlaid on bright daylight footage or low-light cinematography.',
      'Application design for acrylic production slates, media passes, hard equipment cases, and motion stingers.',
    ],
    solution:
      'A modern circular aperture monogram featuring precision lens geometry and warm cinematic amber/gold illumination set against deep camera matte black. The identity provides a commanding presence on film screens while maintaining clean authority on physical collateral.',
    impactQuote:
      'Delivered a visual mark that feels right at home in a high-end cinema intro or on an international production set.',
    impacts: [
      {
        number: '01',
        title: 'Versatility',
        description: 'Optimized for flawless reproduction across 4K video overlays, digital watermarks, and micro-scale social avatars.',
      },
      {
        number: '02',
        title: 'Production Presence',
        description: 'Standardized physical production gear, crew apparel, and acrylic slates for high-profile on-location film shoots.',
      },
      {
        number: '03',
        title: 'Client Retention',
        description: 'Increased commercial client repeat bookings by 50% aided by a cohesive, professional studio brand experience.',
      },
    ],
  },
];

export const brandProjects = projects.filter((p) => p.type === 'brand-identity');
export const uiuxProjects = projects.filter((p) => p.type === 'uiux');

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
