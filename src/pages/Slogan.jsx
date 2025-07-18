export default function Slogan() {
  return (
    <section id='slogan' className="flex flex-row justify-around items-center h-12 lg:h-80 md:h-32">
      <ListSlogan title='INNOVATE' />
      <ListSlogan title='ELEVATE' />
      <ListSlogan title='ELABORATE' />
    </section>
  )
}

function ListSlogan({ title }) {
  return (
    <h2 className='text-light-blue font-bold md:text-4xl lg:text-6xl'>{title}</h2>
  )
}