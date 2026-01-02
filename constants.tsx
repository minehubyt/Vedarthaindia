
import { ArticleCard, NavItem, ServiceItem, Office } from './types';

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
          title: 'Overview',
          items: [
            { label: 'Our approach to solutions', href: '#' },
            { label: 'Global impact overview', href: '#' },
          ]
        },
        {
          title: 'Case studies',
          items: [
            { label: 'Client success stories', href: '#' },
            { label: 'Innovation in action', href: '#' },
          ]
        },
        {
          title: 'Services',
          items: [
            { label: 'AI & Engineering', href: '#' },
            { label: 'Assurance', href: '#' },
            { label: 'Audit', href: '#' },
            { label: 'Business Process Solutions', href: '#' },
            { label: 'Customer', href: '#' },
            { label: 'Cyber', href: '#' },
            { label: 'Deloitte Private', href: '#' },
            { label: 'Direct Tax', href: '#' },
            { label: 'Enterprise Performance', href: '#' },
            { label: 'Finance', href: '#' },
            { label: 'Finance Transformation', href: '#' },
            { label: 'Global Employer Services', href: '#' },
            { label: 'Human Capital', href: '#' },
            { label: 'Indirect Tax', href: '#' },
            { label: 'Legal Business Services', href: '#' },
            { label: 'M&A and Restructuring Services', href: '#' },
            { label: 'Operate', href: '#' },
            { label: 'Regulatory, Risk & Forensic', href: '#' },
            { label: 'Strategy & Transactions', href: '#' },
            { label: 'Sustainability', href: '#' },
            { label: 'Tax Technology Consulting', href: '#' },
          ]
        },
        {
          title: 'Industries',
          items: [
            { label: 'IndustryAdvantage™', href: '#' },
            { label: 'Consumer', href: '#' },
            { label: 'Energy, Resources & Industrials', href: '#' },
            { label: 'Financial Services', href: '#' },
            { label: 'Government & Public Services', href: '#' },
            { label: 'Life Sciences & Health Care', href: '#' },
            { label: 'Technology, Media & Telecommunications', href: '#' },
          ]
        }
      ],
      featured: {
        category: 'Service',
        title: 'Blockchain & Digital Assets',
        subtitle: 'Unlocking exponential value',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600',
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
          title: 'Insights',
          items: [
            { label: 'Reports', href: '#' },
            { label: 'Articles', href: '#' },
            { label: 'Podcasts', href: '#' },
          ]
        },
        {
          title: 'Future Tech',
          items: [
            { label: 'AI & Data', href: '#' },
            { label: 'Cloud Strategy', href: '#' },
          ]
        },
        {
          title: 'Impact',
          items: [
            { label: 'Sustainability', href: '#' },
            { label: 'ESG Reporting', href: '#' },
          ]
        }
      ],
      featured: {
        category: 'Insights',
        title: 'Strategic Foresight',
        subtitle: 'Tech Trends 2025: Applied Intelligence',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600',
        link: '#'
      }
    }
  },
  { label: 'Careers', href: 'careers' },
];

export const OFFICES: Office[] = [
  {
    id: 'ranchi-ops',
    city: 'Ranchi',
    country: 'India',
    region: 'India',
    address: '2nd Floor, Tara Kunj Complex, Khelgaon-Tatisilwai Rd, Chowk, Ranchi, Jharkhand 834012',
    phone: '+91 9110154848',
    email: 'ranchi@vedartha.in',
    partnerName: 'Vedartha Global',
    partnerTitle: 'India - Asia Pacific Center of Excellence',
    imageUrl: 'https://images.unsplash.com/photo-1596760407110-2f759c2d705d?auto=format&fit=crop&q=80&w=1200',
    coordinates: { lat: 23.4025, lng: 85.3995 }
  },
  {
    id: 'mumbai-hq',
    city: 'Mumbai',
    country: 'India',
    region: 'India',
    address: 'Indiabulls Finance Centre, Tower 3, Senapati Bapat Marg, Elphinstone Road (W), Mumbai - 400013',
    phone: '+91 22 6185 4000',
    email: 'mumbai@vedartha.com',
    partnerName: 'Anjali Sharma',
    partnerTitle: 'Managing Partner, India',
    imageUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },
  {
    id: 'ny-global',
    city: 'New York',
    country: 'USA',
    region: 'Americas',
    address: '30 Rockefeller Plaza, New York, NY 10112, United States',
    phone: '+1 212 492 4000',
    email: 'nyc@vedartha.com',
    partnerName: 'James Wilson',
    partnerTitle: 'Global Advisory Leader',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  }
];

export const FEATURED_ARTICLES: ArticleCard[] = [
  {
    id: '1',
    category: 'Perspectives',
    title: 'The future of Generative AI in the enterprise',
    description: 'How organizations can scale AI while maintaining trust and security in an evolving landscape.',
    imageUrl: 'https://picsum.photos/seed/ai-future/800/600',
    tag: 'Technology'
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
  }
];
