export interface Job {
  id: string;
  title: string;
  companyId: string;
  description: string;
  requiredTechnologies: string[];
  location: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  isActive: boolean;
  createdAt: Date;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  location: string;
  website: string;
  logo?: string;
  foundedYear: number;
  employeeCount: number;
}

export interface ResumeItem {
  id: string;
  jobTitle: string;
  companyName: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
  isCurrentJob: boolean;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location: string;
  currentJob?: {
    title: string;
    company: string;
  };
  resume: ResumeItem[];
  skills: string[];
  experience: number; // years
  education?: {
    degree: string;
    institution: string;
    graduationYear: number;
  };
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FilterOptions {
  technologies?: string[];
  location?: string;
  experienceMin?: number;
  experienceMax?: number;
}

export interface SortOptions {
  field: 'name' | 'experience' | 'createdAt';
  direction: 'asc' | 'desc';
} 