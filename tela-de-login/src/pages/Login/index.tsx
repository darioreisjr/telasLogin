import Button from "../../components/Button";
import Input from "../../components/input";
import Titulo from "../../components/input/Titulo";

export default function Login() {
    return (
        <main className="h-screen w-screen bg-orange-100 flex justify-center items-center">
            <div className="bg-slate-300 p-12 rounded-xl">
                <Titulo titulo="Login" />
                <Input nomeLabel="E-mail" placeholder="Digite seu email" tipo="text" />
                <Input nomeLabel="Senha" placeholder="********" tipo="password" />
                <Button titulo="Acessar" />
            </div>
        </main>
    )
}
