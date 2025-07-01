// Types untuk konsistensi data
import { ReactElement } from 'react';

export interface PersonalInfo {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    portfolio: string;
    about: string;
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    description: string;
    gpa?: string;
    highlights: string[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies?: string[];
}

export interface Project {
    title: string;
    type: 'RevoU' | 'Personal' | 'Academic';
    period: string;
    description: string;
    background: string;
    methodology: string;
    results: string[];
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
}

export interface Skill {
    category: string;
    items: string[];
    icon: string;
    color: string;
}

export interface ContactInfo {
    type: string;
    value: string;
    icon: ReactElement;
    href: string;
    color: string;
}
