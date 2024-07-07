import React from 'react';
import styles from '../style';

const Prompt = () => {
  return (
    <section className={`${styles.flexCenter} sm:my-20 my-[20px] ss:px-[60px] px-5 sm:py-5 py-4 sm:flex-row flex-col bg-gradient-to-r from-pink-200 to-lime-400 rounded-xl box-shadow relative`}>
      <div className='flex flex-1 flex-col'>
        <h2 className={`font-bold text-emerald-500 ss:pl-11 ss:pt-[20px] xs:text-[48px] text-[40px] xs:leading-[110.8px] leading-[10.8px] w-full relative z-[20] mb-8`}>Are You Ready?</h2>
        <button type="button" className={`absolute ss:top-[90px] top-[140px] left-[185px] ss:left-[780px] ml-10 mt-[-15px] py-2 px-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-md font-semibold text-lime-700 z-[30] ${styles.flexCenter}`}>
          Grow <span className='text-green-800'>Green</span>
        </button>
      </div>
    </section>
  );
};

export default Prompt;
