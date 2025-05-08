import React from "react"
// Verificar uso del los useHooks - check

function Cantidad({count,onClickIncrement, onClickDecrement}){
    console.log('COMPONENTE CANTIDAD')
   
    
    return (
        <div className="w-20 quantity_box p-1 flex border-2 border-solid border-text rounded-lg">
            <button className="plus text-text w-20"
            onClick={onClickIncrement}>
                +
            </button>
            
            <span className="num text-white px-2">
                {count}
            </span>
            <button className="minus text-text w-20"
            onClick={onClickDecrement}>
                -
            </button>
        </div>
    )
}

export default React.memo(Cantidad)