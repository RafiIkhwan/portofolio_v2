import { Facebook, Github, Instagram, LinkedIn } from "../assets/MediaSocialSVG";
import Logo from "/img/LogoWithoutNameUpScale.png"

export default function Header() {
  return (
    <header className='flex flex-row justify-between selection:bg-opacity-40'>
      <div className="flex flex-row min-w-[200px] items-center space-x-2">
        <img src={Logo} className="h-8" alt="logo.png" draggable={false} />
        <h3 className="font-semibold"><a href="#home">Rafi Ikhwan</a></h3>
      </div>
      <nav className="lg:flex flex-row hidden">
        <ul className='flex flex-row space-x-40 text-center items-center'>
          <li className="flex"><a className="bg-gradient-to-r from-[#213b66] via-[#061834] to-[#213b66] bg-[length:50%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-bottom transition-color duration-150 font-semibold py-1" href="#home"><p>Home</p></a></li>
          <li className="flex"><a className="bg-gradient-to-r from-[#213b66] via-[#061834] to-[#213b66] bg-[length:50%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-bottom transition-color duration-150 font-semibold py-1" href="#about"><p>About</p></a></li>
          <li className="flex"><a className="bg-gradient-to-r from-[#213b66] via-[#061834] to-[#213b66] bg-[length:50%_1.6px] hover:bg-[length:100%_1.6px] bg-no-repeat bg-bottom transition-color duration-150 font-semibold py-1" href="#project"><p>Project</p></a></li>
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
          <a href="https://www.instagram.com/rfkhwnprnm/">
            <Instagram />
          </a>
        </li>
      </ul>
    </header>
  )
}