interface IButtonProps {
    titulo: string
}

export default function Button(props: IButtonProps) {
  return (
    <button className="w-80 bg-blue-400 rounded-md p-2 text-neutral-50	">
        {props.titulo}
    </button>
  )
}
