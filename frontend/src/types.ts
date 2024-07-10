
type ComponentType = "layout.hero" | "layout.card-grid";

interface Base<T extends ComponentType, D extends {} = {}> {
  __component: T;
  id: string;
  createdAt: string;
  updatedAt: string;
  data: D;
}

export interface NavLink {
  href: string;
  text: string;
  isExternal: boolean;
  isPrimary: boolean;
}

export type Block = HeroProps | CardGridProps;

export interface HeroProps extends Base<"layout.hero"> {
    heading: string;
    text: string;
    topLink?: NavLink;
    buttonLink?: NavLink[];
    image: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
}


export interface CardGridProps extends Base<"layout.card-grid"> {
    cardItems: {
      id: string;
      heading: string;
      text: string;
      icon: string;
    }[];
}


