import React from 'react';
import styles from '../style';
import Begin from './Begin';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `} >
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-5`}> 
          <div className='flex flex-row items-center py-[2px] px-1 rounded-[10px] mb-2 bg-lime-300'>
            <img src={'https://img.icons8.com/clouds/100/discount.png' } className='size-7 w-[32px] h-[32px]'/>
            <p className='text-white'>
            <span className='text-amber-500 font-bold '>30% </span>
            off on a 1-month subscription
            </p>
          </div>
          <div className='flex flex-row justify-between items-center w-full  pt-11'>
              <h1 className='text-violet-500 font-bold text-[25px] flex-1'>Discover <br/>
              <span className='text-blue-500 font-bold text-[30px] ss:leading-[90px] leading-[80px] '>Your Perfect <br/></span>
               </h1> 
               <div className='ss:flex  md:mr-6 ss:pr-[200px] ss:pb-[1px] pl-[1px] pt-[70px]  '>
              <Begin />
            </div>
            </div>
              <h1 className='text-fuchsia-600 font-bold text-[40px] leading-[0px] ss:leading-[20px] w-full '>Plant Companion</h1>
              <p className={`${styles.paragraph} leading-[70px] pt-10 `}>Welcome to Your Friendly Plant Marketplace!</p>
        </div>
        <img src="https://i.ibb.co/tZjWPnP/plant2.png" alt="plant2" className='h-[380px] w-[380px] ml-20 ss:h-[350px] ss:w-[350px] relative z-[5] lg:mt-0' />

        <div className="absolute z-[4] w-[25%] h-[100%] top-0 pink__gradient ss:right-20 "/>
        <div className="absolute z-[4] w-[20%] h-[100%] rounded-full white__gradient bottom-10 right-20 " />
        <div className="absolute z-[5] w-[20%] h-[10%] right-20 bottom-10 blue__gradient" />
        <div>
        </div>
        <div/>
    </section>
  )
}

export default Hero
