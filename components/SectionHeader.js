export default function SectionHeader(props) {
    return (
        <div className="text-center flex flex-col gap-3 justify-center items-center">
            <span className="font-bold uppercase text-primary text-center">{props.heading}</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance">{props.title}</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-xl">{props.description}</p>
        </div>
    )
}