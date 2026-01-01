
import { ArticleCard, NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Who we are', 
    href: '#',
    children: {
      sections: [
        {
          title: 'Our People',
          items: [
            { label: 'Leadership', href: '#' },
            { label: 'Diversity, Equity & Inclusion', href: '#' },
            { label: 'Partner Stories', href: '#' },
          ]
        },
        {
          title: 'Purpose & Values',
          items: [
            { label: 'What we believe in', href: '#' },
            { label: 'Our Purpose in Action', href: '#' },
            { label: 'Shared Values', href: '#' },
          ]
        },
        {
          title: 'About Us',
          items: [
            { label: 'Our Story', href: '#' },
            { label: 'Global Network', href: '#' },
            { label: 'Annual Reports', href: '#' },
          ]
        },
        {
          title: 'Contact Us',
          items: [
            { label: 'Global Office Directory', href: '#' },
            { label: 'Submit RFP', href: '#' },
            { label: 'Media Inquiries', href: '#' },
          ]
        }
      ],
      featured: {
        category: 'About Us',
        title: 'Featured',
        subtitle: 'Together makes progress',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
        link: '#'
      }
    }
  },
  { 
    label: 'What we do', 
    href: '#',
    children: {
      sections: [
        {
          title: 'Audit & Assurance',
          items: [
            { label: 'Audit Services', href: '#' },
            { label: 'Accounting & Reporting', href: '#' },
          ]
        },
        {
          title: 'Consulting',
          items: [
            { label: 'Strategy & Analytics', href: '#' },
            { label: 'Technology', href: '#' },
            { label: 'Human Capital', href: '#' },
          ]
        },
        {
          title: 'Tax',
          items: [
            { label: 'Business Tax', href: '#' },
            { label: 'International Tax', href: '#' },
            { label: 'Legal', href: '#' },
          ]
        }
      ],
      featured: {
        category: 'Services',
        title: 'Client Stories',
        subtitle: 'Unlocking exponential value',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
        link: '#'
      }
    }
  },
  { 
    label: 'Our Thinking', 
    href: '#',
    children: {
      sections: [
        {
          title: 'Digital Transformation',
          items: [
            { label: 'AI & Data', href: '#' },
            { label: 'Cloud Strategy', href: '#' },
          ]
        },
        {
          title: 'Sustainability',
          items: [
            { label: 'ESG Reporting', href: '#' },
            { label: 'Decarbonization', href: '#' },
          ]
        }
      ]
    }
  },
  { label: 'Careers', href: '#' },
];

export const FEATURED_ARTICLES: ArticleCard[] = [
  {
    id: '1',
    category: 'Perspectives',
    title: 'The future of Generative AI in the enterprise',
    description: 'How organizations can scale AI while maintaining trust and security in an evolving landscape.',
    imageUrl: 'https://picsum.photos/seed/ai-future/800/600',
    tag: 'Technology'
  },
  {
    id: '2',
    category: 'Global Report',
    title: '2024 Global Human Capital Trends',
    description: 'New research reveals how boundaryless work is redefining the social contract between workers and organizations.',
    imageUrl: 'https://picsum.photos/seed/human-capital/800/600',
    tag: 'Strategy'
  },
  {
    id: '3',
    category: 'Environmental',
    title: 'Sustainability & Climate Change: Leading the transition',
    description: 'Practical steps for businesses to reach net-zero goals and drive sustainable growth.',
    imageUrl: 'https://picsum.photos/seed/climate/800/600',
    tag: 'Sustainability'
  },
  {
    id: '4',
    category: 'Finance',
    title: 'Resilience in the face of economic uncertainty',
    description: 'Navigating market volatility with agile financial planning and risk management.',
    imageUrl: 'https://picsum.photos/seed/finance/800/600',
    tag: 'Advisory'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Audit & Assurance',
    description: 'Helping companies navigate complexity with confidence through high-quality audits.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Consulting',
    description: 'Driving business transformation through strategy, technology, and operations.',
    icon: 'Lightbulb'
  },
  {
    title: 'Risk Advisory',
    description: 'Anticipating and managing strategic, operational, and financial risks.',
    icon: 'AlertTriangle'
  },
  {
    title: 'Tax & Legal',
    description: 'Navigating the global tax and legal landscape with certainty.',
    icon: 'Briefcase'
  }
];
