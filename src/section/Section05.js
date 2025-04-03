import React, { useEffect, useRef, useState } from 'react';
import {motion} from "framer-motion";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Section05 = () => {

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
            <section ref={ref} className='bg-[#a1cccc] overflow-hidden relative block'>
                <div className='max-[1600px]:flex-col pb-[150px] flex items-start justify-between pt-[150px] max-w[1600px] relative mx-auto w-[90%]'>
                    <div className='absolute w-[722px] left-[96px] bottom-0 transform translate-y-[15%] opacity-65'>
                        <img className='max-w-full h-auto align-top' src={process.env.PUBLIC_URL + 'img/herry_porter.png'} alt='글자' />
                    </div>
                    <div className='text-[60px] min-w-[560px]'>
                        <h2 className='tracking-[-0.03em] leading-[1.333]'>
                            <div className='overflow-hidden'>
                               
                            <motion.b
                            
                             initial={{opacity:0, y:50}}
                             animate={isVisible ? {opacity: 1, y:0} : {}}
                             transition={{duration:0.8, ease:"easeOut"}}
                             className='pretendard-semibold block font-semibold '>Movie</motion.b>
                            </div>
                        </h2>
                        <motion.div
                         initial={{opacity:0, y:50}}
                         animate={isVisible ? {opacity: 1, y:0} : {}}
                         transition={{duration:0.8, ease:"easeOut"}}
                         className='max-[1600px]:mb-[20px] mt-[10px] text-[16px] pl-[3px] flex items-center'>
                            <p className='poppins-regular  tracking-[-0.03em] opacity-70 mr-[10px]'>View <em className='libre-baskerville-regular-italic italic'>more</em></p>
                            <div className="flex mt-[3px]">
                                <i className="w-[13px] infinite_side mr-[-4px]">
                                    <SvgIcon />
                                </i>
                                <i className="w-[13px] infinite_side delay-[0.1s] mr-[-4px]">
                                    <SvgIcon />
                                </i>
                                <i className="w-[13px] infinite_side delay-[0.2s]">
                                    <SvgIcon />
                                </i>
                            </div>
                        </motion.div>
                    </div>
                    <div className='w-full'>
                        <motion.div
                         initial={{opacity:0, y:50}}
                         animate={isVisible ? {opacity: 1, y:0} : {}}
                         transition={{duration:0.8, ease:"easeOut"}}
                        className='w-full touch-pan-y mx-auto relative overflow-hidden list-none p-0 z-10'>
                            <Swiper
                             modules={[Navigation]}
                             spaceBetween={20}  // 항상 20px 유지
                             slidesPerView="auto"  // 슬라이드 개수 자동 조절
                             className='transform-gpu translate-x-0 translate-y-0 translate-z-0 relative w-full h-full z-10 flex transition-transform box-content'>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_1.jpg'} alt='사진1' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B02&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01&tqi=i9HrvsqosK8sshCPStZssssstuK-175066' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_2.jpg'} alt='사진2' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B03&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B02&tqi=i9Hrvlqo1SCssnAjpAhssssss%2Fs-363848' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_3.jpg'} alt='사진3' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B04&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B03&tqi=i9Hr7lqo1awssZgLWPossssssNN-006348' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_4.jpg'} alt='사진4' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B05&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B04&tqi=i9Hrnwqo1SossOUl3uRssssssVh-013376' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_5.jpg'} alt='사진5' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B06&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B05&tqi=i9HrSwqosK8sshQxPHossssst1l-368795' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_6.jpg'} alt='사진6' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B07&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B07%2C8&tqi=i9HrmwqosTCssiD3tl0sssssspd-125518' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_7.jpg'} alt='사진7' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_1.jpg'} alt='사진1' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B02&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01&tqi=i9HrvsqosK8sshCPStZssssstuK-175066' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_2.jpg'} alt='사진2' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B03&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B02&tqi=i9Hrvlqo1SCssnAjpAhssssss%2Fs-363848' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_3.jpg'} alt='사진3' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B04&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B03&tqi=i9Hr7lqo1awssZgLWPossssssNN-006348' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_4.jpg'} alt='사진4' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B05&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B04&tqi=i9Hrnwqo1SossOUl3uRssssssVh-013376' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_5.jpg'} alt='사진5' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B06&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B05&tqi=i9HrSwqosK8sshQxPHossssst1l-368795' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_6.jpg'} alt='사진6' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B07&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B07%2C8&tqi=i9HrmwqosTCssiD3tl0sssssspd-125518' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_7.jpg'} alt='사진7' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_1.jpg'} alt='사진1' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B02&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B01&tqi=i9HrvsqosK8sshCPStZssssstuK-175066' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_2.jpg'} alt='사진2' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B03&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B02&tqi=i9Hrvlqo1SCssnAjpAhssssss%2Fs-363848' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_3.jpg'} alt='사진3' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B04&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B03&tqi=i9Hr7lqo1awssZgLWPossssssNN-006348' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_4.jpg'} alt='사진4' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B05&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B04&tqi=i9Hrnwqo1SossOUl3uRssssssVh-013376' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_5.jpg'} alt='사진5' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B06&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B05&tqi=i9HrSwqosK8sshQxPHossssst1l-368795' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_6.jpg'} alt='사진6' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide style={{ width: "254px" }}>
                                <div className='mr-[20px] w-[254px] flex-shrink-0 h-full relative transition-transform'>
                                    <a className='block' href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&ssc=tab.nx.all&query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B07&oquery=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B07%2C8&tqi=i9HrmwqosTCssiD3tl0sssssspd-125518' target='_blank'>
                                        <div className='imgbox w-full rounded-[20px] relative flex items-center justify-center'>
                                            <img className='rounded-[20px] object-cover align-top max-w-full max-h-full w-full h-full' src={process.env.PUBLIC_URL + 'img/movie_7.jpg'} alt='사진7' />
                                        </div>
                                    </a>
                                </div>
                                </SwiperSlide>
                            </Swiper>
                            <span className='absolute left-0 top-0 pointer-events-none opacity-0 z-[-1000]'></span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

const SvgIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="m6.733,23.888l-.707-.707,10.827-10.827c.095-.095.146-.22.146-.354s-.052-.259-.146-.354L6.026.819l.707-.707,10.827,10.827c.283.283.439.66.439,1.061s-.156.777-.439,1.061l-10.827,10.827Z"/>
      </svg>
    );
  };

export default Section05