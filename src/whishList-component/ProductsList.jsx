import { useContext, useEffect, useRef } from 'react';
import ProductCard from '../card-product-component/Card';
import SectionEmpty from './SectionEmpty';
import { contextProducts } from '../context/context';
import ButtonPag from '../buttons-component/ButtonPag';
function ProductsList({setSliderActive,items}){
    console.log('Lista de deseo en productsList',items)

    const mapWishList = items.map((item)=>(
        <ProductCard
            key={item.id}
            id={item.id}  
            image={item.image}
            product={item.product} 
            description={item.description}
            price={item.price}
        ></ProductCard>
    ))
// cuando se guarde aca , se debe mostrar siempre


    useEffect(()=>{
        setSliderActive(false)

    }, [])
    return(

        <section id="wishList" className="p-2 bg-body flex justify-center items-center flex-wrap min-h-screen">
            {/* {mapWishList} */}
            {items.length !== 0 ? mapWishList : <SectionEmpty></SectionEmpty>}
            <div className='button-buy absolute'>
                {items.length !== 0 ? <ButtonPag text="REALIZAR COMPRA"></ButtonPag> : ''}
            </div>
        </section>

    )
}

export default ProductsList