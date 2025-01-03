import LoadingGif from "./assets/loading.gif";

export default function Loading() {
	return (
		<div className="bg-light-blue selection:bg-white selection:bg-opacity-20 min-h-screen">
			<div className="flex flex-col gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<img src={LoadingGif} alt="" />
				<h1 className="ellipsis flex justify-center font-bold lg:text-8xl md:text-6xl text-3xl text-[#] pb-8 md:pb-10">Loading Portfolio</h1>
			</div>
		</div>
	);
}
