import React from 'react'

const Section01 = () => {
  return (
    <>
      <div className='pin'>
        <section className='overflow-hidden w-full h-screen relative text-white'>
          <div className='w-full h-full absolute flex items-center justify-center'>
            <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/bl_bg.jpg'} alt='blackbg' />
          </div>
          <div className='flex items-center justify-center absolute top-0 right-[95px] h-full'>
            <img className='w-[1477px] h-[831px] max-h-full object-cover' src={process.env.PUBLIC_URL + 'img/human_img.png'} alt='human' />
          </div>
          <div className='flex flex-col justify-between pb-20 box-border relative w-[90%] mx-auto my-0 h-screen'>
            <h2 className='pt-[max(calc(160/920*var(--vh,1vh)*100),100px)]'>
              <strong className=' md:text-red-500 text-yellow-500 font-poppins block overflow-hidden text-[min(calc(180/920*var(--vh,1vh)*100),calc(180/1920*100vw))] tracking-[-0.03em] font-bold ml-[-0.07em] pb-[32px]'>
                <p>HOGWARTS</p>
              </strong>
              <small className='overflow-hidden block text-[min(calc(30/920*var(--vh,1vh)*100),calc(30/1920*100vw))] tracking-[-0.03em] leading-[1.53]'>
                <p>Hogwarts is the magical school in the Harry Potter series,</p>
              </small>
              <small className='overflow-hidden block text-[min(calc(30/920*var(--vh,1vh)*100),calc(30/1920*100vw))] tracking-[-0.03em] leading-[1.53]'>
                <p>located in Britain. Students are sorted into four houses</p>
              </small>
            </h2>
            <div className='flex justify-between flex-row-reverse items-end'>
              <div className='text-[max(calc(26/920*var(--vh,1vh)*100),16px)] leading-[1.769]'>
                <p>
                  <b>Hogwarts</b> is a <em className='font-libre'>British magical school</em> <em>with four houses,</em><br />
                  <b>full of adventure and mystery.</b>
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