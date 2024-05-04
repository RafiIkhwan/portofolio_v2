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
import { projectData } from './utils/data'
import Wrapper from './components/Wrapper'
import Footer from './pages/Footer'
import Sidebar from './pages/Sidebar'

function App() {

  const [modal, setModal] = useState(false)
  const [view, setView] = useState(0)
  const [data, setData] = useState('')

  const modalElement = document.getElementById('modal')

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
