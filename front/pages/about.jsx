import Image from 'next/image';
import { InternalBanner, Query, TitleBicolor } from '../components'
import GetAboutSliderImagesQuery from "../graphql/about-slider-images";
import GetAboutProvisionsQuery from "../graphql/about-provisions";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";
import { itim } from '@/constants/fonts';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {

  return (
    <>
      <InternalBanner title="About us"/>
      <main className="max-w-[1100px] m-auto px-5 py-14">

        <div className='flex flex-col sm:flex-row gap-5'>
          <div>
            <Query query={GetAboutSliderImagesQuery}>
              {({data:aboutSliderImages}) => {
                const images = aboutSliderImages.aboutSliderImages[0].image

                return (
                  <Swiper 
                    modules={[Navigation, Pagination, Autoplay]}
                    pagination={{clickable: true}} 
                    navigation={false} 
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    className='w-[250px] sm:w-[300px] lg:w-[400px] h-auto'>

                    {images.map((img) => (
                        <SwiperSlide key={img.id}>
                            <Image
                            src={img.url}
                            width={400}
                            height={600}
                            priority
                            alt="Image"
                            className=""
                            /> 
                        </SwiperSlide>
                    ))}

                  </Swiper>
                )

              }}
            </Query>
          </div>

          <div>
            <TitleBicolor title1="Welcome to" title2="Healthy Market" />
            <p className='pt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur, tellus dapibus sollicitudin imperdiet, dolor augue porttitor dui, sed tempus odio metus fringilla ex. Praesent neque nulla, ullamcorper id sagittis in, dapibus vel turpis. Ut gravida nec metus non rutrum. Donec a dui in lectus viverra fringilla vel eget mi. Cras turpis ligula, sagittis in turpis id, egestas gravida justo. Sed suscipit, ex sed ultrices convallis, purus lacus vehicula purus, et iaculis lacus enim vel nulla. In hac habitasse platea dictumst.
              <br/>
              Aliquam libero mi, consequat et mattis ut, vulputate ac arcu. Nam luctus ligula in sapien porttitor, non sagittis ante posuere. Aenean congue sapien id aliquet tristique. Vivamus hendrerit posuere nisi, sit amet suscipit tortor. Nam turpis ipsum, fringilla ut lectus sit amet, rutrum malesuada enim. Vivamus rhoncus enim massa, a commodo dolor tempor ut. Donec aliquam sit amet ipsum nec fermentum.
            </p>
          </div>
        </div>
          

        <div className='text-center pt-16 pb-10'>
          <TitleBicolor title1="What we" title2="provide" />
        </div>
          
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Query query={GetAboutProvisionsQuery}>
            {({data:GetAboutProvisions}) => {
              const coder = GetAboutProvisions.aboutProvisions

              return (
                <>
                  {coder.map((provision) => (
                    <li className='flex flex-col items-center aboutProviderList group'>
                      <div className='flex border bg-white border-gray-200 rounded-full w-[120px] h-[120px] place-items-center text-center z-50 relative aboutProviderIcon group-hover:shadow-lg group-hover:shadow-gray-800 shadow-md shadow-gray-300 duration-500'>
                        <Image
                          src={provision.icon.url}
                          width={50}
                          height={50}
                          priority
                          alt={provision.title}
                          className="m-auto w-[45px]"
                        /> 
                      </div>
                      
                      <div className='aboutProviderText border border-gray-200 bg-white p-10 rounded-lg -top-14 relative z-10 pt-16 px-20 group-hover:shadow-lg group-hover:shadow-gray-800 shadow-md shadow-gray-300 duration-500'>
                        <h4 className={`${itim.className} text-2xl font-semibold tracking-tighter mb-2 m-auto text-center`}>{provision.title}</h4>
                        <p className='text-center text-sm'>{provision.description}</p> 
                      </div>
                    </li>
                  ))}
                </>
              )
            }}
          </Query>

        </ul>

      </main>
    </>
  )
}

export default About