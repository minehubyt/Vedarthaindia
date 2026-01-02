
import { ArticleCard, NavItem, ServiceItem, Office } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Who we are', 
    href: '#',
    children: {
      sections: [
        {
          title: 'About Us',
          items: [
            { label: 'Our Story', href: '#' },
            { label: 'Purpose & Values', href: 'purpose-values' },
            { label: 'Global Network', href: '#' },
          ]
        },
        {
          title: 'Contact',
          items: [
            { label: 'Global Office Directory', href: 'offices' },
            { label: 'Submit RFP', href: 'rfp' },
          ]
        }
      ],
      featured: {
        category: 'About Us',
        title: 'Making an impact that matters',
        subtitle: 'Our global commitment',
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
          title: 'Services',
          items: [
            { label: 'Audit & Assurance', href: 'audit-assurance' },
            { label: 'Tax & Regulatory', href: 'tax-regulatory' },
            { label: 'Risk Advisory', href: 'risk-advisory' },
            { label: 'Deal Advisory & Transactions', href: 'deal-advisory' },
            { label: 'Consulting & Strategy', href: 'consulting-strategy' },
            { label: 'Legal & Governance', href: 'legal-governance' },
            { label: 'Forensic & Dispute', href: 'forensic-dispute' },
            { label: 'ESG & Sustainability', href: 'esg-sustainability' },
          ]
        }
      ],
      featured: {
        category: 'Service',
        title: 'Strategic Foresight',
        subtitle: 'Navigating global complexity',
        imageUrl: 'https://images.unsplash.com/photo-1454165833767-0274b27f28a0?auto=format&fit=crop&q=80&w=600',
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
            { label: 'Reports', href: 'reports' },
            { label: 'Articles', href: 'articles' },
            { label: 'Podcasts', href: 'podcasts' },
          ]
        }
      ]
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
    address: '2nd Floor, Tara Kunj Complex, Khelgaon-Tatisilwai Rd, Ranchi, Jharkhand 834012',
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
    address: 'Indiabulls Finance Centre, Tower 3, Senapati Bapat Marg, Mumbai - 400013',
    phone: '+91 22 6185 4000',
    email: 'mumbai@vedartha.com',
    partnerName: 'Anjali Sharma',
    partnerTitle: 'Managing Partner, India',
    imageUrl: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=800',
    coordinates: { lat: 19.1136, lng: 72.8697 }
  }
];

export const SERVICES: ServiceItem[] = [
  { title: 'Audit & Assurance', description: 'Strengthening trust through high-quality independent audits.', icon: 'ShieldCheck' },
  { title: 'Tax & Regulatory', description: 'Sharp legal foresight integrated with financial precision.', icon: 'FileText' },
  { title: 'Risk Advisory', description: 'Analytical depth to manage multi-layered organizational risks.', icon: 'AlertTriangle' },
  { title: 'Deal Advisory', description: 'Discreet boardroom support for large-scale transactions.', icon: 'Briefcase' },
  { title: 'Consulting & Strategy', description: 'Modern solutions for energetic business transformation.', icon: 'Zap' },
  { title: 'Legal & Governance', description: 'Traditional authority for robust corporate governance.', icon: 'Scale' },
  { title: 'Forensic & Dispute', description: 'Investigative intensity to resolve complex disputes.', icon: 'Search' },
  { title: 'ESG & Sustainability', description: 'Long-term thinking for a sustainable enterprise future.', icon: 'Leaf' }
];

export const FEATURED_ARTICLES: ArticleCard[] = [
  {
    id: '1',
    category: 'Perspectives',
    title: 'The future of Generative AI in the enterprise',
    description: 'How organizations can scale AI while maintaining trust and security.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tag: 'Technology'
  }
];
