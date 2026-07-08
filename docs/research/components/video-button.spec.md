# VideoButton Specification

## Overview
- **Target file:** `src/components/VideoButton.tsx`
- **Interaction model:** click-driven

## DOM Structure
```
div#vidbutton
  button#vidBtn (onclick="PlayPauseVideo()") "TURN OFF"
  p "moving background"
```

## Computed Styles

### #vidbutton container
- position: relative
- top: -20px
- margin-left: 30px
- margin-bottom: 5px
- text-align: left
- text-shadow: 0px 0px 4px rgb(255, 255, 255)
- color: #a0a6af
- font-family: "Forced Square"
- font-size: 14px
- text-transform: uppercase
- z-index: 200

### #vidbutton p
- margin-top: 5px
- margin-left: 5px
- margin-bottom: 0px
- font-size: 14px

### #vidBtn button
- width: 110px
- font-size: 15px
- padding: 10px
- border: 1px solid #c9d1dd
- border-radius: 20px
- color: #8b939c
- font-family: "Forced Square"
- cursor: help
- background: radial-gradient(75% 50% at 50% 0%, rgb(244, 248, 255), white), radial-gradient(75% 50% at 50% 70%, #ffffff, white)
- box-shadow: inset 0 -2px 4px 0px #b0b3b8

## States & Behaviors

### Video toggle click
- Default state: button text "TURN OFF" (video playing)
- After click: video paused, button text → "TURN ON"
- After second click: video playing, button text → "TURN OFF"
- Implemented via `window.PlayPauseVideo()` function

### Button hover
- background: #ddd
- color: #81a1c8
- No transition specified (instant)

## Assets
- Font: "Forced Square" — `/fonts/FORCEDSQUARE.ttf`

## Text Content (verbatim)
- Button: "TURN OFF" (default) / "TURN ON" (paused state)
- Label: "moving background"

## Responsive Behavior
- Desktop: displayed below navbar in left column
- Mobile: N/A (desktop-only site)
