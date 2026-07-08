import Image from 'next/image';
import Link from 'next/link';

export default function GalleryWindow() {
  return (
    <div
      className="ua-panel"
      style={{
        position: 'relative',
        top: 15,
        left: 0,
        width: 285,
        marginBottom: 25,
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
          GALLERY
        </span>
      </div>

      {/* Inner content */}
      <div
        id="small-content-todo"
        style={{
          position: 'relative',
          height: 'auto',
          padding: 15,
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
        }}
      >
        {/* Blinking gallery link */}
        <span
          className="blink-text"
          style={{
            fontFamily: 'var(--font-aldrich)',
            fontSize: 18,
            color: '#9da7b3',
          }}
        >
          Visit the{' '}
          <Link
            href="/gallery"
            style={{
              color: '#74a4db',
              fontFamily: 'var(--font-aldrich)',
            }}
          >
            Fan Art Gallery
          </Link>{' '}
          !
        </span>

        {/* Latest post section */}
        <div
          id="latestpost"
          style={{
            position: 'relative',
            top: 10,
            left: 190,
            width: 192,
            zIndex: 10,
            marginLeft: -200,
            marginBottom: 5,
          }}
        >
          {/* Title bar */}
          <div
            id="latestposttitle"
            style={{
              position: 'absolute',
              top: 0,
              width: 250,
              fontSize: 14,
              fontFamily: 'var(--font-source-code-pro)',
              letterSpacing: 1,
              marginBottom: 5.5,
              background:
                'linear-gradient(to right, #8bb4ff 0%, #e2fafb 80%, rgba(220,252,252,0) 100%)',
              color: 'rgb(255,255,255)',
              paddingLeft: 10,
              textShadow: '0px 0px 3px #5670a0',
              zIndex: 100,
            }}
          >
            <strong>Latest blog post</strong>
          </div>

          {/* Scrolling name box */}
          <div
            id="latestpostnamebox"
            style={{
              overflow: 'hidden',
              position: 'relative',
              top: 10,
              width: 260,
              zIndex: 10,
            }}
          >
            <p
              id="latestpostname"
              style={{
                position: 'relative',
                width: 'fit-content',
                top: 0,
                left: 0,
                fontSize: 13,
                fontFamily: 'var(--font-source-code-pro)',
                color: '#7b828b',
                paddingLeft: 10,
                whiteSpace: 'nowrap',
                animation: 'scroll-left 10s linear infinite',
                margin: 0,
              }}
            >
              loading latest post...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
