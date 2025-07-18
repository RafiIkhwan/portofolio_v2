import SelfPicture from "../utils/img/selfprofessional.png";
import { Fragment, useState } from "react";
import { listConfig } from "../utils/data";
import { SVG_CALL } from "../utils/SVG_CALL";
import { motion } from "motion/react";

export default function About() {
	const [view, setView] = useState(0);
	const [hover, setHover] = useState(null);

	const activeLogic = (x) => {
		return (view === x && !(view !== hover && hover !== null)) || hover === x;
	};

	const handleHover = (index) => {
		setHover(index);
	};

	const handleItemClick = (index) => {
		setView(index);
		setHover(null);
	};

	const renderListItem = (config) => {
		return config.map((list) => (
			<ul key={list.id} className={`${activeLogic(list.items[0].context) ? "opacity-100 z-10" : "opacity-0 z-0"} flex mt-12 transition-opacity absolute top-12 gap-6 duration-150 ${list.items[0].context != 0 ? "flex-row flex-wrap w-full rounded-sm" : "flex-col"}`} id={list.id}>
				{list.items.map((item, i) => renderItem(i, item.title, item.content, item.context))}
			</ul>
		));
	};

	const renderList = (index, label) => {
		const isActive = view === index;
		const isHovered = hover === index;

		const handleMouseEnter = () => {
			setTimeout(() => handleHover(index), 150);
		};

		const handleMouseLeave = () => {
			setTimeout(() => handleHover(null), 150);
		};

		return (
			<li
				key={index}
				className={`${isActive ? "text-dark-blue bg-gradient-to-r from-dark-blue to-light-dark-blue bg-[length:100%_5px] drop-shadow-3xl" : `text-light-blue bg-gradient-to-r from-light-blue to-light-blue ${isHovered ? "bg-[length:100%_5px] drop-shadow-3xl" : "bg-[length:50%_5px]"}`} bg-no-repeat bg-left-bottom transition-color duration-150 font lg:text-2xl text-lg font-bold pb-3 cursor-pointer`}
				onClick={() => handleItemClick(index)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{label}
			</li>
		);
	};

	const renderItem = (index, title, content, context) => {
		return (
			<Fragment key={index}>
				{context != 0 ? (
					<li className="transition-colors duration-200 flex flex-row items-center rounded-3xl text-dark-blue lg:w-60 md:w-44 h-fit bg-gradient-to-r from-item-background-from to-item-background-to hover:cursor-pointer hover:bg-dark-blue hover:drop-shadow-2xl hover:text-light-blue drop-shadow group">
						{SVG_CALL[title]}
						<h6 className="font-semibold lg:text-3xl text-xl p-2 whitespace-nowrap">{title}</h6>
					</li>
				) : (
					<li className="flex flex-col space-y-2">
						<h6 className="font-semibold lg:text-3xl text-xl text-light-blue">{title}</h6>
						<p className="lg:text-2xl text-lg text-light-blue">{content}</p>
					</li>
				)}
			</Fragment>
		);
	};

	return (
		<>
			<div className="radial 2xl:block hidden absolute bottom-20 left-20 h-full max-h-[1000px] max-w-[1000px] w-full rounded-full select-none pointer-events-none"></div>
			<div className=" flex flex-row justify-between w-[calc(100vw-80px)] mx-auto md:space-x-20 md:w-full h-full">
				<div className="relative hidden 2xl:flex justify-center items-center z-30 select-none pointer-events-none w-[900px]">
					<motion.img 
						initial={{ opacity: 0, scale: 0.5 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.6,
							delay: 0.3,
							ease: [0, 0.71, 0.2, 1.01],
						}}
						className="object-cover object-top w-[480px] h-[700px] max-w-2xl masked-image" 
						src={SelfPicture} 
						alt="my self picture" 
					/>
				</div>
				<div className="flex flex-col space-y-8 md:space-y-16 z-30">
					<h1 className="lg:text-8xl md:text-6xl text-3xl text-light-blue font-bold">About Me</h1>
					<p className="lg:text-3xl md:text-2xl text-light-blue tracking-wider leading-normal text-justify md:mr-20">Hi, my name is Rafi Ikhwan, often called Rafi. Based in Bandung, Indonesia, I am proficient as a Full Stack Engineer, with a strong focus on Front-End Development and solid skills in Back-End Operations.</p>
					<div className="hidden sm:flex flex-col min-h-72 relative">
						<ul className="flex flex-row space-x-10">
							{renderList(0, "Main Skills")}
							{renderList(1, "Languages")}
							{renderList(2, "Framework")}
							{renderList(3, "Database")}
							{renderList(4, "Tools & Other")}
						</ul>
						{renderListItem(listConfig)}
					</div>
				</div>
			</div>
		</>
	);
}
