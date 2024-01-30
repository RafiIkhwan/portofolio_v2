import { React, HTML, CSS, Javascript, PHP, Java, Laravel, TailwindCSS, Nextjs, Bootstrap, Redux } from '../assets/LangSVG'
// import PHP from '/img/new-php-logo.png'
import SelfPicture from '/img/self_jasjus_fixed.png'
import Cloud from '/img/japanese_cloud_grayver.png'
import { useState } from 'react';

export default function About() {

  const [view, setView] = useState(0);
  const [hover, setHover] = useState(null);

  const activeLogic = (x) => {
    return ((view === x && !(view !== hover && hover !== null)) || hover === x)
  };

  const handleHover = (index) => {
    setHover(index);
  };

  const handleItemClick = (index) => {
    setView(index);
    setHover(null);
  };

  const CALL_SVG = {
    'HTML': <HTML />,
    'React.js': <React />,
    'HTML': <HTML />,
    'CSS': <CSS />,
    'Javascript': <Javascript />,
    'PHP': <PHP />,
    'Java': <Java />,
    'Laravel': <Laravel />,
    'Tailwind CSS': <TailwindCSS />,
    'Next.js': <Nextjs />,
    'Bootstrap': <Bootstrap />,
    'Redux.js': <Redux />,
  }

  const renderListItem = (index, label) => {
    const isActive = view === index;
    const isHovered = hover === index;

    return (
      <li
        key={index}
        className={`${isActive
          ? 'text-[#061834] bg-gradient-to-r from-[#061834] to-[#213b6671] bg-[length:100%_5px]'
          : `text-[#E0ECFF] bg-gradient-to-r from-[#E0ECFF] to-[#E0ECFF] ${isHovered ? 'bg-[length:100%_5px] drop-shadow-3xl' : 'bg-[length:50%_5px]'}`
          } bg-no-repeat bg-left-bottom transition-color duration-150 font text-3xl font-bold pb-3 cursor-pointer`}
        onClick={() => handleItemClick(index)}
        onMouseEnter={() => handleHover(index)}
        onMouseLeave={() => handleHover(null)}
      >
        {label}
      </li>
    );
  }

  const renderItem = (title, content, context) => {

    return (
      // <ul className={`${activeLogic(context) ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex flex-col mt-12 transition-opacity absolute top-12 gap-6 duration-150 ${context == 1 || context == 2 && 'flex-wrap w-full rounded-sm'}`} id={id}>
      <>
        {context == 1 || context == 2 ?
          <li className='transition-colors duration-200 flex flex-row items-center rounded-3xl text-[#061834] w-60 h-fit bg-gradient-to-r from-[#06183434] to-[#E0ECFF67] hover:cursor-pointer hover:bg-[#061834] hover:text-[#E0ECFF] drop-shadow'>
            {CALL_SVG[title]}
            <h6 className='font-semibold text-3xl p-2 whitespace-nowrap'>{title}</h6>
          </li>
          :
          <li className='flex flex-col space-y-2'>
            <h6 className='font-semibold text-3xl text-[#E0ECFF]'>{title}</h6>
            <p className='text-2xl text-[#CCDBF2]'>{content}</p>
          </li>
        }
      </>
      // </ul >
    )
  }

  return (
    <>
      <div className="radial-2 absolute bottom-20 left-20 h-full max-h-[1000px] max-w-[1000px] w-full rounded-full"></div>
      <div className=" flex flex-row justify-between space-x-20 w-full h-full">
        <div className="relative flex justify-center items-center z-30">
          <img className='object-contain max-w-2xl' src={Cloud} alt="cloud japanese background" />
          <img className='object-cover object-top w-[480px] h-[700px] absolute bottom-0 z-30 masked-pict' src={SelfPicture} alt="my self picture" />
        </div>
        <div className="flex flex-col space-y-16 static z-30">
          <h1 className='text-8xl text-[#E0ECFF] font-bold'>About Me</h1>
          <p className='text-3xl text-[#CCDBF2] tracking-wider'>Hi, my name is Rafi Ikhwan, i also known as Rafi. Based in Bandung, Indonesia. I’m enthusiast with Front End Developer. I can do a lot stuff like Back-End Operations, Mobile Development and 3D Design.</p>
          <div className="flex flex-col min-h-72 relative">
            <ul className='flex flex-row space-x-10'>
              {renderListItem(0, 'Main Skills')}
              {renderListItem(1, 'Languages')}
              {renderListItem(2, 'Framework')}
              {renderListItem(3, 'Education')}
            </ul>

            <ul className={`${activeLogic(0) ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex flex-col mt-12 transition-opacity absolute top-12 gap-6 duration-150`} id='mainSkillList'>
              {renderItem('Front-End Design', 'I can easily transform psd or fig into code ! ', 0)}
              {renderItem('Back-End Operations', 'Expertly integrating coding languages and database management ', 0)}
              {renderItem('Web Architecture', 'Building Website from scratch ?, that’s my job ', 0)}
            </ul>

            <ul className={`${activeLogic(1) ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex flex-row mt-12 transition-opacity absolute top-12 gap-6 duration-150 flex-wrap w-full rounded-sm`} id='langList'>
              {renderItem('HTML', '', 1)}
              {renderItem('CSS', '', 1)}
              {renderItem('Javascript', '', 1)}
              {renderItem('PHP', '', 1)}
              {renderItem('Java', '', 1)}
            </ul>

            <ul className={`${activeLogic(2) ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex flex-row mt-12 transition-opacity absolute top-12 gap-6 duration-150 flex-wrap w-full rounded-sm`} id='frameworkList'>
              {renderItem('React.js', '', 2)}
              {renderItem('Laravel', '', 2)}
              {renderItem('Tailwind CSS', '', 2)}
              {renderItem('Next.js', '', 2)}
              {renderItem('Bootstrap', '', 2)}
              {renderItem('Redux.js', '', 2)}
            </ul>

            <ul className={`${activeLogic(3) ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex flex-col mt-12 transition-opacity absolute top-12 gap-6 duration-150`} id='educationList'>
              {renderItem('SMK Negeri 1 Cimahi', 'Computer Software Engineering', 3)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
