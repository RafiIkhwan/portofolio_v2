// IMG PROJECT
import Suxz from '/img/suxz.png'
import SPPNextJs from '/img/sppNextJs.png'
import PerpustakaanLaravel from '/img/perpustakaanLaravel.png'
import FortekVite from '/img/fortekVite.png'

// Swiper.js
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Github } from '../assets/MediaSocialSVG'

export default function Project() {
  const projectData = [
    {
      imageUrl: Suxz,
      projectTitle: 'Suxz',
      projectDescription: 'A Front-End Design Website challange from codedesign.dev',
      projectUrl: 'https://fe-challange-suxz.vercel.app/',
      githubUrl: 'https://github.com/RafiIkhwan/FE_challange_1',
      builtWith: 'ReactJs and TailwindCSS'
    },
    {
      imageUrl: SPPNextJs,
      projectTitle: 'SPP Application',
      projectDescription: 'SPP (Sumbangan Pembinaan Pendidikan) Website Applications to help staff in managing tuition fees payments',
      projectUrl: '#',
      githubUrl: 'https://github.com/nanandr/spp-nextjs',
      builtWith: 'ReactJs, NextJs, TailwindCSS, Prisma and MySQL'
    },
    {
      imageUrl: PerpustakaanLaravel,
      projectTitle: 'E-Perpustakaan / E-Library',
      projectDescription: 'A Laravel-based CMS library app simplifies content management and secure access to diverse resources for an enhanced user experience.',
      projectUrl: '#',
      githubUrl: 'https://github.com/RafiIkhwan/PerpustakaanLaravel9',
      builtWith: 'Laravel, MySQL, and Bootstrap 5'
    },
    {
      imageUrl: FortekVite,
      projectTitle: 'FORTEK Website Profile',
      projectDescription: 'FORTEK (Forum Iptek Pembangunan) website profile built with Vite, ReactJs, and TailwindCSS',
      projectUrl: '#',
      githubUrl: 'https://github.com/RafiIkhwan/PerpustakaanLaravel9',
      builtWith: 'ReactJs, Vite and TailwindCSS'
    },
  ]

  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className='flex justify-center font-bold text-7xl text-[#E0ECFF] pb-10'>My Latest Project</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='max-w-screen-2xl text-white'
      >
        {projectData.map((data, i) => (
          <SwiperSlide key={i} className='drop-shadow-2xl'>
            <div className="flex flex-col relative mx-40 transition-all hover:bg-opacity-50 hover:bg-[#061834] hover:cursor-pointer">
              <img src={data.imageUrl} className='masked-image' alt="ProjectImage.jpg" />
              <div className="absolute bottom-0 p-10 z-10 flex flex-col w-full space-y-3">
                <h5 className='font-bold text-5xl text-[#E0ECFF]'>{data.projectTitle}</h5>
                <div className="flex flex-row justify-between items-center text-[#E0ECFF]">
                  <p className='text-2xl'>{data.projectDescription}</p>
                  <ul className="flex flex-row space-x-6 items-center">
                    <li>
                      <a href={data.githubUrl}>
                        <Github />
                      </a>
                    </li>
                    <li>
                      <a href={data.projectUrl} title='Demo App'>
                        <svg className="w-6 h-6 hover:scale-105 hover:text-[#061834] transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}