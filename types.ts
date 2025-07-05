
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: string;
  gpa?: string; //
}


export interface Experience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}
