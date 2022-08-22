const ModelSection = ({name, para, btn}) => {
    return (
    <section className="flex flex-col justify-center content-between h-screen text-center bg-slate-300 py-5">
        <h1>{name}</h1>
        <p>{para}</p>
        <div>
        <button>xx</button>
        <button>xx</button>
        </div>
        <span>x</span>
    </section>
    )
}
export default ModelSection