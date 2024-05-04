import './App.css'
import { SpeedInsights } from "@vercel/speed-insights/react"

import { React } from './assets/LangSVG'
import Container from './components/Container'

// Pages
import Header from './pages/Header'
import MainHome from './pages/MainHome'
import Slogan from './pages/Slogan'
import About from './pages/About'
import Project from './pages/Project'
import { useEffect, useState } from 'react'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Modal from './components/Modal'
import Wrapper from './components/Wrapper'
import Footer from './pages/Footer'
import Sidebar from './pages/Sidebar'

// IMG PROJECT
import Suxz_1 from '/img/Suxz_1.png'
import Suxz_2 from '/img/Suxz_2.png'
import Suxz_3 from '/img/Suxz_3.png'
import Suxz_4 from '/img/Suxz_4.png'
import Suxz_5 from '/img/Suxz_5.png'
import Suxz_6 from '/img/Suxz_6.png'
import Suxz_7 from '/img/Suxz_7.png'

import SPPNextJs from '/img/SPPNextJs.png'
import SPPNextJs_1 from '/img/SPPNextJs_1.png'
import SPPNextJs_2 from '/img/SPPNextJs_2.png'
import SPPNextJs_3 from '/img/SPPNextJs_3.png'
import SPPNextJs_4 from '/img/SPPNextJs_4.png'
import SPPNextJs_5 from '/img/SPPNextJs_5.png'
import SPPNextJs_6 from '/img/SPPNextJs_6.png'
import SPPNextJs_7 from '/img/SPPNextJs_7.png'
import SPPNextJs_8 from '/img/SPPNextJs_8.png'

import PerpustakaanLaravel from '/img/PerpustakaanLaravel.png'
import PerpustakaanLaravel_1 from '/img/PerpustakaanLaravel_1.png'
import PerpustakaanLaravel_2 from '/img/PerpustakaanLaravel_2.png'
import PerpustakaanLaravel_3 from '/img/PerpustakaanLaravel_3.png'
import PerpustakaanLaravel_4 from '/img/PerpustakaanLaravel_4.png'
import PerpustakaanLaravel_5 from '/img/PerpustakaanLaravel_5.png'
import PerpustakaanLaravel_Login from '/img/perpustakaanLaravel_Login.png'

import FortekVite from '/img/fortekVite.png'

function App() {

  const [modal, setModal] = useState(false)
  const [view, setView] = useState(0)
  const [data, setData] = useState('')

  const modalElement = document.getElementById('modal')

  const projectData = [
    {
      imageUrl: [Suxz_1, Suxz_2, Suxz_3, Suxz_4, Suxz_5, Suxz_6, Suxz_7],
      projectTitle: 'Suxz',
      projectDescription: 'A Front-End Design Website challange from codedesign.dev',
      projectUrl: 'https://fe-challange-suxz.vercel.app/',
      githubUrl: 'https://github.com/RafiIkhwan/FE_challange_1',
      builtWith: {
        programmingLanguage: ['JavaScript'],
        framework: ['ReactJs', 'TailwindCSS'],
        toolsAndOther: ['Visual Studio Code'],
      },
      date: '2024-02-20',
    },
    {
      imageUrl: [SPPNextJs, SPPNextJs_1, SPPNextJs_2, SPPNextJs_3, SPPNextJs_4, SPPNextJs_5, SPPNextJs_6, SPPNextJs_7, SPPNextJs_8],
      projectTitle: 'SPP Application',
      projectDescription: 'SPP (Sumbangan Pembinaan Pendidikan) Website Applications to help staff in managing tuition fees payments',
      projectUrl: '#',
      githubUrl: 'https://github.com/nanandr/spp-nextjs',
      builtWith: {
        programmingLanguage: ['JavaScript'],
        framework: ['ReactJs', 'NextJs', 'TailwindCSS'],
        database: ['MySQL'],
        toolsAndOther: ['Visual Studio Code', 'Figma',  'ReduxJs', 'Prisma'],
      },
      date: '2023-12-07',
    },
    {
      imageUrl: [PerpustakaanLaravel, PerpustakaanLaravel_1, PerpustakaanLaravel_2, PerpustakaanLaravel_3, PerpustakaanLaravel_4, PerpustakaanLaravel_5, PerpustakaanLaravel_Login],
      projectTitle: 'E-Perpustakaan / E-Library',
      projectDescription: 'A Laravel-based CMS library app simplifies content management and secure access to diverse resources for an enhanced user experience.',
      projectUrl: '#',
      githubUrl: 'https://github.com/RafiIkhwan/PerpustakaanLaravel9',
      builtWith: {
        programmingLanguage: ['PHP'],
        framework: ['Laravel', 'Bootstrap 5'],
        database: ['MySQL'],
        toolsAndOther: ['Visual Studio Code'],
      },
      date: '2023-06-23',
    },
    {
      imageUrl: [FortekVite],
      projectTitle: 'FORTEK Website Profile',
      projectDescription: 'FORTEK (Forum Iptek Pembangunan) website profile built with Vite, ReactJs, and TailwindCSS',
      projectUrl: '#',
      githubUrl: 'https://github.com/RafiIkhwan/web_fortek',
      builtWith: {
        programmingLanguage: ['JavaScript'],
        framework: ['ReactJs', 'TailwindCSS'],
        toolsAndOther: ['Visual Studio Code'],
      },
      date: '2023-11-10',
    },
  ]
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(
      res => setData(res.results) 
    )
  },[])

  console.log(data);

  if (modal) {
    disableBodyScroll(document)
    modalElement.scrollTo(0, 0)
  } else {
    enableBodyScroll(document)
  }

  return (
    <div className={`bg-gradient-to-br from-[#E0ECFF] to-[#061834] selection:bg-white selection:bg-opacity-20 relative min-h-screen`}>
      <Sidebar />
      <Container id={'home'} customStyle={"pt-8 flex flex-col md:justify-between md:h-screen overflow-y-hidden max-h-screen"}>
        <Header />
        <MainHome />
      </Container>
      <Wrapper>
        <Slogan />
      </Wrapper>
      <Container id={'about'} customStyle={'md:py-32 py-8 relative'}>
        <About />
      </Container>
      <Container id='project'>
        <Project toggleModal={() => setModal(!modal)} setView={(e) => setView(e)} projectData={projectData} />
      </Container>
      <Wrapper>
        <Footer/>
      </Wrapper>
      <Modal open={modal} onClose={() => setModal(false)} projectData={projectData[view]} />
      <SpeedInsights />
    </div>
  )
}

export default App
