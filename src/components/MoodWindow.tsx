import Image from 'next/image'

export function MoodWindow() {
  return (
    <div
      className="small-content-mood"
      style={{
        position: 'relative',
        marginTop: 10,
        top: '-20px',
        left: 20,
        width: 180,
        backgroundImage:
          'linear-gradient(90deg, #fafbfb 0%, #f7f7f7 50%, #fafbfb 100%)',
        border: '1.5px solid #c9c9c9',
        borderRadius: 22,
        zIndex: 1,
        boxShadow:
          'inset 0px -5px 5px -4px #dadada, 0px 0px 5px 0px #dadada',
      }}
    >
      {/* Toolbar */}
      <div
        className="ua-toolbar small-content-toolbar"
        style={{
          position: 'relative',
          height: 15,
          margin: '0 3px',
          borderRadius: '25px 25px 15px 15px',
          padding: '12px 16px',
        }}
      >
        <Image
          id="small-xbutton-right"
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
          MOOD
        </span>
      </div>

      {/* Inner box 1 — feeling */}
      <div
        className="ua-inner small-content-inner"
        style={{
          height: 30,
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
          marginTop: 40,
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
          feeling
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://moods.imood.com/display/uname-yokiie/fg-89929c/bg-fafafb/imood.gif"
          alt="imood"
          style={{
            position: 'relative',
            top: -7,
            margin: 'auto',
            display: 'block',
          }}
        />
      </div>

      {/* Inner box 2 — status */}
      <div
        className="ua-inner small-content-inner"
        style={{ marginTop: 0 }}
      >
        <span
          style={{
            top: -22,
            left: -10,
            fontFamily: 'var(--font-aldrich)',
            fontSize: 12,
            color: '#9da7b3',
            position: 'relative',
            display: 'block',
          }}
        >
          status
        </span>
        <div>
          <span
            style={{
              color: '#9da7b3',
              fontFamily: 'var(--font-aldrich)',
              fontSize: 12,
            }}
          >
            status loading...
          </span>
        </div>
      </div>
    </div>
  )
}
