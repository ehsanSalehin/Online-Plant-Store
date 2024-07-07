import React from 'react'
import styles ,{layout} from '../style'

const Customer = () => {
  return (
    <section id="product" className="flex-1 flex  justify-center items-center md:mr-0 mr-0 md:mt-0 mt-10 relative">
      <div className="flex-1  flex justify-center items-center md:mr-0 mr-0 md:mt-0 mt-10 relative">
        <img src="https://i.ibb.co/SntMdWW/plant3.png" className='ss:w-[490px] ss:h-[340px] w-[350px] h-[250px] z-[5] relative '/>
        <div className='absolute z-[5] left-1 top-0 w-[30%] h-[100%] rounded-full white__gradient'/>
        <div className='absolute z-[2] left-0 top-0 w-[40%] h-[130%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className='font-poppins font-semibold xs:text-[20px] text-[30px] ss:text-[30px] text-white xs:leading-[40px] leading-[60px] w-full ss:ml-0 '>Discover the leafy benefits <br />of our plant subscription! </h2>
        <button className='px-4 py-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-xl ss:ml-0 mt-20 font-semibold text-lime-700'>Greenery <span className='text-green-800'>Club
        </span> </button>
      </div>
    </section>
  )
}

export default Customer
