# Behaviors — unicodeangel.neocities.org

## Global Behaviors

### Title Animation
- JS typewriter effect: "u n i c o d e a n g e l" typed character by character
- Speed: 100ms per char, restart delay: 1000ms
- Runs only in top-level window (not iframes)

### Fade-in
- Elements with `.fade-in` class start at opacity: 0
- On DOMContentLoaded, `.visible` class added → opacity: 1
- Transition: `opacity 0.5s ease-in`
- Affected elements: `#page1`, `#statuscafe`

### Blinking Text
- `.blink_text` class: animation `blinker 1.5s infinite`
- Keyframes: opacity 1 at 0–49%, opacity 0 at 60–99%, opacity 1 at 100%

### Bubble Text Effect
- Elements with `.bubble` class get animated color cycling
- Colors interpolate between bg (#ffffff) and fg (#9da7b3)
- 10 shades, speed: 80ms interval
- Random character activation

### Random Fact in Footer
- `#factDisplay` filled with random quote from 15-item array on load

### Last Updated Date
- `#lastUpdated` filled with "[Jun] 28, 2026" from JS variable

## Navigation Hover
- Nav links: color #9da7b3 → #81a1c8 (no transition specified, instant)
- Nav bullet images: `navcircle.png` → `navcircleblue.png` on hover (CSS content swap)

## Video Button
- Click "TURN OFF" → pauses video → button text becomes "TURN ON"
- Click "TURN ON" → plays video → button text becomes "TURN OFF"
- Button hover: background #ddd, color #81a1c8

## Button Window Cycling
- "next button >" click shows next of 3 GIF buttons (cycles 0→1→2→0)
- Corresponding textarea updates to show hotlink code for that button
- Initial state: random button shown

## Loader Circle
- `#loadercircle`: CSS animation `rotate 1.3s linear infinite` (continuous spin)

## Responsive
- Only one media query: `@media screen and (max-width: 767px)` for bgVideo sizing
- No responsive layout changes — site is desktop-only (explicitly noted on page)
- On mobile: horizontal scroll, video container width: 400%

## No Smooth Scroll Library
- No Lenis, Locomotive Scroll, or similar detected
- No `.lenis`, `.locomotive-scroll` classes
- Standard browser scroll

## No Scroll-Driven Animations
- No IntersectionObserver
- No scroll event listeners
- No scroll-snap
- All animations are CSS keyframe or JS timer-based
