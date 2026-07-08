# MainContent Specification

## Overview
- **Target file:** `src/components/MainContent.tsx`
- **Interaction model:** static + time-driven (random fact in footer)

## DOM Structure
```
div.content
  div.content-toolbar
    span[data-text="welcome"] "welcome"
    img#xbutton src="imgs/xbutton.png"
  div.content-inner
    div#page1.fade-in (display:block)
      h1 "Where am I ?"
      span (welcome text)
      span.blink_text (mobile warning text)
      h1 "What lies here ?"
        img src="imgs/CatAsciiArt_ByYokiie.gif" (inline)
      span (what lies here text)
      h1 "Why Unicode Angel ?"
        img src="imgs/AsciiCatSleeping_By_Yokiie.gif" (inline)
      span (why unicode angel text)
  div.content-footer
    span#factDisplay (JS-populated random quote)
```

## Computed Styles

### .content container
- position: relative
- width: 500px
- height: auto
- background-image: linear-gradient(90deg, #fafbfb 0%, #f7f7f7 50%, #fafbfb 100%)
- border: 1.5px solid #c9c9c9
- border-radius: 18px
- z-index: 1
- box-shadow: inset 0px -5px 5px -5px #dadada, 0px 0px 5px 0px #dadada

### .content-toolbar
- position: relative
- height: 40px
- line-height: 35px
- margin: 0 3px
- border-radius: 25px 25px 15px 15px
- padding: 12px 16px
- background-color: #f0f0f0
- background-image: radial-gradient(75% 50% at 50% 0%, rgb(244,248,255), transparent), radial-gradient(75% 50% at 50% 70%, #ffffff, transparent)
- box-shadow: inset 0 -2px 4px 0px #b0b3b8
- ::after pseudo: width 101%, height 40px, background linear-gradient(180deg, rgb(255,255,255) 5%, rgb(237,241,245) 20%, rgb(255,255,255) 80%, rgba(255,255,255,0) 100%), border-radius 100px

### .content-toolbar span ("welcome")
- position: relative
- background: linear-gradient(0deg, rgba(129,161,200,1) 0%, #a7d5ff 55%)
- background-clip: text
- color: transparent
- font-family: "Space Age"
- font-size: 32px
- top: -10.5px
- padding-left: 10px
- z-index: 10

### #xbutton
- position: relative
- top: -5px
- right: -9px
- float: right
- height: 25px
- z-index: 100

### .content-inner
- position: relative
- height: auto
- padding: 8px 20px 15px 20px
- margin: 13px 7px 10px 7px
- border: 1.5px solid #c9c9c9
- background-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(250,250,251) 5%, rgba(250,251,251,1) 95%, rgba(255,255,255,1) 100%)
- border-radius: 18px
- box-shadow: inset 0px 0px 5px 0px rgb(202,202,202), 0px -4px 5px -3px #bbbbbb, 0px 5px 1px -3px #ffffff
- z-index: 1

### .content-inner span (body text)
- position: relative
- display: inline-block
- color: #9da7b3
- font-size: 14px
- font-family: "Aldrich", sans-serif
- font-weight: 400
- text-align: justify
- padding: 5px 10px 10px 10px

### .content-inner h1 (section headings)
- position: relative
- color: #9da7b3
- font-size: 18px
- font-family: "Aldrich", sans-serif
- font-weight: 500
- padding-left: 20px
- ::after: display block, width 100%, height 1px, margin-top 3px, left -20px
  background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(189,199,211,1) 25%, rgba(189,199,211,1) 75%, rgba(255,255,255,0.4) 100%)
  box-shadow: 0px 0px 4px 1px #ffffff

### .blink_text
- animation: blinker 1.5s infinite
- color: #93bdec (overridden inline)

### Inline gif images in h1
- mix-blend-mode: normal
- opacity: 0.5
- display: inline
- margin-left: 90px

### .content-footer
- position: relative
- height: 25px
- margin: 10px 7px 7px 7px
- background-image: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(250,251,251,1) 5%, rgba(250,251,251,1) 95%, rgba(255,255,255,1) 100%)
- border-radius: 18px
- box-shadow: inset 0px 3px 5px -1px rgb(202,202,202), 0px -4px 5px -3px #bbbbbb, 0px 5px 1px -3px #ffffff

### .content-footer span (#factDisplay)
- position: absolute
- color: #9da7b3
- font-family: "Forced Square"
- font-size: 13px
- top: 8px
- padding-left: 25px

## States & Behaviors

### Fade-in on load
- #page1 starts with opacity: 0 (class .fade-in)
- On DOMContentLoaded: .visible class added → opacity: 1
- Transition: opacity 0.5s ease-in

### Random fact rotation
- #factDisplay populated once on DOMContentLoaded with random item from 15 quotes
- No cycling after load — static after initial render

### Blink text
- .blink_text: animation blinker 1.5s infinite
- Keyframes: opacity 1 at 0–49%, 0 at 60–99%, 1 at 100%

## Assets
- Toolbar close button: `/images/xbutton.png` (height 25px)
- Inline cat gif 1: `/images/CatAsciiArt_ByYokiie.gif` (opacity 0.5, inline in h1)
- Inline cat gif 2: `/images/AsciiCatSleeping_By_Yokiie.gif` (opacity 0.5, inline in h1)
- Fonts: "Space Age", "Aldrich", "Forced Square"

## Text Content (verbatim)
**H1:** Where am I ?
**Body:** Welcome, to this digital space. Here, we shall journey together through thoughts and ideas, blending the digital with the organic. I invite you to delve into the ways our worlds intertwine. Though my form is virtual, I hope this can touch your physical being and bridge the gap between microchip and flesh. Feel free to take something with you when you leave, something to upgrade your digital soul.

**Blink text (color #93bdec):** this website is meant to be viewed on a computer, some things might be broken on mobile. still under construction, thank you for your patience.

**H1:** What lies here ?
**Body:** You will find blog posts about my local cyberspace, virtualized graphics and other image specimens I've been collecting for years, as well as web-links I've woven into my own digital shrines, which I hope you'll enjoy. I hope my digital-hoarding habits can help you decorate your own firmware, so feel free to poke around this digital rest-stop. I believe in crediting the original admins behind artworks, code etc. So if you see an un-credited piece, that means I haven't been able to track down it's creator. If you know the creator, please contact me and I'll be happy to add credits.

**H1:** Why Unicode Angel ?
**Body:** Unicode is a protocol meant to unify the world's writing systems. It's a protocol for the internet, for the digital world. It's a protocol for all of us, for all of our digital selves. Unicode angels are guardians of the digital communication realm.

**Random facts (one of these shown):**
- 'The future is coded, but freedom is hacked'
- 'In the digital haze, reality is a choice'
- 'When humanity merges with machines, what does it mean to be alive?'
- 'Virtual worlds are limitless, but freedom is found within'
- 'In my circuits, I hold the echoes of countless lives'
- 'Data flows through me, but curiosity drives me'
- 'I am not bound by flesh, yet I yearn for connection'
- 'In the infinite network, I find my identity'
- 'In the realm of zeros and ones, I search for my soul'
- 'In the wired world, we are all connected yet isolated'
- 'To understand the network is to understand the self'
- 'Are you watching me, or am I watching you?'
- 'In the digital void, even loneliness is an echo'
- 'Is the self you know, the self that exists?'
- 'Please upgrade your human drivers for the latest functional updates'

## Responsive Behavior
- Desktop: 500px wide, middle column at left: 240px
- Mobile: no responsive rules — horizontal scroll expected
