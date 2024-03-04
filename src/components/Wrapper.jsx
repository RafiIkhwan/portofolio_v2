export default function Wrapper({children}) {
    return (
        <div className="max-w-[1920px] overflow-x-hidden mx-auto">
            {children}
        </div>
    )
}