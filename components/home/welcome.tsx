import desktopBanner from '@/assets/img/desktop.jpg';
import { Button } from '@heroui/button';

export default function Welcome(){
    return(
      <section
        className="about-me flex justify-center items-center md:py-10 min-h-[100vh]"
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${desktopBanner.src})` 
        }}
        id="welcome"
      >
        <div className='text-center flex flex-col gap-12'>
            <p className='text-xl text-white'>Juliane Faith Cuizon</p>
            <h1 className='text-6xl md:text-8xl text-white font-highlight'>WELCOME</h1>
            <div className='flex gap-4 justify-center'>
                <Button className='bg-linear-to-tr from-black to-grey-400 text-white shadow-lg hover:from-grey-400 hover:to-black' size="lg">Graphic Designs</Button>
                <Button className='shadow-lg hover:bg-white hover:text-default transition-all ease-in' color='default' variant='bordered' size="lg">VA Experience</Button>
            </div>
        </div>
      </section>
    )
}