import React from 'react'
import { SparklesText } from '../magicui/sparkles-text'
import { TextAnimate } from '../magicui/text-animate'

function Hero() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-6 relative bg-[url(/dcodedsa_bg.webp)] bg-center -z-0 bg-no-repeat bg-cover h-[600px] w-full'>
        <div className='bg-black opacity-40 absolute inset-0 h-[600px] w-full -z-10'></div>
          <SparklesText className='text-9xl'>Decode DSA</SparklesText>
          <TextAnimate className='text-5xl font-semibold' animation="blurInUp" by="character" once>
            Decode your DSA Skills
          </TextAnimate>
      </div>
    </div>
  )
}

export default Hero