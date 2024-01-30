export default function Container({ id, customStyle, children }) {
  return (
    <section id={id} className={`container mx-auto h-screen overflow-hidden ${customStyle}`}>
      { children }
    </section>
  )
}