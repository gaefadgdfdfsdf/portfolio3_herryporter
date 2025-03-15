import './App.css';
import './reset.css';


function App() {
  return (
   <>
    <header className='text-white fixed z-[100] top-0 left-0 w-full'>
      <div className='flex items-center justify-between pt-[max(1.5625vw,30px)] relative mx-auto my-0 w-[90%]'>
        <a href=''><img className='' src={process.env.PUBLIC_URL + '/img/logo.png'} alt='logo image'/></a>
      </div>
    </header>
    <div className='w-full h-full fixed overflow-hidden'>
      <div className='transform-none box-border w-full overflow-visible'>
        <div className='pin'>
          <section className='overflow-hidden w-full h-screen relative text-white'>
            <div className='w-full h-full absolute flex items-center justify-center'>
              <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + '/img/bl_bg.jpg'} alt='logo image'/>
            </div>
            <div className='flex items-center justify-center absolute top-0 right-[95px] h-full'>
              <img className='w-[1477px] h-[831px] max-h-full object-cover' src={process.env.PUBLIC_URL + '/img/human_img.png'} alt='logo image'/>
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
        <section className='relative overflow-hidden block w-full h-screen'>
          <div className='w-full h-full absolute flex items-center justify-center'>
            <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + '/img/night_bg.jpg'} alt='logo image'/>
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
                <img className='w-full h-full max-h-full object-cover max-w-full align-top' src={process.env.PUBLIC_URL + '/img/castle.png'} alt='logo image'/>
              </div>
              <div className='pt-0 transform rotate-[-90deg] w-[calc(3000/920*var(--vh,1vh)*100)] flex-shrink-0 absolute top-[calc((var(--vh,1vh)*100)-(600/920*var(--vh,1vh)*100))/2] flex items-start justify-center rounded-full '>

              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
   </>
  );
}

export default App;
