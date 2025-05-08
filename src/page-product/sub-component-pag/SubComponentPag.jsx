// poner los subcomponentes aca

import { useContext, memo } from "react"


import ChoseColor from "./ChoseColor"
import Cantidad from "./Cantidad"
import { contextProducts } from "../../context/context"

function SubComponentPag({setColor,setQuantity,quantity}){

    const {actualProduct} = useContext(contextProducts)

    const increment = ()=>{
        setQuantity(quantity + 1)            
    }

    const decrement = ()=>{
        setQuantity(quantity > 0 ? quantity-1 : 0)
    }

    const handlePreference = (e) => {
        e.preventDefault()
        setColor(e.target.dataset.clr)  
        // guarda el clr en un estdo lo usa luego
    };

    return(
        <>
        <div className="preference flex items-center sm:my-5">

            <div className="preference_box mx-4">

                <h3 className="quantity text-white my-1.5 text-center">
                    Cantidad
                </h3>

                <Cantidad 
                    onClickIncrement={increment}
                    onClickDecrement={decrement}
                    count={quantity} 
                    setCount={setQuantity}>
                </Cantidad>
            </div>        
            <div className="preference_box mx-4">
                <ChoseColor
                onClick={handlePreference} 
                clr1="bg-red-500" 
                clr2="bg-blue-500" 
                clr3="bg-green-500"
                ></ChoseColor>
            </div> 


            <div className="preference_box">
                <h3 className="total text-white my-1.5 mx-4 text-center">
                    Total
                </h3>
                <div className="w-20 p-1 flex justify-center items-center border-2 border-solid border-text rounded-lg">
                    <span className="total text-text">
                        ${parseInt(actualProduct.total * quantity)}
                    </span>
                </div>
            </div>        
        </div>
        </>
    )
}

export default memo(SubComponentPag)