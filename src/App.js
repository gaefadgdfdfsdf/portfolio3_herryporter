import './App.css';
import './reset.css';


function App() {
  return (
   <>
    <header className='text-white absolute z-[100] top-0 left-0 w-full'>
      <div className='flex items-center justify-between pt-[max(1.5625vw,30px)] relative mx-auto my-0 w-[90%]'>
        <a href=''><img className='' src={process.env.PUBLIC_URL + 'img/logo.png'} alt='logo image'/></a>
      </div>
    </header>
    <div className='w-full h-full overflow-hidden'>
      <div className='transform-none box-border w-full overflow-visible'>
        <div className='pin'>
          <section className='overflow-hidden w-full h-screen relative text-white'>
            <div className='w-full h-full absolute flex items-center justify-center'>
              <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/bl_bg.jpg'} alt='blackbg'/>
            </div>
            <div className='flex items-center justify-center absolute top-0 right-[95px] h-full'>
              <img className='w-[1477px] h-[831px] max-h-full object-cover' src={process.env.PUBLIC_URL + 'img/human_img.png'} alt='human'/>
            </div>
            <div className='flex flex-col justify-between pb-20 box-border relative w-[90%] mx-auto my-0 h-screen'>
              <h2 className='pt-[max(calc(160/920*var(--vh,1vh)*100),100px)]'>
                <strong className='font-poppins block overflow-hidden text-[min(calc(180/920*var(--vh,1vh)*100),calc(180/1920*100vw))] tracking-[-0.03em] font-bold ml-[-0.07em] pb-[32px]'>
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
                   <b>Hogwarts</b> is a <em className='font-libre'>British magical school</em> <em>with four houses,</em><br/>
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
        <section className='relative overflow-hidden block w-full h-[130vh]'>
          <div className='w-full h-full absolute flex items-center justify-center'>
            <img className='w-full h-full max-h-full max-w-full object-cover align-top object-[60%_center]' src={process.env.PUBLIC_URL + 'img/night_bg.jpg'} alt='night'/>
          </div>
          <div className='mt-[160px] relative mx-auto w-[90%]'>
            <h2 className='text-white text-[120px] tracking[-0.03em] flex justify-end font-poppins'>
              <b className='flex font-medium mr-[0.2em]'>
                <div>C</div>
                <div>H</div>
                <div>A</div>
                <div>R</div>
                <div>A</div>
                <div>C</div>
                <div>T</div>
                <div>E</div>
                <div>R</div>
              </b>
            </h2>
          </div>
          <div className='relative flex overflow-visible box-border w-[1912px] h-[5242px] p-[0_0_4289px_0] z-auto'>
            <div className='relative flex w-full h-[953px] justify-center items-center'>
              <div className='justify-center items-center flex absolute left-0 bottom-0 transform translate-y-[10%] h-[calc(996/920*var(--vh,1vh)*100)]'>
                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/castle.png'} alt='castle'/>
              </div>
              <div className='pt-0 transform rotate-[-90deg] w-[calc(3000/920*var(--vh,1vh)*100)] flex-shrink-0 absolute top-[calc((var(--vh,1vh)*100)-(600/920*var(--vh,1vh)*100))/2] flex items-start justify-center rounded-full'>
                <div className='rotate-0 absolute w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom'>
                  <div className='overflow-hidden cursor-pointer bg-white rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                    <div className='w-full relative flex items-center justify-center'>
                      <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/herryporter.jpg'} alt='herry porter'/>
                      <img className='absolute opacity-0 transition-opacity duration-300 w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/herryporter2.jpg'} alt='herry porter2'/>
                    </div>
                    <div className='absolute left-0 bottom-0 h-[calc(120/920*var(--vh,1vh)*100)] w-full bg-gradient-to-b from-transparent to-black'>
                      <img className='pt-9 pl-6' src={process.env.PUBLIC_URL + 'img/herry_text.png'} alt='herry porter'/>
                    </div>
                  </div>
                </div>
                <div className='rotate-[30deg] absolute w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom'>
                  <div className='overflow-hidden cursor-pointer bg-white rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                    <div className='w-full relative flex items-center justify-center'>
                      <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/emmawatson.jpg'} alt='herry porter'/>
                      <img className='absolute opacity-0 transition-opacity duration-300 w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/emmawatson2.jpg'} alt='herry porter2'/>
                    </div>
                    <div className='absolute left-0 bottom-0 h-[calc(120/920*var(--vh,1vh)*100)] w-full bg-gradient-to-b from-transparent to-black'>
                      <img className='pt-12 pl-6' src={process.env.PUBLIC_URL + 'img/hermione_text.png'} alt='hermino_text'/>
                    </div>
                  </div>
                </div>
                <div className='rotate-[60deg] absolute w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom'>
                  <div className='overflow-hidden cursor-pointer bg-white rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                    <div className='w-full relative flex items-center justify-center'>
                      <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/ron.jpg'} alt='ron'/>
                      <img className='absolute opacity-0 transition-opacity duration-300 w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/ron2.jpg'} alt='ron'/>
                    </div>
                    <div className='absolute left-0 bottom-0 h-[calc(120/920*var(--vh,1vh)*100)] w-full bg-gradient-to-b from-transparent to-black'>
                      <img className='pt-12 pl-6' src={process.env.PUBLIC_URL + 'img/ron_text.png'} alt='ron_text'/>
                    </div>  
                  </div>
                </div>
                <div className='rotate-[90deg] absolute w-[calc((430/3000*100)*1%)] h-1/2 origin-bottom'>
                  <div className='overflow-hidden cursor-pointer bg-[#262828] rounded-[var(--border-radius)] relative shadow-[0px_0px_16px_10px_rgba(255,255,255,0.3)] top-0 flex items-center justify-center'>
                    <div className='w-full relative flex items-center justify-center'>
                      <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/dumbledore.png'} alt='ron'/>
                    </div>
                    <div className='absolute h-[calc(25/920*var(--vh,1vh)*100)] flex items-center justify-center left-auto bottom-auto'>
                      <img className='h-full w-auto max-h-full max-w-full align-top object-cover' src={process.env.PUBLIC_URL + 'img/albusdumbledore_text.png'} alt='dumbledore_text'/>
                    </div>
                    <div className='absolute bg-[#262828] -z-10 rounded-[var(--border-radius)] w-full h-full pointer-events-none shadow-[0px_0px_16px_8px_rgba(0,0,0,0.1)]'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center h-full w-full relative pointer-events-none hidden'>
              <h3 className='text-white absolute z-10 flex text-[16vw] tracking-[-0.03em] whitespace-nowrap font-poppins transform translate-y-[80px] opacity-0 hidden'>
                <p className='font-light mr-[0.25em]'>FANTASY</p>
                <b className='font-medium'>STORYLINE</b>
              </h3>
              <div className='absolute flex items-center justify-center h-[70%] transform translate-x-0 translate-y-0 opacity-100 hidden'>
                <img className='h-full w-auto max-h-full max-w-full align-top object-cover' src={process.env.PUBLIC_URL + 'img/book.png'} alt='book'/>
              </div>
              <div className='before_bx relative flex items-center justify-center w-[calc(850/920_*_var(--vh,1vh)*100)] top-[80px] opacity-0 rotate-[-120deg] hidden'>
                <div style={{ width: "calc(295 / 850 * 100%)" ,transform: "translate(0%, -84%)"}} className='absolute flex items-center justify-center'>
                  <div className='before_imgbx w-full relative flex items-center justify-center'>
                    <img className='absolute w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/boximg.png'} alt='box'/>
                  </div>
                  <div style={{fontSize: "max(calc(18 / 920 * var(--vh, 1vh) * 100), 12px)"}} className='absolute opacity-0 text-white px-[16%] box-border text-center'>
                    <img tyle={{height: "calc(80 / 18 * 1em)",marginBottom: "calc(26 / 18 * 1em)"}} className='max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat.png'} alt='box'/>
                    <p className='tracking-[-0.03em] leading-[1.3] text-white text-center'>Love and Sacrifice</p>
                  </div>
                </div>
                <div style={{ width: "calc(295 / 850 * 100%)" ,transform: "translate(-94%, -84%)"}} className='absolute flex items-center justify-center'>
                  <div className='before_imgbx w-full relative flex items-center justify-center'>
                    <img className='absolute w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/boximg.png'} alt='box'/>
                  </div>
                  <div style={{fontSize: "max(calc(18 / 920 * var(--vh, 1vh) * 100), 12px)"}} className='absolute opacity-0 text-white px-[16%] box-border text-center'>
                    <img tyle={{height: "calc(80 / 18 * 1em)",marginBottom: "calc(26 / 18 * 1em)"}} className='max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat.png'} alt='box'/>
                    <p className='tracking-[-0.03em] leading-[1.3] text-white text-center'>Friendship and Trust</p>
                  </div>
                </div>
                <div style={{ width: "calc(295 / 850 * 100%)" ,transform: "translate(94%, 84%)"}} className='absolute flex items-center justify-center'>
                  <div className='before_imgbx w-full relative flex items-center justify-center'>
                    <img className='absolute w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/boximg.png'} alt='box'/>
                  </div>
                  <div style={{fontSize: "max(calc(18 / 920 * var(--vh, 1vh) * 100), 12px)"}} className='absolute opacity-0 text-white px-[16%] box-border text-center'>
                    <img tyle={{height: "calc(80 / 18 * 1em)",marginBottom: "calc(26 / 18 * 1em)"}} className='max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat.png'} alt='box'/>
                    <p className='tracking-[-0.03em] leading-[1.3] text-white text-center'>Courage and Choice</p>
                  </div>
                </div>
                <div className='absolute w-full h-full flex align-center justify-center z-[-1]'>
                  <div style={{transformOrigin: "center center",width: "calc(26% - 30px)",background: "repeating-linear-gradient(to right, #fff, #fff 4px, transparent 4px, transparent 8px)",}}className='left-[22%] top-[49.5%] absolute h-[2px] opacity-50 transform rotate-[-55deg]'></div>
                  <div style={{transformOrigin: "center center",width: "calc(26% - 30px)",background: "repeating-linear-gradient(to right, #fff, #fff 4px, transparent 4px, transparent 8px)",}}className='right-[22%] top-[49.5%] absolute h-[2px] opacity-50 transform rotate-[55deg]'></div>
                  <div style={{transformOrigin: "center center", width: "calc(26% - 30px)",background: "repeating-linear-gradient(to right, #fff, #fff 4px, transparent 4px, transparent 8px)", width: "calc(30% - 30px)"}}className='bottom-[19%] absolute h-[2px] opacity-50'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#160501] pt-[120px] pb-[150px] overflow-hidden block'>
          <div className='max-w-[1720px] relative mx-auto w-[90%]'>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>01</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                        Harry Potter and the Sorcerer’s Stone 
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      11-year-old Harry discovers he is a wizard<br/>
                      and attends Hogwarts School of Witchcraft and Wizardry.<br/>
                      He learns about his past, makes new friends, and faces<br/>
                      Voldemort for the first time.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_1.jpg'} alt='pic_1'/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>02</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                      Harry Potter and the Chamber of Secrets 
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      Mysterious attacks occur at Hogwarts, turning<br/>
                      students into stone. Harry uncovers the legend of the<br/>
                      Chamber of Secrets and battles a deadly basilisk.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_2.jpg'} alt='pic_2'/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>03</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                      Harry Potter and the Prisoner of Azkaban
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      A dangerous prisoner, Sirius Black, escapes from<br/>
                      Azkaban and seems to be hunting Harry. The truth<br/>
                      about Harry’s parents and their past is revealed.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_3.jpg'} alt='pic_3'/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>04</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                      Harry Potter and the Goblet of Fire
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      Hogwarts hosts the Triwizard Tournament, <br/>
                      and Harry is mysteriously entered as a competitor.<br/>
                      The tournament leads to Voldemort’s full resurrection.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_4.jpg'} alt='pic_4'/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>05</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                      Harry Potter and the Order of the Phoenix
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      The Ministry of Magic denies Voldemort’s return,<br/>
                      and Harry faces a harsh new teacher, Dolores Umbridge.<br/>
                      Harry forms Dumbledore’s Army to fight against oppression<br/>
                      and learns about the prophecy linking him to Voldemort.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_5.jpg'} alt='pic_5'/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>06</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                      Harry Potter and the Half-Blood Prince
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      Dumbledore teaches Harry <br/>
                      Voldemort’s past and the secret of Horcruxes.<br/>
                      Tragedy strikes as Hogwarts is no longer safe.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_6.jpg'} alt='pic_6'/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='perspective-[300px] mb-[40px]'>
                <div style={{transformOrigin: "center top",filter: "brightness(1)",}} className='rounded-[20px] flex items-end justify-between bg-white pt-[70px] pb-[70px] pl-[100px] pr-[100px] box-border relative top-0 h-[570px]'>
                  <div className='flex flex-col items-start justify-between h-full text-[100px]'>
                    <em style={{fontStyle: "italic",fontSize: "1.6em",color: "transparent",lineHeight: ".8",WebkitTextStroke: "1px #7e1800",}}className='font-libre'>07</em>
                    <div>
                      <h3 style={{fontSize: "max(.4em, 22px)",letterSpacing: "-0.04em",fontWeight: "600",lineHeight: "1.2",}}className='text-[#601301] font-poppins'>
                      Harry Potter and the Deathly Hallows
                      </h3>
                      <p className='text-[max(0.2em,14px)] tracking-[-0.03em] leading-[1.7] text-[#555555] font-medium mt-[calc(26/20*1em)]'>
                      Harry and his friends go on a quest to destroy Voldemort’s Horcruxes.<br/>
                      The final battle at Hogwarts decides the fate of the wizarding world.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex items-center justify-center'>
                    <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/pic_7.jpg'} alt='pic_7'/>
                  </div>
                </div>
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
        <section className='overflow-hidden bg-white text-center text-[calc(100/920_*_var(--vh,1vh)*100)] block'>
          <div className='text-center'>
            <div className='box-border flex flex-col justify-center h-[calc(var(--vh,1vh)*100)]'>
              <div className='flex items-center justify-center relative box-border'>
                <div className='absolute mb-[1.2em]'>
                  <img className='block mx-auto h-[1.7em] min-h-[60px] max-w-full align-top' src={process.env.PUBLIC_URL + 'img/magic_hat2.png'} alt='magic_hat'/>
                  <h2 className='font-poppins flex flex-col text-[0.5em] tracking-[-0.03em] leading-[1.3] mt-[0.46em] mb-[0.32em] text-center'>
                    <p className='flex justify-center font-light text-center'>
                      <div>T</div>
                      <div>h</div>
                      <div>e</div>
                      <span className='flex mx-[0.28em]'>
                        <div>S</div>
                        <div>t</div>
                        <div>o</div>
                        <div>r</div>
                        <div>y</div>
                      </span>
                      <div>o</div>
                      <div>f</div>
                      <span className='flex mx-[0.28em]'>
                        <div>t</div>
                        <div>h</div>
                        <div>e</div>
                      </span>
                    </p>
                    <b className='flex justify-center font-bold'>
                      <div>D</div>
                      <div>a</div>
                      <div>r</div>
                      <div>k</div>
                      <span className='flex mx-[0.28em]'>
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
                    </b>
                  </h2>
                  <small className='overflow-hidden block text-[max(0.2em,12px)] tracking-[-0.03em] text-[#555] font-semibold'>Voldemort</small>
                </div>
              </div>
              <div className='flex items-center justify-center relative box-border text-[calc(150/100*1em)]'>
                <div className='flex whitespace-nowrap absolute'>
                  <div className='flex items-center tracking-[-0.025em] font-Poppins font-semibold mr-[0.66em]'>
                    <p className='mr-[0.2em]'>Power</p>
                    <div className='w-[1.51em] relative flex items-center justify-center'>
                      <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/wand.png'} alt='wand'/>
                    </div>
                  </div>
                  <div className='flex items-center tracking-[-0.025em] font-Poppins font-semibold mr-[0.66em]'>
                    <p className='mr-[0.2em]'>Fear</p>
                    <div className='w-[1.51em] relative flex items-center justify-center'>
                      <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + 'img/ghost.png'} alt='ghost'/>
                    </div>
                  </div>
                </div>
                <div className='relative tracking-[-0.025em] font-Poppins font-semibold whitespace-nowrap'>
                  <p className='tracking-[-0.025em]'>Greed</p>
                </div>
              </div>
              <div className='overflow-hidden flex items-center justify-center relative box-border'>
                <div className='absolute mt-[90%] text-[max(calc(24/100*1em),15px)] tracking-[-0.025em] flex flex-col items-center leading-[1.65] px-[5vw] box-border font-semibold'>
                  <div className='_imgbx w-[calc(260/24*1em)] mb-[calc(40/24*1em)] relative flex items-center justify-center'>
                    <img className='' src={process.env.PUBLIC_URL + 'img/vold_6.png'} alt='vold_6'/>
                  </div>
                  <small className='overflow-hidden'>
                    <p>Voldemort, the most feared 
                      <br className='hidden'/>and powerful of them all.
                    </p>
                  </small>
                  <p className='mt-[0.2em]'>
                    <span className='bg-clip-text text-transparent'>
                    People were so afraid of him that they refused to even say his name,<br/>
                    calling him "He-Who-Must-Not-Be-Named" instead.
                    </span>
                  </p>
                </div>
                <div className='mt-[50%] h-[600%] absolute flex items-center justify-center'>
                  <img className='w-auto h-full opacity-30 max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + 'img/haegol.png'} alt='해골마법사'/>
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
                  Voldemort created Horcruxes to split and <br/>
                  hide his soul in order <br className='hidden'/><b className='font-semibold'>to achieve immortality.</b>
                  </p>
                </li>
                <li className='mb-[180px]'>
                  <small className='block text-[20px] font-semibold tracking-[-0.03em] opacity-10'>02</small>
                  <p className='text-[30px] tracking-[-0.03em] opacity-10 leading-[1.666] mt-[20px]'>
                  He sought to become the most powerful being in<br/>
                  the wizarding world, <br className='hidden'/><b className='font-semibold'>aiming to dominate others.</b>
                  </p>
                </li>
                <li>
                  <small className='block text-[20px] font-semibold tracking-[-0.03em] opacity-10'>03</small>
                  <p className='text-[30px] tracking-[-0.03em] opacity-10 leading-[1.666] mt-[20px]'>
                  He sought to become the most powerful being in<br/>
                  the wizarding world, <br className='hidden'/><b className='font-semibold'>aiming to dominate others.</b>
                  </p>
                </li>
              </ul>
              <ul className='flex items-center justify-center flex-wrap w-[calc(100% + 40px)] translate-x-[-20px]'>
                <li className='w-[calc(100%/3-40px)] mx-[20px] rounded-[20px] border border-[#797979] box-border bg-[#414141] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em] text-white font-medium p-[50px_14px]'>
                  <div className='mb-[26px] relative flex items-center justify-center'>
                    <img className='h-[90px] w-full max-h-full object-cover max-w-full algin-top' src={process.env.PUBLIC_URL + 'img/egg.png'} alt='달걀'/>
                  </div>
                  <b className='text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]'>Childhood</b>
                  <p className='leading-[1.666]'>
                  Born as Tom Riddle, he grew up<br/>
                  in an orphanage and became<br/>
                  obsessed with power and<br/>
                  dark magic at Hogwarts.
                  </p>
                </li>
                <li className='w-[calc(100%/3-40px)] mx-[20px] rounded-[20px] border border-[#797979] box-border bg-[#414141] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em] text-white font-medium p-[50px_14px]'>
                  <div className='mb-[26px] relative flex items-center justify-center'>
                    <img className='h-[90px] w-full max-h-full object-cover max-w-full algin-top' src={process.env.PUBLIC_URL + 'img/crystal.png'} alt='수정'/>
                  </div>
                  <b className='text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]'>Rise as Dark Lord</b>
                  <p className='leading-[1.666]'>
                  He became "He-Who-Must-Not<br/>
                  -Be-Named," created Horcruxes<br/>
                  for immortality, and sought to<br/>
                  dominate the wizarding world.
                  </p>
                </li>
                <li className='w-[calc(100%/3-40px)] mx-[20px] rounded-[20px] border border-[#797979] box-border bg-[#414141] flex flex-col items-center justify-center text-[18px] tracking-[-0.03em] text-white font-medium p-[50px_14px]'>
                  <div className='mb-[26px] relative flex items-center justify-center'>
                    <img className='h-[90px] w-full max-h-full object-cover max-w-full algin-top' src={process.env.PUBLIC_URL + 'img/letter.png'} alt='편지'/>
                  </div>
                  <b className='text-[calc(1.33em)] text-[#5bcece] font-poppins font-semibold mb-[22px]'>Resurrection & Defeat</b>
                  <p className='leading-[1.666]'>
                  After being defeated by Harry's <br/>
                  mother's love,Voldemort returned, <br/>
                  but was ultimately destroyed by <br/>
                  his own greed and evil choices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='bg-[#a1cccc] overflow-hidden relative block'>
          <div className='pb-[150px] flex items-start justify-between pt-[150px] max-w[1600px] relative mx-auto w-[90%]'>
            <div className='absolute w-[722px] left-[96px] bottom-0 transform translate-y-[15%] opacity-65'>
              <img className='' src={process.env.PUBLIC_URL + 'img/herry_porter.png'} alt='글자'/>
            </div>
            <div className=''></div>
            <div className=''></div>
          </div>
        </section>

      </div>
    </div>
   </>
  );
}

export default App;
