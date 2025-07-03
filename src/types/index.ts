export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  results: string[];
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}