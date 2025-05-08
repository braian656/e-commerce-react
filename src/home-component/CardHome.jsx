import { Icon } from "lucide-react"
// Verificar uso del los useHooks - check

function CardHome({title, textP, Icon}){


    console.log('RENDERIZADO DEL CONTAINER CARDHOME')
    return(
    <article className="card-home  pointer hover:shadow-lg">
        <div className="icon text-button2 text-3xl relative">
           <Icon size={48} color="#c8222f" strokeWidth={1.5}>
           </Icon>
        </div>

        <div className="text">
            <h2 className="font-bold text-sm text-white mb-1">{title}</h2>
        
            <p className="text-xs text-white sm:text-sm text-center">{textP}</p>
        </div>
    </article>
    )
}

export default CardHome