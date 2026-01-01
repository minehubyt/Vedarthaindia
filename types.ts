
export interface SubCategory {
  name: string;
  items: { label: string; href: string }[];
}

export interface FeaturedContent {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: {
    sections: {
      title: string;
      items: { label: string; href: string }[];
    }[];
    featured?: FeaturedContent;
  };
}

export interface ArticleCard {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}
