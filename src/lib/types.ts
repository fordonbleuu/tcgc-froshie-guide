export interface NavLink {
  label: string;
  href: string;
}

export interface SlideImage {
  id: string;
  label: string;
  gradient: string;
  overlayColor: string;
}

export interface QuickNavCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface AcademicInstitute {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CampusHighlight {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Office {
  id: string;
  title: string;
  description: string;
  icon: string;
  hours: string;
  location: string;
  contact: string;
}
