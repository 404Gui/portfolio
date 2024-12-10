import Link from "next/link"


const NotFound = () => {
    return (

        <div>
            <h4>Pagina não encontrada</h4>
            <p>Que tal voltar pra home?</p>
            <Link href="/contatos">
                Contatos            
            </Link>
        </div>
    )
}

export default NotFound