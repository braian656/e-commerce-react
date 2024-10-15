
function Cantidad({count, setCount}){
    // Evitar un numero negativo
    // futuro limitar el incremento dependiendo de los items disponibles
    const decrement = ()=>(    
        setCount(count > 0 ? count-1 : 0)
    )
    
    return (
        <div className="w-20 quantity_box p-1 flex border-2 border-solid border-text rounded-lg">
            <button className="plus text-text w-20"
            onClick={()=> setCount(count + 1)}>+</button>
            <span className="num text-white px-2">{count}</span>
            <button className="minus text-text w-20"
            onClick={decrement}>-</button>
        </div>
    )
}

export default Cantidad