
interface ITituloProps{
    titulo:string
}

export default function Titulo(props:ITituloProps) {
  return (
    <h1 className="text-5xl	font-semibold text-slate-700 text-center p-4">
        {props.titulo} 
    </h1>
  )
}

