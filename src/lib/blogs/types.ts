export interface BlogSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: string;
  date: string; // ISO date
  readTime: number; // minutes
  intro: string[];
  sections: BlogSection[];
  conclusion: string[];
}
