import './App.css'
import SelfPicture from '/img/self_jasjus_fixed.png'
import Cloud from '/img/japanese_cloud_grayver.png'
import Suxz from '/img/suxz.png'
import PHP from '/img/new-php-logo.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react'
import Header from './pages/Header'
import { React } from './assets/LangSVG'
import MainHome from './pages/MainHome'
import Container from './components/Container'
import Slogan from './pages/Slogan'
import About from './pages/About'

function App() {

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
	};

	return (
		<div className="bg-gradient-to-br from-[#E0ECFF] to-[#061834]">
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
				<div className="flex flex-col justify-center">
					<h1 className='flex justify-center font-bold text-7xl text-[#E0ECFF] py-7'>My Latest Project</h1>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						loop={true}
						pagination={{
							clickable: true,
						}}
						navigation={true}
						modules={[Pagination, Navigation]}
						className='max-w-screen-xl'
					>
						<SwiperSlide>
							<div className="flex flex-col relative">
								<img src={Suxz} className='masked-image' alt="ProjectImage.jpg" />
								<div className="absolute bottom-0 p-10 z-10 flex flex-col w-full">
									<h5 className='font-bold text-7xl text-[#E0ECFF]'>Suxz</h5>
									<div className="flex flex-row justify-between items-center text-[#E0ECFF]">
										<p className='text-2xl'>A Front-End Design Website challange from codedesign.dev</p>
										<ul className="flex flex-row space-x-6 items-center">
											<li>
												<a href="https://github.com/RafiIkhwan">
													<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
													</svg>
												</a>
											</li>
											<li>
												<a href="https://fe-challange-suxz.vercel.app/" title='Demo App'>
													<svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
														<path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
													</svg>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide className='flex items-center justify-center'><img src="https://placehold.co/1600x900?text=Page+2&font=montserrat" alt="" /></SwiperSlide>
						<SwiperSlide className='flex items-center justify-center'><img src="https://placehold.co/1600x900?text=Page+3&font=montserrat" alt="" /></SwiperSlide>
						<SwiperSlide className='flex items-center justify-center'><img src="https://placehold.co/1600x900?text=Page+4&font=montserrat" alt="" /></SwiperSlide>
					</Swiper>
				</div>
			</Container>
		</div>
	)
}

export default App
