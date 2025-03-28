import React, { useState, useEffect, useRef } from 'react';

const Section01 = () => {
 



  return (
    <>
      
      <section
      
      className='w-full h-screen text-white top-0 sticky'
    >
         
        <div className='w-full h-full absolute flex items-center justify-center'>
          <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/bl_bg.jpg'} alt='blackbg' />
        </div>
        <div  className='fadeleft flex items-center justify-center absolute top-0 right-[5vw] h-full'>
          <img className='w-full h-full max-h-full max-w-full object-contain' src={process.env.PUBLIC_URL + 'img/human_img.png'} alt='human' />
        </div>
        <div className='max-lg:pb-10 flex flex-col justify-between pb-20 box-border relative w-[90%] mx-auto my-0 h-screen'>
          <h2 className='pt-[max(calc(160/920*var(--vh,1vh)*100),100px)]'>
            <strong className='max-[530px]:text-[60px] max-[680px]:text-[80px] max-[680px]:pb-[22px] fadein md:text-white-500 poppins-bold block overflow-hidden text-[min(calc(180/920*var(--vh,1vh)*100),calc(180/1920*100vw))] tracking-[-0.03em] font-bold ml-[-0.07em] pb-[32px]'>
              <p>HOGWARTS</p>
            </strong>
            <small className='max-[580px]:text-[16px] max-[820px]:text-[18px] max-lg:text-[22px] max-xl:text-[24px] pretendard-regular fadein overflow-hidden block text-[26px] tracking-[-0.03em] leading-[1.53] transition-all ease-in-out duration-500'>
              <p>Hogwarts is the magical school in the Harry Potter series,</p>
            </small>
            <small className='max-[580px]:text-[16px] max-[820px]:text-[18px] max-lg:text-[22px]  max-xl:text-[24px] pretendard-regular fadein overflow-hidden block text-[26px] tracking-[-0.03em] leading-[1.53] transition-all ease-in-out duration-500'>
              <p>located in Britain. Students are sorted into four houses</p>
            </small>
          </h2>
          <div className='max-[820px]:flex-col max-[820px]:items-start max-[820px]:justify-between flex justify-between flex-row-reverse items-end'>
            <div className='max-[530px]:mb-80 max-[820px]:text-[16px] max-[820px]:mb-72 fadein text-[max(calc(26/920*var(--vh,1vh)*100),16px)] leading-[1.769]'>
              <p className='max-[722px]:block max-[820px]:hidden max-[820px]:max-w-[max(60vw, 300px)] pretendard-medium'>
                <b className='opacity_1'>Hogwarts</b><em className='opacity_2 '> is a </em><em className='opacity_3 font-libre font-bold libre-baskerville-light-italic'>British magical school</em> <em className='opacity_4'><br className='max-[580px]:block hidden'/>with four houses,</em><br className='max-[580px]:hidden' />
                <b className='opacity_5 libre-baskerville-light-italic'>full of adventure </b><em className='opacity_6'>and mystery.</em>
              </p>
            </div>
            <div className='flex items-center text-[max(calc(16/920*var(--vh,1vh)*100),14px)]'>
              <div className='mr-[0.6em]'>
                <i className='block animate-s1Arrow mb-[-4px]'>
                  <SvgIcon />
                </i>
                <i className='block animate-s1Arrow mb-[-5px]'>
                  <SvgIcon />
                </i>
                <i className='block animate-s1Arrow'>
                  <SvgIcon />
                </i>
              </div>
              <p>Scroll&nbsp;
                <b className='libre-baskerville-regular-italic'>down</b>
              </p>
            </div>
          </div>
        </div>
         
       </section>
      
    </>
  )
}

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 284.929 284.929"
    width="15"
    height="10"
    fill="white"
  >
    <g>
      <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z" />
    </g>
  </svg>
);


export default Section01