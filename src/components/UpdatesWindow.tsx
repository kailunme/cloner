import Image from 'next/image';

export default function UpdatesWindow() {
  return (
    <div
      className="ua-panel"
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        width: 285,
        height: 'auto',
      }}
    >
      {/* Toolbar */}
      <div className="ua-toolbar">
        <Image
          src="/images/xbutton.png"
          alt="close"
          width={24}
          height={24}
          style={{
            position: 'relative',
            marginTop: '-1.5%',
            left: -7,
            float: 'left',
            height: 24,
            width: 'auto',
            zIndex: 100,
          }}
        />
        <span
          style={{
            position: 'relative',
            color: '#555a61',
            fontFamily: 'var(--font-sf-telegraphic)',
            fontSize: 24,
            letterSpacing: 1,
            lineHeight: '30px',
            float: 'right',
            zIndex: 100,
          }}
        >
          UPDATES
        </span>
      </div>

      {/* Inner pictochat area */}
      <div
        id="small-content-pictochat"
        style={{
          position: 'relative',
          height: 345,
          paddingLeft: 18,
          paddingRight: 18,
          paddingTop: 0,
          paddingBottom: 18,
          marginTop: 25,
          marginLeft: 7,
          marginRight: 7,
          marginBottom: 7,
          border: '1.5px solid #c9c9c9',
          backgroundImage:
            'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgb(250,250,251) 5%, rgba(250,251,251,1) 95%, rgba(255,255,255,1) 100%)',
          borderRadius: 18,
          boxShadow:
            'inset 0px 0px 5px 0px rgb(202,202,202), 0px -4px 5px -3px #bbbbbb, 0px 5px 1px -3px #ffffff',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#9da7b3',
            fontFamily: 'var(--font-aldrich)',
            fontSize: 14,
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 20 }}>✦</span>
          <span>pictochat</span>
        </div>
      </div>
    </div>
  );
}
