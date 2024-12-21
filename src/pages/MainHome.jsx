import SelfPicture from '../utils/img/selfbara.png'
import Cloud from '../utils/img/JapaneseCloudGrayver.png'

export default function MainHome() {
  const user_detail = {
    status: "Working",
    status_place: "PT Bara Prima Multi Teknovasi",
    user_name: "Rafi Ikhwan",
    role: "Web Developer"
  }
  return (
    <main className='relative lg:mt-16' id='main'>
      <div className="absolute w-full bottom-72 z-20 md:block hidden">
        <div className="flex flex-row justify-between h-[calc(100vh-550px)] max-h-[500px] mx-auto lg:w-full">
          <div className="flex flex-col justify-between text-start">
            <h1 className='font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>SOFTWARE</h1>
            <p className='font-semibold text-2xl xl:text-4xl'>Currently {user_detail.status.toLowerCase()} at <p className='font-bold capitalize'>{user_detail.status_place}</p></p>
          </div>
          <div className="flex flex-col justify-between text-end">
            <p className='font-semibold text-2xl xl:text-4xl self-end'>Hi, My Name is <p className='font-bold break-words'>{user_detail.user_name}</p></p>
            <h1 className='font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>ENGINEERING</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center relative mb-auto h-screen box-border max-h-[500px] md:max-h-[850px] select-none pointer-events-none">
        <p className='font-bold text-2xl absolute z-30 top-10 text-[#E0ECFF] select-text uppercase' id='webdev'>{user_detail.role.toLowerCase()}</p>
        <img className='object-contain static z-[19] xl:max-w-5xl' src={Cloud} alt="cloud japanese background" />
        <div className="radial absolute bottom-14 h-full max-h-[1200px] max-w-[1200px] w-full rounded-full"></div>
        <img className='object-cover object-top w-[700px] md:h-[660px] h-[350px] absolute bottom-0 z-30' src={SelfPicture} alt="my self picture" />
      </div>
    </main>
  )
}