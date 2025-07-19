import { Facebook, Github, Instagram, LinkedIn } from "../assets/MediaSocialSVG";
import Logo from "../utils/img/LogoWithoutNameUpScale.png";

export default function Header({ activeSection }) {
  
  const handleLightMode = () => {
    localStorage.setItem("dark", false);
    document.documentElement.classList.remove("dark");
  };

  const handleNightMode = () => {
    localStorage.setItem("dark", true);
    document.documentElement.classList.add("dark");
  };

  const toggleTheme = () => {
    if(document.documentElement.classList.contains('dark')) {
      handleLightMode();
    } else {
      handleNightMode();
    }
  }
	return (
		<header className="flex flex-row justify-between selection:bg-opacity-40">
			<div className="flex flex-row min-w-[200px] items-center space-x-2">
				<img src={Logo} className="h-8" alt="logo.png" draggable={false} />
				<h3 className="font-semibold">
					<a href="#home">Rafi Ikhwan</a>
				</h3>
			</div>
			<nav className="lg:flex flex-row hidden">
        <ul>
        <button onClick={toggleTheme} class="fixed bottom-24 right-3 bg-white text-dark-blue w-[3rem] h-[3rem] bg-opacity-80 z-10 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z">
            </path>
          </svg>
        </button>
        </ul>
				<ul className="flex flex-row space-x-40 text-center items-center">
					<li className="flex">
						<a className="bg-gradient-to-r from-blue via-dark-blue to-blue bg-[length:50%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-bottom transition-color duration-150 font-semibold py-1" href="#home">
							<p>Home</p>
						</a>
					</li>
					<li className="flex">
						<a className="bg-gradient-to-r from-blue via-dark-blue to-blue bg-[length:50%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-bottom transition-color duration-150 font-semibold py-1" href="#about">
							<p>About</p>
						</a>
					</li>
					<li className="flex">
						<a className="bg-gradient-to-r from-blue via-dark-blue to-blue bg-[length:50%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-bottom transition-color duration-150 font-semibold py-1" href="#project">
							<p>Project</p>
						</a>
					</li>
				</ul>
			</nav>
			<ul id="brands" className="lg:flex flex-row space-x-7 items-center hidden">
				<li>
					<a href="https://github.com/RafiIkhwan">
						<Github />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/Rafiikhwan">
						<LinkedIn />
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/rafi.i.purnama.73/">
						<Facebook />
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/rafiikhwanp/">
						<Instagram />
					</a>
				</li>
			</ul>
		</header>
	);
}
