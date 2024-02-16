import { React, HTML, CSS, Javascript, PHP, Java, Laravel, TailwindCSS, Nextjs, Bootstrap, Redux } from '../assets/LangSVG'
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

  const listConfig = [
    {
      id: 'mainSkillList',
      items: [
        { title: 'Front-End Design', content: 'I can easily transform psd or fig into code ! ', context: 0 },
        { title: 'Back-End Operations', content: 'Expertly integrating coding languages and database management ', context: 0 },
        { title: 'Web Architecture', content: 'Building Website from scratch ?, that’s my job ', context: 0 },
      ],
    },
    {
      id: 'langList',
      items: [
        { title: 'HTML', content: '', context: 1 },
        { title: 'CSS', content: '', context: 1 },
        { title: 'Javascript', content: '', context: 1 },
        { title: 'PHP', content: '', context: 1 },
        { title: 'Java', content: '', context: 1 },
      ],
    },
    {
      id: 'frameworkList',
      items: [
        { title: 'React.js', content: '', context: 2 },
        { title: 'Laravel', content: '', context: 2 },
        { title: 'Tailwind CSS', content: '', context: 2 },
        { title: 'Next.js', content: '', context: 2 },
        { title: 'Bootstrap', content: '', context: 2 },
        { title: 'Redux.js', content: '', context: 2 },
      ],
    },
    {
      id: 'educationList',
      items: [
        { title: 'SMK Negeri 1 Cimahi', content: 'Computer Software Engineering', context: 3 },
      ],
    },
  ];

  const renderListItem = (config) => {
    return config.map((list) => (
      <ul
        key={list.id}
        className={`${activeLogic(list.items[0].context) ? 'opacity-100 z-10' : 'opacity-0 z-0'} flex mt-12 transition-opacity absolute top-12 gap-6 duration-150 ${list.items[0].context == 1 || list.items[0].context == 2 ? 'flex-row flex-wrap w-full rounded-sm' : 'flex-col'}`}
        id={list.id}
      >
        {list.items.map((item) => renderItem(item.title, item.content, item.context))}
      </ul>
    ));
  };

  const CALL_SVG = {
    "HTML": <HTML />,
    "React.js": <React />,
    "CSS": <CSS />,
    "Javascript": <Javascript />,
    "PHP": <PHP />,
    "Java": <Java />,
    "Laravel": <Laravel />,
    "Tailwind CSS": <TailwindCSS />,
    "Next.js": <Nextjs />,
    "Bootstrap": <Bootstrap />,
    "Redux.js": <Redux />,
  }

  const renderList = (index, label) => {
    const isActive = view === index;
    const isHovered = hover === index;

    return (
      <li
        key={index}
        className={`${isActive
          ? 'text-[#061834] bg-gradient-to-r from-[#061834] to-[#213b6671] bg-[length:100%_5px]'
          : `text-[#E0ECFF] bg-gradient-to-r from-[#E0ECFF] to-[#E0ECFF] ${isHovered ? 'bg-[length:100%_5px] drop-shadow-3xl' : 'bg-[length:50%_5px]'}`
          } bg-no-repeat bg-left-bottom transition-color duration-150 font text-2xl font-bold pb-3 cursor-pointer`}
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
    )
  }

  return (
    <>
      <div className="radial absolute bottom-20 left-20 h-full max-h-[1000px] max-w-[1000px] w-full rounded-full select-none pointer-events-none"></div>
      <div className=" flex flex-row justify-between space-x-20 w-full h-full">
        <div className="relative flex justify-center items-center z-30 select-none pointer-events-none">
          <img className='object-contain max-w-2xl' src={Cloud} alt="cloud japanese background" />
          <img className='object-cover object-top w-[480px] h-[700px] absolute bottom-0 z-30 masked-pict' src={SelfPicture} alt="my self picture" />
        </div>
        <div className="flex flex-col space-y-16 static z-30">
          <h1 className='text-8xl text-[#E0ECFF] font-bold'>About Me</h1>
          <p className='text-3xl text-[#CCDBF2] tracking-wider leading-normal'>Hi, my name is Rafi Ikhwan, i also known as Rafi. Based in Bandung, Indonesia. I’m enthusiast with Front End Developer. I can do a lot stuff like Back-End Operations, Mobile Development and 3D Design.</p>
          <div className="flex flex-col min-h-72 relative">
            <ul className='flex flex-row space-x-10'>
              {renderList(0, 'Main Skills')}
              {renderList(1, 'Languages')}
              {renderList(2, 'Framework')}
              {renderList(3, 'Education')}
            </ul>
            {renderListItem(listConfig)}
          </div>
        </div>
      </div>
    </>
  )
}
