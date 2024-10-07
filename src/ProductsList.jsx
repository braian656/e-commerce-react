import { useEffect, useRef } from 'react';
import ProductCard from './productCard';
import SectionEmpty from './SectionEmpty';

function ProductsList({items, sliderState, slider}){


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

    useEffect(()=>{
        sliderState(!slider)
    }, [])


    return(

        <section id="wishList" className="p-2 bg-body flex justify-center items-center flex-wrap">
            {/* {mapWishList} */}
            {items.length !== 0 ? mapWishList : <SectionEmpty></SectionEmpty>}
        </section>

    )
}

export default ProductsList