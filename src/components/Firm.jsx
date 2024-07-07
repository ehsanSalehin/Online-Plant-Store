import React from 'react'
import styles, {layout} from '../style'
import { features } from '../Fixed'

const Cards=({icon, title, content, index})=>(
  <div className={`flex flex-row p-6  rounded-[20px] bg-white bg-opacity-25 hover:bg-opacity-50 border border-gray-300 hover:border-gray-400 py-5 px-2 shadow-md transition duration-100 ease-in-out 
  ${index !== features.length -1 ? "mb-4": "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-green-200`}>
      <img src={icon} alt='icon' className='w-[40px] h-[40px] object-contain'/>
    </div>
    <div className='flex-1 flex-col ml-3'>
      <h4>
        {title}
      </h4>
      <p>
        {content}
      </p>
    </div>
  </div>
)

const Firm = () => {
  return (
    <section id="features" className={`${layout.section} items-start z-[1]`}>
      <div className={` flex justify-center items-start flex-col mr-20`}>
         <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] ss:text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full `}>
         Explore Over 200 Varieties of Plants!
         </h2>
         <p className={`${styles.paragraph} max-w-[430px] mt-5 ss:mt-14`} >
          Dive into our diverse collection featuring over 200 plant varieties, ranging from lush 
          tropicals to hardy succulents. Discover your next favorite green companion today!
         </p>
         <button type="button" className={`py-2 px-4  bg-gradient-to-r from-teal-500 to-green-500 rounded-md ss:mt-14 mt-2 font-semibold text-lime-700 z-[10]`}> Grow <span className='text-green-800'>Green 
         </span> </button>
      </div>

      <div className={` flex-col mt-[18px] flex ml-auto `}>
        {features.map((feature,index)=>(
            <Cards key={feature.id}{...feature} index={index}/>
        ))}
      </div>

    </section>
  )
}

export default Firm
