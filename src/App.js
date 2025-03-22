import './App.css';
import './reset.css';
import Section01 from './section/Section01';
import Section02 from './section/Section02';
import Section03 from './section/Section03';
import Section04 from './section/Section04';
import Section05 from './section/Section05';




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
        <Section01/>
        <Section02/>
        <Section03/>
        <Section04/>
        <Section05/>
      </div>
    </div>
   </>
  );
}

export default App;
