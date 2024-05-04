export default function Sidebar({ show }) {
	return (
		<div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
			<nav className="lg:hidden flex md:bg-[#213B66] bg-[#213b6654]  rounded-r-md">
				<ul className="flex flex-col">
					<li className="flex">
						<a className="text-white transition-color duration-150 font-semibold px-3 py-5 w-full md:hover:bg-[#061834] hover:bg-[#06183454]  rounded-tr-md" href="#home">
							<p>Home</p>
						</a>
					</li>
					<li className="flex">
						<a className="text-white transition-color duration-150 font-semibold px-3 py-5 w-full md:hover:bg-[#061834] hover:bg-[#06183454] " href="#about">
							<p>About</p>
						</a>
					</li>
					<li className="flex">
						<a className="text-white transition-color duration-150 font-semibold px-3 py-5 w-full md:hover:bg-[#061834] hover:bg-[#06183454]  rounded-br-md" href="#project">
							<p>Project</p>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
