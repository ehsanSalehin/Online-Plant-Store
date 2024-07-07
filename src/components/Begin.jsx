import React from 'react'
import styles from '../style'

const Begin = () => {
  return (
    <div className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-lime-300 cursor-pointer p-0.5`}>
        <div className={`${styles.flexCenter}
          flex-col bg-secondary w-[100%] h-[100%] rounded-full
        `}>
          <div className={`${styles.flexStart}
          flex-row`}>
              <p className='text-[18px] leading-[10px]'>
                <span className='text-blue-900 font-bold text-[13px]'>
                  Start
                </span>
              </p>
          </div>
          <p className='text-[18px] leading-[23px]'>
                <span className='text-blue-900 font-bold text-[12px]'>
                Planting !
                </span>
                <img src={"https://img.icons8.com/clouds/100/cursor.png"} className='w-[30px] pl-1'/>
              </p>

        </div>
    </div>
  )
}

export default Begin
