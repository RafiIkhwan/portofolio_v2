export default function Slogan() {
  return (
    <section id='slogan' className="flex flex-row justify-around items-center h-[300px]">
      <ListSlogan title='INNOVATE' />
      <ListSlogan title='ELEVATE' />
      <ListSlogan title='OPTIMIZE' />
    </section>
  )
}

function ListSlogan({ title }) {
  return (
    <h2 className='text-[#CCDBF2] font-bold text-6xl'>{title}</h2>
  )
}