import Image from 'next/image'; 
import { itim } from '../constants/fonts';
import {Query, BtnArrow} from ".";
import GetBigBannersQuery from "../graphql/big-banners";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {

    return (
      <Query query={GetBigBannersQuery}>
          {({data:bigBanners}) => {
            const coder = bigBanners.bigBanners.data

            return (
                                                                                     
              <Swiper 
                modules={[Navigation, Pagination, Autoplay]} 
                pagination={{clickable: true}} 
                navigation={false} 
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className='h-[300px] sm:h-auto w-[100%] sm:w-[70%]'
              >
                {coder.map((banner) => (
                  <SwiperSlide key={banner.id} className='w-full h-full rounded-md duration-500 p-8 text-left flex flex-col gap-2' style={{ backgroundColor: `${banner.attributes.bgcolor}` }}>
                    <h2 class={`${itim.className} text-white text-5xl sm:text-7xl tracking-tighter before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-600 relative inline-block`}>
                      <span class="relative text-white">{banner.attributes.title}</span>
                    </h2>
                    <p className='text-basic-blue text-xs sm:text-lg font-bold w-[50%] my-4'>{banner.attributes.desc}</p>
                    <BtnArrow text={banner.attributes.btn_text} link={banner.attributes.link} />
                    <Image
                      src={banner.attributes.image.data.attributes.url}
                      width={500}
                      height={500}
                      priority
                      alt={banner.attributes.title}
                      className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] top-28 sm:top-48 md:top-36 lg:top-20 -right-10 sm:-right-10 self-end absolute bottom-12"
                    /> 
                  </SwiperSlide>
                ))}
              </Swiper>
            )
          }}
      </Query>
    )

}

export default Slider