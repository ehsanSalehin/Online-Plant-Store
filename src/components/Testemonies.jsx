import React from 'react'
import styles ,{layout} from '../style'
import { feedback } from '../Fixed'
import Card from './Card'

const Testemonies = () => {
  return (
    <section className={`mt-5  ${styles.paddingY} ${styles.flexCenter} flex-col relative`}>



      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
      <div className='w-full justify-between flex items-center md:flex-row flex-col mb-6 sm:mb-16 relative z-[1]'>
        <h1 className="xs:text-[30px] text-[30px] text-white xs:leading-[45.8px] leading-[45.8px] w-full font-semibold">Explore Our Customers <br/>Temple of Thoughts!</h1>
          <div className='w-full md-mt-0 mt-6'>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            From lush leaves to vibrant blooms, our customers share their delight in nurturing nature's beauty with every plant they bring home.
            </p>
          </div>
      </div>

      <div className="flex  sm:justify-start justify-center w-full feedback-container relative z-[1] ">
        {feedback.map((card, index)=>(
           <Card key={card.id} {...card}/>
        ))}
      </div>
    </section>
  )
}

export default Testemonies
