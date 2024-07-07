import React from 'react'
import styles from '../style'

const Status = () => {
  return (
    <section className={`${styles.flexCenter} flex-row  sm:mb-2 mb-6 z-[80]`}>
      <div/>
<div className='bg-white bg-opacity-25 hover:bg-opacity-50 border border-gray-300 hover:border-gray-400 py-5 px-5 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-around'>
  <img src="https://i.ibb.co/8xDJSJJ/brand1.png" alt="brand1" className='w-24 h-24 mr-[30px] object-contain' />
  <img src="https://i.ibb.co/NmpZBMY/brand2.png" alt="brand2" className='w-24 h-24 mr-[30px] object-contain' />
  <img src="https://i.ibb.co/mc45H0W/brand3.png" alt="brand3" className='w-24 h-24 mr-[30px] object-contain' />
  <img src="https://i.ibb.co/W0bNb5W/brand4.png" alt="brand4" className='w-24 h-20 mr-[30px] object-contain' />
</div>
    </section>
  )
}

export default Status
