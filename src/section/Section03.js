import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section03 = () => {

    const sectionsRef = useRef([]);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        sectionsRef.current.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                pin: true,
                pinSpacing: false,
                markers: true,
                snap: 1
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
        <section className='w-full pt-32 pb-[50vh] relative mx-auto my-0 bg-[#160501] overflow-hidden border-4'>
       <div ref={el => sectionsRef.current[0] = el} className='w-[90%] h-[570px] mx-auto mb-20'>
           <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px]  bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='max-xl:text-center flex flex-col max-xl:items-center justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className=' max-xl:text-[1em] max-xl:mb-[0.3em] text-[1.3em] libre-baskerville-regular '>01</em>
                   <div>
                       <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold'>
                           Harry Potter and the Sorcerer’s Stone
                       </h3>
                       <p className='max-xl:text-[160x] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                           11-year-old Harry discovers he is a wizard<br />
                           and attends Hogwarts School of Witchcraft and Wizardry.<br />
                           He learns about his past, makes new friends, and faces<br />
                           Voldemort for the first time.
                       </p>
                   </div>
               </div>
               <div className=' max-[1600px]:w-[460px] relative flex items-center justify-center'>
                   <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_1.jpg'} alt='pic_1' />
               </div>
           </div>
       </div>
       <div ref={el => sectionsRef.current[1] = el} className='w-[90%] h-[110vh] mx-auto'>
           <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px] bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='max-xl:items-center max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl:text-[1em] max-xl:mb-[0.3em] text-[1.3em] libre-baskerville-regular'>02</em>
                   <div>
                       <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[#601301] poppins-bold text-[max(.4em,22px)]'>
                       Harry Potter and the Chamber of Secrets
                       </h3>
                       <p className='max-xl:text-[160x] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                       Mysterious attacks occur at Hogwarts, turning<br />
                       students into stone. Harry uncovers the legend of the<br />
                       Chamber of Secrets and battles a deadly basilisk.
                       </p>
                   </div>
               </div>
               <div className='max-[1600px]:w-[460px] relative flex items-center justify-center'>
                <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_2.jpg'} alt='pic_2' />
               </div>
           </div>
       </div>
       <div ref={el => sectionsRef.current[2] = el} className='w-[90%] h-[110vh] mx-auto'>
           <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px] bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='max-xl:items-center max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic",  color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl:text-[1em] max-xl:mb-[0.3em] text-[1.3em] libre-baskerville-regular'>03</em>
                   <div>
                       <h3 style={{ letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold'>
                       Harry Potter and the Prisoner of Azkaban
                       </h3>
                       <p className='max-xl:text-[160x] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                       A dangerous prisoner, Sirius Black, escapes from<br />
                       Azkaban and seems to be hunting Harry. The truth<br />
                       about Harry’s parents and their past is revealed.
                       </p>
                   </div>
               </div>
               <div className='max-[1600px]:w-[460px] relative flex items-center justify-center'>
                <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_3.jpg'} alt='pic_3' />
               </div>
           </div>
       </div>
       <div ref={el => sectionsRef.current[3] = el} className='w-[90%] h-[110vh] mx-auto'>
           <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px] bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='max-xl:items-center max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic",  color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl:text-[1em] max-xl:mb-[0.3em] text-[1.3em] libre-baskerville-regular'>04</em>
                   <div>
                       <h3 style={{ letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold'>
                       Harry Potter and the Goblet of Fire
                       </h3>
                       <p className='max-xl:text-[160x] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                       Hogwarts hosts the Triwizard Tournament, <br />
                       and Harry is mysteriously entered as a competitor.<br />
                       The tournament leads to Voldemort’s full resurrection.
                       </p>
                   </div>
               </div>
               <div className='max-[1600px]:w-[460px] relative flex items-center justify-center'>
                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_4.jpg'} alt='pic_4' />
               </div>
           </div>
       </div>
       <div ref={el => sectionsRef.current[4] = el} className='w-[90%] h-[110vh] mx-auto'>
            <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px] bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic",color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl:text-[1em] max-xl:mb-[0.3em] text-[1.3em] libre-baskerville-regular'>05</em>
                   <div>
                       <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold'>
                       Harry Potter and the Order of the Phoenix
                       </h3>
                       <p className='pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                       The Ministry of Magic denies Voldemort’s return,<br />
                       and Harry faces a harsh new teacher, Dolores Umbridge.<br />
                       Harry forms Dumbledore’s Army to fight against oppression<br />
                       and learns about the prophecy linking him to Voldemort.
                       </p>
                   </div>
               </div>
               <div className='max-[1600px]:w-[460px] relative flex items-center justify-center'>
                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_5.jpg'} alt='pic_5' />
               </div>
           </div>
       </div>
       <div ref={el => sectionsRef.current[5] = el} className='w-[90%] h-[110vh] mx-auto'>
           <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px] bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl:text-[1em] max-xl:mb-[0.3em] text-[1.3em] libre-baskerville-regular'>06</em>
                   <div>
                       <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold'>
                       Harry Potter and the Half-Blood Prince
                       </h3>
                       <p className='pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                       Dumbledore teaches Harry <br />
                       Voldemort’s past and the secret of Horcruxes.<br />
                       Tragedy strikes as Hogwarts is no longer safe.
                       </p>
                   </div>
               </div>
               <div className='max-[1600px]:w-[460px] relative flex items-center justify-center'>
                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_6.jpg'} alt='pic_6' />
               </div>
           </div>
       </div>

       <div ref={el => sectionsRef.current[6] = el} className='w-[90%] h-[110vh] mx-auto'>
           <div className="max-xl:flex-col max-xl:h-auto max-xl:items-center max-xl:p-10 max-[1450px]:pt-[70px] max-[1450px]:pb-[70px] max-[1450px]:pl-[50px] max-[1450px]:pr-[50px] bg-[#fff] text-white rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20 ">
               <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                   <em style={{ fontStyle: "italic", fontSize: "1.3em", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='libre-baskerville-regular'>07</em>
                   <div>
                       <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold'>
                       Harry Potter and the Deathly Hallows
                       </h3>
                       <p className='pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                       Harry and his friends go on a quest to destroy Voldemort’s Horcruxes.<br />
                       The final battle at Hogwarts decides the fate of the wizarding world.
                       </p>
                   </div>
               </div>
               <div className='max-[1600px]:w-[460px] relative flex items-center justify-center'>
                 <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_7.jpg'} alt='pic_7' />
               </div>
           </div>
       </div>
     
        {/* 마지막 섹션 이후 추가 여백 */}
        <div className='h-[30vh]'></div>
  
   </section>
   <section className='w-full top-0 relative mx-auto my-0 bg-[#160501] overflow-hidden border-4 border-red-600 pb-20'>  
    <div className='flex w-max animate-marquee pt-24 pb-20'>
        {/* 텍스트 그룹을 2배로 복제하여 자연스러운 반복 */}
        <div className='flex shrink-0 space-x-4'>
            {[...Array(2)].map((_, i) => (
                <div key={i} className='text-[150px] tracking-[-0.03em] flex whitespace-nowrap'>
                    <p className='poppins-semibold text-transparent custom-stroke font-semibold mr-1.5'>Love, friendship,</p>
                    <b className='libre-baskerville-thin-italic text-white mr-1.5'>and courage</b>
                    <p className='poppins-semibold text-transparent custom-stroke font-semibold mr-1.5'>overcome even</p>
                    <b className='libre-baskerville-thin-italic text-white mr-1.5'>the darkest evil</b>
                </div>
            ))}
        </div>
    </div>
</section>
   
       </>
    )
}

export default Section03