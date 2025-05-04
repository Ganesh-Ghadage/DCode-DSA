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

      <div className='flex justify-between items-center px-30 py-10 h-fit w-full bg-neutral-900'>
        <div className='max-w-2xl flex flex-col gap-4 items-start'>
          <h1 className='text-6xl font-bold'>Master DSA, Smarter, Faster, With Dcode.</h1>
          <p className='text-2xl'>Personalized DSA sheets, goal-based learning paths, and a clean code environment to help you excel in technical interviews.</p>

          <button className='bg-sky-500 px-4 py-2 font-bold rounded-lg border-2 hover:bg-transparent border-sky-500'>Join Waitlist</button>
        </div>
        <div className=''>
          <div className='w-[35rem] h-[25rem] overflow-hidden'>
            <img className='object-center object-cover aspect-square' src="/code_circle.jpg" alt="code image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero