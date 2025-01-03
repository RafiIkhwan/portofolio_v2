export default function Container({ refs, id, customStyle, children }) {
  return (
    <section ref={refs} id={id} className={`px-32 w-screen overflow-hidden ${customStyle}`}>
      { children }
    </section>
  )
}