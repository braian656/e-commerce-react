import { useState, useContext } from "react"
import { contextProducts } from "../context/context"


function ModalProductsUser({id,image,product,price, onClick}){

    // Debemos sumar cada producto y mostra el total
    // console.log(price)
    // const total = price.reduce((acc, num)=> acc + num)
    // console.log(total)

    // const currentPrice = [...price]
    // const total = currentPrice.reduce((acc, curr)=> acc + curr);



    return (
            

            <>
                <li id={id} className="p-4 border-b-2 border-gray-300 flex items-center justify-between gap-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="image w-20 h-20 overflow-hidden rounded-md flex-shrink-0">
                        <img src={image} alt={product} className="object-cover w-full h-full"/>
                    </div>
                    <div className="info text-left flex-1">
                        <h1 className="title text-white font-semibold text-lg">{product}</h1>
                        <h2 className="precio text-lg py-2 font-medium text-gray-400">{price}$</h2>
                    </div>
                    <button onClick={() => onClick(id, price)} className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transform hover:scale-105 transition-transform duration-300">
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </li>
            </>
                
    )
}

export default ModalProductsUser