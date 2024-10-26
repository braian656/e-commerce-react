import { contextProducts } from "../context/context"
import TableItems from "./TableItems"
import { useEffect, useContext, useState } from "react"



function Table(){
    const {purchasedProducts} = useContext(contextProducts)
    const [empty, setEmpty] = useState('')

    useEffect(()=>{
        if(purchasedProducts.lenght === 0){
            setEmpty('No hay Comprar realizadas.')
        }
    })
    return(
        <>
      
        <div className="display-content-info">
    
            <div className="table">
              <div className="table-title flex">
                <div className="header">Producto</div>
                <div className="header">Precio</div>
                <div className="header">Color</div>
                <div className="header">Cantidad</div>
              </div>
              <TableItems items={purchasedProducts}></TableItems>

            </div>

        </div>
        </>
    )
}

export default Table