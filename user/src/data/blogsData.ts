// src/data/blogData.ts

import usIncorp1 from '@/assets/blogs/us-incorporation-part-1.jpg';
import usIncorp2 from '@/assets/blogs/us-incorporation-part-2.webp';
import usIncorp3 from '@/assets/blogs/us-incorporation-part-3.jpg';
import businessModel from '@/assets/blogs/business-model-startup.jpg';  // Add this import after uploading image.jpg

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  author: string;
  date: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  isExternal?: boolean;
  externalUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'us-incorp-part-1-c-corp',
    title:
      'US Startup Incorporation Made Simple - Part 1: How to Register C-Corps and Elect S-Corp Status',
    slug: 'us-startup-incorporation-made-simple-part-1-c-corp',
    summary:
      'Master C-Corp registration and S-Corp tax election strategy. Transform your vision into a legal, investor-ready business.',
    author: 'Unfold Finleg Solutions LLP',
    date: '2025-08-29',
    content: '',
    image: usIncorp1,
    category: 'US Incorporation',
    readTime: '8 min',
    isExternal: true,
    externalUrl:
      'https://www.linkedin.com/pulse/us-startup-incorporation-made-simple-how-register-1etpc/',
  },
  {
    id: 'us-incorp-part-2-llc',
    title:
      'US Startup Incorporation Made Simple – Part 2: How to Register an LLC in the U.S.',
    slug: 'us-startup-incorporation-made-simple-part-2-llc',
    summary:
      'Step-by-step guide to registering an LLC in the US. Learn how to balance protection, flexibility, and cost-efficiency.',
    author: 'Unfold Finleg Solutions LLP',
    date: '2025-09-20',
    content: '',
    image: usIncorp2,
    category: 'US Incorporation',
    readTime: '7 min',
    isExternal: true,
    externalUrl:
      'https://www.linkedin.com/pulse/us-startup-incorporation-made-simple-part-2-how-hnq3c/',
  },
  {
    id: 'us-incorp-part-3',
    title:
      'US Startup Incorporation Made Simple – Part 3: Sole Proprietorship, Partnership & LLP',
    slug: 'us-startup-incorporation-made-simple-part-3',
    summary:
      'Understand sole proprietorship, partnership, and LLP structures. Learn when to use each and common mistakes to avoid.',
    author: 'Unfold Finleg Solutions LLP',
    date: '2025-12-20',
    content: '',
    image: usIncorp3,
    category: 'US Incorporation',
    readTime: '6 min',
    isExternal: true,
    externalUrl:
      'https://www.linkedin.com/pulse/us-startup-incorporation-made-simple-part-3-sole-rjcdc/',
  },
  {
    id: 'us-incorp-part-4-business-model',
    title: 'Choosing the Right Business Model for Your US Startup',
    slug: 'choosing-right-business-model-us-startup',
    summary:
      'Beyond entity structure, discover how to select the optimal business model that aligns with your funding goals, growth trajectory, and investor expectations.',
    author: 'Unfold Finleg Solutions LLP',
    date: '2026-01-10',
    content: '',
    image: businessModel,
    category: 'US Incorporation',
    readTime: '5 min',
    isExternal: true,
    externalUrl:
      'https://www.linkedin.com/pulse/choosing-right-business-model-your-us-startup-s2trc/?trackingId=HZAuNYc1KyzxIxIcrW01Aw%3D%3D',
  },
];

export const searchBlogs = (query: string): BlogPost[] => {
  if (!query.trim()) return blogPosts;

  const searchTerm = query.toLowerCase();
  return blogPosts.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.summary.toLowerCase().includes(searchTerm) ||
      blog.category.toLowerCase().includes(searchTerm) ||
      blog.content.toLowerCase().includes(searchTerm),
  );
};

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((blog) => blog.slug === slug);

export const getRecentBlogs = (limit: number = 3): BlogPost[] =>
  [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    )
    .slice(0, limit);

export const getBlogsByCategory = (category: string): BlogPost[] =>
  blogPosts.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase(),
  );
