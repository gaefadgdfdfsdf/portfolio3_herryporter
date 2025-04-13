import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section06 = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const imageCount = 6; // 이미지 개수
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md 브레이크포인트
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerHeight = isMobile
    ? `${(imageCount - 1) * 100}vh`
    : `${(imageCount / 2 - 1) * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile
      ? ["0%", `${-75 * (imageCount - 1)}%`]
      : ["0%", `${-75 * (imageCount / 2 - 1)}vw`]
  );

  const rotations = [-7.5, 15, 2.5, 7.5, -5, 5]; // 회전 각도 배열

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


  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        background: "linear-gradient(to bottom, #332726, #000000)",
      }}
      className="relative"
    >
      <div className=" flex items-center justify-center absolute -left-10 top-1/3">
      <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/cloud_1.png'} alt='cloud' />
      </div>

  <div ref={ref} className='relative mx-auto w-[90%] z-10'>
          <h2 className='text-white text-[120px] tracking[-0.03em] flex justify-end font-poppins pt-20'>
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
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full items-center" style={{ x }}>
          {Array.from({ length: imageCount }).map((_, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 h-full flex items-center justify-center flex-none"
            >
              <img
                className="h-2/4 rounded-3xl shadow-2xl"
                src={`/po0${index + 1}.jpg`}
                alt={`Poster ${index + 1}`}
                style={{ rotate: `${rotations[index]}deg` }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Section06;
