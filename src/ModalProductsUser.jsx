import { useState } from "react"



function ModalProductsUser({id,image,product,price, onClick}){




    // Debemos sumar cada producto y mostra el total
    // console.log(price)
    // const total = price.reduce((acc, num)=> acc + num)
    // console.log(total)

    // const currentPrice = [...price]
    // const total = currentPrice.reduce((acc, curr)=> acc + curr);

    return (
            

            <>
            <li id={id} className="p-2 border-b-2 flex items-center justify-around">
                    <div className="image w-20 h-20 object-cover overflow-hidden rounded-md">
                        <img src={image} alt={product} className="min-w-full h-auto"/>
                    </div>
                    <div className="info text-center">
                        <h1 className="title text-white font-bold">{product}</h1>
                        <h2 className="precio text-xl py-2 font-normal text-text leading-5">{price}$</h2>
                    </div>
                    <button onClick={()=>onClick(id)} className="bg-white p-4 ease-out duration-700 hover:bg-button2 hover:scale-105">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
            

            </>
                
    )
}

export default ModalProductsUser