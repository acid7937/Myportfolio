import React from 'react'

import Lottie from 'react-lottie-player'

import lottieJson from '/public/animation.json'

export default function Example() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      width={150}
      height={150}
    />
  )
}