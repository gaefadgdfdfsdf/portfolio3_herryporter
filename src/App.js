import './App.css';
import './reset.css';

function App() {
  return (
   <>
    <header className='header'>
      <div className='text-red-500'>sdsss</div>
      <div className='wrap'>
        <a href=''><img src={process.env.PUBLIC_URL + ''} alt='logo image'/></a>
      </div>
    </header>
    <div className='main'>
      <div className='content'>
        <div className='pin'>
          <section className='s1'>
            <div className='img1 bg1'>
            <img src={process.env.PUBLIC_URL + '/img/bl_bg.jpg'} alt='logo image'/>
            </div>
            <div className='img1 human'>

            </div>
          </section>
        </div>

      </div>
    </div>
   </>
  );
}

export default App;
