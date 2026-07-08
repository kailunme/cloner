# Page Topology — unicodeangel.neocities.org

## Layout Architecture
Three-column layout using absolute positioning (NOT flexbox/grid).
- `.row` — relative container, margin-left: 30px
- `.column.left` — position: absolute, top: 20px, min-width: 220px
- `.column.middle` — position: absolute, top: 20px, left: 240px, min-width: 500px
- `.column.right` — position: absolute, top: 20px, left: 770px, min-width: 300px

Background video fixed behind everything (z-index: -1).

## Sections (top to bottom, left to right)

### Z-index layers
- `#bgVideoContainer` — fixed, z-index: -1 (background video)
- `#vidbutton` — z-index: 200 (play/pause button, overlays everything)
- All window panels — z-index: 1
- Toolbar spans — z-index: 10–100

---

### LEFT COLUMN

#### 1. NavBar Window (`.navbar`)
- **Type:** flow content
- **Interaction model:** static + hover
- Height: 300px
- Background image: `imgs/NavTest.png` (200px, no-repeat)
- Contains:
  - `#loadercircle` — spinning loader gif (animation: rotate 1.3s linear infinite)
  - `.navbar-title` — "nAVI" in Space Age font, gradient text
  - `.navbar-title-2` — "anget0" in Braille font
  - `#navtable` — nav links: HOME, INFO, BLOG, LINKS, CACHE
- Hover: nav links change color #9da7b3 → #81a1c8
- Nav bullets: `imgs/navcircle.png` changes to `imgs/navcircleblue.png` on hover

#### 2. Video Button (`#vidbutton`)
- **Interaction model:** click-driven
- Button: "TURN OFF" / "TURN ON" toggles background video
- Font: "Forced Square", text-transform: uppercase
- Colors: #a0a6af text, #c9d1dd border, gradient bg

#### 3. Mood Window (`.small-content-mood`)
- **Interaction model:** static (external iframe/img)
- Contains:
  - "feeling" label + imood.com gif embed
  - "status" label + statuscafe widget (external script)

#### 4. Button Window (`.small-content-button`)
- **Interaction model:** click-driven (next button cycles through 3 GIF buttons)
- Shows UnicodeAngelButton.gif / Button2.gif / Button3.gif
- "next button >" link cycles through
- Textarea below shows hotlink embed code for current button

---

### MIDDLE COLUMN

#### 5. Main Content Window (`.content`)
- **Interaction model:** static (single page on index.html)
- Width: 500px, border-radius: 18px
- Toolbar: "welcome" in Space Age gradient font
- Content inner: `.content-inner` with text content
  - h1: "Where am I ?"
  - h1: "What lies here ?" + CatAsciiArt_ByYokiie.gif inline
  - h1: "Why Unicode Angel ?" + AsciiCatSleeping_By_Yokiie.gif inline
- Footer: `.content-footer` — shows random rotating quote (JS-generated)

#### 6. Dot Loader Image (`#middle-column-img`)
- `imgs/dotloader.gif`, width: 500px, opacity: 0.3, float right

---

### RIGHT COLUMN

#### 7. Updates Window (`.small-content-updates` #1)
- **Interaction model:** static (iframe embed)
- Contains pictochat iframe: `pictochat.html` height: 400px

#### 8. Gallery Window (`.small-content-updates` #2)
- **Interaction model:** static + JS-loaded content
- "Visit the Fan Art Gallery!" blink text
- Latest blog post (loaded via JS from `/blog/resources/main.js`)

#### 9. Stats Window (`.small-content-stats`)
- **Interaction model:** static
- "your digital ID number" — FC2 counter embed
- "timecode infos" — Created: July 31 2024, Last updated: loaded via JS

---

### BACKGROUND

#### 10. Background Video (`#bgVideoContainer`)
- Fixed, covers full viewport, z-index: -1
- `imgs/background.mp4` — autoplay, muted, loop

## Dependencies
- `onLoad.js` — title animation, random fact, fade-in, bubble text, video controls, last updated date
- `switchPage.js` — page switching (not used on index.html which only has page1)
- External: imood.com widget, statuscafe widget, FC2 counter
- `pictochat.html` iframe
