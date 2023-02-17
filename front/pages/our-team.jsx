import { InternalBanner, TitleBicolor } from '@/components'

const ourteam = () => {
  return (
    <>
      <InternalBanner title="Our team"/>

      <main className="max-w-[1100px] m-auto px-5 py-14">
        <div>
          <TitleBicolor title1="Best employee of" title2="the month" />
        </div>
      </main>
    </>
  )
}

export default ourteam