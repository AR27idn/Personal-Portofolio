
import { Education, Experience, Project, Certification } from './types';

export const SECTIONS = [
  { id: 'about', title: 'About' },
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'certifications', title: 'Certifications' },
  { id: 'contact', title: 'Contact' },
];

export const PERSONAL_INFO = {
  name: 'Muhammad Arfy Rafa Fakhrezie',
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


export const EXPERIENCE_DATA: Experience[] = [
  {
    role: 'Lead Frontend Engineer',
    organization: 'Innovatech Solutions',
    startDate: 'Jan 2018',
    endDate: 'Present',
    description: [
      'Led the development of a large-scale enterprise dashboard, improving data visualization and user interaction for over 10,000 daily active users.',
      'Architected and implemented a component library in React and TypeScript, resulting in a 40% reduction in development time for new features.',
      'Mentored a team of 5 junior and mid-level engineers, fostering a culture of code quality, testing, and continuous learning.',
      'Integrated Gemini API for a prototype chatbot, enhancing user support and engagement.'
    ],
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Jest', 'CI/CD'],
  },
  {
    role: 'Senior Software Engineer',
    organization: 'Digital Creations Inc.',
    startDate: 'Jun 2014',
    endDate: 'Dec 2017',
    description: [
      'Developed and maintained customer-facing e-commerce platforms, handling millions of transactions per month.',
      'Collaborated with UX/UI designers to translate wireframes and mockups into responsive, pixel-perfect web pages.',
      'Optimized application performance, achieving a 30% improvement in page load times through code splitting and lazy loading.',
    ],
    skills: ['React', 'Redux', 'JavaScript (ES6+)', 'Sass', 'Webpack', 'Agile Methodologies'],
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
    repoUrl: 'https://github.com/yourusername/library-crud', // Ganti dengan link GitHub kamu
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
    name: 'Code Generation and Optimization Using IBM Granite',
    issuer: 'IBM',
    date: 'Issued June 2025',
    credentialUrl: 'https://drive.google.com/file/d/1_zGVNXMQeGTaxd98DPuYrSuTIxlbFi5l/view?usp=drive_link',
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

export const CONTACT_INFO = {
  email: 'arfyrafa123@gmail.com',
  whatsapp: '6285721610319', // Tanpa +, untuk wa.me
  linkedin: 'https://www.linkedin.com/in/muhammad-arfy-rafa-f/',
};

