import React from 'react'

const Card = ({content, name, img}) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px]  w-[390px] md:mr-5 md:ml-8 ss:mr-0 mr-0  my-5 sm:mr-0   bg-slate-400 bg-opacity-25 hover:bg-opacity-50 border border-gray-300 hover:border-gray-400  shadow-md transition duration-300 ease-in-out  items-center '>
      <img src={"https://img.icons8.com/clouds/100/quote-left.png"} className='w-[42px] h-[27px] object-contain'/>
      <p className='font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt={name} className='w-[48px] h-[48p] rounded-full'/>

        <div className='flex flex-col ml-4'>
          <h4 className='font-normal text-[16px] leading-[24px] text-slate-100 '>{name}</h4>
        </div>
      </div>
    </div>
  )
}

export default Card
