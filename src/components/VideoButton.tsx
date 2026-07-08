import { useState } from 'react';

export default function VideoButton() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const video = document.getElementById('bg-video') as HTMLVideoElement | null;
    if (video) {
      isPlaying ? video.pause() : video.play();
    }
    setIsPlaying(p => !p);
  };

  return (
    <div style={{ marginTop: 12 }}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '100%',
          padding: '7px 0',
          border: '1px solid var(--ua-panel-border)',
          borderRadius: 12,
          color: hovered ? '#4a8fd4' : '#8b939c',
          fontFamily: 'var(--font-forced-square)',
          fontSize: 12,
          letterSpacing: 2,
          cursor: 'pointer',
          background: hovered
            ? 'rgba(100,170,240,0.08)'
            : 'linear-gradient(180deg,#ffffff,#f0f4fa)',
          transition: 'color 0.15s, background 0.15s',
          boxShadow: 'inset 0 -1px 3px rgba(180,200,230,0.3)',
        }}
      >
        {isPlaying ? '◼ BG OFF' : '▶ BG ON'}
      </button>
    </div>
  );
}
