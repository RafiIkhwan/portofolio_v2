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
import { useState } from 'react'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Modal from './components/Modal'
import { projectData } from './utils/data'
import Wrapper from './components/Wrapper'
import Footer from './pages/Footer'

function App() {

  const [modal, setModal] = useState(false)
  const [view, setView] = useState(0)

  const modalElement = document.getElementById('modal')

  if (modal) {
    disableBodyScroll(document)
    modalElement.scrollTo(0, 0)
  } else {
    enableBodyScroll(document)
  }

  return (
    <div className={`bg-gradient-to-br from-[#E0ECFF] to-[#061834] selection:bg-white selection:bg-opacity-20 relative min-h-screen`}>
      <Container id={'home'} customStyle={"pt-8 flex flex-col justify-between"}>
        <Header />
        <MainHome />
      </Container>
      <Wrapper>
        <Slogan />
      </Wrapper>
      <Container id={'about'} customStyle={'py-32 relative'}>
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
