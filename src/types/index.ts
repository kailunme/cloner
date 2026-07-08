export interface NavLink {
  label: string;
  href: string;
}

export interface ButtonGif {
  id: string;
  src: string;
  embedCode: string;
}

export interface TimecodeInfo {
  createdOn: string;
  lastUpdated: string;
}

export interface MainContentPage {
  id: string;
  sections: ContentSection[];
}

export interface ContentSection {
  heading?: string;
  body: string;
  blink?: boolean;
  blinkColor?: string;
  inlineGif?: string;
}
