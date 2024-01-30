import { Facebook, Github, Instagram, LinkedIn } from "../assets/MediaSocialSVG";

export default function Header() {
  return (
    <header className='flex flex-row justify-between'>
      <h4 className='min-w-[200px]'>IKHWAN SITE'S</h4>
      <nav>
        <ul className='flex flex-row space-x-40 text-center'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
        </ul>
      </nav>
      <ul id="brands" className="flex flex-row space-x-7 items-center">
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