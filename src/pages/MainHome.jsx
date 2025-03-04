import SelfPicture from "../utils/img/selfprofessional.png";
import Cloud from "../utils/img/JapaneseCloudGrayver.png";
import { motion } from "motion/react";

export default function MainHome() {
	const user_detail = {
		status: "Working",
		status_place: "PT Jaya Integrasi Nusantara",
		user_name: "Rafi Ikhwan",
		role: "Web Developer",
	};
	return (
		<main className="relative lg:mt-16" id="main">
			<div className="absolute w-full bottom-72 z-20 md:block hidden">
				<div className="flex flex-row justify-between h-[calc(100vh-550px)] max-h-[500px] mx-auto lg:w-full">
					<div className="flex flex-col justify-between text-start">
						<motion.h1
							initial={{ opacity: 0, x: -1000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.3,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
						>
							SOFTWARE
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, x: -1000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.3,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="font-semibold text-2xl xl:text-4xl"
						>
							Currently {user_detail.status.toLowerCase()} at
							<motion.span
								initial={{ opacity: 0, x: -1000 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									delay: 0.3,
									ease: [0, 0.71, 0.2, 1.01],
								}}
								className="font-bold block capitalize"
							>
								{user_detail.status_place}
							</motion.span>
						</motion.p>
					</div>
					<div className="flex flex-col justify-between text-end">
						<motion.p
							initial={{ opacity: 0, x: 1000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.3,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="font-semibold text-2xl xl:text-4xl self-end"
						>
							Hi, My Name is
							<motion.span
								initial={{ opacity: 0, x: 1000 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.6,
									delay: 0.3,
									ease: [0, 0.71, 0.2, 1.01],
								}}
								className="font-bold block break-words"
							>
								{user_detail.user_name}
							</motion.span>
						</motion.p>
						<motion.h1
							initial={{ opacity: 0, x: 1000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.6,
								delay: 0.3,
								ease: [0, 0.71, 0.2, 1.01],
							}}
							className="font-black text-2xl sm:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
						>
							ENGINEERING
						</motion.h1>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center relative mb-auto h-screen box-border max-h-[500px] md:max-h-[850px] select-none pointer-events-none">
				<motion.p
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.6,
						delay: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="font-bold text-2xl absolute z-30 top-10 text-light-blue select-text uppercase"
					id="webdev"
				>
					{user_detail.role.toLowerCase()}
				</motion.p>
				<motion.img
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.6,
						delay: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="object-contain static z-[19] xl:max-w-5xl opacity-30"
					src={Cloud}
					alt="cloud japanese background"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.6,
						delay: 0.3,
						ease: [0, 0.71, 0.2, 1.01],
					}}
					className="radial absolute bottom-14 h-full max-h-[1200px] max-w-[1200px] w-full rounded-full"
				/>
				<img className="object-cover object-top w-[710px] md:h-[660px] h-[350px] absolute bottom-0 z-30" src={SelfPicture} alt="my self picture" />
			</div>
		</main>
	);
}
