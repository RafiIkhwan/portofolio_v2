import './App.css'
import SelfPicture from '/img/self_jasjus_fixed.png'
import Cloud from '/img/japanese_cloud_grayver.png'
import Suxz from '/img/suxz.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {

	return (
		<div className="bg-gradient-to-br from-[#E0ECFF] to-[#061834]">
			{/* <div> */}
			<section id='home' className="container mx-auto pt-8 h-screen overflow-hidden flex flex-col justify-between">
				<header className='flex flex-row justify-between'>
					<h4>IKHWAN SITE'S</h4>
					<nav>
						<ul className='flex flex-row space-x-40'>
							<li><a href="#home">Home</a></li>
							<li><a href="#about">About</a></li>
							<li><a href="#project">Project</a></li>
						</ul>
					</nav>
					<ul id="brands" className="flex flex-row space-x-7 items-center">
						<li>
							<a href="https://github.com/RafiIkhwan">
								<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
								</svg>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/Rafiikhwan">
								<svg class="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
									<path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/rafi.i.purnama.73/">
								<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
									<path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
								</svg>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/rfkhwnprnm/">
								<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
									<path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
								</svg>
							</a>
						</li>
					</ul>
				</header>
				<main className='relative' id='main'>
					<div className="absolute w-full bottom-72 z-20 sm:block hidden">
						<div className="flex flex-row justify-between h-[calc(100vh-550px)] max-h-[500px]">
							<div className="flex flex-col justify-between max-w-[330px]">
								<h1 className='font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>SOFTWARE</h1>
								<p className='font-semibold text-2xl xl:text-4xl'>Currently study at <span className='font-bold'>SMKN 1 Cimahi</span></p>
							</div>
							<div className="flex flex-col justify-between text-end">
								<p className='font-semibold text-2xl xl:text-4xl max-w-[330px] self-end'>Hi, My Name is <span className='font-bold'>Rafi Ikhwan</span></p>
								<h1 className='font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>ENGINEERING</h1>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-center relative mb-auto h-screen box-border max-h-[850px]">
						<p className='font-bold text-2xl absolute z-30 bottom-[780px] text-[#E0ECFF]' id='webdev'>WEB DEVELOPER</p>
						<img className='object-contain static z-30 max-w-5xl' src={Cloud} alt="cloud japanese background" />
						<div className="radial absolute bottom-14 h-full max-h-[1300px] max-w-[1300px] w-full rounded-full"></div>
						<img className='object-cover object-top w-[700px] h-[660px] absolute bottom-0 z-30' src={SelfPicture} alt="my self picture" />
					</div>
				</main>
			</section>
			<section id='slogan' className="flex flex-row justify-around items-center h-[300px]">
				<h2 className='text-[#CCDBF2] font-bold text-6xl'>INNOVATE</h2>
				<h2 className='text-[#CCDBF2] font-bold text-6xl'>ELEVATE</h2>
				<h2 className='text-[#CCDBF2] font-bold text-6xl'>OPTIMIZE</h2>
			</section>
			<section id='about' className='container relative mx-auto py-32 h-screen overflow-hidden'>
				<div className="radial-2 absolute bottom-20 left-20 h-full max-h-[1000px] max-w-[1000px] w-full rounded-full"></div>
				<div className=" flex flex-row justify-between space-x-20 w-full h-full">
					<div className="relative flex justify-center items-center z-30">
						<img className='object-contain max-w-2xl' src={Cloud} alt="cloud japanese background" />
						<img className='object-cover object-top w-[480px] h-[700px] absolute bottom-0 z-30 masked-pict' src={SelfPicture} alt="my self picture" />
					</div>
					<div className="flex flex-col justify-between static z-30">
						<h1 className='text-8xl text-[#E0ECFF] font-bold'>About Me</h1>
						<p className='text-3xl text-[#CCDBF2] tracking-wider'>Hi, my name is Rafi Ikhwan, i also known as Rafi. Based in Bandung, Indonesia. I’m enthusiast with Front End Developer. I can do a lot stuff like Back-End Operations, Mobile Development and 3D Design.</p>
						<div className="flex flex-col min-h-72">
							<ul className='flex flex-row justify-between'>
								<li className='text-[#061834] font text-3xl font-bold pb-3 bg-gradient-to-r from-[#061834] to-[#213b6671] bg-[length:100%_5px] bg-no-repeat bg-bottom'>Main Skills</li>
								<li className='text-[#E0ECFF] font text-3xl font-bold pb-3 bg-gradient-to-r from-[#E0ECFF] to-[#E0ECFF] bg-[length:50%_5px] bg-no-repeat bg-left-bottom'>Languages</li>
								<li className='text-[#E0ECFF] font text-3xl font-bold pb-3 bg-gradient-to-r from-[#E0ECFF] to-[#E0ECFF] bg-[length:50%_5px] bg-no-repeat bg-left-bottom'>Framework</li>
								<li className='text-[#E0ECFF] font text-3xl font-bold pb-3 bg-gradient-to-r from-[#E0ECFF] to-[#E0ECFF] bg-[length:50%_5px] bg-no-repeat bg-left-bottom'>Education</li>
							</ul>
							<ul id='mainSkillList' className='flex flex-col space-y-10 pt-12'>
								<li className='flex flex-col space-y-2'>
									<h6 className='font-semibold text-3xl text-[#E0ECFF]'>Front-End Design</h6>
									<p className='text-2xl text-[#CCDBF2]'>I can easily transform psd or fig into code ! </p>
								</li>
								<li className='flex flex-col space-y-2'>
									<h6 className='font-semibold text-3xl text-[#E0ECFF]'>Back-End Operations</h6>
									<p className='text-2xl text-[#CCDBF2]'>Expertly integrating coding languages and database management </p>
								</li>
								<li className='flex flex-col space-y-2'>
									<h6 className='font-semibold text-3xl text-[#E0ECFF]'>Web Architecture</h6>
									<p className='text-2xl text-[#CCDBF2]'>Building Website from zero ?, that’s my job </p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section id='project' className='container mx-auto h-screen overflow-hidden'>
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
						className='max-w-screen-2xl'
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
													<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
														<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
													</svg>
												</a>
											</li>
											<li>
												<a href="https://www.linkedin.com/in/Rafiikhwan">
													<svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
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
			</section>
		</div>
	)
}

export default App
