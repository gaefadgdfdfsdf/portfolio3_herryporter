
import { useRecoilState } from 'recoil';
import Loading from "./components/Loading";
import { loadingProgressState } from "./store";
import './App.css';
import './reset.css';
import Gsap01 from './section/Gsap01';
import Section01 from './section/Section01';
import Section02 from './section/Section02';
import Section03 from './section/Section03';
import Section04 from './section/Section04';
import Section05 from './section/Section05';
import Section06 from './section/Section06new';
import { useEffect, useRef } from 'react';




function App() {
  
  
  const [progress, setProgress] = useRecoilState(loadingProgressState);

  if(progress < 100){
    return <Loading />
  }


  return (
   <>
    
    <div className='w-full h-full overflow-x-clip'>
      <div className='transform-none box-border w-full overflow-visible relative'>
        <Section01 />
        <Section06 />
        {/* <Section02 /> */}
        <Section03/>
        <Section04/>
        <Section05/>
        {/* <Section06 /> */}
        {/* <Gsap01 /> */}
      </div>
    </div>
 
   </>
  );
}

export default App;
