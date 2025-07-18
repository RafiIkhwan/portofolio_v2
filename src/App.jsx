import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { React } from "./assets/LangSVG";
import Container from "./components/Container";

// Pages
import Header from "./pages/Header";
import MainHome from "./pages/MainHome";
import Slogan from "./pages/Slogan";
import About from "./pages/About";
import Project from "./pages/Project";
import { useEffect, useRef, useState } from "react";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Modal from "./components/Modal";
import { projectData } from "./utils/data";
import Wrapper from "./components/Wrapper";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";

function App() {
	const [modal, setModal] = useState(false);
	const [view, setView] = useState(0);
	const [activeSection, setActiveSection] = useState(null);
	const sectionRefs = {
		home: useRef(null),
		about: useRef(null),
		project: useRef(null),
	};

	const modalElement = document.getElementById("modal");

	// setInterval(() => {
	//   location.reload()
	// }, 2000)
	if (modal) {
		disableBodyScroll(document);
		modalElement.scrollTo(0, 0);
	} else {
		enableBodyScroll(document);
	}

	const handleScroll = () => {
		Object.entries(sectionRefs).forEach(([key, ref]) => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
					setActiveSection(key);
				}
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div className={`bg-gradient-to-br from-background-from to-background-to selection:bg-white selection:bg-opacity-20 relative min-h-screen`}>
			<Sidebar />
			<Container refs={sectionRefs.home} id={"home"} customStyle={"pt-8 flex flex-col md:justify-between md:h-screen overflow-y-hidden max-h-screen bg-lightest-gray"}>
				<Header activeSection={activeSection} />
				<MainHome />
			</Container>
			<Wrapper>
				<Slogan />
			</Wrapper>
			<Container refs={sectionRefs.about} id={"about"} customStyle={"md:py-32 py-8 relative"}>
				<About />
			</Container>
			<Container refs={sectionRefs.project} id={"project"}>
				<Project toggleModal={() => setModal(!modal)} setView={(e) => setView(e)} projectData={projectData} />
			</Container>
			<Wrapper>
				<Footer />
			</Wrapper>
			<Modal open={modal} onClose={() => setModal(false)} projectData={projectData[view]} />
			<SpeedInsights />
		</div>
	);
}

export default App;
