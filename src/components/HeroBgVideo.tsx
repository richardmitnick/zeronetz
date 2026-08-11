import React from 'react'

interface HeroBgVideoProps {
  customVideoUrl: string
}

const HeroBgVideo = ({ customVideoUrl }: HeroBgVideoProps) => {
  return (
      <video
        src={customVideoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-1"
      />
  )
}

export default HeroBgVideo