import { useState } from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import { RxDotFilled } from 'react-icons/rx';
import { itim } from '../constants/fonts';
import { SmallBanner } from '.';

const Banner = () => {

  const slides = [
    {
      title: 'Cauliflower',
      description: 'cauliflower lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum.',
      bgColor: '#A3DDD6',
      image: '/../public/cauliflower.png',
      url: '/',
      btnText: 'See more',
    },
    {
      title: 'Banana',
      description: 'Banana lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum, lorem ipsum lorem ipsum lorem ipsum.',
      bgColor: '#EDD251',
      image: '/../public/banana.png',
      url: '/',
      btnText: 'Buy now',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex justify-between bg-banner-pattern bg-auto py-5 border-t-2 border-b-2 border-gray-200">

      <div className='flex flex-col md:flex-row sm:gap-5 max-w-[1100px] m-auto justify-between px-5'>
      
        {/* Slider Banners */}
        <div className='relative group h-fit sm:h-[435px] w-[100%] md:w-[60%]'>
          <div
            style={{ backgroundColor: `${slides[currentIndex].bgColor}` }}
            className='w-full h-full rounded-md duration-500 p-8 text-left flex flex-col gap-2'
          >
            <h2 className={`${itim.className} text-white text-5xl sm:text-7xl tracking-tighter`}>{slides[currentIndex].title}</h2>
            <p className='text-basic-blue text-sm sm:text-lg font-bold'>{slides[currentIndex].description}</p>
            <Link href={slides[currentIndex].url} className="bg-green-400 duration-500 hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded text-basic-blue mt-5 text-xs sm:text-lg self-start">{slides[currentIndex].btnText}</Link>
            <Image
              src={slides[currentIndex].image}
              width={400}
              height={400}
              priority
              alt={slides[currentIndex].title}
              className="h-fit sm-right-20 w-[160px] sm:w-[300px] self-end absolute bottom-12 right-0"
            />  
            {/* relative z-10 -top-32 -right-8 */}
          </div>
          
          <div className='flex justify-center -top-8 relative text-white'>
            {slides.map((slide, slideIndex) => (
              <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`${currentIndex === slideIndex ? 'text-basic-green' : 'no'} text-2xl cursor-pointer`}
              >
                <RxDotFilled fontSize={30} />
              </div>
            ))}
          </div>
        </div>

        {/* single banner */}
        <SmallBanner />

      </div>

    </div>
  );
}

export default Banner
