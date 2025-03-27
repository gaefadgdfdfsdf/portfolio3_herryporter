import React, { useEffect, useRef } from 'react';


const Section01 = () => {
  const aniRef = useRef(null);
  useEffect(()=>{
    console.log('실행')
    
  })
 

  return (
    <>
      <div className='pin'>
        <section className='overflow-hidden w-full h-screen relative text-white'>
          <div className='w-full h-full absolute flex items-center justify-center'>
            <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/bl_bg.jpg'} alt='blackbg' />
          </div>
          <div className='fadeleft flex items-center justify-center absolute top-0 right-[95px] h-full'>
            <img className='w-[1477px] h-[831px] max-h-full object-cover' src={process.env.PUBLIC_URL + 'img/human_img.png'} alt='human' />
          </div>
          <div className='flex flex-col justify-between pb-20 box-border relative w-[90%] mx-auto my-0 h-screen'>
            <h2 className='pt-[max(calc(160/920*var(--vh,1vh)*100),100px)]'>
              <strong className='fadein md:text-white-500 poppins-bold block overflow-hidden text-[min(calc(180/920*var(--vh,1vh)*100),calc(180/1920*100vw))] tracking-[-0.03em] font-bold ml-[-0.07em] pb-[32px]'>
                <p>HOGWARTS</p>
              </strong>
              <small className='pretendard-regular fadein overflow-hidden block text-[min(calc(30/920*var(--vh,1vh)*100),calc(30/1920*100vw))] tracking-[-0.03em] leading-[1.53] transition-all ease-in-out duration-500'>
                <p>Hogwarts is the magical school in the Harry Potter series,</p>
              </small>
              <small className='pretendard-regular fadein overflow-hidden block text-[min(calc(30/920*var(--vh,1vh)*100),calc(30/1920*100vw))] tracking-[-0.03em] leading-[1.53] transition-all ease-in-out duration-500'>
                <p>located in Britain. Students are sorted into four houses</p>
              </small>
            </h2>
            <div className='flex justify-between flex-row-reverse items-end'>
              <div className='fadein text-[max(calc(26/920*var(--vh,1vh)*100),16px)] leading-[1.769]'>
                <p className='pretendard-medium'>
                  <b className='opacity_1'>Hogwarts</b><em className='opacity_2 '> is a </em><em className='opacity_3 font-libre font-bold libre-baskerville-light-italic'>British magical school</em> <em className='opacity_4'>with four houses,</em><br />
                  <b className='opacity_5 libre-baskerville-light-italic'>full of adventure </b><em>and mystery.</em>
                </p>
              </div>
              <div className='flex items-center text-[max(calc(16/920*var(--vh,1vh)*100),14px)]'>
                <div className='mr-[1em]'>
                  <i className='block animate-s1Arrow'></i>
                  <i className='block animate-s1Arrow'></i>
                  <i className='block animate-s1Arrow'></i>
                </div>
                <p>Scroll&nbsp;
                  <b>down</b>
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Section01