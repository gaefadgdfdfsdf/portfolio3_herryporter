import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';



const Section02 = () => {

        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);
        const horizontalRef = useRef(null);
        const [scrollLength, setScrollLength] = useState(0);


        const { scrollYProgress } = useScroll({
                target: ref,
                offset: ["start end", "end start"]
            });
        
            const x = useTransform(scrollYProgress, [0, 1], [0, -scrollLength]);
        
       
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

          useEffect(() => {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setIsVisible(entry.isIntersecting);
                    },
                    { threshold: 0.5 }
                );
        
                if (ref.current) observer.observe(ref.current);
                return () => ref.current && observer.unobserve(ref.current);
            }, []);


            useEffect(() => {
                const updateScrollLength = () => {
                  if (horizontalRef.current && ref.current) {
                    const containerWidth = horizontalRef.current.scrollWidth;
                    const windowWidth = window.innerWidth;
                    const scrollAmount = containerWidth - windowWidth;
            
                    setScrollLength(scrollAmount);
                  }
                };
            
                updateScrollLength();
                window.addEventListener("resize", updateScrollLength);
                return () => window.removeEventListener("resize", updateScrollLength);
              }, []);
            

        
    return (
        <>
            <section ref={ref} id="section02" className='overflow-hidden block w-full h-[200vh] relative'>
               
                <div className='w-full h-full absolute flex items-center justify-center overflow-hidden'>
                    <img className='w-full h-full max-h-full max-w-full object-cover align-top object-[60%_center]' src={process.env.PUBLIC_URL + 'img/night_bg.jpg'} alt='night' />
                </div>
                <div className='mt-[160px] relative mx-auto w-[90%]'>
                    <h2 className='text-white text-[120px] tracking[-0.03em] flex justify-end font-poppins'>
                        <motion.b
                         initial={{x:50}}
                         animate={isVisible ? {x:0} : {}}
                         transition={{duration:0.8, ease:"easeOut"}}
                         className='pretendard-semibold flex font-medium mr-[0.2em]'>
                            <motion.div
                            initial={{opacity:0, y:-50}}
                            animate={isVisible ? {opacity: 1, y:0} : {}}
                            transition={{duration:0.8, ease:"easeOut"}}
                            >C</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-40}}
                            animate={isVisible ? {opacity: 1 , y:0} : {}}
                            transition={{duration:1, ease:"easeOut"}}
                            >a</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-30}}
                            animate={isVisible ? {opacity: 1 , y:0} : {}}
                            transition={{duration:1.2, ease:"easeOut"}}
                            >r</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-20}}
                            animate={isVisible ? {opacity: 1 , y:0} : {}}
                            transition={{duration:1.4, ease:"easeOut"}}
                            >a</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-10}}
                            animate={isVisible ? {opacity: 1  , y:0} : {}}
                            transition={{duration:1.6, ease:"easeOut"}}
                            >c</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-10}}
                            animate={isVisible ? {opacity: 1 , y:0} : {}}
                            transition={{duration:1.8, ease:"easeOut"}}
                            >t</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-10}}
                            animate={isVisible ? {opacity: 1 , y:0} : {}}
                            transition={{duration:2, ease:"easeOut"}}
                            >e</motion.div>
                            <motion.div
                            initial={{opacity:0 , y:-10}}
                            animate={isVisible ? {opacity: 1 , y:0} : {}}
                            transition={{duration:2.2, ease:"easeOut"}}
                            >r</motion.div>
                        </motion.b>
                    </h2>
                </div>
                <div className='relative flex box-border w-[1912px] h-[5242px] p-[0_0_4289px_0] z-auto'>
                    <div className='absolute top-0 flex w-full h-screen justify-center items-center'>
                        <div className='overflow-hidden justify-center items-center flex absolute left-0 bottom-[-300px] transform translate-y-[10%] h-[calc(996/920*var(--vh,1vh)*100)]'>
                            <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/castle.png'} alt='castle' />
                        </div>
                        <div className="sticky top-0 h-screen w-full">
                        <motion.div 
                        id="cards"
                        ref={horizontalRef}
                        style={{ x }}
                        className='pt-0 opacity-100 w-[calc(3000/920*var(--vh,1vh)*100)] flex-shrink-0 absolute -bottom-20 left-40 flex items-start justify-center rounded-full'>
                            <div className='w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom mr-10'>
                                <div className='overflow-hidden cursor-pointer bg-white rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                                    <div className='w-full relative flex items-center justify-center'>
                                        <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/herryporter.jpg'} alt='herry porter' />
                                        <img className='absolute opacity-0 transition-opacity duration-300 w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/herryporter2.jpg'} alt='herry porter2' />
                                    </div>
                                    <div className='absolute left-0 bottom-0 h-[calc(120/920*var(--vh,1vh)*100)] w-full bg-gradient-to-b from-transparent to-black'>
                                        <img className='pt-9 pl-6' src={process.env.PUBLIC_URL + 'img/herry_text.png'} alt='herry porter' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom mr-10'>
                                <div className='overflow-hidden cursor-pointer bg-white rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                                    <div className='w-full relative flex items-center justify-center'>
                                        <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/emmawatson.jpg'} alt='herry porter' />
                                        <img className='absolute opacity-0 transition-opacity duration-300 w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/emmawatson2.jpg'} alt='herry porter2' />
                                    </div>
                                    <div className='absolute left-0 bottom-0 h-[calc(120/920*var(--vh,1vh)*100)] w-full bg-gradient-to-b from-transparent to-black'>
                                        <img className='pt-12 pl-6' src={process.env.PUBLIC_URL + 'img/hermione_text.png'} alt='hermino_text' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom mr-10'>
                                <div className='overflow-hidden cursor-pointer bg-white rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                                    <div className='w-full relative flex items-center justify-center'>
                                        <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/ron.jpg'} alt='ron' />
                                        <img className='absolute opacity-0 transition-opacity duration-300 w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/ron2.jpg'} alt='ron' />
                                    </div>
                                    <div className='absolute left-0 bottom-0 h-[calc(120/920*var(--vh,1vh)*100)] w-full bg-gradient-to-b from-transparent to-black'>
                                        <img className='pt-12 pl-6' src={process.env.PUBLIC_URL + 'img/ron_text.png'} alt='ron_text' />
                                    </div>
                                </div>
                            </div>
                            <div id="lastCard" className='w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom'>
                                <div className='overflow-hidden cursor-pointer bg-[#262828] rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                                    <div className='w-full relative flex items-center justify-center'>
                                        <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/dumbledore.png'} alt='ron' />
                                    </div>
                                    <div className='absolute h-[calc(25/920*var(--vh,1vh)*100)] flex items-center justify-center left-auto bottom-auto'>
                                        <img className='h-full w-auto max-h-full max-w-full align-top object-cover' src={process.env.PUBLIC_URL + 'img/albusdumbledore_text.png'} alt='dumbledore_text' />
                                    </div>
                                    <div className='absolute bg-[#262828] -z-10 rounded-[var(--border-radius)] w-full h-full pointer-events-none shadow-[0px_0px_16px_8px_rgba(0,0,0,0.1)]'></div>
                                </div>
                            </div>
                        </motion.div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center h-full w-full relative pointer-events-none hidden'>
                        <h3 className='text-white absolute z-10 flex text-[16vw] tracking-[-0.03em] whitespace-nowrap font-poppins transform translate-y-[80px] opacity-0 hidden'>
                            <p className='font-light mr-[0.25em]'>FANTASY</p>
                            <b className='font-medium'>STORYLINE</b>
                        </h3>
                        <div className='absolute flex items-center justify-center h-[70%] transform translate-x-0 translate-y-0 opacity-100 hidden'>
                            <img className='h-full w-auto max-h-full max-w-full align-top object-cover' src={process.env.PUBLIC_URL + 'img/book.png'} alt='book' />
                        </div>
                        <div className='before_bx relative flex items-center justify-center w-[calc(850/920_*_var(--vh,1vh)*100)] top-[80px] opacity-0 rotate-[-120deg] hidden'>
                            <div style={{ width: "calc(295 / 850 * 100%)", transform: "translate(-94%, -84%)" }} className='absolute flex items-center justify-center'>
                                <div className='before_imgbx w-full relative flex items-center justify-center'>
                                    <img className='absolute w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/boximg.png'} alt='box' />
                                </div>
                                <div style={{ fontSize: "max(calc(18 / 920 * var(--vh, 1vh) * 100), 12px)" }} className='absolute opacity-0 text-white px-[16%] box-border text-center'>
                                    <img tyle={{ height: "calc(80 / 18 * 1em)", marginBottom: "calc(26 / 18 * 1em)" }} className='max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat.png'} alt='box' />
                                    <p className='tracking-[-0.03em] leading-[1.3] text-white text-center'>Love and Sacrifice</p>
                                </div>
                            </div>
                            <div style={{ width: "calc(295 / 850 * 100%)", transform: "translate(-94%, -84%)" }} className='absolute flex items-center justify-center'>
                                <div className='before_imgbx w-full relative flex items-center justify-center'>
                                    <img className='absolute w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/boximg.png'} alt='box' />
                                </div>
                                <div style={{ fontSize: "max(calc(18 / 920 * var(--vh, 1vh) * 100), 12px)" }} className='absolute opacity-0 text-white px-[16%] box-border text-center'>
                                    <img tyle={{ height: "calc(80 / 18 * 1em)", marginBottom: "calc(26 / 18 * 1em)" }} className='max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat.png'} alt='box' />
                                    <p className='tracking-[-0.03em] leading-[1.3] text-white text-center'>Friendship and Trust</p>
                                </div>
                            </div>
                            <div style={{ width: "calc(295 / 850 * 100%)", transform: "translate(94%, 84%)" }} className='absolute flex items-center justify-center'>
                                <div className='before_imgbx w-full relative flex items-center justify-center'>
                                    <img className='absolute w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/boximg.png'} alt='box' />
                                </div>
                                <div style={{ fontSize: "max(calc(18 / 920 * var(--vh, 1vh) * 100), 12px)" }} className='absolute opacity-0 text-white px-[16%] box-border text-center'>
                                    <img tyle={{ height: "calc(80 / 18 * 1em)", marginBottom: "calc(26 / 18 * 1em)" }} className='max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat.png'} alt='box' />
                                    <p className='tracking-[-0.03em] leading-[1.3] text-white text-center'>Courage and Choice</p>
                                </div>
                            </div>
                            <div className='absolute w-full h-full flex align-center justify-center z-[-1]'>
                                <div style={{ transformOrigin: "center center", width: "calc(26% - 30px)", background: "repeating-linear-gradient(to right, #fff, #fff 4px, transparent 4px, transparent 8px)", }} className='left-[22%] top-[49.5%] absolute h-[2px] opacity-50 transform rotate-[-55deg]'></div>
                                <div style={{ transformOrigin: "center center", width: "calc(26% - 30px)", background: "repeating-linear-gradient(to right, #fff, #fff 4px, transparent 4px, transparent 8px)", }} className='right-[22%] top-[49.5%] absolute h-[2px] opacity-50 transform rotate-[55deg]'></div>
                                <div style={{ transformOrigin: "center center", width: "calc(26% - 30px)", background: "repeating-linear-gradient(to right, #fff, #fff 4px, transparent 4px, transparent 8px)", width: "calc(30% - 30px)" }} className='bottom-[19%] absolute h-[2px] opacity-50'></div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        </>
    )
}

export default Section02