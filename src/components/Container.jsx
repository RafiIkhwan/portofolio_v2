export default function Container({ id, customStyle, children }) {
  return (
    <section id={id} className={`container mx-auto ${customStyle}`}>
      { children }
    </section>
  )
}