# NavBar Specification

## Overview
- **Target file:** `src/components/NavBar.tsx`
- **Interaction model:** static + hover

## DOM Structure
```
div.navbar
  img#loadercircle (spinning loader)
  div.navbar-title ("nAVI")
  div.navbar-title-2 ("ange" + text "t0")
  table#navtable
    tr > td#navhover > a[href="index.html"] "HOME"
    tr > td#navhover > a[href="info.html"] "INFO"
    tr > td#navhover > a[href="blog/index.html"] "BLOG"
    tr > td#navhover > a[href="links.html"] "LINKS"
    tr > td#navhover > a[href="cache.html"] "CACHE"
    tr > td#navhover > a[href="#"] (empty)
```

## Computed Styles

### .navbar container
- height: 300px
- background-image: url('/images/NavTest.png')
- background-size: 200px
- background-repeat: no-repeat
- color: white
- font-family: Verdana
- z-index: 0

### #loadercircle
- position: absolute
- height: 25px
- margin-top: 12px
- margin-left: 12px
- image-rendering: crisp-edges
- animation: rotate 1.3s linear infinite

### .navbar-title ("nAVI")
- margin-top: 13px
- line-height: 40px
- padding-left: 55px
- font-family: "Space Age"
- background: linear-gradient(0deg, rgba(129,161,200,1) 0%, rgba(167,213,255,1) 55%)
- background-clip: text
- color: transparent
- font-size: 42px
- letter-spacing: 3px
- display: inline-block
- transform: scale(1, 0.8) (webkit/moz/ms/o)

### .navbar-title-2 ("anget0")
- margin-top: -6px
- padding-left: 54px
- line-height: 30px
- font-family: "Braille"
- color: #c9cfd6
- font-size: 24px
- letter-spacing: 1px
- The `text` element inside has: letter-spacing: 3px

### #navtable (table)
- margin-left: 50px
- margin-top: 1px
- width: 125px
- border-collapse: collapse
- line-height: 20px

### navbar td (#navhover)
- height: 10px
- border-top: 10px solid transparent
- font-family: "Forced Square"
- font-size: 20px
- padding: 1px 5px 1px 1px
- text-align: right
- vertical-align: middle
- background-image: url('/images/navcircle.png')
- background-repeat: no-repeat
- background-position: 11px 4px
- background-size: 13px
- image-rendering: pixelated

### navbar a (links)
- position: relative
- font-family: "Forced Square"
- color: #9da7b3
- text-decoration: none
- text-align: right
- display: block
- margin: -5px 0
- padding: 5px 0

### navbar tr::before (separator line)
- position: absolute
- content: ''
- width: 125px
- height: 1px
- background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(189,199,211,1) 25%, rgba(189,199,211,1) 75%, rgba(255,255,255,0.4) 100%)
- box-shadow: 0px 0px 4px 1px #ffffff

## States & Behaviors

### Loader spin
- animation: rotate 1.3s linear infinite
- @keyframes rotate: from transform:rotate(0deg) to transform:rotate(360deg)

### Nav link hover
- color: #9da7b3 → #81a1c8 (instant, no transition)

### Nav bullet hover
- background-image: url('/images/navcircle.png') → url('/images/navcircleblue.png') (instant)

## Assets
- Background image: `/images/NavTest.png`
- Loader: `/images/loadercircle.png`
- Nav bullet: `/images/navcircle.png`
- Nav bullet hover: `/images/navcircleblue.png`
- Font: "Space Age" — `/fonts/spaceage.ttf`
- Font: "Braille" — `/fonts/BRAILLE1.ttf`
- Font: "Forced Square" — `/fonts/FORCEDSQUARE.ttf`

## Text Content (verbatim)
- Title: "nAVI"
- Subtitle: "ange" + "t0" (the "t0" is in a `<text>` element with letter-spacing: 3px)
- Links: HOME, INFO, BLOG, LINKS, CACHE

## Responsive Behavior
- Desktop: absolute positioned, left column
- Mobile: no specific responsive behavior — site is desktop-only
