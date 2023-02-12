import Image from 'next/image'; 
import Link from 'next/link'; 
import { itim } from '../constants/fonts';
import { useQuery } from "@apollo/client";
import {Query} from ".";
import GetBigBannersQuery from "../graphql/big-banners";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {

    return (
      <Query query={GetBigBannersQuery}>
          {({data:bigBanners}) => {
            const coder = bigBanners.bigBanners.data

            return (
                                                                                     
              <Swiper pagination={{clickable: true}} navigation={false} modules={[Navigation, Pagination]} className='h-[300px] sm:h-auto w-[100%] sm:w-[70%]'>
                {coder.map((banner) => (
                  <SwiperSlide key={banner.id} className='w-full h-full rounded-md duration-500 p-8 text-left flex flex-col gap-2' style={{ backgroundColor: `${banner.attributes.bgcolor}` }}>
                    <h2 className={`${itim.className} text-white text-5xl sm:text-7xl tracking-tighter`}>{banner.attributes.title}</h2>
                    <p className='text-basic-blue text-sm sm:text-lg font-bold w-[50%] mb-4'>{banner.attributes.desc}</p>
                    <Link href={banner.attributes.link} className="bg-green-400 duration-500 hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded text-basic-blue mt-5 text-xs sm:text-lg self-start">{banner.attributes.btn_text}</Link>
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