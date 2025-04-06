import React, { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion";


const Section04 = () => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // 뷰포트에서 벗어나면 false, 다시 들어오면 true
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <>
            <section className='overflow-hidden bg-white text-center text-[calc(100/920_*_var(--vh,1vh)*100)] block'>
                <div ref={ref} className='text-center'>
                    <div className='box-border flex flex-col justify-center h-[calc(var(--vh,1vh)*100)]'>
                        <div className='flex items-center justify-center relative box-border'>
                            <div className='absolute mb-[1.2em]'>
                                <motion.img
                                 initial={{opacity:0, scale:0.5, rotate:30}}
                                 animate={isVisible ? {opacity: 1, scale:1, rotate:0} : {}}
                                 transition={{duration:0.6, ease:"easeOut"}}
                                 className='block mx-auto h-[1.7em] min-h-[60px] max-w-full align-top'
                                 src={process.env.PUBLIC_URL + 'img/magic_hat2.png'} alt='magic_hat' />
                                <h2 className='font-poppins flex flex-col text-[0.5em] tracking-[-0.03em] leading-[1.3] mt-[0.46em] mb-[0.32em] text-center'>
                                    <p className='flex justify-center font-light text-center'>
                                    <motion.div
                                    initial={{opacity:0, y:-50}}
                                    animate={isVisible ? {opacity: 1, y:0} : {}}
                                    transition={{duration:0.4, ease:"easeOut"}}
                                    >T</motion.div>
                                    <motion.div
                                    initial={{opacity:0, y:-50}}
                                    animate={isVisible ? {opacity: 1, y:0} : {}}
                                    transition={{duration:0.5, ease:"easeOut"}}
                                    >h</motion.div>
                                    <motion.div
                                    initial={{opacity:0, y:-50}}
                                    animate={isVisible ? {opacity: 1, y:0} : {}}
                                    transition={{duration:0.6, ease:"easeOut"}}
                                    >e</motion.div>
                                          <motion.span
                                            initial={{opacity:0, y:-50}}
                                            animate={isVisible ? {opacity: 1, y:0} : {}}
                                            transition={{duration:0.7, ease:"easeOut"}}
                                             className='flex mx-[0.28em]'>
                                            <div>S</div>
                                            <div>t</div>
                                            <div>o</div>
                                            <div>r</div>
                                            <div>y</div>
                                        </motion.span>
                                        <motion.div
                                        initial={{opacity:0, y:-50}}
                                        animate={isVisible ? {opacity: 1, y:0} : {}}
                                        transition={{duration:0.7, ease:"easeOut"}}
                                        >o</motion.div>
                                        <motion.div
                                        initial={{opacity:0, y:-50}}
                                        animate={isVisible ? {opacity: 1, y:0} : {}}
                                        transition={{duration:0.8, ease:"easeOut"}}
                                        >f</motion.div>
                                        <motion.span
                                            initial={{opacity:0, y:-50}}
                                            animate={isVisible ? {opacity: 1, y:0} : {}}
                                            transition={{duration:0.9, ease:"easeOut"}}
                                            className='flex mx-[0.28em]'>
                                            <div>t</div>
                                            <div>h</div>
                                            <div>e</div>
                                        </motion.span>
                                    </p>
                                    <motion.b
                                     initial={{opacity:0, x:-50}}
                                     animate={isVisible ? {opacity: 1, x:0} : {}}
                                     transition={{duration:0.9, ease:"easeOut"}}
                                     className='flex justify-center font-bold'>
                                        <div>D</div>
                                        <div>a</div>
                                        <div>r</div>
                                        <div>k</div>
                                        <span
                                        className='flex mx-[0.28em]'>
                                            <div>W</div>
                                            <div>i</div>
                                            <div>z</div>
                                            <div>a</div>
                                            <div>r</div>
                                            <div>d</div>
                                            <div>,</div>
                                        </span>
                                        <div>V</div>
                                        <div>o</div>
                                        <div>l</div>
                                        <div>d</div>
                                        <div>e</div>
                                        <div>m</div>
                                        <div>o</div>
                                        <div>r</div>
                                        <div>t</div>
                                    </motion.b>
                                </h2>
                                <motion.small
                                    initial={{opacity:0, y:-50}}
                                    animate={isVisible ? {opacity: 1, y:0} : {}}
                                    transition={{duration:0.7, ease:"easeOut"}}
                                    className='overflow-hidden block text-[max(0.2em,12px)] tracking-[-0.03em] text-[#555] font-semibold'
                                    >Voldemort</motion.small>
                            </div>
                        </div>
                        <div className='flex items-center justify-center relative top-80 box-border text-[calc(150/100*1em)]'>
                            <div className='flex whitespace-nowrap absolute left-[8em] items-center'>
                                <div className='flex items-center tracking-[-0.025em] font-Poppins font-semibold mr-[0.66em]'>
                                    <p className='mr-[0.2em]'>Power</p>
                                    <div className='w-[1.51em] relative flex items-center justify-center'>
                                        <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/wand.png'} alt='wand' />
                                    </div>
                                </div>
                                <div className='flex items-center tracking-[-0.025em] font-Poppins font-semibold mr-[0.66em]'>
                                    <p className='mr-[0.2em]'>Fear</p>
                                    <div className='w-[1.51em] relative flex items-center justify-center'>
                                        <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/ghost.png'} alt='ghost' />
                                    </div>
                                </div>
                                <div className='tracking-[-0.025em] font-Poppins font-semibold whitespace-nowrap'>
                                    <p className='tracking-[-0.025em]'>Greed</p>
                                </div>
                            </div>
                            <div className='hidden relative tracking-[-0.025em] font-Poppins font-semibold whitespace-nowrap'>
                                <p className='tracking-[-0.025em]'>Greed</p>
                            </div>
                        </div>
                        <div className='overflow-hidden flex items-center justify-center relative box-border'>
                            <div className='absolute mt-[90%] text-[max(calc(24/100*1em),15px)] tracking-[-0.025em] flex flex-col items-center leading-[1.65] px-[5vw] box-border font-semibold'>
                                <div className='_imgbx w-[calc(260/24*1em)] mb-[calc(40/24*1em)] relative flex items-center justify-center'>
                                    <img className='' src={process.env.PUBLIC_URL + 'img/vold_6.png'} alt='vold_6' />
                                </div>
                                <small className='overflow-hidden'>
                                    <p>Voldemort, the most feared
                                        <br className='hidden' />and powerful of them all.
                                    </p>
                                </small>
                                <p className='mt-[0.2em]'>
                                    <span className='bg-clip-text text-transparent'>
                                        People were so afraid of him that they refused to even say his name,<br />
                                        calling him "He-Who-Must-Not-Be-Named" instead.
                                    </span>
                                </p>
                            </div>
                            <div className='mt-[50%] h-[600%] absolute flex items-center justify-center'>
                                <img className='w-auto h-full opacity-30 max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/haegol.png'} alt='해골마법사' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-[200px] relatvie overflow-hidden'>
                    <div className='max-w-[1600px] rleative mx-auto w-[90%]'>
                        <ul className='text-white mb-[380px]'>
                            <li className='mb-[180px]'>
                                <small className='block text-[20px] font-semibold tracking-[-0.03em] opacity-10'>01</small>
                                <p className='text-[30px] tracking-[-0.03em] opacity-10 leading-[1.666] mt-[20px]'>
                                    Voldemort created Horcruxes to split and <br />
                                    hide his soul in order <br className='hidden' /><b className='font-semibold'>to achieve immortality.</b>
                                </p>
                            </li>
                            <li className='mb-[180px]'>
                                <small className='block text-[20px] font-semibold tracking-[-0.03em] opacity-10'>02</small>
                                <p className='text-[30px] tracking-[-0.03em] opacity-10 leading-[1.666] mt-[20px]'>
                                    He sought to become the most powerful being in<br />
                                    the wizarding world, <br className='hidden' /><b className='font-semibold'>aiming to dominate others.</b>
                                </p>
                            </li>
                            <li>
                                <small className='block text-[20px] font-semibold tracking-[-0.03em] opacity-10'>03</small>
                                <p className='text-[30px] tracking-[-0.03em] opacity-10 leading-[1.666] mt-[20px]'>
                                    He sought to become the most powerful being in<br />
                                    the wizarding world, <br className='hidden' /><b className='font-semibold'>aiming to dominate others.</b>
                                </p>
                            </li>
                        </ul>
                        <ul className='flex items-center justify-center flex-wrap w-[calc(100% + 40px)] translate-x-[-20px]'>
                            <li className='w-[calc(100%/3-40px)] mx-[20px] rounded-[20px] border border-[#797979] box-border bg-[#414141] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em] text-white font-medium p-[50px_14px]'>
                                <div className='mb-[26px] relative flex items-center justify-center'>
                                    <img className='h-[90px] w-full max-h-full object-cover max-w-full algin-top' src={process.env.PUBLIC_URL + 'img/egg.png'} alt='달걀' />
                                </div>
                                <b className='text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]'>Childhood</b>
                                <p className='leading-[1.666]'>
                                    Born as Tom Riddle, he grew up<br />
                                    in an orphanage and became<br />
                                    obsessed with power and<br />
                                    dark magic at Hogwarts.
                                </p>
                            </li>
                            <li className='w-[calc(100%/3-40px)] mx-[20px] rounded-[20px] border border-[#797979] box-border bg-[#414141] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em] text-white font-medium p-[50px_14px]'>
                                <div className='mb-[26px] relative flex items-center justify-center'>
                                    <img className='h-[90px] w-full max-h-full object-cover max-w-full algin-top' src={process.env.PUBLIC_URL + 'img/crystal.png'} alt='수정' />
                                </div>
                                <b className='text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]'>Rise as Dark Lord</b>
                                <p className='leading-[1.666]'>
                                    He became "He-Who-Must-Not<br />
                                    -Be-Named," created Horcruxes<br />
                                    for immortality, and sought to<br />
                                    dominate the wizarding world.
                                </p>
                            </li>
                            <li className='w-[calc(100%/3-40px)] mx-[20px] rounded-[20px] border border-[#797979] box-border bg-[#414141] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em] text-white font-medium p-[50px_14px]'>
                                <div className='mb-[26px] relative flex items-center justify-center'>
                                    <img className='h-[90px] w-full max-h-full object-cover max-w-full algin-top' src={process.env.PUBLIC_URL + 'img/letter.png'} alt='편지' />
                                </div>
                                <b className='text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]'>Resurrection & Defeat</b>
                                <p className='leading-[1.666]'>
                                    After being defeated by Harry's <br />
                                    mother's love,Voldemort returned, <br />
                                    but was ultimately destroyed by <br />
                                    his own greed and evil choices.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section04