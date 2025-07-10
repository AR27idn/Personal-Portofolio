
import type { Education, Project, Certification, Achievement } from './types';

export const SECTIONS = [
  { id: 'about', title: 'About' },
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'skills', title: 'Skills' },
  { id: 'achievements', title: 'Achievements' }, 
  { id: 'contact', title: 'Contact' },
];

export const PERSONAL_INFO = {
  name: 'Muhammad Arfy Rafa',
  title: 'Network Engineer | AI Enthusiast | Informatics Student',
  about: [
    "I am a 5th-semester Informatics Engineering student at Institut Teknologi Sains Bandung with 2 years of experience in IT, including working on manufacturing industry projects.",
    "After a 3-year gap year, I stayed active by building my technical skills and contributing to campus and industry tech projects.",
    "I am passionate about Network Engineering and Artificial Intelligence, and I aim to grow in roles that combine strong technical challenges with real-world impact.",
  ],
  email: 'arfyrafa123@gmail.com',
};


export const EDUCATION_DATA: Education[] = [
  {
    institution: 'SMK Putra Pajajaran',
    degree: 'High School / Vocational',
    field: 'Computer and Network Engineering',
    startYear: 2017,
    endYear: '2020',
  },
  {
    institution: 'Institut Teknologi Sains Bandung',
    degree: "Bachelor's in Informatics",
    field: 'Faculty of Engineering and Design',
    startYear: 2023,
    endYear: 'Present',
    gpa: '3.74 / 4.00',
  },
];


export const EXPERIENCE_DATA = [
  {
    role: 'Warehouse Staff Admin',
    organization: 'PT. Giken Dinamika Indonesia',
    startDate: 'Aug 2021',
    endDate: 'Sep 2022',
    description: [
      'Maintained and troubleshooted computer networks and hardware at project sites',
      'Set up and configured network systems to support project operations',
      'Provided daily technical support to project employees'
    ],
    
    skills: ['Excel', 'Data Entry', 'Logistics Coordination'],
  },
  {
    role: 'IT Staff',
    organization: 'PT. Giken Dinamika Indonesia',
    startDate: 'Sep 2021',
    endDate: 'Oct 2022',
    description: [
      'Managed inventory documentation and logistics flow',
      'Inputted data using Microsoft Excel and the company’s internal system',
      'Coordinated with the logistics and production teams to ensure smooth distribution'
    ],
    skills: ['Troubleshooting', 'Network Infrastructure', 'Hardware & Software Setup',],
  },
  {
    role: 'IT Helpdesk (Internship)',
    organization: 'PT. Perkebunan Nusantara VIII',
    startDate: '2019',
    endDate: '(3 Months)',
    description: [
      'Maintained computers and local networks in the office environment',
      'Assisted with data backups and software installation for daily operations'
    ],
    skills: ['IT Support', 'Backup', 'Software Installation'],
  },
];
export const PROJECTS_DATA: Project[] = [
  {
    title: 'Campus Network Upgrade & WiFi Login Portal',
    description:
      `Upgraded campus network infrastructure by configuring Mikrotik RouterOS to improve stability, coverage, and access control. 
      A custom web-based WiFi login portal was developed using plain HTML, CSS, and JavaScript, integrated directly with the Mikrotik hotspot system. 
      This portal provides a more user-friendly interface for students and staff, enhancing both security and convenience during the login process. 
      The project was developed collaboratively with campus IT staff, including real-world testing and iterative improvements based on feedback. 
      As a result, the new system successfully reduced unauthorized access and improved the overall user experience on the campus network.`,
    technologies: ['Mikrotik', 'Web Portal', 'Networking'],
    repoUrl: '',
    liveUrl: '',
    imageUrl: 'https://i.imgur.com/Yd8VCHb.jpeg',
  },
  {
    title: 'KosKami – Boarding House App (UI/UX)',
    description:
      'Designed an Android-based mobile application that helps users find and book boarding houses (kost) easily and reliably. Focused on user interface and experience design.',
    technologies: ['Figma', 'UI/UX', 'Mobile App Design'],
    repoUrl: '',
    liveUrl: 'https://www.figma.com/proto/BSlefmr1yG5qKAO0fvSDma?node-id=0-1&t=ckPy94A9hSwifa5C-6', // Ganti dengan link Figma asli kamu
    imageUrl: 'https://i.imgur.com/2tuQnBt.png',
  },
  {
    title: 'E-Gate Parking System with Arduino',
    description:
      'Built an automatic parking gate system using Arduino, RFID, buzzer, and servo motor. Simulated secure parking access with RFID-based authentication for campus or office environments.',
    technologies: ['Arduino', 'RFID', 'Servo Motor', 'C++'],
    repoUrl: 'https://github.com/AR27idn/-Mini-Arduino-Project-E-Gate-Parking-System', 
    liveUrl: '',
    imageUrl: 'https://i.imgur.com/icOxmzZ.png',
  },
  {
    title: 'Library Database Management Website',
    description:
      'Developed a web-based library system using HTML, CSS, PHP, and MySQL. Implemented full CRUD operations for managing books, users, and transactions.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/AR27idn/Perpustakaan-ITSB',
    liveUrl: '',
    imageUrl: 'https://i.imgur.com/ThR5vec.png',
  },
];


export const CERTIFICATIONS_DATA: Certification[] = [
  {
    name: 'Fundamentals of Artificial Intelligence Implementation (Micro Skill)',
    issuer: 'Digital Talent Scholarship',
    date: 'Issued July 2025',
    credentialUrl: 'https://drive.google.com/file/d/1wt1xVSividF5yCAOCtn2J3wOwEjNThnB/view?usp=drive_link',
  },
  {
    name: 'Artificial Intelligence for Millennials (Micro Skill)',
    issuer: 'Digital Talent Scholarship',
    date: 'Issued July 2025',
    credentialUrl: 'https://drive.google.com/file/d/19eMrJ0gB5g_067fIytd3MixsiZ5nQ1H2/view?usp=drive_link',
  },
  {
    name: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM',
    date: 'Issued June 2025',
    credentialUrl: 'https://drive.google.com/file/d/1FqOdGm1RdPLkC41Pr4gmyd2BNjk2RSbY/view?usp=drive_link',
  },
  {
    name: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Issued June 2025',
    credentialUrl: 'https://drive.google.com/file/d/1FqOdGm1RdPLkC41Pr4gmyd2BNjk2RSbY/view?usp=drive_link',
  },
  {
    name: 'Intro to Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    date: 'Issued April 2025 (Expires June 2028)',
    credentialUrl: 'https://www.dicoding.com/certificates/JLX19Q9M2P72',
  },
  {
    name: 'Intro to Data Visualization',
    issuer: 'Dicoding Indonesia',
    date: 'Issued April 2025 (Expires June 2028)',
    credentialUrl: 'https://www.dicoding.com/certificates/2VX3K3NRNXYQ',
  },
  {
    name: 'Intro to Machine Learning',
    issuer: 'Dicoding Indonesia',
    date: 'Issued April 2025 (Expires June 2028)',
    credentialUrl: 'https://www.dicoding.com/certificates/EYX4GLQ86ZDL',
  },
  {
    name: 'Getting Started with Python Programming',
    issuer: 'Dicoding Indonesia',
    date: 'Issued April 2025 (Expires June 2028)',
    credentialUrl: 'https://www.dicoding.com/certificates/MRZMN7WN0PYQ',
  },
  {
    name: 'Fundamentals of Artificial Intelligence',
    issuer: 'Dicoding Indonesia',
    date: 'Issued November 2024 (Expires November 2027)',
    credentialUrl: 'https://www.dicoding.com/certificates/1OP84VRDLZQK',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco',
    date: 'Issued April 2025',
    credentialUrl: 'https://www.credly.com/badges/05f469b6-ae21-4f1b-a90f-80f1e83297cc/linked_in_profile',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Gold Medal – National Science Olympiad',
    description: 'Bahasa Indonesia (National – 2025)',
    year: 2025,
    credentialUrl: 'https://drive.google.com/file/d/1mjOyu4dcXkaybHT2rf1IDVyj__NzHD9t/view?usp=drive_link',
  },
  {
    title: 'Silver Medal – National Science Olympiad',
    description: 'Bahasa Indonesia (National – 2020)',
    year: 2020,
    credentialUrl: 'https://drive.google.com/file/d/1pQu8geTA2B5_aNoz6sCCfqHwR59VhWzn/view?usp=drive_link',
  },
  {
    title: 'Silver Medal – National Science Olympiad',
    description: 'Bahasa Inggris (National – 2020)',
    year: 2020,
    credentialUrl: 'https://drive.google.com/file/d/1rUiklERqdw9PhtRPMSe0GeftWG-28wrz/view?usp=drive_link',
  },
  {
    title: 'Participation – 15th IEOM Paper Competition',
    description: 'Singapore (March 2025)',
    year: 2025,
    credentialUrl: 'https://drive.google.com/file/d/1NA4sh7VDBxmkavLV79MCaBtmthtLLtTi/view?usp=drive_link',
  },
];



export const SKILLS = [
  'HTML', 'CSS', 'TypeScript', 'React','Tailwind CSS', 'Python',
  'Jupyter', 'Netwoking (Cisco & Mikrotik)', 'Linux', 'MySQL',
  'Arduino', 'Git', 'Figma',
];


export const CONTACT_INFO = {
  email: 'arfyrafa123@gmail.com',
  whatsapp: '6285721610319',
  linkedin: 'https://www.linkedin.com/in/muhammad-arfy-rafa-f/',
};

