import { itim } from '../constants/fonts';

const TitleBicolor = ({ title1, title2}) => {
  return (
    <h2 className={`${itim.className} text-basic-blue text-5xl tracking-tighter`}>{title1} <span className='text-basic-green'>{title2}</span></h2>
  )
}

export default TitleBicolor