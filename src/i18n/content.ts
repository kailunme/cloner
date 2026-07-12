export type Locale = 'en' | 'zh' | 'ja';

export interface NavContent {
  handle: string;
  links: { label: string; href: string; active?: boolean }[];
}

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  href: string;
  star: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface MainContent {
  welcomeP1: string;
  welcomeP2: string;
  blinkNotice: string;
  factBar: string;
  projectsLabel: string;
  skillsLabel: string;
  proficiencyLabel: string;
  projects: Project[];
  skills: Skill[];
}

export interface Update {
  date: string;
  text: string;
}

export interface SidebarContent {
  nowPlayingTitle: string;
  nowPlayingArtist: string;
  listeningLabel: string;
  statsTitle: string;
  buttonTitle: string;
  stats: { label: string; value: string }[];
  linkBackLabel: string;
}

export const nav: Record<Locale, NavContent> = {
  en: {
    handle: '@kailun.me',
    links: [
      { label: 'HOME',     href: '/',        active: true },
      { label: 'ABOUT',    href: '/about' },
      { label: 'PROJECTS', href: '/projects' },
      { label: 'BLOG',     href: '/blog' },
      { label: 'LINKS',    href: '/links' },
    ],
  },
  zh: {
    handle: '@kailun',
    links: [
      { label: 'HOME',     href: '/zh/',        active: true },
      { label: 'ABOUT',    href: '/zh/about' },
      { label: 'PROJECTS', href: '/zh/projects' },
      { label: 'BLOG',     href: '/zh/blog' },
      { label: 'LINKS',    href: '/zh/links' },
    ],
  },
  ja: {
    handle: '@kailun',
    links: [
      { label: 'HOME',     href: '/ja/',        active: true },
      { label: 'ABOUT',    href: '/ja/about' },
      { label: 'PROJECTS', href: '/ja/projects' },
      { label: 'BLOG',     href: '/ja/blog' },
      { label: 'LINKS',    href: '/ja/links' },
    ],
  },
};

export const main: Record<Locale, MainContent> = {
  en: {
    welcomeP1: `hey — I'm <span class="mc-highlight">Kai</span>, a software engineer obsessed with the intersection of <span class="mc-highlight">systems programming</span>, <span class="mc-highlight">generative art</span>, and the aesthetics of early internet culture.`,
    welcomeP2: `I build tools that make computers feel alive — from low-level network utilities to browser-based creative environments. This is my digital space to share projects, writing, and the things I'm collecting on the web.`,
    blinkNotice: 'still under construction — thank you for your patience',
    factBar: '∷ in the realm of zeros and ones, I search for my soul ∷',
    projectsLabel: 'featured',
    skillsLabel: 'skills',
    proficiencyLabel: 'proficiency',
    projects: [
      { name: 'neural-canvas', desc: 'Generative art using WebGL + diffusion models', tags: ['WebGL', 'TypeScript', 'AI'], href: '#', star: '42' },
      { name: 'pixelstream',   desc: 'Real-time pixel art collaboration tool',        tags: ['WebSocket', 'React', 'Canvas'], href: '#', star: '18' },
      { name: 'ascii-forge',   desc: 'CLI for converting images to ASCII art',         tags: ['Rust', 'CLI'], href: '#', star: '91' },
    ],
    skills: [
      { name: 'TypeScript',     level: 90 },
      { name: 'Rust',           level: 70 },
      { name: 'WebGL / GLSL',   level: 60 },
      { name: 'Systems Design', level: 75 },
    ],
  },
  zh: {
    welcomeP1: `你好 — 我是 <span class="mc-highlight">Kai</span>，一名软件工程师，痴迷于<span class="mc-highlight">系统编程</span>、<span class="mc-highlight">生成艺术</span>与早期互联网美学的交汇之处。`,
    welcomeP2: `我构建让计算机充满生命感的工具 — 从底层网络工具到基于浏览器的创意环境。这里是我分享项目、文章以及网络收藏的数字空间。`,
    blinkNotice: '网站正在建设中 — 感谢你的耐心等待',
    factBar: '∷ 在零与一的世界里，我寻找灵魂的栖所 ∷',
    projectsLabel: '精选',
    skillsLabel: '技能',
    proficiencyLabel: '熟练度',
    projects: [
      { name: 'neural-canvas', desc: '使用 WebGL 与扩散模型的生成艺术工具', tags: ['WebGL', 'TypeScript', 'AI'], href: '#', star: '42' },
      { name: 'pixelstream',   desc: '实时像素艺术协作平台',                  tags: ['WebSocket', 'React', 'Canvas'], href: '#', star: '18' },
      { name: 'ascii-forge',   desc: '将图片转换为 ASCII 艺术的命令行工具',   tags: ['Rust', 'CLI'], href: '#', star: '91' },
    ],
    skills: [
      { name: 'TypeScript',  level: 90 },
      { name: 'Rust',        level: 70 },
      { name: 'WebGL / GLSL', level: 60 },
      { name: '系统设计',    level: 75 },
    ],
  },
  ja: {
    welcomeP1: `こんにちは — 私は <span class="mc-highlight">Kai</span>、<span class="mc-highlight">システムプログラミング</span>、<span class="mc-highlight">ジェネラティブアート</span>、そして初期インターネット美学の交差点に魅了されたソフトウェアエンジニアです。`,
    welcomeP2: `コンピュータに命を吹き込むツールを作っています — 低レベルのネットワークユーティリティから、ブラウザベースのクリエイティブ環境まで。ここはプロジェクト、文章、そしてウェブで集めたものを共有するデジタル空間です。`,
    blinkNotice: 'サイトは現在制作中です — しばらくお待ちください',
    factBar: '∷ ゼロとイチの世界で、魂の居場所を探している ∷',
    projectsLabel: '注目作品',
    skillsLabel: 'スキル',
    proficiencyLabel: '習熟度',
    projects: [
      { name: 'neural-canvas', desc: 'WebGL と拡散モデルを使ったジェネラティブアート', tags: ['WebGL', 'TypeScript', 'AI'], href: '#', star: '42' },
      { name: 'pixelstream',   desc: 'リアルタイムピクセルアート共同制作ツール',        tags: ['WebSocket', 'React', 'Canvas'], href: '#', star: '18' },
      { name: 'ascii-forge',   desc: '画像をASCIIアートに変換するCLIツール',            tags: ['Rust', 'CLI'], href: '#', star: '91' },
    ],
    skills: [
      { name: 'TypeScript',       level: 90 },
      { name: 'Rust',             level: 70 },
      { name: 'WebGL / GLSL',     level: 60 },
      { name: 'システム設計',     level: 75 },
    ],
  },
};

export const updates: Record<Locale, Update[]> = {
  en: [
    { date: '2026-07-08', text: 'launched new personal site on Astro' },
    { date: '2026-06-30', text: 'published ascii-forge v2.0 on crates.io' },
    { date: '2026-06-15', text: 'added WebGL renderer to neural-canvas' },
    { date: '2026-05-20', text: 'moved hosting to Cloudflare Pages' },
  ],
  zh: [
    { date: '2026-07-08', text: '基于 Astro 的新版个人网站正式上线' },
    { date: '2026-06-30', text: 'ascii-forge v2.0 发布至 crates.io' },
    { date: '2026-06-15', text: '为 neural-canvas 添加 WebGL 渲染器' },
    { date: '2026-05-20', text: '将网站托管迁移至 Cloudflare Pages' },
  ],
  ja: [
    { date: '2026-07-08', text: 'Astro で新しい個人サイトを公開しました' },
    { date: '2026-06-30', text: 'ascii-forge v2.0 を crates.io で公開' },
    { date: '2026-06-15', text: 'neural-canvas に WebGL レンダラーを追加' },
    { date: '2026-05-20', text: 'ホスティングを Cloudflare Pages に移行' },
  ],
};

export const sidebar: Record<Locale, SidebarContent> = {
  en: {
    nowPlayingTitle: 'Habanera (Techno Edit)',
    nowPlayingArtist: 'Yelle',
    listeningLabel: 'listening',
    statsTitle: 'STATS',
    buttonTitle: 'BUTTON',
    linkBackLabel: 'link back ↑',
    stats: [
      { label: 'Created',    value: 'Jul 2024' },
      { label: 'Updated',    value: 'Jul 2026' },
      { label: 'Powered by', value: 'Astro 7' },
    ],
  },
  zh: {
    nowPlayingTitle: 'Habanera (Techno Edit)',
    nowPlayingArtist: 'Yelle',
    listeningLabel: '正在播放',
    statsTitle: 'STATS',
    buttonTitle: 'BUTTON',
    linkBackLabel: '回链 ↑',
    stats: [
      { label: '创建时间', value: '2024年7月' },
      { label: '更新时间', value: '2026年7月' },
      { label: '技术栈',   value: 'Astro 7' },
    ],
  },
  ja: {
    nowPlayingTitle: 'Habanera (Techno Edit)',
    nowPlayingArtist: 'Yelle',
    listeningLabel: '再生中',
    statsTitle: 'STATS',
    buttonTitle: 'BUTTON',
    linkBackLabel: 'リンクバック ↑',
    stats: [
      { label: '作成日',   value: '2024年7月' },
      { label: '更新日',   value: '2026年7月' },
      { label: '使用技術', value: 'Astro 7' },
    ],
  },
};
