import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logoText: Schema.Attribute.String;
    navItems: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    subHeading: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    topLink: Schema.Attribute.Component<'elements.link', false>;
    buttonLink: Schema.Attribute.Component<'elements.link', true>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    text: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_grids';
  info: {
    displayName: 'Card Grid';
    description: '';
  };
  attributes: {
    cardItems: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['Frame', 'Download', 'Globe', 'Sparkles', 'LayoutPanelLeft', 'Palette']
    >;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.top-nav': LayoutTopNav;
      'layout.section-heading': LayoutSectionHeading;
      'layout.hero': LayoutHero;
      'layout.footer': LayoutFooter;
      'layout.card-grid': LayoutCardGrid;
      'elements.link': ElementsLink;
      'elements.card': ElementsCard;
    }
  }
}
