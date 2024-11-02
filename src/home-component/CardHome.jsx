import { Icon } from "lucide-react"

function CardHome({title, textP, Icon}){
    return(
    <article className="m-2 bg-white border-solid border-2 border-button2 card-information w-40 h-40 shadow-md rounded-md p-2 flex justify-around items-center flex-col pointer hover:shadow-lg">
        <h2 className="font-bold text-sm">{title}</h2>
        
        <div className="icon text-button2 text-3xl relative">
           <Icon size={48} color="#e4bc2c" strokeWidth={1.5}>
           </Icon>
        </div>
        
        <p className="text-xs  sm:text-sm text-center">{textP}</p>
    </article>
    )
}

export default CardHome