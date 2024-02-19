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

function App() {
	
	return (
		<div className="bg-gradient-to-br from-[#E0ECFF] to-[#061834] selection:bg-white selection:bg-opacity-20">
			{/* <div> */}
			<Container id={'home'} customStyle={"pt-8 flex flex-col justify-between"}>
				<Header />
				<MainHome />
			</Container>
			<Slogan />
			<Container id={'about'} customStyle={'py-32 relative'}>
				<About />
			</Container>
			<Container id='project'>
				<Project />
			</Container>
			<SpeedInsights />
		</div>
	)
}

export default App
