import {BtnArrow, Query} from ".";
import { itim } from '../constants/fonts';
import GetSmallBannersQuery from "../graphql/small-banners";

const SmallBanner = () => {
  return (
    <Query query={GetSmallBannersQuery}>
    {({data:smallBanners}) => {
      const coder = smallBanners.smallBanners
      
      return(
        <ul className='flex flex-col justify-between gap-5 w-[100%] sm:w-[30%]'>
          {coder.map((banner) => (
            <li key={banner.id} className={`${itim.className} rounded-md p-8 w-[100%]`} style={{ 
              backgroundImage: `url(${banner.image.url})`,
              backgroundPosition: 'bottom right', backgroundRepeat: 'no-repeat', backgroundColor: `${banner.bgColor.hex}` }}
            > 
              <h2 className='text-basic-blue text-3xl tracking-tighter'>{banner.title} </h2>
              <h3 className='text-5xl tracking-tighter text-white'>{banner.subtitle}</h3>  
              <BtnArrow text={banner.textBtn} link={`/category/${banner.slug}`} />
            </li>
          ))}
        </ul>
      )
    }}
    </Query>
  )
}

export default SmallBanner