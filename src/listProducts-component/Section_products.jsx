// component 
import Products from '../card-product-component/Products'

// hooks
import { useEffect } from 'react'
 // Verificar uso del los useHooks - check

function sectionProducts({setActiveComponents,activeComponents}){



    // se vuelve a mostrar todos lo componentes que se ocultan
    useEffect(()=>{


        setActiveComponents(true)



    }, [])


    console.log('Section Products')

    return (
        <section 
            id="tech" 
            className='
            p-2 bg-body 
            flex 
            justify-center 
            items-center 
            flex-wrap'> 
            
            <Products>
            </Products>
        </section>

    )
}

export default sectionProducts