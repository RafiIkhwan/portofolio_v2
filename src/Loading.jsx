import LoadingGif from "./assets/loading.gif";

export default function Loading() {
	return (
		<div className="bg-light-blue selection:bg-white selection:bg-opacity-20 min-h-screen">
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<img src={LoadingGif} className="w-fit h-fit object-cover" alt="" />
			</div>
		</div>
	);
}
