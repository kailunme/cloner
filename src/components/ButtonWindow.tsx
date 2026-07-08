import { useState } from 'react';

const BUTTONS = [
  {
    gif: '/images/UnicodeAngelButton.gif',
    opacity: 0.7,
    code: '<a href="https://unicodeangel.neocities.org" target="_blank"><img src="https://unicodeangel.neocities.org/imgs/UnicodeAngelButton.gif"></a>',
  },
  {
    gif: '/images/UnicodeAngelButton2.gif',
    opacity: 0.7,
    code: '<a href="https://unicodeangel.neocities.org" target="_blank"><img src="https://unicodeangel.neocities.org/imgs/UnicodeAngelButton2.gif"></a>',
  },
  {
    gif: '/images/UnicodeAngelButton3.gif',
    opacity: 0.8,
    code: '<a href="https://unicodeangel.neocities.org" target="_blank"><img src="https://unicodeangel.neocities.org/imgs/UnicodeAngelButton3.gif"></a>',
  },
];

export default function ButtonWindow() {
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * 3));
  const current = BUTTONS[idx];

  return (
    <div
      style={{
        position: 'relative',
        marginTop: 10,
        top: '-10px',
        left: 20,
        width: 180,
        backgroundImage: 'linear-gradient(90deg, #fafbfb 0%, #f7f7f7 50%, #fafbfb 100%)',
        border: '1.5px solid #c9c9c9',
        borderRadius: 22,
        boxShadow: 'inset 0px -5px 5px -4px #dadada, 0px 0px 5px 0px #dadada',
      }}
    >
      {/* Toolbar */}
      <div
        className="ua-toolbar"
        style={{ position: 'relative', height: 15, margin: '0 3px', borderRadius: '25px 25px 15px 15px', padding: '12px 16px' }}
      >
        <img
          src="/images/xbutton.png"
          alt="close"
          style={{ position: 'relative', marginTop: '-1.5%', left: -7, float: 'left', height: 24, width: 'auto', zIndex: 100 }}
        />
        <span
          style={{ position: 'relative', color: '#555a61', fontFamily: 'var(--font-sf-telegraphic)', fontSize: 24, letterSpacing: 1, lineHeight: '30px', float: 'right', zIndex: 100 }}
        >
          BUTTON
        </span>
      </div>

      {/* GIF display */}
      <div
        className="ua-inner"
        style={{ height: 30, padding: 0, marginTop: 40 }}
      >
        <span style={{ position: 'relative', top: -22, left: 10, fontFamily: 'var(--font-aldrich)', fontSize: 12, color: '#9da7b3' }}>
          images{' '}
          <span
            onClick={() => setIdx((i) => (i + 1) % 3)}
            style={{ color: '#74a4db', fontFamily: 'var(--font-aldrich)', cursor: 'pointer' }}
          >
            next button &gt;
          </span>
        </span>
        <img
          src={current.gif}
          alt={`button ${idx + 1}`}
          style={{ marginLeft: 35, marginTop: -7, opacity: current.opacity, display: 'block' }}
        />
      </div>

      {/* Embed code */}
      <div
        className="ua-inner"
        style={{ padding: 3, marginTop: 45, height: 60 }}
      >
        <span style={{ position: 'relative', top: -35, left: 7, fontFamily: 'var(--font-aldrich)', fontSize: 12, color: '#9da7b3', display: 'block' }}>
          code (hotlinking encouraged)
        </span>
        <textarea
          readOnly
          value={current.code}
          style={{ background: 'transparent', border: '0px dashed #9b9c9c', borderRadius: 10, width: '95%', height: 48, position: 'relative', top: -25, left: 5, fontFamily: 'var(--font-aldrich)', fontSize: 12, color: '#9da7b3', resize: 'none', overflow: 'hidden' }}
        />
      </div>
    </div>
  );
}
