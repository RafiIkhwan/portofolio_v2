import { camelCaseFormat, dateTimeFormat } from "../utils/format";
import Logo from "../utils/img/LogoWithoutNameUpScale.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Modal({ open, onClose, projectData, ref, customStyle }) {
	return (
		<div onClick={onClose} className={`fixed inset-0 flex justify-center items-end transition-colors z-[100] ${open ? "visible bg-black/20" : "invisible"} pt-10`}>
			<div onClick={(e) => e.stopPropagation()} className={`bg-light-blue-100 rounded-t-2xl drop-shadow-md transition-all duration-300 ${open ? "h-[calc(100vh-40px)] opacity-100" : "h-0 opacity-0"} w-screen`}>
				<div className="bg-white rounded-t-2xl p-5 w-full flex justify-between border">
					<div className="flex flex-row space-x-4 items-center">
						<img src={Logo} className="h-8" alt="logo.png" draggable={false} />
						<h2 className="font-semibold">Project Detail</h2>
					</div>
					<button onClick={onClose} className="transition-colors p-1 border rounded-lg text-dark-blue hover:bg-light-blue-200 text:bg-black">
						<svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6" />
						</svg>
					</button>
				</div>
				<div ref={ref} id="modal" className="overflow-y-scroll h-full max-h-[calc(100vh-115px)]">
					<div className="flex flex-col gap-y-5 text-center py-10 max-w-6xl mx-auto">
						<p className="text-dark-blue">{dateTimeFormat(projectData.date)}</p>
						<h1 className="font-extrabold lg:text-9xl md:text-6xl text-3xl uppercase">{projectData.projectTitle}</h1>
						<a href="https://github.com/rafiikhwan" className="flex self-center items-center space-x-2">
							<img src="https://github.com/rafiikhwan.png" alt="Profile.png" className="object-cover md:w-10 w-8 md:h-10 h-8 rounded-full" />
							<p className="relative inline-block lg:text-2xl md:text-xl text-lg font-semibold bg-gradient-to-r from-dark-blue to-dark-blue bg-[length:0%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-left-bottom transition-color duration-300 hover:">
								Rafi Ikhwan
								<span className="absolute inset-x-0 bottom-0 h-[1.6px] bg-gradient-to-r from-dark-blue/20 to-dark-blue/20 transition-all duration-400 group-hover:from-transparent"></span>
							</p>
						</a>
					</div>
					<div className="flex flex-col md:gap-y-20 gap-y-10 mb-36 mx-12">
						{projectData.imageUrl.slice(0, 3).map((url, index) => (
							<Wrapper key={index} img={url} />
						))}
					</div>
					<div className="flex flex-col md:gap-y-36 gap-y-20 bg-white py-20 px-12">
						<div className="flex flex-col gap-y-2">
							<h1 className="text-dark-blue py-5">Description</h1>
							<p className="md:text-3xl text-xl text-dark-blue">{projectData.projectDescription}</p>
						</div>
					</div>
					<div className="flex flex-col md:gap-y-36 gap-y-20 bg-white py-20 px-12">
						{Object.keys(projectData.builtWith).map((key, index) => (
							<div key={index} className="flex flex-col gap-y-8">
								<p className="font-semibold border-dashed border-b border-blue/40 text-dark-blue py-5">{camelCaseFormat(key)}</p>
								<div className="flex flex-row gap-3 flex-wrap">
									{Object.entries(projectData.builtWith).map((e, i) => {
										if (e[0] == key) {
											return e[1].map((list, o) => (
												<div key={o} className="flex border border-blue/40 text-dark-blue rounded-full w-fit px-5 py-3 font-bold">
													{list}
												</div>
											));
										}
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{projectData.projectUrl && (
				<a onClick={(e) => e.stopPropagation()} href={projectData.projectUrl} target="_blank" className={`${open ? "opacity-100" : "opacity-0"} transition-all duration-300 fixed z-10 bottom-10 right-10 p-4 rounded-lg bg-blue text-light-blue hover:bg-dark-blue hover:text-white hover:cursor-pointer`}>
					<svg className="w-6 h-6 hover:scale-110 duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
						<path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
					</svg>
				</a>
			)}
		</div>
	);
}

function Wrapper({ img }) {
  return (
    // <div className="bg-gradient-to-br from-[#213B66] to-[#061834] rounded-xl md:p-20">
      <LazyLoadImage
        alt="Project Image"
        src={img}
        effect="blur"
        className="rounded-xl drop-shadow-2xl w-full"
      />
    // </div>
  )
}
