import mossarofProfileImg from '../assets/images/mossarof_profile.jpg';
import {
  EducationEntry,
  ExperienceEntry,
  ExtracurricularEntry,
  PageId,
  PageRouteMeta,
  PersonalProfile,
  ProjectEntry,
  SkillDomain,
  TrainingEntry,
} from '../types/portfolio';

/**
 * ============================================================================
 * CENTRALIZED PORTFOLIO DATA FOR MOSSAROF MOLLA
 * ============================================================================
 * Single source of truth for all 9 portfolio pages and result-free CV exports.
 * Personal privacy enforced: no academic GPAs/CGPAs, no full home address,
 * and no third-party personal contact details are exposed publicly.
 */

export const PORTFOLIO_IMAGES = {
  profilePhoto: mossarofProfileImg,
};

export const REFERENCE_STATEMENT = 'References available upon request.';

export const PAGE_ROUTES: PageRouteMeta[] = [
  {
    id: PageId.Home,
    path: '/',
    label: 'Home',
    shortLabel: 'Home',
    title: 'Mossarof Molla — Junior Accounts Officer Portfolio',
    summary: 'Overview, accounting capabilities, work experience, and CV access.',
  },
  {
    id: PageId.About,
    path: '/about',
    label: 'About Me',
    shortLabel: 'About',
    title: 'About Me — Mossarof Molla',
    summary: 'Accounting focus, training background, languages, and work principles.',
  },
  {
    id: PageId.Education,
    path: '/education',
    label: 'Education',
    shortLabel: 'Education',
    title: 'Education & Training — Mossarof Molla',
    summary: 'Academic degrees (MSS, BSS, HSC, SSC) and Small Business Management training.',
  },
  {
    id: PageId.Experience,
    path: '/experience',
    label: 'Work Experience',
    shortLabel: 'Experience',
    title: 'Work Experience — Mossarof Molla',
    summary: 'Junior Executive (Order Follow-up) at Article Label & Accessories Ltd.',
  },
  {
    id: PageId.Skills,
    path: '/skills',
    label: 'Skills',
    shortLabel: 'Skills',
    title: 'Skills — Mossarof Molla',
    summary: 'Bookkeeping, TallyPrime, MS Excel, VAT/tax docs, procurement, and office tools.',
  },
  {
    id: PageId.Projects,
    path: '/projects',
    label: 'Projects',
    shortLabel: 'Projects',
    title: 'Practice & Applied Work — Mossarof Molla',
    summary: 'Training practice, applied skills showcase, and workplace order coordination.',
  },
  {
    id: PageId.Extracurricular,
    path: '/extracurricular',
    label: 'Extracurricular Activities',
    shortLabel: 'Activities',
    title: 'Extracurricular Activities — Mossarof Molla',
    summary: 'Progoti Club Treasurer and active community member.',
  },
  {
    id: PageId.Contact,
    path: '/contact',
    label: 'Contact',
    shortLabel: 'Contact',
    title: 'Contact — Mossarof Molla',
    summary: 'Direct phone, email, LinkedIn, location, and email preparation form.',
  },
  {
    id: PageId.CV,
    path: '/cv',
    label: 'CV Download',
    shortLabel: 'CV Download',
    title: 'CV Preview & Download — Mossarof Molla',
    summary: 'Print-to-PDF, HTML, and TXT resume preview and download.',
  },
];

export const PROFILE: PersonalProfile = {
  fullName: 'Mossarof Molla',
  targetRole: 'Junior Accounts Officer',
  headlineTitle: 'Junior Accounts Officer · Bookkeeping, TallyPrime & MS Excel',
  tagline: 'Reliable financial records, accurate bookkeeping, and organized reporting.',
  location: 'Badda, Dhaka, Bangladesh',
  phone: '+880 1303-679894',
  email: 'mossarofmolla.info@gmail.com',
  languages: 'Bangla (Native), English (Intermediate)',
  linkedinUrl: 'https://www.linkedin.com/in/mossarof-mollaa',
  linkedinLabel: 'linkedin.com/in/mossarof-mollaa',
  introLead:
    'Detail-oriented graduate seeking a Junior Accounts Officer role with practical accounting skills in TallyPrime and MS Excel, covering voucher posting, journal entries, ledger maintenance, bank reconciliation, petty cash, VAT and tax documentation, and financial statements, alongside hands-on experience in order documentation and data entry.',
  coreAccountingHighlights: [
    'Bookkeeping & Voucher Posting',
    'Journal Entries & Ledger',
    'Bank Reconciliation & Petty Cash',
    'Financial Statements & VAT/Tax Docs',
    'TallyPrime & Advanced MS Excel',
    'Purchase & Order Documentation',
  ],
  metrics: [
    { value: 'Accounting', label: 'Vouchers, Ledgers & Reconciliation' },
    { value: 'TallyPrime', label: 'Receipt, Payment, Contra & Journals' },
    { value: 'MS Excel', label: 'Pivot Table, VLOOKUP & XLOOKUP' },
    { value: 'Order Ops', label: 'Junior Executive Experience' },
  ],
};

export const ABOUT_CONTENT = {
  headline: 'Accuracy-focused accounting skills backed by structured workplace experience.',
  paragraphs: [
    'I am Mossarof Molla, based in Badda, Dhaka, Bangladesh, and focused on building a career as a Junior Accounts Officer. I completed my Master of Social Science (MSS) and Bachelor of Social Science (BSS) in Political Science from Govt. Rajendra College, Faridpur (National University).',
    'To develop practical finance and office capabilities, I completed the 3-month Small Business Management training program at As-Sunnah Skill Development Institute, Dhaka (2026), focusing on Practical Accounting, TallyPrime, Advanced Excel, Office & Workplace Management, Practical English, and workplace productivity tools.',
    'In my work experience as Junior Executive (Order Follow-up) at Article Label & Accessories Ltd. in Uttara, Dhaka (May 2025 – Jun 2025), I maintained daily order sheets via email, prepared delivery challans, arranged transportation, and coordinated production, QC, and Head Office deliveries. I also serve as Treasurer and active member of Progoti Club.',
  ],
  principles: [
    {
      index: '01.',
      title: 'Accurate Bookkeeping & Vouchers',
      body: 'Careful voucher posting, journal entries, ledger review, bank reconciliation, and petty cash tracking to keep accounting records dependable.',
    },
    {
      index: '02.',
      title: 'Structured Financial & Purchase Docs',
      body: 'Organized handling of VAT and tax documentation, financial statements, purchase requisitions, quotations, purchase orders, invoices, and delivery challans.',
    },
    {
      index: '03.',
      title: 'Consistent Operational Follow-Up',
      body: 'Reliable coordination across email order sheets, production follow-up, quality control checks, and timely reporting in MS Excel and TallyPrime.',
    },
  ],
};

export const EDUCATION_LIST: EducationEntry[] = [
  {
    id: 'mss-political-science',
    degree: 'Master of Social Science (MSS)',
    subject: 'Political Science',
    institution: 'Govt. Rajendra College, Faridpur (National University)',
    year: '2022',
    status: 'Completed',
  },
  {
    id: 'bss-political-science',
    degree: 'Bachelor of Social Science (BSS)',
    subject: 'Political Science',
    institution: 'Govt. Rajendra College, Faridpur (National University)',
    year: '2021',
    status: 'Completed',
  },
  {
    id: 'hsc-science',
    degree: 'Higher Secondary Certificate (HSC)',
    subject: 'Science',
    institution: 'Govt. Yasin College, Faridpur',
    year: '2016',
    status: 'Completed',
  },
  {
    id: 'ssc-science',
    degree: 'Secondary School Certificate (SSC)',
    subject: 'Science',
    institution: 'Krisnar Dangi High School',
    year: '2014',
    status: 'Completed',
  },
];

export const TRAINING_LIST: TrainingEntry[] = [
  {
    id: 'small-business-management',
    course: 'Small Business Management',
    institute: 'As-Sunnah Skill Development Institute, Dhaka',
    year: '2026',
    duration: '3 Months',
    status: 'Completed',
    learningAreas: [
      'Practical Accounting',
      'TallyPrime',
      'Advanced Excel',
      'Office & Workplace Management',
      'Practical English',
      'Generative AI Tools',
    ],
    description:
      'Completed a 3-month applied training program covering practical accounting workflows, TallyPrime voucher & statement preparation, Advanced MS Excel formulas, office management, practical English, and supportive digital tools.',
  },
];

export const EXPERIENCE_LIST: ExperienceEntry[] = [
  {
    id: 'article-label-accessories',
    role: 'Junior Executive (Order Follow-up)',
    company: 'Article Label & Accessories Ltd.',
    location: 'Uttara, Dhaka',
    employmentType: 'Full-Time',
    period: 'May 2025 – Jun 2025',
    summary:
      'Maintained daily email order sheets, prepared delivery challans, arranged transportation, and coordinated production, QC follow-up, and Head Office deliveries.',
    responsibilities: [
      'Maintained and processed 3–4 order sheets daily received from merchandisers via email',
      'Prepared delivery challans and arranged transportation',
      'Coordinated customer orders with the Production Manager',
      'Followed up on production progress and quality control (QC) activities',
      'Coordinated sample and finished product deliveries with Head Office merchandisers',
    ],
    toolsAndAreas: [
      'Order Sheet Processing',
      'Delivery Challans',
      'Production & QC Follow-up',
      'Transport Arrangement',
      'Merchandiser Coordination',
    ],
  },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'core-accounting',
    title: 'Core Accounting & Bookkeeping',
    subtitle: 'Primary competencies for Junior Accounts Officer and accounting support roles',
    items: [
      {
        name: 'Bookkeeping, Voucher Posting & Journal Entries',
        source: 'Accounting Tasks',
        context:
          'Recording day-to-day financial entries accurately across voucher posting, journal entries, and general ledgers.',
      },
      {
        name: 'Chart of Accounts & Accounting Database',
        source: 'Accounting Tasks',
        context:
          'Structuring and maintaining organized ledgers and accounting databases for reliable tracking.',
      },
      {
        name: 'Bank Reconciliation & Petty Cash Management',
        source: 'Accounting Tasks',
        context:
          'Matching bank statements against book records and managing petty cash vouchers and balances.',
      },
      {
        name: 'Trial Balance, P&L & Financial Statements',
        source: 'Accounting Tasks',
        context:
          'Preparing Trial Balance, Profit & Loss Statements, and supporting Financial Statements.',
      },
      {
        name: 'VAT & Tax Documentation and Depreciation',
        source: 'Accounting Tasks',
        context:
          'Organizing VAT and tax documentation alongside asset depreciation records.',
      },
    ],
  },
  {
    id: 'tally-excel',
    title: 'TallyPrime & MS Excel',
    subtitle: 'Hands-on accounting software and spreadsheet analysis tools',
    items: [
      {
        name: 'TallyPrime',
        source: 'Accounting Software',
        context:
          'Practical voucher processing across Receipt, Payment, Journal, Contra, Purchase, and Sales Vouchers.',
      },
      {
        name: 'MS Excel (Advanced Formulas & Analysis)',
        source: 'Spreadsheet Tools',
        context:
          'Pivot Table, VLOOKUP, XLOOKUP, IF formulas, Data Validation, and Conditional Formatting.',
      },
    ],
  },
  {
    id: 'purchase-office',
    title: 'Purchase Documentation & Office Productivity',
    subtitle: 'Procurement paperwork, office software, and bilingual typing',
    items: [
      {
        name: 'Purchase & Billing Documentation',
        source: 'Purchase & Documentation',
        context:
          'Purchase Requisition, Quotation, Work Order, Purchase Order, Price Comparison Statement, Invoice/Bill, and Delivery Challan.',
      },
      {
        name: 'Office & Cloud Productivity',
        source: 'Computer & Office',
        context: 'MS Word, PowerPoint, Google Sheets, and Google Forms.',
      },
      {
        name: 'Typing Speed',
        source: 'Computer & Office',
        context: 'English 40 WPM and Bangla 20 WPM.',
      },
    ],
  },
  {
    id: 'other-tools',
    title: 'Other Tools & Soft Skills',
    subtitle: 'Supporting digital productivity tools and workplace collaboration',
    isSecondary: true,
    items: [
      {
        name: 'Other Tools (AI & Presentation)',
        source: 'Supporting Tools',
        context: 'ChatGPT, Google AI Studio, Gamma, and NotebookLM.',
      },
      {
        name: 'Soft Skills',
        source: 'Workplace Skills',
        context: 'Effective Communication, Time Management, and Teamwork.',
      },
    ],
  },
];

export const PROJECTS_LIST: ProjectEntry[] = [
  {
    id: 'tallyprime-practice',
    title: 'TallyPrime Bookkeeping & Financial Statements Practice',
    classification: 'Training Practice',
    contextLabel: 'As-Sunnah Skill Development Institute (2026)',
    role: 'Training Practice',
    summary:
      'Structured accounting cycle exercises completed during Small Business Management training, practicing Chart of Accounts setup, voucher posting, bank reconciliation, and statement preparation in TallyPrime.',
    challenge:
      'Practicing accurate classification across Receipt, Payment, Journal, Contra, Purchase, and Sales vouchers while keeping ledger balances, petty cash, and VAT/tax records consistent.',
    approach:
      'Recorded simulated business transactions in TallyPrime, verified Trial Balance and Profit & Loss output, and practiced bank reconciliation and depreciation entries.',
    deliverables: [
      'Voucher posting practice: Receipt, Payment, Journal, Contra, Purchase & Sales vouchers',
      'Trial Balance, Profit & Loss Statement, and Financial Statements preparation practice',
      'Bank Reconciliation, Petty Cash, and VAT & Tax documentation exercises',
    ],
    tools: ['TallyPrime', 'Bookkeeping', 'Bank Reconciliation', 'VAT & Tax Docs'],
    samplePlaceholderNote:
      'Sample attachment slot — add a real TallyPrime ledger, voucher, or statement screenshot in src/data/portfolioData.ts when available.',
    featured: true,
  },
  {
    id: 'excel-purchase-showcase',
    title: 'MS Excel Ledger & Purchase Documentation Templates',
    classification: 'Applied Skills Showcase',
    contextLabel: 'Practical Excel & Procurement Exercises',
    role: 'Applied Skills Showcase',
    summary:
      'Applied spreadsheet and procurement documentation practice using MS Excel formulas alongside Purchase Requisition, Quotation, Price Comparison Statement, Purchase Order, Invoice/Bill, and Delivery Challan formats.',
    challenge:
      'Reducing manual lookup errors when comparing vendor quotations, checking invoice amounts, and organizing purchase documentation.',
    approach:
      'Practiced Pivot Tables, VLOOKUP, XLOOKUP, IF conditions, Data Validation, and Conditional Formatting to structure clear Price Comparison Statements and tracking sheets.',
    deliverables: [
      'Excel lookup and summary exercises using Pivot Table, VLOOKUP, XLOOKUP & Data Validation',
      'Structured Purchase Requisition, Quotation, Work Order & Purchase Order formats',
      'Price Comparison Statement, Invoice/Bill check, and Delivery Challan templates',
    ],
    tools: ['MS Excel', 'Pivot Table', 'XLOOKUP', 'Purchase Order', 'Delivery Challan'],
    samplePlaceholderNote:
      'Sample attachment slot — add a real anonymized Excel workbook or Price Comparison Statement screenshot when available.',
    featured: true,
  },
  {
    id: 'order-followup-experience',
    title: 'Daily Order Sheet Processing & Delivery Coordination',
    classification: 'Work Experience',
    contextLabel: 'Article Label & Accessories Ltd. (May 2025 – Jun 2025)',
    role: 'Junior Executive (Order Follow-up)',
    summary:
      'Workplace operational duties in Uttara, Dhaka managing 3–4 daily email order sheets from merchandisers through production coordination, QC follow-up, delivery challan preparation, and transport dispatch.',
    challenge:
      'Keeping incoming email order sheets, production floor follow-up, quality control status, and delivery challans synchronized for timely dispatch.',
    approach:
      'Logged and processed 3–4 order sheets daily, coordinated orders with the Production Manager, followed up on production & QC progress, prepared delivery challans, arranged transport, and coordinated deliveries with Head Office merchandisers.',
    deliverables: [
      'Daily processing of 3–4 merchandiser order sheets received via email',
      'Prepared delivery challans and arranged product transportation',
      'Coordinated sample and finished product deliveries with Head Office merchandisers',
    ],
    tools: ['Order Documentation', 'Delivery Challans', 'Production & QC Follow-up', 'MS Office'],
    samplePlaceholderNote:
      'Workplace summary — internal company files are confidential and not published publicly.',
    featured: true,
  },
];

export const EXTRACURRICULAR_LIST: ExtracurricularEntry[] = [
  {
    id: 'progoti-club',
    organization: 'Progoti Club',
    membership: 'Active Member',
    responsibility: 'Treasurer',
    activitiesSummary: 'Tree plantation, blood donation, youth programs',
    category: 'Community & Social Welfare',
    description:
      'Serving as Treasurer and active member of Progoti Club, supporting club financial record-keeping and participating in tree plantation, blood donation, and youth programs.',
    highlights: [
      'Treasurer responsible for maintaining club financial records and accounts.',
      'Active member participating in tree plantation, blood donation, and youth programs.',
    ],
  },
];
