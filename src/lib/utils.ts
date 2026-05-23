import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function navigateToSection(path: string, sectionId: string) {
  if (window.location.pathname === path || path === '/') {
    scrollToSection(sectionId);
  } else {
    window.location.href = `${path === '/' ? '' : path}#${sectionId}`;
  }
}
