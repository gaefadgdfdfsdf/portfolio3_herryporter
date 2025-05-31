import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingProgressState } from "../store";

const Loading = () => {
  const [progress, setProgress] = useRecoilState(loadingProgressState);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setProgress((oldProgress)=>{
        return Math.min(oldProgress + 5, 100);
      })
    }, 100)

    return () => {
      clearInterval(timer);
    }
  }, [setProgress]);

  return (
    <div id="background" className="relative h-screen w-full">
       <div className='w-full h-full absolute flex items-center justify-center'>
          <img className='w-full h-full max-h-full max-w-full object-cover align-top' src={process.env.PUBLIC_URL + '/img/bg_progress.jpg'} alt='blackbg' />
        </div>
      {/* 프로그레스 바 */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gray-200">
        <div id="progress" className="h-full transition-all duration-200 ease-out" style={{ width: `${progress}%`}}></div>
      </div>

      {/* 로딩 텍스트 */}
      <div className="absolute inset-0 flex items-center justify-center flex-col ">
        <div className="flex items-center justify-center mb-20 mt-20">
          <img className='max-md:w-[18em] w-[26em] align-top' src={process.env.PUBLIC_URL + '/img/title_progress.png'} alt='title' />
        </div>
        <div id="percent" className="max-md:text-[40px] pretendard-semibold text-6xl font-bol">{progress}%</div>
      </div>
    </div>
  );
};

export default Loading;
