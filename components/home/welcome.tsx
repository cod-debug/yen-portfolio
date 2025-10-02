import desktopBanner from '@/assets/img/desktop.jpeg';

export default function Welcome(){
    return(
      <section
        className="about-me flex justify-center items-center md:py-10 min-h-[100vh]"
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${desktopBanner.src})` 
        }}
        id="alignstudio"
      >
        <div className='text-center flex flex-col gap-4'>
            <h1 className='text-8xl md:text-[100pt] text-light font-highlight'>align studio</h1>
            <p className='text-xl text-light'>Where productivity sparks creativity</p>
        </div>
      </section>
    )
}