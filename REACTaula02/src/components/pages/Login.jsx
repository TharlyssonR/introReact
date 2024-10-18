import BotaoDinamico from "../BotaoDinamico/Botaodinamico"


const Login = () => {
    return(
        <div>
            <h1>Página de Login</h1>
            <p>Faça seu Login</p>
            <BotaoDinamico cor="blue">enviar</BotaoDinamico>
            <BotaoDinamico cor="green">Criar conta</BotaoDinamico>
        </div>
    )
}

export default Login