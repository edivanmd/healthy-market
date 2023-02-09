import Link from 'next/link';
import { RxArrowRight } from 'react-icons/rx';
import {Query} from ".";
import { itim } from '../constants/fonts';
import GetSmallBannersQuery from "../graphql/small-banners";

const SmallBanner = () => {
  return (
    <Query query={GetSmallBannersQuery}>
    {({data:smallBanners}) => {
      const coder = smallBanners.smallBanners.data
      
      return(
        <>
          {coder.map((banner) => (
            <div key={banner.id} className={`${itim.className} rounded-md p-8 w-[100%] md:w-[40%]`} style={{ 
              backgroundImage: `url(${banner.attributes.image.data.attributes.url})`,
              backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat', backgroundColor: `${banner.attributes.color}` }}
            > 
              <h2 className='text-basic-blue text-3xl tracking-tighter'>{banner.attributes.title} </h2>
              <h3 className='text-5xl tracking-tighter text-white'>{banner.attributes.subtitle}</h3>  
              <Link href={banner.attributes.link} className="bg-green-400 duration-500 hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded text-basic-blue mt-5 flex items-center float-left gap-2">
                {banner.attributes.text_btn} <RxArrowRight />
              </Link>   
            </div>
          ))}
        </>
      )
    }}
    </Query>
  )
}

export default SmallBanner