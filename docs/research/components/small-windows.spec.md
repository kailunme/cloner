# Small Windows Specification (Mood, Button, Stats, Updates, Gallery)

## Overview
All small windows share the same base styling. This spec covers all sidebar widgets.

## Shared Base Styles (.small-content-*)

### Outer container (shared)
- position: relative
- border: 1.5px solid #c9c9c9
- border-radius: 22px
- background-image: linear-gradient(90deg, #fafbfb 0%, #f7f7f7 50%, #fafbfb 100%)
- box-shadow: inset 0px -5px 5px -4px #dadada, 0px 0px 5px 0px #dadada
- z-index: 1

### .small-content-toolbar (shared)
- position: relative
- height: 15px
- margin: 0 3px
- border-radius: 25px 25px 15px 15px
- padding: 12px 16px
- background-color: #f0f0f0
- background-image: radial-gradient(75% 50% at 50% 0%, rgb(244,248,255), transparent), radial-gradient(75% 50% at 50% 70%, #ffffff, transparent)
- ::after: width 101%, height 40px, border-radius 100px, background linear-gradient(180deg, rgb(255,255,255) 5%, rgb(239,242,245) 20%, rgb(255,255,255) 80%, rgba(255,255,255,0) 100%)

### .small-content-toolbar span (title)
- position: relative
- color: #555a61
- font-family: "SF Telegraphic Light"
- font-size: 24px
- letter-spacing: 1px
- line-height: 30px
- float: right
- z-index: 100

### #small-xbutton-right (close button)
- position: relative
- float: left
- height: 24px
- left: -7px
- margin-top: -1.5%
- z-index: 100

### .small-content-inner (shared inner box)
- position: relative
- padding: 0 18px 18px 18px
- margin: 30px 7px 8px 7px
- border: 1.5px solid #c9c9c9
- background-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(250,250,251) 5%, rgba(250,251,251,1) 95%, rgba(255,255,255,1) 100%)
- border-radius: 18px
- box-shadow: inset 0px 0px 5px 0px rgb(202,202,202), 0px -4px 5px -3px #bbbbbb, 0px 5px 1px -3px #ffffff
- z-index: 1

### .small-content-inner span label (Aldrich font labels)
- position: relative
- display: block
- color: #9da7b3
- font-size: 12px
- font-family: "Aldrich", sans-serif (overridden inline to "Aldrich")

---

## 1. Mood Window (.small-content-mood)
- **Target file:** `src/components/MoodWindow.tsx`
- **Interaction model:** static (external embeds)
- position: relative; top: -20px; left: 20px; width: 180px
- Contains 2 `.small-content-inner` boxes:

### Inner 1 — "feeling"
- height: 30px; padding-left/right/bottom: 0px; margin-top: 40px
- Label span: top: -22px; left: 10px; font-family: "Aldrich"  — text: "feeling"
- imood.com img: `https://moods.imood.com/display/uname-yokiie/fg-89929c/bg-fafafb/imood.gif`
  - id="imood"; position: relative; top: -7px; margin: auto; display: block

### Inner 2 — "status"
- Label span: top: -22px; left: -10px; font-family: "Aldrich" — text: "status"
- span.status-text contains #statuscafe div (external script widget)
- #statuscafe-username: padding-bottom 5px; a: color #93bdec, font-family "Forced Square", font-size 18px
- #statuscafe-content: font-family "Aldrich", font-size 14px, padding-bottom 5px
- #statuscafe-date: font-family "Aldrich", italic, font-size 12px

---

## 2. Button Window (.small-content-button)
- **Target file:** `src/components/ButtonWindow.tsx`
- **Interaction model:** click-driven (next button cycles GIFs)
- position: relative; top: -10px; left: 20px; width: 180px

### Inner 1 — GIF display
- height: 30px; padding: 0; margin-top: 40px
- Label: "images" + link "next button >" (id="nextButton", onclick="showNextPage()")
  - link: color #74a4db, font-family "Aldrich"
- GIF area: 3 spans (button1/2/3), only one visible at a time
  - img: margin-left: 35px; margin-top: -7px; opacity: 0.7 (0.8 for button3)
  - button1: `imgs/UnicodeAngelButton.gif`
  - button2: `imgs/UnicodeAngelButton2.gif`
  - button3: `imgs/UnicodeAngelButton3.gif`

### Inner 2 — Embed code textarea
- padding: 3px; margin-top: 45px; height: 60px
- Label: "code (hotlinking encouraged)"
- textarea.noscrollbar: display block, background transparent, border 0px dashed #9b9c9c
  border-radius 10px, width 95%, height 48px, top -25px, left 5px
  font-family "Aldrich", font-size 12px, color #9da7b3, resize none, no scrollbar
- 3 textareas (button1/2/3TextArea), matching active button shown

### Button cycling behavior
- On load: random button shown (0, 1, or 2)
- "next button >" click: currentIndex = (currentIndex + 1) % 3
- Show corresponding button span + textarea, hide others

---

## 3. Stats Window (.small-content-stats)
- **Target file:** `src/components/StatsWindow.tsx`
- **Interaction model:** static
- position: relative; top: 5px; left: 0px; width: 285px

### Inner 1 — Counter
- height: 30px; padding: 0; margin-top: 40px
- Label: "your digital ID number"
- FC2 counter embed (external script — show placeholder text "visitor counter" in clone)

### Inner 2 — Timecode
- padding: 3px; margin-top: 35px; height: 58px
- Label: "timecode infos"
- #timecode table (position absolute, top 10px, width 95%, font-family "Aldrich", font-size 14px):
  - Row 1: "Created on :" | "[July] 31, 2024"
  - Row 2: "Last updated :" | "[Jun] 28, 2026" (populated by JS)

---

## 4. Updates Window (.small-content-updates) — PictoChat
- **Target file:** part of right column layout
- **Interaction model:** static (iframe)
- position: relative; top: 0px; left: 20px (overridden inline: left:0px); width: 285px
- #small-content-pictochat: height 345px, margin-top 25px, padding 18px, border 1.5px solid #c9c9c9, border-radius 18px
- Contains iframe: src="pictochat.html", height 400px, width 400px, border 0, z-index 100
  - iframe position: relative; top: 0px; left: -20px
- In clone: render a placeholder panel with "PICTOCHAT" label and light gray background

---

## 5. Gallery Window (.small-content-updates #2)
- **Target file:** part of right column layout
- **Interaction model:** static + JS-loaded
- position: relative; top: 15px; left: 0px; width: 285px; margin-bottom: 25px
- #small-content-todo: padding 15px all, margin-top 25px, border 1.5px solid #c9c9c9, border-radius 18px

### Content
- span.blink_text (font-size 18px): "Visit the " + link "Fan Art Gallery" (href="onliine/index.html") + " !"
- #latestpost section:
  - #latestposttitle: "Latest blog post" (bold), position absolute top 0, font "Source Code Pro" 14px
    background: linear-gradient(to right, #8bb4ff 0%, #e2fafb 80%, rgba(220,252,252,0) 100%)
    color white, padding-left 10px, text-shadow 0 0 3px #5670a0
  - #latestpostnamebox: overflow hidden, position relative top 10px, width 260px
  - #latestpostname: scrolling marquee animation (scroll-left 10s linear infinite)
    font "Source Code Pro" 13px, color #7b828b, padding-left 10px, white-space nowrap
    In clone: show static placeholder "loading latest post..."

## Assets (all small windows)
- Close button: `/images/xbutton.png` (height 24px)
- Button GIFs: `/images/UnicodeAngelButton.gif`, `UnicodeAngelButton2.gif`, `UnicodeAngelButton3.gif`
- Font: "SF Telegraphic Light" — `/fonts/SFTelegraphicLight.ttf`
- Font: "Aldrich" (Google Fonts), "Source Code Pro" (Google Fonts)

## Responsive Behavior
- All panels: desktop-only, no responsive rules
