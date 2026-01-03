
export interface Skill {
  name: string;
  category: 'Development' | 'IT & Networking' | 'Design & Tools' | 'AI & Automation';
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  gpa: string;
  date: string;
}

export interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
}

export interface Review {
  name: string;
  location: string;
  text: string;
}
