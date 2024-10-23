import { useEffect, useRef, useState } from 'react'
import Products from '../card-product-component/Products'

function sectionProducts({setSliderActive}){
    useEffect(()=>{
        setSliderActive(true)
    }, [])

  



    return (
    <section 
        id="tech" 
        className='
        p-2 bg-body 
        flex 
        justify-center 
        items-center 
        flex-wrap'> 
        
        <Products></Products>
    </section>

    )
}

export default sectionProducts