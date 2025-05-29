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
                markers: false,
                snap: 1
            });
        });

        return () => {
            
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
        <div className='w-full h-20 bg-[#2d0d05] '></div>
        <section className='w-full  pb-[50vh] relative mx-auto my-0 bg-[#2d0d05] overflow-hidden border-4'>
       <div ref={el => sectionsRef.current[0] = el} className=' w-full h-full mx-auto'>
           <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white ml-20 mr-20 overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
               <div className='max-[1080px]:flex-col flex items-start justify-between'>
                    <div className='max-[1080px]:mx-auto max-[1080px]:items-center max-xl:text-center flex flex-col max-xl:items-start justify-between h-full text-[100px] overflow-hidden'>
                        <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl: max-[540px]:text-[0.6em] max-xl:text-[0.8em] text-[1.2em] libre-baskerville-regular '>01</em>
                        <div>
                            <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold pt-5'>
                                Harry Potter and the Sorcerer’s Stone
                            </h3>
                            <p className='max-[1080px]:text-center max-xl:text-left max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                                11-year-old Harry discovers he is a wizard<br className='max-[890px]:hidden' />
                                and attends Hogwarts School of Witchcraft and Wizardry.<br className='max-[890px]:hidden' />
                                He learns about his past, makes new friends, and faces<br className='max-[890px]:hidden' />
                                Voldemort for the first time.
                            </p>
                        </div>
                    </div>
                    <div className='max-xl:w-[420px] max-xl:h-[270px] max-xl:pt-6 max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                        <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_1.jpg'} alt='pic_1' />
                    </div>
               </div>
               <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-2 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
                On his 11th birthday, Harry Potter learns that he is a wizard and leaves his miserable life with the Dursleys to attend Hogwarts School of Witchcraft and Wizardry.
                At Hogwarts, he befriends Ron Weasley and Hermione Granger, and is sorted into Gryffindor House, known for bravery and courage.
                Through magical classes and adventures, Harry starts to uncover the truth about his past and how his parents died.
                He discovers the existence of the Sorcerer’s Stone, a powerful magical object hidden within the school, and learns that someone is trying to steal it.
                With the help of his friends, Harry sets out to protect the stone and faces Lord Voldemort for the first time in a dangerous and unforgettable encounter.
                
               </p>
           </div>
         
       </div>
       <div ref={el => sectionsRef.current[1] = el} className='w-full h-full mx-auto mb-20'>
           <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white  ml-20 mr-20 overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
               <div className='max-[1080px]:flex-col flex items-start justify-between'>
                    <div className='max-[1080px]:items-center max-[1080px]:mx-auto max-xl:items-start max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                        <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-[540px]:text-[0.6em] text-[1.2em] max-xl:text-[0.8em]  libre-baskerville-regular'>02</em>
                        <div>
                            <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[#601301] poppins-bold text-[max(.4em,22px)]  pt-5'>
                            Harry Potter and the Chamber of Secrets
                            </h3>
                            <p className='max-[1080px]:text-center max-xl:text-left max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                            Mysterious attacks occur at Hogwarts, turning<br className='max-[890px]:hidden' />
                            students into stone. Harry uncovers the legend of the<br className='max-[890px]:hidden' />
                            Chamber of Secrets and battles a deadly basilisk.
                            </p>
                        </div>
                    </div>
                    <div className='max-xl:w-[420px] max-xl:h-[270px] max-xl:pt-6 max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                        <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_2.jpg'} alt='pic_2' />
                    </div>
               </div>
               <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-2 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
                In his second year at Hogwarts, Harry returns despite warnings from a house-elf named Dobby who tries to stop him.
                Soon, strange attacks begin to happen at the school—students, a cat, and even a ghost are found petrified, turned to stone by an unknown force.
                Harry hears mysterious voices in the walls and learns about the legend of the Chamber of Secrets, said to be hidden deep within Hogwarts by one of its founders.
                With the help of Ron and Hermione, he discovers that the chamber has been opened before and is connected to a monster that can kill with a single glance.In a dramatic climax, Harry enters the chamber, faces a giant basilisk, destroys Tom Riddle’s diary, and saves Ginny Weasley, lifting the curse from the school.
               </p>
           </div>
       </div>
       <div ref={el => sectionsRef.current[2] = el} className='w-full h-full mx-auto mb-20'>
           <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white  ml-20 mr-20  overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
               <div className='max-[1080px]:flex-col flex items-start justify-between'>
                    <div className='max-[1080px]:items-center max-[1080px]:mx-auto max-xl:items-start max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                        <em style={{ fontStyle: "italic",  color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-[540px]:text-[0.6em] text-[1.2em] max-xl:text-[0.8em]  libre-baskerville-regular'>03</em>
                        <div>
                            <h3 style={{ letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold  pt-5'>
                            Harry Potter and the Prisoner of Azkaban
                            </h3>
                            <p className='max-[1080px]:text-center max-xl:text-left max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                            A dangerous prisoner, Sirius Black, escapes from<br className='max-[890px]:hidden' />
                            Azkaban and seems to be hunting Harry. The truth<br className='max-[890px]:hidden' />
                            about Harry’s parents and their past is revealed.
                            </p>
                        </div>
                    </div>
                    <div className='max-xl:w-[420px] max-xl:h-[270px]  max-xl:pt-6 max-xl:h-auto max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                        <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_3.jpg'} alt='pic_3' />
                    </div>
               </div>
               <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-2 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
                In his third year at Hogwarts, Harry learns that Sirius Black, a feared prisoner from Azkaban, has escaped and is believed to be after him.
                Dementors, the soul-sucking guards of Azkaban, are stationed at the school, affecting Harry more than anyone else.
                As the year unfolds, Harry uncovers secrets about his parents’ past and their connection to Sirius Black.
                With the help of Hermione’s time-turner and Professor Lupin, Harry discovers that Sirius is actually his godfather—and not the traitor he was thought to be.
                In a thrilling twist, they also uncover the true betrayer, Peter Pettigrew, and narrowly help Sirius escape from being captured once again.
                
               </p>
           </div>
       </div>
       <div ref={el => sectionsRef.current[3] = el} className='w-full h-full mx-auto mb-20'>
           <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white  ml-20 mr-20  overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
               <div className='max-[1080px]:flex-col flex items-start justify-between'>
                    <div className='max-[1080px]:items-center max-[1080px]:mx-auto max-xl:items-start max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                        <em style={{ fontStyle: "italic",  color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-[540px]:text-[0.6em] text-[1.2em] max-xl:text-[0.8em] libre-baskerville-regular'>04</em>
                        <div>
                            <h3 style={{ letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold  pt-5'>
                            Harry Potter and the Goblet of Fire
                            </h3>
                            <p className='max-[1080px]:text-center max-xl:text-left max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                            Hogwarts hosts the Triwizard Tournament, <br className='max-[890px]:hidden' />
                            and Harry is mysteriously entered as a competitor.<br className='max-[890px]:hidden' />
                            The tournament leads to Voldemort’s full resurrection.
                            </p>
                        </div>
                    </div>
                    <div className='max-xl:w-[420px] max-xl:h-[270px]  max-xl:pt-6 max-xl:h-auto max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                        <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_4.jpg'} alt='pic_4' />
                    </div>
               </div>
               <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-6 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
                In his fourth year, Harry unexpectedly becomes a competitor in the dangerous Triwizard Tournament, even though he's too young and never put his name in.
                He faces three life-threatening tasks, competing against champions from two other magical schools—Durmstrang and Beauxbatons.
                As the tournament progresses, strange events and dark magic hint that something sinister is at play behind the scenes.
                During the final task, Harry is transported to a graveyard where he witnesses the chilling resurrection of Lord Voldemort in full power.
                He narrowly escapes with his life, but the wizarding world is changed forever as Voldemort's return marks the beginning of a new era of darkness.
               </p>
           </div>
       </div>
       <div ref={el => sectionsRef.current[4] = el} className='w-full h-full mx-auto mb-20'>
            <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white  ml-20 mr-20  overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
               <div className='max-[1080px]:flex-col flex items-start justify-between'>
                    <div className='max-[1080px]:items-center max-[1080px]:mx-auto max-xl:items-start max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                        <em style={{ fontStyle: "italic",color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-[540px]:text-[0.6em] text-[1.2em] max-xl:text-[0.8em] libre-baskerville-regular'>05</em>
                        <div>
                            <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold  pt-5'>
                            Harry Potter and the Order of the Phoenix
                            </h3>
                            <p className='max-[1080px]:text-center max-xl:text-left max-[1080px]:mx-auto max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                            The Ministry of Magic denies Voldemort’s return,<br className='max-[890px]:hidden' />
                            and Harry faces a harsh new teacher, Dolores Umbridge.<br className='max-[890px]:hidden' />
                            Harry forms Dumbledore’s Army to fight against oppression<br className='max-[890px]:hidden' />
                            and learns about the prophecy linking him to Voldemort.
                            </p>
                        </div>
                    </div>
                    <div className='max-xl:w-[420px] max-xl:h-[270px]  max-xl:pt-6 max-xl:h-auto max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                        <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_5.jpg'} alt='pic_5' />
                    </div>
               </div>
               <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-2 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
                In his fifth year, Harry struggles with being disbelieved by the wizarding world, as the Ministry of Magic refuses to accept Voldemort’s return.
                Dolores Umbridge, a cruel Ministry official, takes control of Hogwarts and enforces strict, oppressive rules that silence students and teachers.
                Frustrated and determined, Harry secretly forms “Dumbledore’s Army” to teach fellow students how to defend themselves against dark magic.
                As he experiences painful visions connected to Voldemort, Harry learns about a mysterious prophecy that foretells their inevitable battle.
                The year culminates in a fierce fight at the Ministry, the heartbreaking loss of Sirius Black, and the undeniable confirmation that Voldemort has returned.
             
               </p>
           </div>
       </div>
       <div ref={el => sectionsRef.current[5] = el} className='w-full h-full mx-auto mb-20'>
           <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white ml-20 mr-20 overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
               <div className='max-[1080px]:flex-col flex items-start justify-between'>
                <div className='max-[1080px]:items-center max-[1080px]:mx-auto max-xl:items-start max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                    <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-[540px]:text-[0.6em] text-[1.2em] max-xl:text-[0.8em] libre-baskerville-regular'>06</em>
                    <div>
                        <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold pt-5'>
                        Harry Potter and the Half-Blood Prince
                        </h3>
                        <p className='max-[1080px]:text-center max-xl:text-left max-[1080px]:mx-auto max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                        Dumbledore teaches Harry <br className='max-[890px]:hidden' />
                        Voldemort’s past and the secret of Horcruxes.<br className='max-[890px]:hidden' />
                        Tragedy strikes as Hogwarts is no longer safe.
                        </p>
                    </div>
                </div>
                <div className='max-xl:w-[420px] max-xl:h-[270px] max-xl:pt-6 max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                    <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_6.jpg'} alt='pic_6' />
                </div>
               </div>
               <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-2 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
               In his sixth year at Hogwarts, Harry begins private lessons with Dumbledore to uncover Voldemort’s dark past and the key to his immortality—Horcruxes.
                Harry also finds a mysterious Potions textbook filled with powerful spells and notes from someone called the “Half-Blood Prince.”
                As danger grows outside the castle, Draco Malfoy is given a deadly mission, and Harry becomes increasingly suspicious of his actions.
                Through Dumbledore’s guidance, Harry learns that Voldemort has split his soul into several Horcruxes, which must be destroyed to defeat him.
                Tragedy strikes when Dumbledore is killed during an attack on Hogwarts, leaving Harry and his friends to face the dark future without their mentor.

               </p>
           </div>
       </div>

       <div ref={el => sectionsRef.current[6] = el} className='w-full h-full mx-auto mb-20'>
           <div className="max-[1024px]:pt-10 max-md:ml-10 max-md:mr-10 h-[100vh] bg-white ml-20 mr-20 overflow-hidden pt-28 pb-20 pl-16 pr-16 rounded-[20px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)]">
                <div className='ax-[1080px]:mx-auto max-[1080px]:flex-col flex items-start justify-between'>
                    <div className=' max-[1080px]:mx-auto max-[1080px]:items-center max-xl:items-start max-xl:text-center flex flex-col items-start justify-between h-full text-[100px] overflow-hidden'>
                        <em style={{ fontStyle: "italic", color: "transparent", lineHeight: "1", WebkitTextStroke: "1px #7e1800", }} className='max-xl:text-[0.8em] max-[540px]:text-[0.6em] text-[1.2em] libre-baskerville-regular'>07</em>
                        <div>
                            <h3 style={{  letterSpacing: "-0.04em", fontWeight: "600", lineHeight: "1.2", }} className='max-[1600px]:text-[30px] max-[1080px]:text-center max-xl:text-left max-[540px]:text-[22px] max-[1450px]:text-[34px] text-[max(.4em,22px)] text-[#601301] poppins-bold pt-5'>
                            Harry Potter and the Deathly Hallows
                            </h3>
                            <p className='max-[1080px]:text-center max-xl:text-left max-[540px]:text-[16px] max-xl:text-[18px] max-xl:mb-[1.2em] pretendard-medium text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                            Harry and his friends go on a quest to destroy Voldemort’s Horcruxes.<br className='max-[890px]:hidden max-md:hidden' />
                            The final battle at Hogwarts decides the fate of the wizarding world.
                            </p>
                        </div>
                    </div>
                    <div className='max-xl:w-[420px] max-xl:h-[270px] max-xl:pt-6 max-[1080px]:mx-auto max-[768px]:w-full max-[1600px]:w-[460px] relative flex items-center justify-center w-[570px] h-[350px]'>
                        <img className='max-xl:rounded-[20px] w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_7.jpg'} alt='pic_7' />
                    </div>
                </div>
                <p className='max-[1600px]:text-[20px] max-[1080px]:hidden max-xl:text-[18px] max-xl:pt-2 tracking-[-0.03em] leading-[1.7] text-[#c3c3c3] text-[24px] libre-baskerville-regular-italic pt-16'>
                In their final year, Harry, Ron, and Hermione set out on a perilous journey to find and destroy Voldemort’s remaining Horcruxes, with no help from Hogwarts.
                They face constant danger, betrayal, and loss as they uncover the secrets of the Deathly Hallows—three legendary magical objects tied to death itself.
                The wizarding world falls deeper into darkness under Voldemort’s control, and the trio’s mission becomes a race against time.
                Eventually, they return to Hogwarts for a final stand, where students, teachers, and magical creatures unite to defend the school.
                In an epic and emotional conclusion, Harry sacrifices himself, defeats Voldemort once and for all, and brings peace back to the wizarding world.
               
               </p>
           </div>
       </div>
     
        {/* 마지막 섹션 이후 추가 여백 */}
        <div className='max-[1500px]:h-[50vh] max-md:h-[50vh] max-xl:h-[70vh] h-[50vh]'></div>
  
   </section>
   <section className='w-full top-0 relative mx-auto my-0 bg-[#2d0d05] overflow-hidden border-4 border-red-600 pb-20'>  
    <div className='flex w-max animate-marquee pt-24 pb-20'>
        {/* 텍스트 그룹을 2배로 복제하여 자연스러운 반복 */}
        <div className='flex shrink-0 space-x-4'>
            {[...Array(2)].map((_, i) => (
                <div key={i} className='max-[540px]:text-[70px] max-md:text-[100px] text-[150px] tracking-[-0.03em] flex whitespace-nowrap'>
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