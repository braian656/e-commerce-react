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

        <div className="container-category">
            
            <div className="inner-category">
                <div className="underline"></div>
                <div className="category">
                    <select name="Category" id="category" onClick={showCategory} >
                        
                    
                        {
                            filtrarCategories.map((category)=>(
                            <option 
                            value={category}
                            key={category}>
                                {category}
                            </option>
                            ))
                        }
                        {/* <option value="Categoria 1">TODOS</option>
                        <option value="Categoria 1">CATEGORIA 1</option>
                        <option value="Categoria 1">CATEGORIA 2</option> */}

                    </select>
                </div>
            </div>
            
        </div>

    )
}

export default SelectCategory