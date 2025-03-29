import React, { useEffect, useState } from 'react';

const Section03 = () => {


    return (
        <>
           
            <section className='bg-[#160501] pt-[120px] pb-[150px] block'>
                <div className='max-w-[1720px] relative mx-auto w-[90%] '>
                    
                        <div className="relative rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px] mb-20">
                            <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>01</em>
                                <div>
                                    <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                        Harry Potter and the Sorcerer’s Stone
                                    </h3>
                                    <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                        11-year-old Harry discovers he is a wizard<br />
                                        and attends Hogwarts School of Witchcraft and Wizardry.<br />
                                        He learns about his past, makes new friends, and faces<br />
                                        Voldemort for the first time.
                                    </p>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center'>
                                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_1.jpg'} alt='pic_1' />
                            </div>
                        </div>

                    
                        
                        <div className="relative z-10 mb-20 rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px]">
                            <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>02</em>
                                <div>
                                    <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                        Harry Potter and the Chamber of Secrets
                                    </h3>
                                    <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                        Mysterious attacks occur at Hogwarts, turning<br />
                                        students into stone. Harry uncovers the legend of the<br />
                                        Chamber of Secrets and battles a deadly basilisk.
                                    </p>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center'>
                                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_2.jpg'} alt='pic_2' />
                            </div>
                        </div>
                  
                          
                        <div className="relative z-[10px] mb-20 rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px]">
                            <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>03</em>
                                <div>
                                    <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                        Harry Potter and the Prisoner of Azkaban
                                    </h3>
                                    <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                        A dangerous prisoner, Sirius Black, escapes from<br />
                                        Azkaban and seems to be hunting Harry. The truth<br />
                                        about Harry’s parents and their past is revealed.
                                    </p>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center'>
                                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_3.jpg'} alt='pic_3' />
                            </div>
                        </div>
                  
                        <div className='relative z-[15px] mb-20 rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px]'>
                            <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>04</em>
                                <div>
                                    <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                        Harry Potter and the Goblet of Fire
                                    </h3>
                                    <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                        Hogwarts hosts the Triwizard Tournament, <br />
                                        and Harry is mysteriously entered as a competitor.<br />
                                        The tournament leads to Voldemort’s full resurrection.
                                    </p>
                                </div>
                            </div>
                            <div className='relative flex items-center justify-center'>
                                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_4.jpg'} alt='pic_4' />
                            </div>
                        </div>
                  
                            <div className='relative z-[20px] mb-20 rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px]'>
                                <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                    <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>05</em>
                                    <div>
                                        <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                            Harry Potter and the Order of the Phoenix
                                        </h3>
                                        <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                            The Ministry of Magic denies Voldemort’s return,<br />
                                            and Harry faces a harsh new teacher, Dolores Umbridge.<br />
                                            Harry forms Dumbledore’s Army to fight against oppression<br />
                                            and learns about the prophecy linking him to Voldemort.
                                        </p>
                                    </div>
                                </div>
                                <div className='relative flex items-center justify-center'>
                                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_5.jpg'} alt='pic_5' />
                                </div>
                            </div>
                      
                            <div className='relative z-[25px]   mb-20 rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px]'>
                                <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                    <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>06</em>
                                    <div>
                                        <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                            Harry Potter and the Half-Blood Prince
                                        </h3>
                                        <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                            Dumbledore teaches Harry <br />
                                            Voldemort’s past and the secret of Horcruxes.<br />
                                            Tragedy strikes as Hogwarts is no longer safe.
                                        </p>
                                    </div>
                                </div>
                                <div className='relative flex items-center justify-center'>
                                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_6.jpg'} alt='pic_6' />
                                </div>
                            </div>
                     
                            <div className='mb-20 rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border h-[570px]'>
                                <div className='flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                                    <em style={{ fontStyle: "italic", fontSize: "1.6em", color: "transparent", lineHeight: ".8", WebkitTextStroke: "1px #7e1800", }} className='font-libre'>07</em>
                                    <div>
                                        <h3 style={{ fontSize: "max(.4em, 22px)", letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='text-[#601301] font-poppins'>
                                            Harry Potter and the Deathly Hallows
                                        </h3>
                                        <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                            Harry and his friends go on a quest to destroy Voldemort’s Horcruxes.<br />
                                            The final battle at Hogwarts decides the fate of the wizarding world.
                                        </p>
                                    </div>
                                </div>
                                <div className='relative flex items-center justify-center'>
                                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_7.jpg'} alt='pic_7' />
                                </div>
                            </div>
                </div>


                  
             
                <div className='mt-[100px]'>
                    <div className='inline-flex animate-marquee'>
                        <div className='text-[150px] tracking-[-0.03em] flex whitespace-nowrap'>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>Love, friendship,</p>
                            <b className='font-libre italic text-white mr-1.5'>and courage</b>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>overcome even</p>
                            <b className='font-libre italic text-white mr-1.5'>the darkest evil</b>
                        </div>
                        <div className='text-[150px] tracking-[-0.03em] flex whitespace-nowrap'>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>Love, friendship,</p>
                            <b className='font-libre italic text-white mr-1.5'>and courage</b>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>overcome even</p>
                            <b className='font-libre italic text-white mr-1.5'>the darkest evil</b>
                        </div>
                        <div className='text-[150px] tracking-[-0.03em] flex whitespace-nowrap'>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>Love, friendship,</p>
                            <b className='font-libre italic text-white mr-1.5'>and courage</b>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>overcome even</p>
                            <b className='font-libre italic text-white mr-1.5'>the darkest evil</b>
                        </div>
                        <div className='text-[150px] tracking-[-0.03em] flex whitespace-nowrap'>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>Love, friendship,</p>
                            <b className='font-libre italic text-white mr-1.5'>and courage</b>
                            <p className='font-poppins text-transparent custom-stroke font-semibold mr-1.5'>overcome even</p>
                            <b className='font-libre italic text-white mr-1.5'>the darkest evil</b>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section03