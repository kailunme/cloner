import Image from 'next/image';

export default function StatsWindow() {
  return (
    <div
      className="ua-panel small-content-stats"
      style={{
        position: 'relative',
        top: 5,
        left: 0,
        width: 285,
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
          STATS
        </span>
      </div>

      {/* Counter inner box */}
      <div
        className="ua-inner small-content-inner"
        style={{
          height: 30,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          marginTop: 40,
          marginLeft: 7,
          marginRight: 7,
          marginBottom: 7,
        }}
      >
        <span
          style={{
            top: -22,
            left: 10,
            fontFamily: 'var(--font-aldrich)',
            fontSize: 12,
            color: '#9da7b3',
            position: 'relative',
            display: 'block',
          }}
        >
          your digital ID number
        </span>
        <div
          style={{
            height: 25,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: -8,
            marginBottom: 5,
            textAlign: 'center',
          }}
        >
          <span
            style={{
              color: '#9da7b3',
              fontFamily: 'var(--font-aldrich)',
              fontSize: 12,
            }}
          >
            [ visitor counter ]
          </span>
        </div>
      </div>

      {/* Timecode inner box */}
      <div
        className="ua-inner small-content-inner"
        style={{
          padding: 3,
          marginTop: 35,
          marginLeft: 7,
          marginRight: 7,
          marginBottom: 7,
          height: 58,
          position: 'relative',
        }}
      >
        <span
          style={{
            top: -25,
            left: 7,
            fontFamily: 'var(--font-aldrich)',
            fontSize: 12,
            color: '#9da7b3',
            position: 'relative',
            display: 'block',
          }}
        >
          timecode infos
        </span>
        <div
          id="timecode"
          style={{
            position: 'absolute',
            top: 10,
            width: '95%',
            left: 7,
            fontFamily: 'var(--font-aldrich)',
            fontSize: 14,
            color: '#9da7b3',
          }}
        >
          <table style={{ top: 0, margin: 0, padding: 0, width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left' }}>Created on :</td>
                <td style={{ textAlign: 'right' }}>[July] 31, 2024</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>Last updated :</td>
                <td style={{ textAlign: 'right' }}>[Jun] 28, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
