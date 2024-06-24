import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import Jumbotron from '@/components/Jumbotron';
import Services from '@/components/Services';

export default function Home() {
  return (
    <div>
      <Jumbotron /> 
      <div className='w-full flex justify-center pb-4 flex-col items-center'>
          <div className='flex items-center justify-center p-16 pb-0 font-bold'>
            <p className='text-[#00000075] text-center text-3xl'>A business which provides a range of plumbing services which include heating, gas and emergency callouts just to name a few all done by qualified gas engineers. The business also offers a portfolio of all the completed jobs as well as satisfied customer reviews.</p>
          </div>
      </div>
      <div className='w-full p-8 flex flex-col justify-center pt-8'>
        <div className='w-full flex justify-center pb-8'>
          <p className='text-4xl font-bold'>All Services</p>
        </div>
        <div className='pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Services text='PLUMBING' cover={'plumbing-0.jpeg'} page={'/plumbing'}/>
          <Services text='HEATING' cover={'plumbing-1.jpeg'} page={'/heating'}/>
          <Services text='GAS' cover={'plumbing-2.jpeg'} page={'/gas'}/>
          <Services text='EMERGENCY CALL OUT' cover={'plumbing-3.webp'} page={'/emergency'}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
