import { useState, useEffect } from 'react';

const PLAYLIST = [
  { title: "Habanera (Techno Edit)", artist: "Yelle", duration: 178 },
  { title: "À Cause Des Garçons",    artist: "Yelle", duration: 193 },
  { title: "Je Veux Te Voir",        artist: "Yelle", duration: 202 },
];

interface Props { title?: string; artist?: string; }

type Zone = 'prev' | 'next' | 'center' | 'menu' | 'bottom' | null;

export default function iPodPlayer({ title }: Props) {
  const startIdx = PLAYLIST.findIndex(t => t.title === title);
  const [trackIdx, setTrackIdx] = useState(startIdx >= 0 ? startIdx : 0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [pressedZone, setPressedZone] = useState<Zone>(null);

  const track = PLAYLIST[trackIdx];
  const progress = (elapsed / track.duration) * 100;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setElapsed(prev => {
        if (prev >= track.duration) {
          setTrackIdx(i => (i + 1) % PLAYLIST.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isPlaying, track.duration]);

  useEffect(() => { setElapsed(0); }, [trackIdx]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const handlePrev = () => setTrackIdx(i => (i - 1 + PLAYLIST.length) % PLAYLIST.length);
  const handleNext = () => setTrackIdx(i => (i + 1) % PLAYLIST.length);
  const handlePlay = () => setIsPlaying(p => !p);

  const zoneBase: React.CSSProperties = {
    position: 'absolute', inset: 0, background: 'transparent',
    border: 'none', cursor: 'pointer', padding: 0,
    transition: 'background 0.08s',
  };
  const zonePressed: React.CSSProperties = {
    background: 'radial-gradient(circle at center, rgba(74,143,212,0.18) 0%, rgba(74,143,212,0.08) 100%)',
  };

  const centerPressed = pressedZone === 'center';

  return (
    <>
      <style>{`
        @keyframes ipod-eq {
          from { height: 3px; }
          to   { height: 10px; }
        }
      `}</style>
      <div style={{ margin: '0 auto', width: 200 }}>
        {/* nano body */}
        <div style={{
          background: 'linear-gradient(160deg, #eef3fa 0%, #e4eef8 40%, #eef3fa 100%)',
          border: '1px solid #b8cce0',
          borderRadius: 22,
          boxShadow: '0 0 0 1px rgba(255,255,255,0.7) inset, 0 4px 24px rgba(100,130,180,0.18), 0 1px 6px rgba(100,130,180,0.12)',
          padding: '12px 14px 16px',
        }}>
          {/* screen */}
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f8fc 50%, #ffffff 100%)',
            borderRadius: 8,
            padding: '8px 10px 6px',
            border: '1px solid #c4ceda',
            boxShadow: 'inset 0 0 8px rgba(180,200,230,0.25), 0 1px 3px rgba(100,130,180,0.08)',
            marginBottom: 10,
          }}>
            {/* top row: EQ + label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              {isPlaying ? (
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 10 }}>
                  {[0, 0.15, 0.3, 0.1].map((delay, i) => (
                    <div key={i} style={{
                      width: 2, borderRadius: 1, background: '#6aabf0',
                      animation: `ipod-eq 0.8s ease-in-out ${delay}s infinite alternate`,
                    }} />
                  ))}
                </div>
              ) : (
                <span style={{ fontSize: 9, color: '#bcc7d4', lineHeight: 1 }}>♪</span>
              )}
              <span style={{
                fontFamily: 'var(--font-forced-square)',
                fontSize: 7,
                letterSpacing: 1.5,
                color: '#bcc7d4',
                textTransform: 'uppercase',
              }}>Now Playing</span>
            </div>
            {/* title */}
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              color: '#5a9fd8',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: 1,
            }}>{track.title}</div>
            {/* artist */}
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              color: '#7a8799',
              marginBottom: 6,
            }}>{track.artist}</div>
            {/* progress bar */}
            <div style={{
              height: 3,
              borderRadius: 2,
              background: 'rgba(180,210,240,0.3)',
              marginBottom: 3,
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                borderRadius: 2,
                background: 'linear-gradient(90deg,#6aabf0,#a8d4ff)',
                width: `${progress}%`,
                transition: 'width 0.5s linear',
              }} />
            </div>
            {/* time row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-forced-square)',
              fontSize: 8,
              color: '#bcc7d4',
              letterSpacing: 1,
            }}>
              <span>{fmt(elapsed)}</span>
              <span>-{fmt(track.duration - elapsed)}</span>
            </div>
          </div>

          {/* divider */}
          <div style={{
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(160,185,215,0.5) 30%, rgba(160,185,215,0.5) 70%, transparent)',
            marginBottom: 10,
          }} />

          {/* click wheel */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: 116,
              height: 116,
              borderRadius: '50%',
              background: 'linear-gradient(145deg, #f5f8fc 0%, #e8f0f8 100%)',
              border: '1px solid #c4d4e4',
              boxShadow: '0 2px 8px rgba(100,140,190,0.2), inset 0 1px 3px rgba(255,255,255,0.8)',
              overflow: 'hidden',
            }}>
              {/* zone buttons */}
              <button
                aria-label="menu"
                style={{ ...zoneBase, clipPath: 'polygon(20% 0%, 80% 0%, 50% 50%)', ...(pressedZone === 'menu' ? zonePressed : {}) }}
                onMouseDown={() => setPressedZone('menu')}
                onMouseUp={() => setPressedZone(null)}
                onMouseLeave={() => setPressedZone(null)}
                onTouchStart={() => setPressedZone('menu')}
                onTouchEnd={() => setPressedZone(null)}
              />
              <button
                aria-label="previous"
                style={{ ...zoneBase, clipPath: 'polygon(0% 20%, 0% 80%, 50% 50%)', ...(pressedZone === 'prev' ? zonePressed : {}) }}
                onMouseDown={() => setPressedZone('prev')}
                onMouseUp={() => setPressedZone(null)}
                onMouseLeave={() => setPressedZone(null)}
                onTouchStart={() => setPressedZone('prev')}
                onTouchEnd={() => { setPressedZone(null); handlePrev(); }}
                onClick={handlePrev}
              />
              <button
                aria-label="next"
                style={{ ...zoneBase, clipPath: 'polygon(100% 20%, 100% 80%, 50% 50%)', ...(pressedZone === 'next' ? zonePressed : {}) }}
                onMouseDown={() => setPressedZone('next')}
                onMouseUp={() => setPressedZone(null)}
                onMouseLeave={() => setPressedZone(null)}
                onTouchStart={() => setPressedZone('next')}
                onTouchEnd={() => { setPressedZone(null); handleNext(); }}
                onClick={handleNext}
              />
              <button
                aria-label="play/pause"
                style={{ ...zoneBase, clipPath: 'polygon(20% 100%, 80% 100%, 50% 50%)', ...(pressedZone === 'bottom' ? zonePressed : {}) }}
                onMouseDown={() => setPressedZone('bottom' as Zone)}
                onMouseUp={() => setPressedZone(null)}
                onMouseLeave={() => setPressedZone(null)}
                onTouchStart={() => setPressedZone('bottom' as Zone)}
                onTouchEnd={() => { setPressedZone(null); handlePlay(); }}
                onClick={handlePlay}
              />

              {/* labels */}
              <span style={{
                position: 'absolute', top: 7, left: '50%', transform: 'translateX(-50%)',
                fontFamily: 'var(--font-forced-square)', fontSize: 7, color: '#8aa8c8',
                letterSpacing: 1.5, pointerEvents: 'none', userSelect: 'none' as const,
              }}>MENU</span>
              <span style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', lineHeight: 1 }}>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="#8aa8c8"><rect x="0" y="0" width="2" height="10"/><polygon points="3,5 10,0 10,10"/></svg>
              </span>
              <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', lineHeight: 1 }}>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="#8aa8c8"><polygon points="0,0 7,5 0,10"/><rect x="9" y="0" width="2" height="10"/></svg>
              </span>
              <span style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none', lineHeight: 1 }}>
                <svg width="9" height="9" viewBox="0 0 9 9" fill="#8aa8c8"><polygon points="0,0 9,4.5 0,9"/></svg>
              </span>

              {/* center button */}
              <button
                aria-label="play/pause"
                onClick={handlePlay}
                onMouseDown={() => setPressedZone('center')}
                onMouseUp={() => setPressedZone(null)}
                onMouseLeave={() => setPressedZone(null)}
                onTouchStart={() => setPressedZone('center')}
                onTouchEnd={() => { setPressedZone(null); handlePlay(); }}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: centerPressed
                    ? 'linear-gradient(180deg,#dce8f5,#e8f0fa)'
                    : 'linear-gradient(145deg,#f0f5fc,#e0ecf8)',
                  boxShadow: centerPressed
                    ? 'inset 0 2px 5px rgba(100,150,210,0.35)'
                    : '0 2px 4px rgba(100,140,190,0.25), inset 0 1px 2px rgba(255,255,255,0.9)',
                  border: '1px solid #c4d4e4',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: centerPressed ? 'none' : 'box-shadow 0.15s',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
