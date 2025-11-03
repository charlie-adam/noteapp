export interface SidebarItem {
  icon: string;
  label: string;
  routerLink?: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  contentHTML: string;
  createdAt: Date;
  updatedAt: Date;
  x: number;
  y: number;
}