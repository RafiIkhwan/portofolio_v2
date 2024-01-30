import SelfPicture from '/img/self_jasjus_fixed.png'
import Cloud from '/img/japanese_cloud_grayver.png'

export default function MainHome() {
  return (
    <main className='relative my-16' id='main'>
      <div className="absolute w-full bottom-72 z-20 sm:block hidden">
        <div className="flex flex-row justify-between h-[calc(100vh-550px)] max-h-[500px]">
          <div className="flex flex-col justify-between max-w-[330px]">
            <h1 className='font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>SOFTWARE</h1>
            <p className='font-semibold text-2xl xl:text-4xl'>Currently study at <span className='font-bold'>SMKN 1 Cimahi</span></p>
          </div>
          <div className="flex flex-col justify-between text-end">
            <p className='font-semibold text-2xl xl:text-4xl max-w-[330px] self-end'>Hi, My Name is <span className='font-bold'>Rafi Ikhwan</span></p>
            <h1 className='font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>ENGINEERING</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center relative mb-auto h-screen box-border max-h-[850px]">
        <p className='font-bold text-2xl absolute z-30 bottom-[780px] text-[#E0ECFF]' id='webdev'>WEB DEVELOPER</p>
        <img className='object-contain static z-[19] max-w-5xl' src={Cloud} alt="cloud japanese background" />
        <div className="radial absolute bottom-14 h-full max-h-[1200px] max-w-[1200px] w-full rounded-full"></div>
        <img className='object-cover object-top w-[700px] h-[660px] absolute bottom-0 z-30' src={SelfPicture} alt="my self picture" />
      </div>
    </main>
  )
}