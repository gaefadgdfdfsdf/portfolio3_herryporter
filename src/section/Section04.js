import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section04 = () => {
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);
    const horizontalRef = useRef(null);
    const cardRef = useRef(null);

    const [isPinned, setIsPinned] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isNearEnd, setIsNearEnd] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);

    
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;
            if (Math.abs(currentScrollY - lastScrollY) < 15) return;

            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', updateScrollDir);
        return () => window.removeEventListener('scroll', updateScrollDir);
    }, []);

    
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            setIsNearEnd(v > 0.5);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    
    useEffect(() => {
        const section = sectionRef.current;
        const handleScroll = () => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            const start = sectionTop;
            const end = sectionTop + sectionHeight - windowHeight;

            setIsPinned(scrollY >= start && scrollY < end);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (stickyRef.current) observer.observe(stickyRef.current);
        return () => stickyRef.current && observer.unobserve(stickyRef.current);
    }, []);

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => cardRef.current && observer.unobserve(cardRef.current);
    }, []);

    return (
        <section
            ref={sectionRef}
            className={`relative text-center transition-colors duration-500 ${
                isNearEnd ? 'bg-[#1f1d1d]' : 'bg-white'
            } text-[calc(100/920_*_var(--vh,1vh)*100)] block`}
            style={{ height: 'auto' }}
        >
            <div className="sticky top-0 h-screen overflow-hidden z-10" ref={stickyRef}>
                <div className="flex flex-col justify-center h-full relative box-border">
                    {/* mainText */}
                    <div
                        id="mainText"
                        className={`flex items-center justify-center relative transition-opacity duration-500 ${
                            isNearEnd ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                        <div className="absolute top-10 mb-[1.2em]">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.5, rotate: 30 }}
                                animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="block mx-auto h-[1.7em] min-h-[60px] max-w-full align-top"
                                src={process.env.PUBLIC_URL + '/img/magic_hat2.png'}
                                alt="magic_hat"
                            />
                            <h2 className="font-poppins text-[0.5em] tracking-[-0.03em] leading-[1.3] mt-[0.46em] mb-[0.32em]">
                                <p className="flex justify-center font-light">
                                    {'The Story of the '.split('').map((char, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                            transition={{ duration: 0.4 + idx * 0.05 }}
                                        >
                                            {char}
                                        </motion.div>
                                    ))}
                                </p>
                                <motion.b
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 1 }}
                                    className="flex justify-center font-bold"
                                >
                                    {'Dark Wizard, Voldemort'.split('').map((char, idx) => (
                                        <div key={idx}>{char}</div>
                                    ))}
                                </motion.b>
                            </h2>
                            <motion.small
                                initial={{ opacity: 0, y: -50 }}
                                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="block text-[max(0.2em,12px)] text-[#555] font-semibold"
                            >
                                Voldemort
                            </motion.small>
                        </div>
                    </div>

                    {/* 가로 스크롤 */}
                    <div className="mt-[-120px] h-screen flex items-end justify-center relative text-[calc(150/100*1em)]">
                        <motion.div
                            id="text"
                            ref={horizontalRef}
                            className="flex whitespace-nowrap absolute left-[8em] items-center"
                            style={{ x }}
                        >
                            {[
                                { label: 'Power', img: 'wand.png' },
                                { label: 'Fear', img: 'ghost.png' },
                                { label: 'Greed' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center tracking-[-0.025em] poppins-semibold font-semibold mr-[0.66em]"
                                >
                                    <p className="mr-[0.4em]">{item.label}</p>
                                    {item.img && (
                                        <div className="w-[1.51em] flex items-center justify-center">
                                            <img
                                                src={process.env.PUBLIC_URL + '/img/' + item.img}
                                                alt={item.label}
                                                className="w-full h-full max-h-full object-cover max-w-full"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="w-[1.51em] flex items-center justify-center mr-[0.4em]">
                                <img src={process.env.PUBLIC_URL + '/img/vold_6.png'} alt="vold_6" />
                            </div>
                            <div className="libre-baskerville-regular text-[40px] leading-normal flex items-center justify-center mr-[0.8em]">
                                <small>
                                    Voldemort, the most feared <br />
                                    and powerful of them all.
                                </small>
                            </div>
                            <div className="w-[1.51em] flex items-center justify-center">
                                <img
                                    className="w-auto h-full object-cover filter brightness-125 contrast-110 saturate-125"
                                    src={process.env.PUBLIC_URL + '/img/haegol.png'}
                                    alt="해골마법사"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 고정 해제 이후 콘텐츠 */}
            <div className="pb-[800px]">
               
            </div>

            {/* 카드 */}
            <div className="max-w-[1600px] mx-auto w-[90%]">
                <ul ref={cardRef} className="mt-56 pb-24 flex flex-wrap items-center justify-center w-[calc(100%+40px)] translate-x-[-20px]">
                    {[
                        {
                            title: 'Childhood',
                            img: 'egg.png',
                            desc: 'Born as Tom Riddle, he grew up in an orphanage and became obsessed with power and dark magic at Hogwarts.',
                        },
                        {
                            title: 'Rise as Dark Lord',
                            img: 'crystal.png',
                            desc: 'He became "He-Who-Must-Not-Be-Named," created Horcruxes for immortality, and sought to dominate the wizarding world.',
                        },
                        {
                            title: 'Resurrection & Defeat',
                            img: 'letter.png',
                            desc: "After being defeated by Harry's mother's love, Voldemort returned, but was ultimately destroyed by his own greed and evil choices.",
                        },
                    ].map((item, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: -50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            key={i}
                            className="max-[1437px]:mt-10 w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] max-w-[400px] mx-[20px] rounded-[20px] border-2 border-[#ffffff] bg-[#414141] text-white font-medium p-[50px_14px] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em]"
                        >
                            <div className="mb-[26px] flex items-center justify-center">
                                <img
                                    className="h-[90px] w-full max-h-full object-cover"
                                    src={process.env.PUBLIC_URL + '/img/' + item.img}
                                    alt={item.title}
                                />
                            </div>
                            <b className="text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]">
                                {item.title}
                            </b>
                            <p className="leading-[1.666] text-center">{item.desc}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Section04;