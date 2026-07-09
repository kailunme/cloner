import { useState } from 'react';

const IconPlay = () => (
  <svg width="8" height="9" viewBox="0 0 8 9" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 6 }}>
    <polygon points="0,0 8,4.5 0,9" fill="currentColor" />
  </svg>
);

const IconStop = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 6 }}>
    <rect width="8" height="8" fill="currentColor" />
  </svg>
);

export default function VideoButton() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleClick = () => {
    const video = document.getElementById('bg-video') as HTMLVideoElement | null;
    if (!video) return;
    const playing = !video.paused;
    if (playing) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  let bg = 'linear-gradient(180deg,#ffffff,#f0f4fa)';
  let shadow = '0 1px 3px rgba(180,200,230,0.4), inset 0 -1px 3px rgba(180,200,230,0.3)';
  let color = '#8b939c';
  let transform = 'translateY(0)';
  let borderColor = 'var(--ua-panel-border)';

  if (pressed) {
    bg = 'linear-gradient(180deg,#dce8f5,#e8f0fa)';
    shadow = 'inset 0 2px 5px rgba(100,150,210,0.35), inset 0 1px 2px rgba(80,130,190,0.2)';
    color = '#4a8fd4';
    transform = 'translateY(1px)';
    borderColor = 'rgba(100,160,220,0.6)';
  } else if (hovered) {
    bg = 'linear-gradient(180deg,#f0f6ff,#e8f0fa)';
    shadow = '0 2px 6px rgba(100,160,220,0.2), inset 0 -1px 3px rgba(180,200,230,0.3)';
    color = '#4a8fd4';
    borderColor = 'rgba(100,160,220,0.5)';
  }

  return (
    <div style={{ marginTop: 12 }}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        style={{
          width: '100%',
          padding: '7px 0',
          border: `1px solid ${borderColor}`,
          borderRadius: 12,
          color,
          fontFamily: 'var(--font-forced-square)',
          fontSize: 12,
          letterSpacing: 2,
          cursor: 'pointer',
          background: bg,
          transition: pressed ? 'none' : 'color 0.15s, background 0.15s, box-shadow 0.15s, border-color 0.15s',
          boxShadow: shadow,
          transform,
          outline: 'none',
          userSelect: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isPlaying ? <><IconStop />BG OFF</> : <><IconPlay />BG ON</>}
      </button>
    </div>
  );
}
