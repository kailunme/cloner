'use client'

import { useState } from 'react'

interface VideoButtonProps {
  videoRef?: React.RefObject<HTMLVideoElement | null>
}

export function VideoButton({ videoRef }: VideoButtonProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)

  const handleClick = () => {
    if (videoRef?.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
    setIsPlaying((prev) => !prev)
  }

  return (
    <div
      id="vidbutton"
      style={{
        position: 'relative',
        top: '-20px',
        marginLeft: 30,
        marginBottom: 5,
        textAlign: 'left',
        textShadow: '0px 0px 4px rgb(255,255,255)',
        color: '#a0a6af',
        fontFamily: 'var(--font-forced-square)',
        fontSize: 14,
        textTransform: 'uppercase',
        zIndex: 200,
      }}
    >
      <button
        id="vidBtn"
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 110,
          fontSize: 15,
          padding: 10,
          border: '1px solid #c9d1dd',
          borderRadius: 20,
          color: hovered ? '#81a1c8' : '#8b939c',
          fontFamily: 'var(--font-forced-square)',
          cursor: 'help',
          background: hovered
            ? '#ddd'
            : 'radial-gradient(75% 50% at 50% 0%, rgb(244,248,255), white), radial-gradient(75% 50% at 50% 70%, #ffffff, white)',
          boxShadow: 'inset 0 -2px 4px 0px #b0b3b8',
        }}
      >
        {isPlaying ? 'TURN OFF' : 'TURN ON'}
      </button>
      <p
        style={{
          marginTop: 5,
          marginLeft: 5,
          marginBottom: 0,
          fontSize: 14,
        }}
      >
        moving background
      </p>
    </div>
  )
}
