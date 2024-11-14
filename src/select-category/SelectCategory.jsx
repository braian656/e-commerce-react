import { useContext, useEffect, useState } from "react"
import { contextProducts } from "../context/context"


function SelectCategory(){

    const {productData, categories, setUserSelectedCategory} = useContext(contextProducts)

    const arrCategories = []

    productData.forEach((category) =>{
        arrCategories.push(category.category)
    })

    const filtrarCategories = arrCategories.reduce((categories, category)=>{
        // si el arr de dep, categories, no incluye la categoria(valor)
        // pujearla
        // luego retornar para que se pueda usar
        if(!categories.includes(category)){
            categories.push(category)
        }

        return categories
    },['All'])

   const showCategory = (e)=>{
     setUserSelectedCategory(e.target.value)
   }
    // hacete culear asincronia conchuda, pedaza de puta mal culeada
    return (

        <div className="container-category bg-button p-2 roudend-md">
            
            <div className="inner-category">
                <div className="category flex items-center justify-center"
                 name="Category" 
                 id="category" 
                 onClick={showCategory}>
                {
                filtrarCategories.map((category)=>(
                    <button
                    value={category}
                    key={category}>
                    {category}
                    </button>
                    ))
                }
                </div>
            </div>
            
        </div>

    )
}

export default SelectCategory