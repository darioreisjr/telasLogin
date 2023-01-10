
interface IINputProps {
    placeholder: string
    tipo: string
    nomeLabel: string
}

export default function Input(props: IINputProps) {
    return (
        <div className="container flex flex-col w-80 mb-3">
            <label className="text-2xl mb-3	">
                {props.nomeLabel}
            </label>
            <input type={props.tipo} placeholder={props.placeholder} className="h-6	rounded-md border-0	outline-0 py-6" />
        </div>
    )
}
