export default function Container({ refs, id, customStyle, children }) {
  return (
    <section ref={refs} id={id} className={`px-12 md:px-16 xl:px-24 2xl:px-32 w-screen overflow-hidden ${customStyle}`}>
      { children }
    </section>
  )
}