import { contextProducts } from "../context/context"
import TableItems from "./TableItems"
import { useEffect, useContext, useState } from "react"



function Table(){
    const {purchasedProducts} = useContext(contextProducts)
    const isEmpty = purchasedProducts.length !== 0 ? 'flex' :  'hidden'
    
    console.log(isEmpty)
    const classTitle = purchasedProducts.length !== 0 ? 'hidden' : 'flex'
    console.log(classTitle)
    return(
        <>
        


        <div className={`display-content-info section-info`}>

            <h1 className={`text-center font-bold text-sm text-[#333333] ${classTitle} mt-3`}>
                Aun no hay compras realizadas
            </h1>

            <div className={`table ${isEmpty}`}>
              <div className="table-title flex">
                <div className="header">Producto</div>
                <div className="header">Precio</div>
                <div className="header">Color</div>
                <div className="header">Cantidad</div>
              </div>
              
              <TableItems 
              items={purchasedProducts}>
              </TableItems>
                
              

            </div>

        </div>
        </>
    )
}

export default Table